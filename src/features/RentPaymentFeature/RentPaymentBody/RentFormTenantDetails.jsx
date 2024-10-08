import PropTypes from "prop-types";

import FormPortion from "../../../ui/FormPortion";
import FormItem from "../../../ui/FormItem";

// COMPONENT START
export default function RentFormTenantDetails({
  dataTenantDetailRentForm,
  register,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <>
      <FormPortion formPortionHeading={"Tenant Details"}>
        <FormItem
          itemLabel={"Name"}
          itemType={{
            type: "labelInputText",
            value: `${dataTenantDetailRentForm?.name}`,
            readOnly: true,
          }}
          htmlFor={"rfTenantName"}
          id={"rfTenantName"}
          name={"rfTenantName"}
          register={register}
        />

        <FormItem
          itemLabel={"Nationality"}
          itemType={{
            type: "labelInputText",
            value: `${dataTenantDetailRentForm?.nationality}`,
            readOnly: true,
          }}
          htmlFor={"rfTenantNationality"}
          id={"rfTenantNationality"}
          name={"rfTenantNationality"}
          register={register}
        />

        <FormItem
          itemLabel={"Contact"}
          itemType={{
            type: "labelInputText",
            value: `${dataTenantDetailRentForm?.contact_info}`,
            readOnly: true,
          }}
          htmlFor={"rfTenantContact"}
          id={"rfTenantContact"}
          name={"rfTenantContact"}
          register={register}
        />

        <FormItem
          itemLabel={"ID CARD"}
          itemType={{
            type: "labelInputText",
            value: `${dataTenantDetailRentForm?.id_card_number}`,
            readOnly: true,
          }}
          htmlFor={"rfTenantId"}
          id={"rfTenantId"}
          name={"rfTenantId"}
          register={register}
        />

        <FormItem
          itemLabel={"Occupation"}
          itemType={{
            type: "labelInputText",
            value: `${dataTenantDetailRentForm?.occupation}`,
            readOnly: true,
          }}
          htmlFor={"rfTenantOccupation"}
          id={"rfTenantOccupation"}
          name={"rfTenantOccupation"}
          register={register}
        />
      </FormPortion>
    </>
  );
  // JSX
}

RentFormTenantDetails.propTypes = {
  dataTenantDetailRentForm: PropTypes.object,
  register: PropTypes.func,
};
// COMPONENT END
