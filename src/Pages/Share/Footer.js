import React from 'react';
import footerImg from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerImg})`
        }} >
            <div className='footer p-10 text-black justify-between  items-center h-96  '>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>

                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>

                </div>
            </div>
            <div className='text-center py-6'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>

        </footer>
    );
};

export default Footer;