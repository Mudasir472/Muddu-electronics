import { NavLink } from "react-router-dom";
import "./Header.css"
export default function Navbar() {
    function toggleDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="container collapse navbar-collapse" id="navbarSupportedContent">

                        {/* <div class="dropdown">
                            <button onClick={myFunction} class="dropbtn">BROWSE CATEGORIES <i class="bi bi-chevron-down"></i></button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="/cameras"><i class="bi bi-camera"></i> Camera and parts</a>
                                <a href="/computers"><i class="bi bi-laptop"></i> Computer</a>
                                <a href="/keyboards"><i class="bi bi-keyboard"></i> Keyboard</a>
                                <a href="/watches"><i class="bi bi-smartwatch"></i> Smart Watches</a>
                                <a href="mobiles"><i class="bi bi-phone"></i> Mobile</a>
                            </div>
                        </div> */}
                        <div className="dropdown">
                            <button onClick={toggleDropdown} className="dropbtn">
                                BROWSE CATEGORIES <i className="bi bi-chevron-down"></i>
                            </button>
                            <div id="myDropdown" className="dropdown-content">
                                <NavLink to="/cameras">
                                    <i className="bi bi-camera"></i> Camera and parts
                                </NavLink>
                                <NavLink to="/computers">
                                    <i className="bi bi-laptop"></i> Computer
                                </NavLink>
                                <NavLink to="/keyboards">
                                    <i className="bi bi-keyboard"></i> Keyboard
                                </NavLink>
                                <NavLink to="/watches">
                                    <i className="bi bi-smartwatch"></i> Smart Watches
                                </NavLink>
                                <NavLink to="/mobiles">
                                    <i className="bi bi-phone"></i> Mobile
                                </NavLink>
                            </div>
                        </div>

                        <ul class="navbar-nav me-auto mb-2 mx-3 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink
                                    to="/"
                                    className="nav-link active"
                                    aria-current="page"
                                >HOME</NavLink>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Link</a> */}
                                <NavLink
                                    to="/products"
                                    className="nav-link"
                                >PRODUCTS</NavLink>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Link</a> */}
                                <NavLink
                                    to="/blog"
                                    className="nav-link"
                                >BLOG</NavLink>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Link</a> */}
                                <NavLink
                                    to="/about"
                                    className="nav-link"
                                >ABOUT</NavLink>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Link</a> */}
                                <NavLink
                                    to="/contact"
                                    className="nav-link"
                                >CONTACT</NavLink>
                            </li>
                        </ul>

                        <div className="num">
                            <a style={{ textDecoration: "none", color: "white" }} href="tel:+916006189840"><i class="bi bi-telephone-forward"></i> (+91) 6006189840</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

<script>

</script>