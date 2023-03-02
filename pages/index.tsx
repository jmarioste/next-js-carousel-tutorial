import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import Image from "next/image";
const Home: NextPage = () => {
  const images = [
    "https://picsum.photos/id/237/480/300",
    "https://picsum.photos/id/238/480/300",
    "https://picsum.photos/id/239/480/300",
  ];
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center">Next Carousel Tutorial</h1>
      </div>
      <div className="w-1/2 mx-auto my-2">
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
