import PropTypes from "prop-types";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useGetPropertyType } from "@/hooks/useGetPropertyType";
import CenteredFlexBox from "@/ui/CenteredFlexBox";

const tableCellCommonStyles =
  "px-[0px] text-center align-middle text-[10px] largeScreen:text-[13px]";

// COMPONENT START
export default function AdmissionsBodyTableBody({ dataAllUnoccupiedProperty }) {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <TableBody className="overflow-y-auto">
      {dataAllUnoccupiedProperty.map((val, i) => (
        <TableRow key={i}>
          <TableCell className={`${tableCellCommonStyles} text-semibold`}>
            {propertyType === "flats"
              ? val?.flat_number
              : propertyType === "rooms"
                ? val?.room_number
                : propertyType === "shops"
                  ? val?.shop_number
                  : ""}
          </TableCell>
          <TableCell className={`${tableCellCommonStyles}`}>
            <CenteredFlexBox>
              <Badge
                className={`pointer-events-none flex h-[15px] w-[60px] items-center justify-center rounded-[8px] bg-brand-color-200 px-[3px] py-[0px] text-brand-color-500 largeScreen:h-[22px] largeScreen:w-[100px] largeScreen:rounded-full`}
              >
                {" "}
                <p className="text-[8px] font-bold uppercase largeScreen:text-[11px]">
                  {val?.status}
                </p>
              </Badge>
            </CenteredFlexBox>
          </TableCell>
          <TableCell className={`${tableCellCommonStyles}`}>
            {val?.floor}
          </TableCell>
          <TableCell className={`${tableCellCommonStyles}`}>
            {val?.rent}
          </TableCell>
          <TableCell className={`${tableCellCommonStyles} `}>
            <CenteredFlexBox>
              <Button
                size={"default"}
                className="bg-brand-color-500 px-[5px] py-[3px] text-[10px] text-white hover:bg-brand-color-400 active:bg-brand-color-700 largeScreen:px-[10px] largeScreen:py-[5px] largeScreen:text-[13px]"
                variant="default"
                asChild
              >
                <Link
                  to={`/admissions/${propertyType}/${val?.id}`}
                  className="uppercase"
                >
                  occupy
                </Link>
              </Button>
            </CenteredFlexBox>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
  // JSX
}

AdmissionsBodyTableBody.propTypes = {
  dataAllUnoccupiedProperty: PropTypes.array,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
