import PropTypes from "prop-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PropertyDisplayCard from "./FlatDisplayCard";
// import { Card, CardContent } from "@/components/ui/card";

// COMPONENT START
export default function ShopsDisplayHome({ dataShopsHome }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <section className="flex h-[300px] items-center justify-center rounded-[5px] p-[10px] shadow-basicShadow">
      <Carousel
        opts={{
          align: "start",
        }}
        className="h-[280px] w-[280px] overflow-hidden mobileM:w-[335px] mobileL:w-[370px] smallTab:w-[490px] largeTab:w-[520px] largeScreen:w-[780px] largeScreen:overflow-visible"
      >
        <CarouselContent className="flex gap-[10px]">
          {dataShopsHome?.map((val, index) => (
            <CarouselItem key={index} className="flex-none">
              <PropertyDisplayCard val={val} type="shops" />
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

ShopsDisplayHome.propTypes = {
  dataShopsHome: PropTypes.array,
};
