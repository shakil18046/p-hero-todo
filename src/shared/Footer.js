import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="container mx-auto p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </div>
                <div>
                    <span className="footer-title">Pages</span>
                    <Link to="completedtask" className="link link-hover">completedtask</Link>
                    <Link to="todo" className="link link-hover">todo</Link>
                    <Link to="calender" className="link link-hover">calender</Link>
                    
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by zakamart</p>
            </div>
        </footer>
    );
};

export default Footer;