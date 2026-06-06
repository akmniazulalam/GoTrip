import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import Container from "./(components)/Container";
import { FiSearch } from "react-icons/fi";
import Flex from "./(components)/Flex";

export default function Home() {
  return (
    <>
      <secion className="bg-[url(../public/bg.webp)] bg-no-repeat bg-cover bg-center">
        <div className="pt-80 pb-52.5 bg-linear-[270deg] from-[rgba(5,16,54,0.5)] to-[#051036d9]">
          <Container>
            <div className="text-center opacity-100 z-50">
              <h1 className="font-semibold font-jost text-6xl text-white">
                Find Next Place To Visit
              </h1>
              <p className="font-jost text-white font-medium text-base leading-7.5 pt-4 pb-15">
                Discover amzaing places at exclusive deals
              </p>
              <div className="flex items-center gap-x-7 justify-center">
                {[{name: "Hotel"}, {name: "Tour"}, {name: "Activity"}, {name: "Holiday Rentals"}, {name: "Car"}, {name: "Cruise"}, {name: "Flights"},].map((item) => (
                <button key={item.name} className="font-medium font-jost text-[15px] text-white hover:text-[#3554D1] transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer relative before:absolute before:top-7 before:left-0 before:w-full before:bg-white before:h-0.5 before:content-['']">{item.name}</button>
              ))}
              </div>
              <div className="mt-10 p-2.5 bg-white rounded-full w-4xl m-auto grid grid-cols-[22%_28%_30%_20%]">
                <div className="px-7 py-1.5 w-fit text-left">
                  <h4 className="text-[15px] font-jost font-medium text-black">Location</h4>
                  <input placeholder="Where are you going?" type="search" className="placeholder:text-[#757575] placeholder:font-jost font-jost text-black text-[15px] focus:outline-0"/>
                </div>
                <div className="px-7 py-1.5 w-fit text-left border-l border-[#DDDDDD]">
                  <h4 className="text-[15px] font-jost font-medium text-black">Check in - Check out</h4>
                  <span className="text-[#757575] font-jost text-[15px]">Wed 2 Mar - Fri 11 Apr</span>
                </div>
                <div className="px-7 py-1.5 w-fit text-left border-l border-[#DDDDDD]">
                  <h4 className="text-[15px] font-jost font-medium text-black">Guest</h4>
                  <span className="text-[#757575] font-jost text-[15px]">2 adults - 1 childeren - 1 room</span>
                </div>
                <button className="px-9 bg-[#3554D1] text-white font-medium text-sm rounded-full cursor-pointer flex items-center gap-x-2 ml-auto hover:bg-[#051036] transition-all duration-300 ease-in-out">
                  <FiSearch className="text-white text-xl"/>
                  Search
                </button>
              </div>
            </div>
          </Container>
        </div>
      </secion>

      <section className="pt-30 pb-15">
        <Container>
          <Flex>
            <div>
              <h3 className="font-jost text-3xl text-[#051036] font-semibold">
                Popular Destinations
              </h3>
              <p className="font-jost text-[#697488] text-base leading-7.5 mt-2">
                These popular destinations have a lot to offer
              </p>
            </div>
            <button className="py-3.5 px-7 bg-[#3554d10d] rounded-sm font-jost font-medium text-base transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] text-[#3554D1] cursor-pointer hover:bg-[#3554D1] hover:text-white">
              View All Destinations{" "}
              <RxArrowTopRight className={"ml-1 text-2xl inline"} />
            </button>
          </Flex>
        </Container>
      </section>
    </>
  );
}
