import PropTypes from "prop-types";

// COMPONENT START
export default function FlatsDisplayHome({ dataFlatsHome }) {
  // VARIABLES

  console.log(dataFlatsHome);

  // FUNCTIONS

  // JSX
  return (
    <section className="h-[250px] rounded-[5px] bg-gray-200">flats</section>
  );
  // JSX
}

FlatsDisplayHome.propTypes = {
  dataFlatsHome: PropTypes.array,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
