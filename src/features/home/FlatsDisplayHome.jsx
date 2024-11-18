import PropTypes from "prop-types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// COMPONENT START
export default function FlatsDisplayHome({ dataFlatsHome }) {
  // VARIABLES

  console.log(dataFlatsHome);

  // FUNCTIONS

  // JSX
  return (
    <section className="h-[250px] rounded-[5px] bg-gray-200">
      {" "}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-[100px] w-[100px] bg-brand-color-300">
                {index}
              </div>
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
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
