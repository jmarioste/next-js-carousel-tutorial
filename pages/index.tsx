import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import Image from "next/image";
const Home: NextPage = () => {
  const images = [
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
  ];
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center">Next Carousel Tutorial</h1>
      </div>
      <div className="lg:w-3/4 mx-auto my-2">
        <Carousel options={{ loop: true }}>
          {images.map((src, i) => {
            return (
              <div className="relative h-64 flex-[0_0_100%]" key={i}>
                <Image src={src} fill className="object-cover" alt="alt" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
