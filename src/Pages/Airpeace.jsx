import { Helmet } from "react-helmet"
import DesignChallenge from "../Components/Airpeace/DesignChallenge"
import Failed from "../Components/Airpeace/Failed"
import FinalSol from "../Components/Airpeace/FinalSol"
import Hero from "../Components/Airpeace/Hero"
import Overview from "../Components/Airpeace/Overview"
import Research from "../Components/Airpeace/Research"
import SolutionPreview from "../Components/Airpeace/SolutionPreview"
import Validating from "../Components/Airpeace/Validating"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Preloader from "../Components/Preloader"

const Airpeace = () => {
    return (
        <div>
            <Helmet>
                <script src="https://cdn.tailwindcss.com"></script>
            </Helmet>
            <Preloader />
            <Navbar />
            <Hero />
            <Overview />
            <DesignChallenge />
            <SolutionPreview />
            <Research />
            <Validating />
            <Failed />
            <FinalSol />
            <Footer />
        </div>
    )
}

export default Airpeace