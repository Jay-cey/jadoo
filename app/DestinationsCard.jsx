import Image from "next/image";
import destinations from "./destinations";

export default function DestinationsCard() {
  return (
    <>
        {
            destinations.map(destination =>(
                <div className="relative" key={destination.id}>
                    <div className="h-1/4 w-full absolute bg-white rounded-b-3xl bottom-0 z-40 text-[#5E6282] px-6 py-5 space-y-4">
                        <div className="flex justify-between">
                            <p>{destination.name}</p>
                            <p>{destination.price}</p>
                        </div>

                        <div className="flex space-x-4">
                            <Image src="/Navigation.svg" alt="duration" width={18} height={26} />
                            <p>{destination.duration} Days Trip</p>
                        </div>
                    </div>
                    <Image src={destination.img} alt="" width={500} height={100} className="w-full rounded-3xl drop-shadow-xl" />
                </div>
            ))
        }
    </>
  )
}
