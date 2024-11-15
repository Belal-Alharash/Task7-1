import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./../../assets/Images/logo.svg";
import Plane from "./../../assets/Images/plane.webp";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function NavBar({ show }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleopen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className={show ? "NavBar" : "NavBar2"}>
                <div className="bh-nav2-img">
                    {
                        !show && (
                            <img src={Plane} className="bh-img-plane" />
                        )
                    }
                    <img src={Logo} alt="logo" />
                </div>
                <ul className={isOpen ? "open" : ""}>
                    {
                        isOpen && (
                            <div className="bh-close-menu"><IoClose onClick={handleopen} /></div>
                        )
                    }
                    <li><Link to={"/"}>Home<IoIosArrowDown /></Link></li>
                    <li><Link to={"/About"}>About</Link></li>
                    <li><Link to={"#"}>Services<IoIosArrowDown /></Link></li>
                    <li><Link to={"#"}>Pages<IoIosArrowDown /></Link></li>
                    <li><Link to={"#"}>Blog<IoIosArrowDown /></Link></li>
                    <li><Link to={"/Contact"}>Contact</Link></li>
                </ul>
                <div className={show ? "bh-side2" : "bh-nav2-side2"}>
                    <div>
                        <a href="#"><CiSearch /></a>
                        {
                            show && (
                                <a href="#"><FaShoppingCart /></a>
                            )
                        }
                        <FaBars className="bh-NavBar-bars" onClick={handleopen} />
                    </div>
                    <div className="bh-nav2-triangal-btn">
                        {
                            !show && (
                                <div class="bh-triangle-left"></div>
                            )
                        }
                        {
                            !show && (
                                <div className="bh-bg-button-nav2">
                                    <button> GET A QUOTE <span><FaArrowRightLong /></span></button>
                                </div>
                            )
                        }
                    </div>
                    {
                        show && (
                            <button> GET A QUOTE <span><FaArrowRightLong /></span></button>
                        )
                    }
                </div>
            </nav>
        </>
    );
}
