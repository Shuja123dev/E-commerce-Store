import React from 'react'

export default function Footer() {
    return (
        <footer className='flex-box'>
            <div className="footer-container">
                <div className="fBox-container">
                    <div className="footer-box">
                        <h3>CATAGEOTIES</h3>
                        <div className='flink-box'>
                            <a href='/'>Women</a>
                            <a href='/'>Men</a>
                            <a href='/'>Shoes</a>
                            <a href='/'>Watches</a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h3>HELP</h3>
                        <div className='flink-box'>
                            <a href='/'>Track Order</a>
                            <a href='/'>Returns</a>
                            <a href='/'>Shipping</a>
                            <a href='/'>FAQs</a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <div className="contact-box">
                            <h3>GET IN TOUCH</h3>
                        </div>
                        <div className="icon-box">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h3>NEWSLETTER</h3>
                        <input id='input' placeholder='email@example.com' type="email" />
                        <button className="primarybtn">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="copyright-box">
                    <div className="payment-container flex-box">
                        <img src={require("../footer/payment.webp")} alt="" />
                        <img src={require("../footer/paypal.webp")} alt="" />
                        <img src={require("../footer/visa.webp")} alt="" />
                        <img src={require("../footer//pay4.webp")} alt="" />
                        <img src={require("../footer/pay5.webp")} alt="" />
                    </div>
                    <div className="copright">
                        <div className="copy-box flex-box">
                            <p className="flex-box">Copyright ©2023 All rights reserved | This template is made with
                                <span className="material-symbols-outlined">favorite</span>By <span>SHUJA</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}