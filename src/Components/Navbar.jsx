import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand" to="/">
                                <img src="assets/images/gcf2.png" alt="" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"
                                aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mainmenu">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/#home">Work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar