const FinalSol = () => {
    return (
        <div
            className="max-w-full bg-[#DCDDE1] -translate-y-[14rem] md:-translate-y-[15rem] md:py-16 p-6 lg:px-12 flex flex-col gap-16">
            <div className="max-w-7xl md:px-6 lg:px-8 xl:px-36 flex flex-col gap-2 md:mb-2">
                <h2 className="text-[#AD1124] font-semibold leading-4 text-sm md:text-base mb-2 md:mb-0">Final Solution</h2>
                <p className="text-sm md:text-base text-[#111111] font-[400]">After usability testing, I gathered all the
                    feedbacks and came up with high fidelity designs.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto">
                <img src="assets/images/pace-advantage.png" alt="" className="object-cover h-fit" />
                {/* <img src="assets/images/port-harcourt.png" alt="" className="w-72 h-fit"/> */}
            </div>
        </div>
    )
}

export default FinalSol