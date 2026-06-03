import Image from "next/image";
import iphone from "../public/iphone-16-pro-max-256gb-black-titanium.jpeg"
import Container from "./(components)/Container";

export default function Home() {
  return (
    <>
    <secion className="bg-[url(../public/bg.webp)] bg-no-repeat bg-cover bg-center">
      <div className="pt-64 pb-52.5 bg-linear-[270deg] from-[rgba(5,16,54,0.5)] to-[#051036] opacity-85">
        <Container>
        <div className="text-center">
          <h1 className="font-semibold font-jost text-6xl text-white">Find Next Place To Visit</h1>
          <p className="font-jost text-white font-medium text-base leading-7.5 pt-6">Discover amzaing places at exclusive deals</p>
        </div>
      </Container>
      </div>
    </secion>
    </>
  );
}
