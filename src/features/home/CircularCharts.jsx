import { lime500, teal500, yellow500 } from "@/styles/globalStyles";
import PropTypes from "prop-types";
import { Cell, LabelList, Legend, Pie, PieChart } from "recharts";

const pieColors = ["#7dd3fc", "#0284c7", "#0c4a6e"];
const insidePieColors = [lime500, teal500, yellow500];

const prepareOccupiedPieData = () => {
  return [
    {
      name: "Occupied flats",
      value: 16,
    },
    {
      name: "Occupied rooms",
      value: 10,
    },
    {
      name: "Occupied shops",
      value: 20,
    },
  ];
};

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
  const occupiedPropertiesPieData = prepareOccupiedPieData();
  console.log(dataAllOccupiedPropertiesQt);

  // JSX
  return (
    <section className="flex items-center justify-center gap-[10px] rounded-[5px] border border-brand-color-500 bg-brand-color-50 py-[50px]">
      <div>
        <div className="flex items-center justify-center">
          <PieChart width={280} height={280}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              margin={{ bottom: 50 }}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieColors[index % pieColors.length]}
                />
              ))}
              <LabelList />
            </Pie>

            <Pie
              data={dataAllOccupiedPropertiesQt}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
            >
              {occupiedPropertiesPieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={insidePieColors[index % pieColors.length]}
                />
              ))}
              <LabelList />
            </Pie>
            <Legend layout="horizontal" />
          </PieChart>
        </div>
        <div>another chart</div>
      </div>
    </section>
  );
}

CircularCharts.propTypes = {
  dataTotals: PropTypes.array,
  dataAllOccupiedPropertiesQt: PropTypes.array,
};
