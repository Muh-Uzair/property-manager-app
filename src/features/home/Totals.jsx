import PropTypes from "prop-types";
import TotalsCard from "@/ui/TotalsCard";
import { FaBuilding, FaStore } from "react-icons/fa";
import { MdBedroomChild } from "react-icons/md";
import { FaUser } from "react-icons/fa";

// COMPONENT START
export default function Totals({ dataTotals }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-[10px]">
      {dataTotals.map((val, i) => (
        <TotalsCard
          key={i}
          heading={`${val?.dataFor}`}
          value={
            {
              flats: val?.totalFlatsQuantity,
              rooms: val?.totalRoomsQuantity,
              shops: val?.totalShopsQuantity,
              tenants: val?.totalTenantsQuantity,
            }[val?.dataFor]
          }
          icon={
            {
              flats: <FaBuilding />,
              rooms: <MdBedroomChild />,
              shops: <FaStore />,
              tenants: <FaUser />,
            }[val?.dataFor] || null
          }
        />
      ))}
    </section>
  );
  // JSX
}

Totals.propTypes = {
  dataTotals: PropTypes.array,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END

{
  /* <TotalsCard heading={"rooms"} value={"16"} icon={} />
<TotalsCard heading={"shops"} value={"16"} icon={} />
<TotalsCard heading={"tenants"} value={"16"} icon={} /> */
}
