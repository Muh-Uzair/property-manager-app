import Table from "../../ui/Table";
import { useGetPropertyData } from "./useGetPropertyData";
import TableHeader from "../../ui/TableHeader";
import TableFooter from "../../ui/TableFooter";
import TableBody from "../../ui/TableBody";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material";
import { brandColor500 } from "../../styles/globalStyles";

const colSize = ["1fr", "1fr", "1fr", "1fr", "1fr", "1fr", "1fr"];

const theme = createTheme({
  palette: {
    primary: {
      main: brandColor500,
    },
  },
});

// COMPONENT START
export default function PropertyDetailsTable() {
  // VARIABLES
  const { propertyType } = useParams();

  const {
    statusProperty,
    data: { dataProperty = {}, totalProperty = null },
  } = useGetPropertyData();

  // FUNCTIONS

  // JSX
  if (!dataProperty?.length > 0 && statusProperty === "success")
    return <span>Error in fetching data</span>;
  if (statusProperty === "pending")
    return (
      <ThemeProvider theme={theme}>
        <div className="flex h-[100%] items-center justify-center">
          <CircularProgress
            thickness={4}
            color="primary"
            disableShrink={true}
          />
        </div>
      </ThemeProvider>
    );

  if (dataProperty.length > 0 && statusProperty === "success") {
    return (
      <ThemeProvider theme={theme}>
        <Table role={"table"}>
          {/* table header */}
          <TableHeader
            colLabels={[
              "IMAGE",
              `${propertyType?.toLocaleUpperCase().slice(0, -1)} NO`,
              "STATUS",
              "FLOOR",
              "RENT",
              "RENTER",
            ]}
            colSize={colSize}
            backgroundColor={"#38bdf8"}
            role={"table-header"}
          />

          {/* table body */}
          <TableBody
            dataProperty={dataProperty}
            colSize={colSize}
            role={"table-body"}
          />

          {/* table footer */}
          <TableFooter role={"table-footer"} totalProperty={totalProperty} />
        </Table>
      </ThemeProvider>
    );
  }
  // JSX
}
// COMPONENT END
