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
            <div
                className="max-w-7xl mx-auto flex flex-col gap-5 md:gap-8 mb-6 lg:mb-12" style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <hr className="w-full md:w-[600px] border-[#7F7F7F] flex mx-auto" style={{ width: '600px', borderColor: '#7F7F7F' }} />
                <h2 className="uppercase text-center font-[500] text-2xl" style={{ fontSize: '1.5rem', fontWeight: '500', lineHeight: '2rem', textTransform: 'uppercase', color: '#242424' }}>Let’s connect !</h2>
                <div className="flex gap-10 mx-auto items-center" style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto', gap: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/olorunfemi-oyediji-ogungbile-b91a0714b" target="_blank" rel="noreferrer" className="cursor-pointer">
                        <img src="assets/images/LinkedIn.png" className="w-[23.95px] h-[23.95px]" alt="" style={{ width: '23.95px', height: '23.95px' }} />
                    </a>
                    <a href="https://twitter.com/MrOyediji" target="_blank" rel="noreferrer" className="cursor-pointer">
                        <img src="data:image/png;base64,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" className="w-[24px] h-[18px]" alt="" style={{ width: '28px', height: '24px' }} />
                    </a>
                    <a href="https://www.behance.net/olorunfemiogungbile" target="_blank" rel="noreferrer">
                        <img src="assets/images/be.png" className="w-[24px] h-[24px]" alt="" style={{ width: '24px', height: '24px' }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Homepage 