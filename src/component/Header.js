import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './Contact.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div class='background'>
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <div class="container">
                    <Link class="navbar-brand" to="/"><h2 class="text-light">Portfolio</h2></Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse container navbar_titles" id="navbarScroll">
                        <div class="inside-the-content">
                            <ul class="navbar-nav me-auto my-2 my-lg-0" style={{ '--bs-scroll-height': '100px' }}>
                                <li class="nav-item">
                                    <Link class="nav-link text-light text-bolder active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light" to="/resume">Resume</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light" to="/service">Service</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link class="nav-link text-light dropdown-toggle"   id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Project List
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li key="all-projects"><Link class="dropdown-item" to="/project">All Projects</Link></li>
                                        <li key="shape-website"><a class="dropdown-item" href="https://jhp-shape-clown-website.netlify.app/">Shape website</a></li>
                                        <li key="squadfree-website"><a class="dropdown-item" href="https://squadfree-bootstrap-template.netlify.app/">Squadfree website</a></li>
                                        <li key="simple-calculator"><a class="dropdown-item" href="https://jhp-calculator.netlify.app/">Simple Calculator</a></li>
                                        <li key="car-animation-1"><Link class="dropdown-item" to="/mar.html">1.Car animation</Link></li>
                                        <li key="car-animation-2"><Link class="dropdown-item" to="/car.html">2.Car animation</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
