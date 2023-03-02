import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import Image from "next/image";
const Home: NextPage = () => {
  const images = [
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
  ];
  return (
    <div className="lg:w-3/4 mx-auto my-2">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;
