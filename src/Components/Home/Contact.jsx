import { send } from "emailjs-com";
import { useState } from "react";


const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Folagbade',
        reply_to: '',
        message: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();

        send(
            'service_fkvxp0b',
            'template_z4pod9l',
            toSend,
            'hiQ-53z5DdrRtv7au'
        ).then((resp) => {
            console.log('SUCCESS!', resp.status, resp.text);
        }).catch((err) => {
            console.log('Failed...', err);
        })
        setToSend({
            from_name: '',
            reply_to: '',
            message: ''
        })

    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

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
                            <form id="contact-form" onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" name="from_name" className="input-field borderd" id="name" placeholder="Your Name" onChange={handleChange} value={toSend.from_name}
                                            required />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="email" name="reply_to" className="input-field borderd" id="email"
                                            placeholder="Enter Your Email" onChange={handleChange} value={toSend.reply_to} required />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="input-field borderd textarea" rows="3" id="message"
                                            placeholder="Write your message here" onChange={handleChange} value={toSend.message} required></textarea>
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