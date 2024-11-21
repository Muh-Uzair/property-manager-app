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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

// COMPONENT START
export default function PropertyValueChart() {
  // VARIABLES

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
            <BarChart width={500} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#075985" />
              <Bar dataKey="uv" fill="#0ea5e9" />
            </BarChart>
          </div>
        </div>
      </div>
    </section>
  );
  // JSX
}
// COMPONENT END
