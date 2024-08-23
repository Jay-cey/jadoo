import Image from "next/image";

function BookingCard() {
  return (
    <div className="w-3/5 p-6 rounded-3xl text-[#84829A] bg-white shadow-lg drop-shadow-lg space-y-7 relative mx-auto">
        <div className="space-y-5">
            <div className="rounded-2xl overflow-clip">
                <Image src="/booking.jpg" alt="" width={1000} height={100} className="w-full" />
            </div>
            <h4 className="text-[#080809] font-medium text-lg">Trip To Greece</h4>
            <p className="">14-29 June| by Robbin Joseph</p>
            <div className="flex space-x-3">
                <Image src={"/leaf.svg"} alt="" width={38} height={38} />
                <Image src={"/map.svg"} alt="" width={38} height={38} />
                <Image src={"/send.svg"} alt="" width={38} height={38} />
            </div>
        </div>
        <div className="flex justify-between">
            <div className="flex items-baseline space-x-2">
                <Image src={"/building.svg"} alt="" width={20} height={32} />
                <p>24 People Going</p>
            </div>
            <div>
                <Image src={"/heart.svg"} alt="" width={20} height={32} /> 
            </div>
        </div>

        <div className="-z-10 absolute w-full h-full -top-32 -right-32">
            <Image src={"/smoke.svg"} alt="" fill  className="-z-10"/>
        </div>

        <div className="absolute w-3/5 bg-white h-1/4 rounded-xl bottom-16 -right-20 px-4 py-2 shadow-xl flex items-start space-x-2">
            <Image src={"/dome.png"} alt="dome" width={50} height={50} className="rounded-full w-12 h-auto" />
            <div className="space-y-2 text-sm font-medium w-full">
                <div>
                    <p>Ongoing</p>
                    <p className="text-lg text-[#080809]">Trip To Rome</p>
                </div>
                <div className="space-y-1">
                    <p><span>40%</span> completed</p>
                    <div className="w-full h-1 bg-[#F5F5F5] rounded-full">
                        <div className="w-2/5 h-full bg-[#8A79DF] rounded-l-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default BookingCard