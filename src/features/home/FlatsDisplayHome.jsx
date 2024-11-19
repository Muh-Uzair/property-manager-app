import PropTypes from "prop-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import FlatDisplayCard from "./FlatDisplayCard";
// import { Card, CardContent } from "@/components/ui/card";

// COMPONENT START
export default function FlatsDisplayHome({ dataFlatsHome }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <section className="shadow-basicShadow flex h-[300px] items-center justify-center rounded-[5px] p-[10px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="h-[280px] w-[280px] overflow-hidden mobileM:w-[335px] mobileL:w-[370px] smallTab:w-[490px] largeTab:w-[520px] largeScreen:w-[680px] largeScreen:overflow-visible"
      >
        <CarouselContent className="flex gap-[10px]">
          {dataFlatsHome.map((val, index) => (
            <CarouselItem key={index} className="flex-none">
              <FlatDisplayCard val={val} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
  // JSX
}

FlatsDisplayHome.propTypes = {
  dataFlatsHome: PropTypes.array,
};
