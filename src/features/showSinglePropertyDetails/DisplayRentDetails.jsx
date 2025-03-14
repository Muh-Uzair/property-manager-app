import { useContext } from "react";

import { ContextSingleProperty } from "./SinglePropertyDetails";
import { useGetScreenHeight } from "@/hooks/useGetScreenHeight";

const innerElementStyles =
  "align-center flex justify-center text-nowrap rounded-[3px] bg-sky-500 p-[2px]";

export default function DisplayRentDetails() {
  let { dataSingleProperty = {} } = useContext(ContextSingleProperty);
  dataSingleProperty = dataSingleProperty?.data?.[0];
  const { rent_details } = dataSingleProperty || {};
  const screenHeight = useGetScreenHeight();

  return (
    <div className="rounded-[8px] bg-gray-100 p-[10px] text-white">
      <ul
        className="flex flex-col gap-[5px] text-[10px] font-semibold uppercase largeScreen:overflow-y-auto"
        style={{ height: `${screenHeight - 200}px` }}
      >
        {rent_details &&
          rent_details.map((val, i) => (
            <li
              key={i}
              className="rounded-[3px]0 grid grid-cols-2 grid-rows-2 gap-[3px] bg-sky-200/80 p-[5px]"
            >
              <span className={innerElementStyles}>
                <span>month : {`${val.month}`} </span>
              </span>
              <span className={innerElementStyles}>
                {" "}
                rent : {dataSingleProperty.rent}{" "}
              </span>
              <span className={innerElementStyles}>
                status :{" "}
                {val.paid ? (
                  <span
                    className="ml-[5px] rounded-full px-[10px] font-bold text-green-700"
                    style={{ backgroundColor: "#89ff2e" }}
                  >
                    paid
                  </span>
                ) : val.paid === null ? (
                  <span className="ml-[5px]">not started</span>
                ) : (
                  <span className="ml-[5px] rounded-full bg-red-700 px-[10px] font-bold text-red-200">
                    unpaid
                  </span>
                )}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
