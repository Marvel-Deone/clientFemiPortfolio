const Failed = () => {
    return (
        <div
            className="max-w-7xl mx-auto -translate-y-[10rem] md:-translate-y-[15rem] flex flex-col p-6 gap-3 md:gap-4 mb-20">
            <div className="max-w-7xl px-6 xl:px-36 flex flex-col gap-4 md:mb-2">
                <h2 className="text-[#AD1124] font-semibold leading-4 text-sm md:text-base mb-2 md:mb-0 text-center">We
                    failed to solve air travellers problem of booking a flight</h2>
                <p className="text-sm md:text-base text-[#111111] font-[400]">From the feedback we got from frequent air
                    travellers. we learnt
                </p>
            </div>
            <div className="md:px-6 lg:px-8 xl:px-24">
                <div className="bg-[#F5F4F3] p-6 lg:p-12">
                    <p className="mt-1 md:mt-0"> 1.) We had taken too much inspiration for already existing airline booking
                        platforms and were
                        forgetting about the usability aspect.</p>
                    <p className="mt-1 md:mt-0">2.) We need a real wow factor
                    </p>
                    <p className="mt-1 md:mt-0">3.) I presented the mobile app design and gave them a set of pre-defined
                        tasks including to book
                        a return flight from Lagos to Cape any destination of thier choice for 2 adults for 7 days. </p>
                </div>
            </div>
        </div>
    )
}

export default Failed