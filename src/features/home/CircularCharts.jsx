import PropTypes from "prop-types";
import TotalAndOccupiedPie from "./TotalAndOccupiedPie";
import TotalOccupiedUnoccupiedPie from "./TotalOccupiedUnoccupiedPie";

const preparePieArr = (dataTotals) => {
  const pieData = dataTotals
    .filter((val) => val?.dataFor !== "tenants")
    .map((val) => ({
      name: `Total ${val?.dataFor}`,
      value:
        val?.totalFlatsQuantity ||
        val?.totalRoomsQuantity ||
        val?.totalShopsQuantity,
    }));

  return pieData;
};

// COMPONENT START
export default function CircularCharts({
  dataTotals,
  dataAllOccupiedPropertiesQt,
  dataAllOccupiedQt,
}) {
  // VARIABLES
  const pieData = preparePieArr(dataTotals);

  // JSX
  return (
    <section className="flex justify-center gap-[10px] rounded-[5px] p-[10px] shadow-basicShadow">
      <div className="largeScreen:flex largeScreen:gap-[100px]">
        <TotalAndOccupiedPie
          dataAllOccupiedPropertiesQt={dataAllOccupiedPropertiesQt}
          pieData={pieData}
        />
        <TotalOccupiedUnoccupiedPie
          dataTotals={dataTotals}
          dataAllOccupiedQt={dataAllOccupiedQt}
        />
      </div>
    </section>
  );
}

CircularCharts.propTypes = {
  dataTotals: PropTypes.array,
  dataAllOccupiedPropertiesQt: PropTypes.array,
  dataAllOccupiedQt: PropTypes.number,
};
