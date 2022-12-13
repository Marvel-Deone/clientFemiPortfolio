import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-info-area">
                            <div className="footer-logo">
                                <Link to="/" className="logo-link">
                                    <img src="assets/images/logo-color.png" alt="" />
                                </Link>
                            </div>
                            <div className="text">
                                <p>Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat
                                    smiling add but. Wonder twenty hunted and put income set desire expect.
                                </p>
                            </div>
                        </div>
                        <div className="fotter-social-links">
                            <ul>
                                <li>
                                    <Link to='/' className="facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="twitter">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="linkedin">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="google-plus">
                                        <i className="fab fa-google-plus-g"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="dribbble">
                                        <i className="fab fa-dribbble"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="footer-widget use-full-link-widget">
                            <h4 className="title">
                                Usefull
                            </h4>
                            <ul className="link-list">
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Forum
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Carer
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <div className="footer-widget support-link-widget">
                            <h4 className="title">
                                Support
                            </h4>
                            <ul className="link-list">
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>FAQ's
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Support
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-angle-double-right"></i>Documentation
                                    </Link>
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
                                    <Link to='/'>
                                        <img src="assets/images/instagram/1.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="assets/images/instagram/2.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="assets/images/instagram/3.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="assets/images/instagram/4.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="assets/images/instagram/5.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src="assets/images/instagram/6.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-bg text-center">
                <p>Copyright © 2019. All rights reserved by
                    <Link to="/">DevScriptPro</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer