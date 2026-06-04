import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import Container from "./(components)/Container";
import Flex from "./(components)/Flex";

export default function Home() {
  return (
    <>
      <secion className="bg-[url(../public/bg.webp)] bg-no-repeat bg-cover bg-center">
        <div className="pt-64 pb-52.5 bg-linear-[270deg] from-[rgba(5,16,54,0.5)] to-[#051036] opacity-85">
          <Container>
            <div className="text-center">
              <h1 className="font-semibold font-jost text-6xl text-white">
                Find Next Place To Visit
              </h1>
              <p className="font-jost text-white font-medium text-base leading-7.5 pt-6">
                Discover amzaing places at exclusive deals
              </p>
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
            <button className="py-3.5 px-7 bg-[#3554d10d] rounded-sm font-jost font-medium text-base transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] text-[#3554D1] cursor-pointer hover:bg-[#3554D1] hover:text-white">View All Destinations <RxArrowTopRight className={"ml-1 text-2xl inline"}/></button>
          </Flex>
        </Container>
      </section>
    </>
  );
}
