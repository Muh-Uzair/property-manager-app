import PropTypes from "prop-types";

// COMPONENT START
export default function NoOtherRentedProperties({ dataRenterDetails }) {
  return (
    <span className="font-semibold text-gray-500">
      {dataRenterDetails?.name} has no other rented properties
    </span>
  );
}
NoOtherRentedProperties.propTypes = {
  dataRenterDetails: PropTypes.object,
};
// COMPONENT END
