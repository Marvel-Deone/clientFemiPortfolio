
const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="round-shape4">
                <img src="assets/images/round-shape4.png" alt="" />
            </div>
            <div className="round-shape6">
                <img src="assets/images/round-shape6.png" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-title">
                            <h2 className="title">Can't wait to hear from you!! Let's design something spectacular</h2>
                            <p>If you want to discuss your next project or if you're a recruiter or hiring manager with
                                oppurtunities available. Please drop me a message.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-form-wrapper">
                            <form id="contact-form" method="POST">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className="input-field borderd" id="name" placeholder="Your Name"
                                            required />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="email" className="input-field borderd" id="email"
                                            placeholder="Eenter Your Email" required />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="input-field borderd textarea" rows="3" id="message"
                                            placeholder="Write your message here" required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="mybtn1"> Send Message <i className="far fa-envelope"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact