const NextProject = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 md:px-20 mb-10 lg:mb-20">
            <div className="flex flex-col gap-8 md:gap-0">
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <div className="flex flex-col my-auto gap-4">
                        <h2 className="text-lg text-[#111111]">Next Project</h2>
                        <div className="flex gap-8 items-center">
                            <p className="text-5xl font-medium text-[#111111]">Air Peace</p>
                            <img src="assets/images/arrow.png" alt="" className="w-[25px] h-[26px]" />
                        </div>
                    </div>
                    <div className="relative w-fit mx-auto h-[28rem] md:h-[36rem] flex">
                        <img src="assets/images/next_project.png"
                            className="absolute mx-auto flex top-0 h-[28rem] md:h-[36rem] object-cover" alt="" />
                        <div className="rounded-full w-72 h-72  md:w-80 md:h-80 lg:w-96 lg:h-96 flex my-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextProject