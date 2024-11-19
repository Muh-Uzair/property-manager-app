import PropTypes from "prop-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";

// COMPONENT START
export default function FlatsDisplayHome({ dataFlatsHome }) {
  // VARIABLES

  console.log(dataFlatsHome);

  // FUNCTIONS

  // JSX
  return (
    <section className="flex h-[250px] items-center justify-center rounded-[5px] bg-gray-200 p-[10px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="h-[230px] w-[280px] overflow-hidden bg-green-400 mobileM:w-[335px] mobileL:w-[370px] smallTab:w-[490px] largeTab:w-[520px]"
      >
        <CarouselContent className="flex gap-[10px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="flex-none">
              <div className="h-[100vh] w-[200px] bg-amber-200">{index}</div>
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

// {
//   Array.from({ length: 5 }).map((_, index) => (
//     <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//       <div className="p-1">
//         <Card>
//           <CardContent className="flex aspect-square items-center justify-center p-6">
//             <span className="text-3xl font-semibold">{index + 1}</span>
//           </CardContent>
//         </Card>
//       </div>
//     </CarouselItem>
//   ));
// }
