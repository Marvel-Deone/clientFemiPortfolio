const SolutionPreview = () => {
    return (
        <div className="max-w-6xl mx-auto -translate-y-[10rem] md:-translate-y-[17.5rem] p-4 md:p-20">
            <h2 className="text-[#AD1124] font-semibold leading-4 text-base text-center mb-2 md:mb-0">
                Solution Preview</h2>
            <div className="flex flex-col gap-8 md:gap-0">
                {/* select location */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-16">
                    <div className="relative w-fit mx-auto h-[28rem] md:h-[30rem] lg:h-[36rem] flex">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/14.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[30rem] lg:h-[36rem] object-cover" alt="" />
                    </div>
                    <div className="flex flex-col my-auto gap-3 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111]">Select location of depature
                            and
                            arrival of
                            flight.
                        </h2>
                        <p className="text-base text-[#111111] font-[300]">Filtered and detailed for users of the app to
                            choose
                            from what
                            city of
                            departure to what city of
                            arrival they are going.</p>
                    </div>
                </div>
                {/* List of departure */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <div className="md:hidden relative w-fit mx-auto h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72  md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/2.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[36rem] object-cover" alt="" />
                    </div>
                    <div className="flex flex-col my-auto gap-4 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111]">List of departure city and
                            destination city .
                        </h2>
                        <p className="text-base text-[#111111] font-[300]">Filtered and detailed for users of the app to
                            choose
                            from what city of departure to what city of arrival they are going.</p>
                    </div>
                    <div className="hidden md:flex relative w-fit h-[28rem] md:h-[36rem]">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72  md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/2.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[36rem] object-cover" alt="" />
                    </div>
                </div>
                {/* Boarding Pass generated */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-16">
                    <div className="relative w-fit mx-auto h-[28rem] md:h-[36rem] flex">
                        <div className="rounded-full bg-[#DCDDE1] w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                        <img src="assets/images/3.png"
                            className="absolute mx-auto top-0 h-[28rem] md:h-[36rem] object-cover" alt="" />
                    </div>
                    <div className="flex flex-col my-auto gap-3 md:gap-12">
                        <h2 className="font-bold text-lg md:text-2xl text-[#111111]">Boarding pass generated.
                        </h2>
                        <p className="text-base text-[#111111] font-[300]">Filtered and detailed for users of the app to
                            choose from what city of departure to what city of arrival they are going.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionPreview