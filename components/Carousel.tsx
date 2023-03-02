import classNames from "classnames";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Children, PropsWithChildren, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";

type DivProps = PropsWithChildren & {
  options?: EmblaOptionsType;
};
const Carousel = ({ children, options }: DivProps) => {
  // need to track state to allow the component to re-render in react.
  // using only emblaRef won't rerender even if it's state changes.
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
  });

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    <>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <Dots
        itemsLength={Children.count(children)}
        selectedIndex={selectedIndex}
      />
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </>
  );
};
export default Carousel;
