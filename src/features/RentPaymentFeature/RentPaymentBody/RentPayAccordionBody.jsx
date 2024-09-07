import PropTypes from "prop-types";

import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import LoadingWrapperCenter from "../../../ui/LoadingWrapperCenter";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useGetTenantDetailRentForm } from "./useGetTenantDetailRentForm";
import { monthsArr } from "../../../utils/constants";
import { calculateDues, getDueMonths } from "../../../utils/helpers";
import Button from "../../../ui/Button";

// COMPONENT START
export default function RentPayAccordionBody({ occupiedProperty }) {
  // VARIABLES
  const propertyType = useGetPropertyType();
  let { dataTenantDetailRentForm, statusTenantDetailRentForm } =
    useGetTenantDetailRentForm(occupiedProperty.renter_id);
  dataTenantDetailRentForm = dataTenantDetailRentForm?.data?.[0] ?? {};

  console.log(occupiedProperty);

  // FUNCTIONS

  // JSX
  if (statusTenantDetailRentForm === "pending") {
    return (
      <LoadingWrapperCenter>
        <LoadingSpinner size={25} />
      </LoadingWrapperCenter>
    );
  }
  if (Object.entries(dataTenantDetailRentForm).length > 0) {
    return (
      <form
        className="w-[100%] rounded-[5px] border border-gray-300 bg-gray-50/50 px-[7px] py-[10px]"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Property Details */}
        <FormPortion formPortionHeading={"Property Details"}>
          <FormItem
            itemLabel={"Property"}
            itemType={{
              type: "labelInputText",
              value: `${propertyType.at(0).toUpperCase()}${propertyType.slice(1, -1)}  ${occupiedProperty.flat_number ?? occupiedProperty.shop_number ?? occupiedProperty.room_number}`,

              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Floor"}
            itemType={{
              type: "labelInputText",
              value: `Floor ${occupiedProperty.floor}`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Size"}
            itemType={{
              type: "labelInputText",
              value: `${occupiedProperty.size} m`,
              disabled: true,
            }}
          />
        </FormPortion>

        {/* Tenant details */}
        <FormPortion formPortionHeading={"Tenant Details"}>
          <FormItem
            itemLabel={"Name"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.name}`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Nationality"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.nationality}`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Contact"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.contact_info}`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"ID CARD"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.id_card_number}`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Occupation"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.occupation}`,
              disabled: true,
            }}
          />
        </FormPortion>

        {/* Rent details */}
        <FormPortion formPortionHeading={"Rent Details"}>
          <FormItem
            itemLabel={"Property Rent"}
            itemType={{
              type: "labelInputText",
              value: `${occupiedProperty.rent}`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Last Rent Paid"}
            itemType={{
              type: "labelInputText",
              value: `April`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Current Month"}
            itemType={{
              type: "labelInputText",
              value: `${monthsArr[new Date().getMonth()]}`,
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Dues"}
            itemType={{
              type: "labelInputText",
              value: calculateDues(
                monthsArr.indexOf("april"),
                occupiedProperty.rent,
              ),
              disabled: true,
            }}
          />
          <FormItem
            itemLabel={"Months Due"}
            itemType={{
              type: "labelInputText",
              value: new Date().getMonth() - monthsArr.indexOf("april"),
              disabled: true,
            }}
          />
        </FormPortion>

        <FormPortion formPortionHeading={"Payment received of "}>
          <ul>
            {getDueMonths("april").map((month, i) => (
              <li key={i}>
                <FormItem
                  itemType={{ type: "labelCheckBox" }}
                  itemLabel={month}
                />
              </li>
            ))}
          </ul>

          <FormItem
            itemLabel={"Amount Received"}
            itemType={{
              type: "labelInputText",
              value: 15000,
              disabled: true,
            }}
          />
        </FormPortion>

        {/* others */}
        <FormPortion>
          <FormItem
            itemType={{ type: "labelCheckBox" }}
            itemLabel={"received payment"}
          />
        </FormPortion>
        <FormPortion last={true}>
          <div className="flex justify-end">
            <Button type="primary" uppercase={true}>
              Pay Rent
            </Button>
          </div>
        </FormPortion>
      </form>
    );
  }
  // JSX
}

RentPayAccordionBody.propTypes = {
  occupiedProperty: PropTypes.object,
};
// COMPONENT END
