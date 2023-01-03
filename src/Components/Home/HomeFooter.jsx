import React from 'react'

const HomeFooter = () => {
    return (
        <div>
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="row flex">
                        <div className="col-md-6 col-lg-4 ml-4">
                            <div className="footer-info-area">
                                <div className="footer-logo">
                                    <a href="index.html#" className="logo-link">
                                        <img src="assets/images/gcf2.png" alt="" />
                                    </a>
                                </div>
                                <div className="text">
                                    <p>I am passionate and adept about solving complex problems, a good communicator, excellent at time management, organization and meeting deadlines.
                                    </p>
                                </div>
                            </div>
                            <div className="fotter-social-links">
                                <ul>
                                    <li>
                                        <a href="index.html#" className="facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#" className="twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#" className="linkedin">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#" className="google-plus">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#" className="dribbble">
                                            <i className="fab fa-dribbble"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ml-4">
                            <div className="footer-widget use-full-link-widget">
                                <h4 className="title">
                                    Usefull
                                </h4>
                                <ul className="link-list">
                                    <li>
                                        <a href="/#home">
                                            <i className="fas fa-angle-double-right"></i>Work
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#about">
                                            <i className="fas fa-angle-double-right"></i>About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#contact">
                                            <i className="fas fa-angle-double-right"></i>Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-widget instagram-feed-widget">
                                <h4 className="title">
                                    Instagram Feed
                                </h4>
                                <ul className="instagram-feed-list">
                                    <li>
                                        <a href="index.html#">
                                            <img src="assets/images/instagram/1.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#">
                                            <img src="assets/images/instagram/2.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#">
                                            <img src="assets/images/instagram/3.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#">
                                            <img src="assets/images/instagram/4.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#">
                                            <img src="assets/images/instagram/5.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html#">
                                            <img src="assets/images/instagram/6.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-bg text-center">
                    <p>Copyright © 2022. All rights reserved by
                        <a href="index.html"> Olorunfemi Ogungbile</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default HomeFooter