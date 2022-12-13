const Definition = () => {
    return (
        <div
            className="w-full flex md:flex-row justify-between flex-col md:gap-10 gap-20 mx-auto bg-[#273C75] h-auto px-6 lg:px-8 xl:px-44 py-10 md:py-24">
            <div className="w-full md:w-2/5">
                <h2 className="font-semibold leading-4 text-base text-[#FBFBFB]">Defining the problem</h2>
                <h2 className="text-white text-[15px] mt-5">Who am i designing for ? and what challenges are
                    they currently facing with accessing health care records. I started off by figuring out whom i was
                    designing for. I chose users from the ages of 18-65 years. This age range has the highest rate of
                    internet usablity and adoption.
                </h2>
            </div>
            <div className="w-full md:w-2/5">
                <h2 className="font-semibold leading-4 text-base text-[#FBFBFB]">Key Points</h2>
                <h2 className="text-white text-[15px] mt-5">Easy to use navigation system for less tech savvy individuals.
                    <br />
                    <br />
                    Clear and readble texts and instructions.
                </h2>
            </div>
        </div>
    )
}

export default Definition