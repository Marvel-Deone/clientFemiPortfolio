import Footer from "../Components/Footer"
import About from "../Components/Home/About"
import Contact from "../Components/Home/Contact"
import Hero from "../Components/Home/Hero"
import Projects from "../Components/Home/Projects"
import Navbar from "../Components/Navbar"

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage