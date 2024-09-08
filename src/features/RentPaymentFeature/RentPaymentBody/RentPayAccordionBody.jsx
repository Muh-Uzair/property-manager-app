import PropTypes from "prop-types";

import FormItem from "../../../ui/FormItem";
import FormPortion from "../../../ui/FormPortion";
import LoadingWrapperCenter from "../../../ui/LoadingWrapperCenter";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useGetTenantDetailRentForm } from "./useGetTenantDetailRentForm";
import { monthsArr } from "../../../utils/constants";
import {
  calculateDues,
  getDueMonths,
  getLastPaidMonth,
} from "../../../utils/helpers";
import Button from "../../../ui/Button";

// COMPONENT START
export default function RentPayAccordionBody({ occupiedProperty }) {
  // VARIABLES
  const propertyType = useGetPropertyType();
  let { dataTenantDetailRentForm, statusTenantDetailRentForm } =
    useGetTenantDetailRentForm(occupiedProperty.renter_id);
  dataTenantDetailRentForm = dataTenantDetailRentForm?.data?.[0] ?? {};

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
            htmlFor={"propertyNumber"}
            id={"propertyNumber"}
          />
          <FormItem
            itemLabel={"Floor"}
            itemType={{
              type: "labelInputText",
              value: `Floor ${occupiedProperty.floor}`,
              disabled: true,
            }}
            htmlFor={"propertyFloor"}
            id={"propertyFloor"}
          />
          <FormItem
            itemLabel={"Size"}
            itemType={{
              type: "labelInputText",
              value: `${occupiedProperty.size} m`,
              disabled: true,
            }}
            htmlFor={"propertySize"}
            id={"propertySize"}
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
            htmlFor={"tenantName"}
            id={"tenantName"}
          />
          <FormItem
            itemLabel={"Nationality"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.nationality}`,
              disabled: true,
            }}
            htmlFor={"tenantNationality"}
            id={"tenantNationality"}
          />
          <FormItem
            itemLabel={"Contact"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.contact_info}`,
              disabled: true,
            }}
            htmlFor={"tenantContact"}
            id={"tenantContact"}
          />
          <FormItem
            itemLabel={"ID CARD"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.id_card_number}`,
              disabled: true,
            }}
            htmlFor={"tenantId"}
            id={"tenantId"}
          />
          <FormItem
            itemLabel={"Occupation"}
            itemType={{
              type: "labelInputText",
              value: `${dataTenantDetailRentForm.occupation}`,
              disabled: true,
            }}
            htmlFor={"tenantOccupation"}
            id={"tenantOccupation"}
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
            htmlFor={"rentProperty"}
            id={"rentProperty"}
          />
          <FormItem
            itemLabel={"Last Rent Paid"}
            itemType={{
              type: "labelInputText",
              value: `${monthsArr[getLastPaidMonth(occupiedProperty.rent_details)]}`,
              disabled: true,
            }}
            htmlFor={"rentLastMonthPaid"}
            id={"rentLastMonthPaid"}
          />
          <FormItem
            itemLabel={"Current Month"}
            itemType={{
              type: "labelInputText",
              value: `${monthsArr[new Date().getMonth()]}`,
              disabled: true,
            }}
            htmlFor={"rentCurrentMonth"}
            id={"rentCurrentMonth"}
          />
          <FormItem
            itemLabel={"Due Amount"}
            itemType={{
              type: "labelInputText",
              value: calculateDues(
                getLastPaidMonth(occupiedProperty.rent_details),
                occupiedProperty.rent,
              ),
              disabled: true,
            }}
            itemValueColor="red"
            htmlFor={"rentDueAmount"}
            id={"rentDueAmount"}
          />
          <FormItem
            itemLabel={"Months Due"}
            itemType={{
              type: "labelInputText",
              value:
                new Date().getMonth() -
                getLastPaidMonth(occupiedProperty.rent_details),
              disabled: true,
            }}
            itemValueColor="red"
            htmlFor={"rentDueMonths"}
            id={"rentDueMonths"}
          />
        </FormPortion>

        {/* payment received of months */}
        <FormPortion formPortionHeading={"Payment received of "}>
          <ul>
            {getDueMonths(getLastPaidMonth(occupiedProperty.rent_details)).map(
              (month, i) => (
                <li key={i}>
                  <FormItem
                    itemType={{ type: "labelCheckBox" }}
                    itemLabel={month}
                    htmlFor={`paymentReceived${month}`}
                    id={`paymentReceived${month}`}
                  />
                </li>
              ),
            )}
          </ul>

          <FormItem
            itemLabel={"Amount Received"}
            itemType={{
              type: "labelInputText",
              value: 15000,
              disabled: true,
            }}
            itemValueColor="green"
            income={true}
            htmlFor={"amountReceived"}
            id={"amountReceived"}
          />
        </FormPortion>

        {/* received payment check */}
        <FormPortion>
          <FormItem
            itemType={{ type: "labelCheckBox" }}
            itemLabel={"received payment"}
            htmlFor={"receivedPaymentCheck"}
            id={"receivedPaymentCheck"}
          />
        </FormPortion>

        {/* submit button */}
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
