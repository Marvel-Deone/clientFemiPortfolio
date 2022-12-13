import { Helmet } from "react-helmet"
import Definition from "../Components/Healthpass/Definition"
import Design from "../Components/Healthpass/Design"
import Footer from "../Components/Healthpass/Footer"
import NextProject from "../Components/Healthpass/NextProject"
import Overview from "../Components/Healthpass/Overview"
import SolutionChallenge from "../Components/Healthpass/SolutionChallenge"
import Takeaway from "../Components/Healthpass/Takeaway"
import Navbar from "../Components/Navbar"
import Preloader from "../Components/Preloader"

const HealthPass = () => {
    return (
        <div>
            <Helmet>
                <script src="https://cdn.tailwindcss.com"></script>
            </Helmet>
            <Preloader />
            <Navbar />
            <Overview />
            <Design />
            <SolutionChallenge />
            <Definition />
            <Takeaway />
            <NextProject />
            <Footer />
        </div>
    )
}

export default HealthPass