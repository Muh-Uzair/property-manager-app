import Heading from "@/ui/Heading";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const getPropertyValueData = () => {
  const propertyCreatedYear = 2010;
  const currentYear = new Date().getFullYear();

  let propertyValueArr = [];
  let initialValue = 50000000;

  for (let i = propertyCreatedYear; i <= currentYear; i++) {
    propertyValueArr.push({
      name: i,
      value: Number(
        (i === propertyCreatedYear
          ? initialValue
          : (initialValue *= 1.1)
        ).toFixed(0),
      ),
    });
  }

  return propertyValueArr;
};

// COMPONENT START
export default function PropertyValueChart() {
  // VARIABLES

  const propertyValueDate = getPropertyValueData();

  // FUNCTIONS

  // JSX
  return (
    <section className="h-[400px] overflow-x-hidden rounded-[5px]">
      <div className="flex h-[90%] items-end justify-start overflow-x-auto overflow-y-hidden rounded-[5px] bg-gray-100 p-[10px]">
        <div className="flex flex-col gap-[20px]">
          <div>
            <Heading>Property value chart</Heading>
          </div>
          <div className="flex items-center justify-start">
            <BarChart width={780} height={250} data={propertyValueDate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                dataKey="value"
                tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`} // Format Y-axis ticks
              />
              <Tooltip
                formatter={(value) => `${(value / 1_000_000).toFixed(2)}M`} // Format tooltip values
              />
              <Legend />
              <Bar dataKey="value" fill="#075985" />
            </BarChart>
          </div>
        </div>
      </div>
    </section>
  );
  // JSX
}
// COMPONENT END
