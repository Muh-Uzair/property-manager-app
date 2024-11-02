import Heading from "../../../ui/Heading";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import PropertyEditForm from "./PropertyEditForm";
import { useGetPropertyType } from "../../../hooks/useGetPropertyType";
import { useGetPropertyEditData } from "./useGetPropertyEditData";
import { useGetScreenHeight } from "../../../hooks/useGetScreenHeight";

// COMPONENT START
export default function PropertyEdit() {
  // VARIABLES
  const propertyType = useGetPropertyType();
  const screenHeight = useGetScreenHeight();

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
      <div
        style={{
          height: `calc(${screenHeight}px - 80px)`, // Inline style with dynamic calculation
        }}
        className="flex h-[100%] flex-col gap-[3px] overflow-y-auto p-[5px]"
      >
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
