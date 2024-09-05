import { useState } from "react";
import { toast } from 'react-toastify'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (e) => {
        setFormData((currData) => ({
            ...currData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const resp = await axios.post("http://localhost:8090/signup", formData,{ withCredentials: true });
            console.log(resp);

            if (resp.status === 200) { // Check for successful response
                navigate(resp.data.redirectUrl); // Redirect to home page
                toast.success("Registered Success");
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
            navigate(error.response.data.redirectUrl);
            toast.error(error.response.data.error);
        }

        setFormData({
            name: "",
            username: "",
            email: "",
            password: ""
        });
    };

    return (
        <form style={{ marginBottom: "6rem" }} onSubmit={handleSubmit}>
            <div className="container row">
                <div className="mt-4 col-6 offset-3">
                    <h3>Signup to Muddu-electronics</h3>
                </div>
                <div className="mb-3 mt-4 col-6 offset-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="mb-3 mt-4 col-6 offset-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                    />
                </div>
                <div className="mb-3 mt-4 col-6 offset-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        id="email"
                        placeholder="example@gmail.com"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 col-6 offset-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="password"
                        id="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-3 col-2 offset-5">Submit</button>
                <hr />
                {/* Additional buttons or links */}
            </div>
        </form>
    );
}
