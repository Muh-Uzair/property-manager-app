import Heading from "../../../ui/Heading";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useGetPropertyEditData } from "./useGetPropertyEditData";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import PropertyEditForm from "./PropertyEditForm";

// COMPONENT START
export default function PropertyEdit() {
  // VARIABLES
  const propertyType = useGetPropertyType();

  let {
    dataPropertyEdit = [],
    dataTenantPropertyEdit = [],
    statusTenantPropertyEdit,
  } = useGetPropertyEditData();

  dataPropertyEdit = dataPropertyEdit[0] ?? {};

  dataTenantPropertyEdit = dataTenantPropertyEdit[0] ?? {};

  const dataPropertyEditForm = {
    propertyImage: dataPropertyEdit.image,
    ...dataPropertyEdit,
    tenantImage: dataTenantPropertyEdit.image,
    ...dataTenantPropertyEdit,
  };

  // JSX
  if (
    statusTenantPropertyEdit === "success" &&
    Object.entries(dataPropertyEditForm).length > 0
  ) {
    return (
      <div className="flex h-[100%] flex-col gap-[3px] overflow-y-scroll p-[5px]">
        <Heading type="primary">
          Edit Property :{" "}
          {`${propertyType.at(0).toUpperCase()}${propertyType.slice(1)}`}
        </Heading>
        <PropertyEditForm dataPropertyEditForm={dataPropertyEditForm} />
      </div>
    );
  }

  if (statusTenantPropertyEdit === "pending") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  // JSX
}
// COMPONENT END
