import React from 'react';
import "./footer.css"
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin, } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="brand"><span>Portfolio.</span></div>
            <div>
                <FaFacebookF className='social-icons'/>
                <FaGithub className='social-icons'/>
                <FaLinkedin className='social-icons'/>
                <FaTwitter className='social-icons'/>
            </div>
            <div className="text"><p>Copyright © 2024 Portfolio-01 <br /> All Rights Reserved.</p></div>
        </footer>
    );
};

export default Footer;