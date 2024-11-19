import PropTypes from "prop-types";
import { Cell, Legend, Pie, PieChart } from "recharts";

const pieColors = ["#7dd3fc", "#38bdf8", "#0369a1"];

const preparePieArr = (dataTotals) => {
  const pieData = dataTotals
    .filter((val) => val?.dataFor !== "tenants") // Exclude unwanted entries
    .map((val) => ({
      name: val?.dataFor,
      value:
        val?.totalFlatsQuantity ||
        val?.totalRoomsQuantity ||
        val?.totalShopsQuantity,
    }));

  return pieData;
};

// COMPONENT START
export default function CircularCharts({ dataTotals }) {
  // VARIABLES
  const pieData = preparePieArr(dataTotals);

  console.log(pieData);

  // JSX
  return (
    <section className="h-[400px] gap-[10px] rounded-[5px] bg-brand-color-50 p-[10px]">
      <div className="flex items-center justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={pieColors[index % pieColors.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </section>
  );
}

CircularCharts.propTypes = {
  dataTotals: PropTypes.array,
};
