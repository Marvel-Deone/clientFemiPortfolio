const Footer = () => {
    return (
        <div
            className="max-w-7xl mx-auto flex flex-col gap-5 md:gap-8 mb-6 lg:mb-12">
            <hr className="w-full md:w-[600px] border-[#7F7F7F] flex mx-auto" />
            <h2 className="uppercase text-center font-[500] text-2xl">Let’s connect !</h2>
            <div className="flex gap-10 mx-auto items-center">
                <img src="assets/images/LinkedIn.png" className="w-[23.95px] h-[23.95px]" alt="" />
                <img src="assets/images/message.png" className="w-[24px] h-[18px]" alt="" />
                <img src="assets/images/be.png" className="w-[24px] h-[24px]" alt="" />
            </div>
        </div>
    )
}

export default Footer