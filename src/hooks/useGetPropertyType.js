import { useParams } from "react-router-dom";

export function useGetPropertyType() {
  let { propertyType } = useParams();

  if (!propertyType) propertyType = "flats";
  return propertyType;
}
