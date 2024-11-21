import PropTypes from "prop-types";
import { Cell, LabelList, Legend, Pie, PieChart } from "recharts";
import { lime500, teal500, yellow500 } from "@/styles/globalStyles";
import Heading from "@/ui/Heading";

const pieColors = ["#7dd3fc", "#0284c7", "#0c4a6e"];
const insidePieColors = [lime500, teal500, yellow500];

// COMPONENT START
export default function TotalAndOccupiedPie({
  dataAllOccupiedPropertiesQt,
  pieData,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <div>
      <div>
        <Heading>Total/Occupied chart</Heading>
      </div>
      <div className="flex items-center justify-center rounded-[5px] p-[10px]">
        <PieChart width={240} height={320}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            margin={{ bottom: 50 }}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={pieColors[index % pieColors.length]}
              />
            ))}
          </Pie>

          <Pie
            data={dataAllOccupiedPropertiesQt}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
          >
            {dataAllOccupiedPropertiesQt.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={insidePieColors[index % pieColors.length]}
              />
            ))}
            <LabelList />
          </Pie>
          <Legend layout="horizontal" iconType="line" align="left" />
        </PieChart>
      </div>
    </div>
  );
  // JSX
}

TotalAndOccupiedPie.propTypes = {
  dataAllOccupiedPropertiesQt: PropTypes.array,
  pieData: PropTypes.array,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

// COMPONENT END
