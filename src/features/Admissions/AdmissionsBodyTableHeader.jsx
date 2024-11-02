import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetPropertyType } from "@/hooks/useGetPropertyType";

const tableHeaderCommonStyles =
  "bg-brand-color-500 text-center text-[10px] text-white largeScreen:text-[16px]";
// COMPONENT START
export default function AdmissionsBodyTableHeader() {
  // VARIABLES
  const propertyType = useGetPropertyType();

  // FUNCTIONS

  // JSX
  return (
    <>
      <TableHeader>
        <TableRow className="bg-brand-color-500 uppercase">
          <TableHead className={`${tableHeaderCommonStyles}`}>
            {`${propertyType.slice(0, -1)} no`}
          </TableHead>
          <TableHead className={`${tableHeaderCommonStyles}`}>status</TableHead>
          <TableHead className={`${tableHeaderCommonStyles}`}>floor</TableHead>
          <TableHead className={`${tableHeaderCommonStyles}`}>rent</TableHead>
          <TableHead className={`w-[80px] ${tableHeaderCommonStyles}`}>
            &nbsp;
          </TableHead>
        </TableRow>
      </TableHeader>
    </>
  );
  // JSX
}
// COMPONENT END
