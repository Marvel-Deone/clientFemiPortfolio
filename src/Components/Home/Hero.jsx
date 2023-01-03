
const Hero = () => {
    return (
        // Hero Area Start
        <div id="home" className="hero-area">
            <div className="background"></div>
            {/* <img className="bgimg" src="assets/images/heroarea/one/bg.png" alt="" /> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 d-flex align-self-center">
                        <div className="left-content">
                            <div className="content">
                                <p className="subtitle" style={{ fontWeight: '500px' }}>Hi, I'm Olorunfemi</p>

                                <p id="hero-title">I design easy-to-use <br /> mobile and web solutions through empathy and communications.</p>
                                <p id="hero-title2">I design easy-to-use <br /> mobile and web solutions through empathy and communication.</p>
                                <div className="links">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-first order-lg-last">
                        <div className="right-img">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Hero Area End
    )
}

export default Hero