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
            value: `${dataTenantDetailRentForm.name}`,
            disabled: true,
          }}
          htmlFor={"tenantName"}
          id={"tenantName"}
          register={register}
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
          register={register}
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
          register={register}
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
          register={register}
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
