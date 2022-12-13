const Overview = () => {
    return (
        <div className="max-w-full flex mx-auto h-auto py-24 md:px-6 lg:px-8 xl:px-44 md:py-16 lg:py-36">
            <div className="max-w-5xl mx-auto px-4 py-6 md:px-4 md:py-0 flex flex-col gap-14">
                <h2 className="text-[#111111] font-semibold leading-4 text-base">Overview</h2>
                <h2 className="text-base md:text-xl leading-snug text-[#111111] font-semibold">A mobile app called the
                    “HEALTH PASS” . Where through a single scan, information about a persons recent screening tests
                    (Covid, Lassa fever, Chicken Pox, HIV and vaccination will be made available. </h2>
                <div className="flex gap-5 md:gap-52">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-base md:text-lg leading-7 text-[#111111]">Role</h3>
                        <p className="text-base md:text-lg font-normal text-[#111111]">Ux Research</p>
                        <p className="text-base md:text-lg font-normal text-[#111111]">UI Design</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-base md:text-lg leading-7 text-[#111111]">Team</h3>
                        <p className="text-base md:text-lg font-normal text-[#111111]">Solo</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-base md:text-lg leading-7 text-[#111111]">Duration</h3>
                        <p className="text-base md:text-lg font-normal text-[#111111]">2 Weeks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview