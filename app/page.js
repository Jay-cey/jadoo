import Image from "next/image";
import Services from "./Services";
import DestinationsCard from "./DestinationsCard";
import BookingSteps from "./bookingSteps";
import BookingCard from "./BookingCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full mx-auto overflow-hidden">
      <section className="grid grid-cols-2 w-5/6">
        <div className="grid content-center gap-6">
          <p className="text-[#DF6951] uppercase font-bold text-xl">Best Destinations around the world</p>
          <h2 className="text-7xl font-bold text-[#181E4B]">Travel, enjoy <br /> and live a new <br /> and full life</h2>
          <p className="font-medium text-[#5E6282] leading-7">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        
        <div className="flex">
          <button className="rounded-md bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-800 shadow-lg text-white py-3 px-4 text-sm">
            Find out more
          </button>
        </div>
        </div>

        <div className="">
          <Image src={"/image.png"} alt="l" width={1000} height={1000} className="w-full"/>
          <Image src={"/patch.svg"} alt="" width={1000} height={500} className="absolute -z-50 lg:-top-20 -right-20 w-6/12"/>
        </div>

      </section>

      <section className="container w-5/6 mx-auto space-y-7">
        <div className="text-center space-y-2 mt-6">
          <p className="font-semibold text-lg">Category</p>
          <h2 className="text-5xl font-bold">We Offer Best Services</h2>
        </div>

        <div className="grid grid-cols-4 md:gap-12 ">
          <Services/>
        </div>
      </section>

      <section className="w-5/6 mx-auto my-24">
        <div className="text-center space-y-2">
          <p className="font-semibold text-lg">Top Selling</p>
          <h2 className="text-5xl font-bold">Top Destinations</h2>
        </div>

        <div className="grid grid-cols-3 gap-24 px-14 mt-16">
          <DestinationsCard/>
        </div>
      </section>

      <section className="grid grid-cols-2 w-5/6 mx-auto mb-24">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="font-semibold text-lg">Easy and Fast</p>
            <h2 className="text-5xl font-bold">Book Your Next Trip In 3 Easy Steps</h2>
          </div>

          <div className="space-y-4 w-5/6">
            <BookingSteps/>
          </div>
        </div>

        <div>
          <BookingCard/>
        </div>
      </section>

      <section className="grid grid-cols-2 w-5/6 mx-auto mb-24">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="font-semibold text-lg">Testimonials</p>
            <h2 className="text-5xl font-bold leading-normal">What people say <br /> about Us.</h2>
          </div>

 
        </div>

        <div>
          <BookingCard/>
        </div>
      </section>

      <section className="grid grid-cols-5 justify-between items-center w-5/6 mx-auto justify-items-center">
        <Image src="/axon.png" alt="axon logo" width={100} height={100} />
        <Image src="/jetstar.png" alt="jetstar logo" width={100} height={100} />
        <Image src="/expedia.png" alt="expedia logo" width={100} height={100} />
        <Image src="/qantas.png" alt="qantaslogo" width={100} height={100} />
        <Image src="/alitalia.png" alt="alitalia logo" width={100} height={100} />
      </section>

      <section className="my-24 bg-[#DFD7F9] rounded-tl-[6rem] rounded-3xl h-96 w-5/6 text-center px-8 py-14 flex flex-col justify-around relative">
        <p className="font-semibold text-4xl text-[#5E6282] w-4/5 mx-auto leading-[3rem]">Subscribe to get information, latest news and other interesting offers about Cobham</p>

        <form action="#" method="post" className="space-x-3">
          <input type="email" name="" id="" placeholder="Your email" className="placeholder:text-sm placeholder:text[#39425D] w-2/5 px-3 py-3 rounded-lg focus:outline-[#DFD7F9]" />

          <button type="submit" className="h-full px-7 py-3 text-white rounded-lg bg-gradient-to-b from-[#FF946D] to-[#FF7D68]">Subscribe</button>
        </form>

        <Image src="/sub.svg" alt="subscribe" width={100} height={100} className="w-16 h-auto absolute -top-6 -right-5" />
        <Image src="/mask.svg" alt="subscribe" width={100} height={100} className="w-48 h-auto absolute right-0 top-0" />
        <Image src="/mask1.svg" alt="subscribe" width={500} height={500} className="w-96 max-w-80 h-auto absolute bottom-0 -left-16" />
      </section>
     
    </main>
  );
}
