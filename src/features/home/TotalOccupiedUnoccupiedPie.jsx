import { PieChart, Pie, Cell, Legend } from "recharts";
import PropTypes from "prop-types";
import Heading from "@/ui/Heading";

const COLORS = ["#0284c7", "#0c4a6e"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const getPieData = (dataTotals, dataAllOccupiedQt) => {
  const totalProperties = dataTotals
    .filter((val) => val?.dataFor !== "tenants") // Exclude tenants
    .reduce((acc, val) => {
      // Dynamically sum up property quantities
      return (
        acc +
        (val?.totalFlatsQuantity || 0) +
        (val?.totalRoomsQuantity || 0) +
        (val?.totalShopsQuantity || 0)
      );
    }, 0);

  return [
    { name: "Occupied", value: totalProperties },
    { name: "Unoccupied", value: dataAllOccupiedQt },
  ];
};

// COMPONENT START
export default function TotalOccupiedUnoccupiedPie({
  dataTotals,
  dataAllOccupiedQt,
}) {
  // VARIABLES
  const occupiedUnoccupiedPieData = getPieData(dataTotals, dataAllOccupiedQt);

  // FUNCTIONS

  // JSX
  return (
    <div>
      <div>
        <Heading>Occupied/Unoccupied chart</Heading>
      </div>

      <div className="flex justify-center pb-[50px]">
        {" "}
        <PieChart width={240} height={270}>
          <Pie
            data={occupiedUnoccupiedPieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {occupiedUnoccupiedPieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend layout="vertical" />
        </PieChart>
      </div>
    </div>
  );
  // JSX
}

TotalOccupiedUnoccupiedPie.propTypes = {
  dataTotals: PropTypes.array,
  dataAllOccupiedQt: PropTypes.number,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
