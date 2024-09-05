import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from "react";

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8090/logout', {}, { withCredentials: true });
            // Redirect or update state after successful logout
            window.location.href = '/'; // Redirect to login page or home
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };


    return (
        <>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
}
