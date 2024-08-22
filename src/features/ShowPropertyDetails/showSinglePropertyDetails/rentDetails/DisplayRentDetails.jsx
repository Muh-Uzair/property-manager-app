import { useContext } from "react";
import { ContextSingleProperty } from "../SinglePropertyDetails";

const innerElementStyles =
  "align-center flex justify-center text-nowrap rounded-[3px] bg-sky-500 p-[2px]";

export default function DisplayRentDetails() {
  const { dataSingleProperty = {} } = useContext(ContextSingleProperty);
  const { rent_details } = dataSingleProperty || {};

  return (
    <div className="h-[100%] w-[100%] rounded-[8px] bg-gray-100 p-[10px] text-white">
      <ul className="flex flex-col gap-[5px] text-[11px] font-semibold uppercase">
        {rent_details &&
          rent_details.map((val, i) => (
            <li
              key={i}
              className="grid grid-cols-2 grid-rows-2 gap-1 rounded-[3px] bg-sky-200/80 p-[5px]"
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
                  <span className="ml-[5px] rounded-full bg-green-300 px-[10px] font-bold text-green-700">
                    paid
                  </span>
                ) : val.paid === null ? (
                  <span className="ml-[5px]">not started</span>
                ) : (
                  <span className="ml-[5px] rounded-full bg-red-300 px-[10px] font-bold text-red-700">
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
