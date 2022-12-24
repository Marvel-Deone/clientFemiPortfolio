const Research = () => {
    return (
        <div className="max-w-5xl mx-auto -translate-y-[10rem] md:-translate-y-[17.5rem] p-4 md:p-18 flex flex-col gap-3">
            <h2 className="text-[#111111] font-normal leading-4 text-lg md:text-2xl mb-2 md:mb-0 md:px-6">Research</h2>
            {/* Research Start */}
            <div className="flex flex-col md:px-6 gap-3 md:gap-4 mb-20">
                <h2 className="text-[#AD1124] font-semibold leading-4 text-sm md:text-base md:text-center mb-2 md:mb-0">
                    Exploring user
                    pain points</h2>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm md:text-base lg:text-lg text-[#111111] font-normal">Because i wanted to get
                            insights and form a solution from a real-time problem and not a preconcieved data, I decided
                            to
                            interview individuals who are frequent air travellers, some of which were customers of the
                            airline.
                        </p>
                        <p
                            className="text-[#111111] text-lg md:text-xl lg:text-3xl leading-loose font-normal tracking-normal">
                            “What is your <span className="font-bold">number one frustration </span> when booking for a
                            flight
                            ticket?”</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 flex-wrap">
                        <div
                            className="w-52 h-52 bg-[#F5E9EA] rounded-full flex flex-col text-center justify-center px-4 py-3 gap-2">
                            <h2 className="text-4xl font-semibold text-[#111111]">84%</h2>
                            <p className="text-sm font-normal">Being able to check-in even before getting to the airport</p>
                        </div>
                        <div
                            className="w-52 h-52 bg-[#F5E9EA] rounded-full flex flex-col text-center justify-center px-4 py-3 gap-2">
                            <h2 className="text-4xl font-semibold text-[#111111]">79%</h2>
                            <p className="text-sm font-normal">Being able to book/purchase a flight ticket weeks before the
                                departure
                                date</p>
                        </div>
                        <div
                            className="w-52 h-52 bg-[#F5E9EA] rounded-full flex flex-col text-center justify-center px-4 py-3 gap-2">
                            <h2 className="text-4xl font-semibold text-[#111111]">90%</h2>
                            <p className="text-sm font-normal">Multiple online payment options</p>
                        </div>
                        <div
                            className="w-52 h-52 bg-[#F5E9EA] rounded-full flex flex-col text-center justify-center px-4 py-3 gap-2">
                            <h2 className="text-4xl font-semibold text-[#111111]">41%</h2>
                            <p className="text-sm font-normal">Getting discount/cheap flights</p>
                        </div>
                    </div>
                </div>
                {/* Research End */}
            </div>
            {/* Initial Competitive analysis */}
            <div className="max-w-5xl mx-auto flex flex-col gap-3 md:gap-4 md:px-6">
                <h2 className="text-[#AD1124] font-semibold leading-4 text-sm tracking-wide mb-2 md:mb-0">
                    Initial competitive analysis</h2>
                <div className="flex flex-col gap-3">
                    <p className="text-sm md:text-lg lg:text-2xl text-[#111111] font-semibold">We looked into the market to
                        examine
                        other airlines, carried out a deep analysis of <br /> functional competitors and industry
                        leaders
                        in
                        order to extract important features, practices and strategies.
                    </p>
                    <div className="mt-10 md:mt-0 flex flex-col lg:flex-row gap-8 md:gap-16">
                        <div className="flex flex-col mx-auto lg:mx-0 md:flex-row gap-12 items-center">
                            <img src="assets/images/aero.png" alt="" className="w-36 h-20 md:w-44 md:h-24" />
                            <img src="assets/images/dana-air-logo.png" alt="" className="w-36 h-20 md:w-44 md:h-24" />
                            <img src="assets/images/Arik-Logo.png" alt="" className="w-36 h-20 md:w-44 md:h-24" />
                        </div>
                        <p
                            className="hidden lg:flex text-[#111111] text-sm md:text-base font-[400] tracking-10 w-full md:w-80 md:h-44 leading-snug p-2 md:p-0">
                            I
                            thought
                            to
                            pull from other
                            working <br />
                            applications
                            and their already exisitng <br /> features. The
                            purpose of this analysis was to get a better understanding and check out the what already
                            worked for these other airlines in order to save us from re-designig from scratch. so i
                            pulled insights from the top (3) three domestic airlines in Nigeria which are Arik, Dana and
                            Aero contractors. </p>
                        <p
                            className="lg:hidden text-[#111111] text-sm md:text-base font-[400] tracking-10 w-full md:h-44 leading-snug p-2 md:p-0">
                            I
                            thought
                            to
                            pull from other
                            working
                            applications
                            and their already exisitng features. The
                            purpose of this analysis was to get a better understanding and check out the what already
                            worked for these other airlines in order to save us from re-designig from scratch. so i
                            pulled insights from the top (3) three domestic airlines in Nigeria which are Arik, Dana and
                            Aero contractors. </p>
                    </div>
                </div>
            </div>
            {/* Focusing on the my target audience */}
            <div className="max-w-5xl flex flex-col gap-3 lg:mt-28 md:gap-4">
                <h2 className="text-[#AD1124] font-semibold leading-4 text-sm tracking-wide mb-2 md:mb-0 text-center">
                    Focusing on my target audience</h2>
                <div className="flex flex-col gap-14 md:px-6 md:gap-16">
                    <div className="flex flex-col md:gap-3 lg:gap-6">
                        <p className="text-[#111111] text-base md:text-[20px] lg:text-[27px] font-[500] leading-snug mt-6">
                            M/F , Age
                            18-60, Students and working class who have full time jobs. </p>
                        <p className="text-base text-[#111111]">This will give me extra information about what and how to
                            create
                            a
                            suitable
                            solution..
                        </p>
                        <div className="flex flex-col mx-auto md:mx-0 md:flex-row gap-3">
                            <div
                                className="p-3 rounded-2xl bg-[#F8EBED] w-[146px] h-[50px] text-center font-semibold text-gray-900">
                                <p>Gen-z</p>
                            </div>
                            <div
                                className="p-3 rounded-2xl bg-[#F8EBED] w-[144px] h-[50px] text-center font-semibold text-[#000000]">
                                <p>Working class</p>
                            </div>
                            <div
                                className="p-3 rounded-2xl bg-[#F8EBED] w-[146px] h-[50px] text-center font-semibold text-gray-900">
                                <p>Students</p>
                            </div>
                            <div
                                className="p-3 rounded-2xl bg-[#F8EBED] w-[146px] h-[50px] text-center font-semibold text-gray-900">
                                <p>Millenials</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-2">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[#111111] font-semibold leading-4 text-lg md:text-2xl mb-2 md:mb-0">Design
                            </h2>
                            <h2 className="text-[#AD1124] font-bold leading-4 text-sm tracking-wide mb-2 md:mb-0">
                                Wireframes & Iterations </h2>
                        </div>
                        <h2>Mobile app values: </h2>
                        <p className="text-[#111111]">1.) Interesting copywriting</p>
                        <p className="text-[#111111]">2.) Informative</p>
                        <p className="text-[#111111]">3.) Straightforwardness</p>
                    </div>
                    {/* Image Section */}
                    <div className="flex flex-col md:flex-row flex-wrap mx-auto md:mx-0 gap-12 md:mb-10">
                        <img src="assets/images/Home.png" alt="" className="w-[170px] h-[368px]" />
                        <img src="assets/images/Location Permission Request.png" alt="" />
                        <img src="assets/images/Peace Advantage.png" alt="" />
                        <img src="assets/images/Upcoming Trip.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research