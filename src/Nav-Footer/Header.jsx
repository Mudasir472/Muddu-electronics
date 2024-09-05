import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import "./Header.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {



    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8090/logout', {}, { withCredentials: true });
            // Redirect or update state after successful logout
            window.location.href = '/'; // Redirect to login page or home
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    const [userData, setUserData] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:8090/login/success", { withCredentials: true });
            setUserData(response.data);
        } catch (e) {
            console.log("error", e);
        }
    };

    useEffect(() => {
        getUser();
    }, []); // useEffect will only run once when the component mounts

    const { cartTotalQuantity } = useSelector((state) => state.cart);

    return (
        <div className="header">
            <div className="headerMain d-flex flex-column">
                <div className="logSec d-flex justify-content-between align-items-center">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="offertext">GET 20% OFF YOUR FIRST ORDER: <b style={{ color: "#254370" }}>20%OFF</b></div>
                        <div className="w-11 d-flex align-items-center justify-content-evenly">
                            {
                                userData && userData.user ? (
                                    <>
                                        <a style={{textDecoration:"none"}} href="/dashboard">
                                            <li className="username d-flex align-items-center justify-content-center nav-item">
                                                {userData.user.name}
                                            </li>
                                        </a>
                                        <li className="nav-item">
                                            <NavLink onClick={handleLogout}
                                                to="/logout"
                                                className="nav-link"
                                            >Logout</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/login"
                                                className="nav-link"
                                            >Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/signup"
                                                className="nav-link"
                                            >Signup</NavLink>
                                        </li>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="searchSec container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="searchbar">
                        <form className="d-flex" role="search">
                            <input className="search" type="search" placeholder="Search product here..." aria-label="Search" />
                            <button className="searchbtn" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                    <div className="carts d-flex align-items-center justify-content-between">
                        <div className="cart">
                            <NavLink
                                to="/cart"
                                className="nav-link"
                            ><i className="bi bi-cart">({cartTotalQuantity})</i></NavLink>
                        </div>
                        <div className="wishlist">
                            <NavLink
                                to="/wishlist"
                                className="nav-link"
                            ><i className="bi bi-heart"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
