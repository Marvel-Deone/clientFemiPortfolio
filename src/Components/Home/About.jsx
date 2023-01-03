
const About = () => {
    return (
        <section className="about" id="about">
            <div className="round-shape4">
                <img src="assets/images/round-shape4.png" alt="" />
            </div>
            <div className="round-shape6">
                <img src="assets/images/round-shape6.png" alt="" />
            </div>
            <img className="shape" src="assets/images/shape1.png" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 d-flex align-self-center">
                        <div className="info">
                            <h2 className="info-title">About Me <span></span></h2>

                            <p className="about-heading" style={{ fontWeight: 'bold', fontSize: '20px' }}>Hello, Nice of you to join me here!</p>

                            <p>A little about me – <br /> I am Olorunfemi Ogungbile, a Nigerian, I have been practicing design for
                                a little over 3 years as a designer within organizations and freelance. Asides just design
                                my skillset spans through photography and creating videos.

                            </p>I’m currently a product/user experience designer at Oato media, focusing on designing easy
                            to use functional web and mobile solutions.


                            <p>I am passionate and adept about solving complex problems, a good communicator, excellent at
                                time management, organization and meeting deadlines.</p>


                            <p>During my time off, I love going to the gym, hanging out over drinks with friends or watching a series on television .</p>

                        </div>
                    </div>

                    <div className="col-xl-6">
                        <img className="about-img" src="assets/images/work/full2.JPEG" alt="" width={'500px'} height={'600px'} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About