import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData((currData) => ({
            ...currData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const resp = await axios.post("http://localhost:8090/login", formData, { withCredentials: true });



            if (resp.status === 200) {
                const data = resp.data;
                console.log('Message:', data.message);
                toast.success("Login Success");
                navigate(data.redirectUrl);
            } else {
                console.error('Login failed');
                toast.error('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response.status === 401) {
                toast.error("Enter Valid Credentials");
            }
            if (error.response && error.response.data) {

                navigate(error.response.data.redirectUrl || '/login');
            } else {
                toast.error('An unexpected error occurred');
            }
        }

        setFormData({
            username: "",
            password: ""
        });

    };

    const refresh = () => {
        window.location.reload();
    }

    return (
        <>
            <form style={{ marginBottom: "6rem" }} onSubmit={handleSubmit}>
                <div className="container row">
                    <div className="mt-4 col-6 offset-3">
                        <h3>Login to Muddu-electronics</h3>
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
                    <button type="submit" onClick={() => { handleSubmit; refresh }} className="btn btn-primary mb-3 col-2 offset-5">Submit</button>

                </div>
            </form>
        </>
    );
}
