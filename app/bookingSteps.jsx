import Image from "next/image";
import steps from "./booking";

function BookingSteps() {
  return (
    <>
        {
            steps.map((step)=>(
                <div className="flex items-start space-x-5" key={step.id}>
                    <Image src={step.img} alt="" width={32} height={32} />
                    <div className="text-[#5E6282]">
                        <h4 className="font-bold">{step.title}</h4>
                        <p>{step.text}</p>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default BookingSteps