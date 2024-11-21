import PropTypes from "prop-types";
import TotalAndOccupiedPie from "./TotalAndOccupiedPie";

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
}) {
  // VARIABLES
  const pieData = preparePieArr(dataTotals);

  // JSX
  return (
    <section className="flex justify-center gap-[10px] rounded-[5px] border border-brand-color-500 p-[10px]">
      <div>
        <TotalAndOccupiedPie
          dataAllOccupiedPropertiesQt={dataAllOccupiedPropertiesQt}
          pieData={pieData}
        />
        <div>another chart</div>
      </div>
    </section>
  );
}

CircularCharts.propTypes = {
  dataTotals: PropTypes.array,
  dataAllOccupiedPropertiesQt: PropTypes.array,
};
