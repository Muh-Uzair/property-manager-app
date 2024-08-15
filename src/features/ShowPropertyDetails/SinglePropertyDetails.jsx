import { useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import Portion from "../../ui/Portion";
import { useGetSinglePropertyDetails } from "./useGetSinglePropertyDetails";
// COMPONENT START
export default function SinglePropertyDetails() {
  // VARIABLES

  const { propertyType } = useParams();
  let { dataSingleProperty, statusSingleProperty } =
    useGetSinglePropertyDetails();
  dataSingleProperty = dataSingleProperty?.data?.[0];

  console.log(dataSingleProperty);

  // FUNCTIONS

  // JSX

  return (
    <div className="flex h-[100%] gap-[20px]">
      {/* Property & renter details */}
      <div className="grid w-[80%] grid-rows-[1fr_1fr] gap-[10px]">
        {/* portion :  property details */}
        <Portion type="horizontal" gap={5} width="w-[100%]">
          <Heading
            type="primary"
            headingText={`${propertyType.charAt(0).toLocaleUpperCase()}${propertyType.slice(1, propertyType.length - 1)} Details`}
          />
          {/* Image + details */}
          <div
            className={`h-[100%] w-[100%] rounded-[8px] bg-sky-200 p-[16px] ${statusSingleProperty === "pending" ? "flex items-center justify-center" : statusSingleProperty === "success" ? "flex gap-[20px]" : ""}`}
          >
            {statusSingleProperty === "pending" && <span>Loading...</span>}
            {statusSingleProperty === "success" && (
              <>
                {/* Img div */}
                <div className="h-[100%] w-[60%] rounded-[8px] bg-gray-400">
                  <img
                    className="h-full max-h-[330px] w-full rounded-[8px] object-cover"
                    src={dataSingleProperty.image}
                  />
                </div>
                {/* details div*/}
                <div>hello</div>
              </>
            )}
          </div>
        </Portion>

        {/*Renter details portion*/}
        <Portion type="horizontal" gap={5}>
          <Heading type="primary" headingText="Renter Details" />
          <div className="h-[100%] w-[100%] rounded-[8px] bg-slate-300">
            hello
          </div>
        </Portion>
      </div>

      {/*property rent details*/}
      <div className="w-[20%]">
        {/* Rent details portion */}
        <Portion type="horizontal" gap={5} width="w-[100%]">
          <Heading type="primary" headingText="Rent Details" />
          {/* rent details */}
          <div className="h-[100%] w-[100%] rounded-[8px] bg-slate-300">
            hello
          </div>
        </Portion>
      </div>
    </div>
  );
  // JSX
}
// COMPONENT END
