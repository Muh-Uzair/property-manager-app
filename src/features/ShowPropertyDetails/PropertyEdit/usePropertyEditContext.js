import { useContext } from "react";
import { PropertyEditContext } from "./PropertyEdit";

export function usePropertyEditContext() {
  const { dataPropertyEdit, dataTenantPropertyEdit, register } =
    useContext(PropertyEditContext);

  return { dataPropertyEdit, dataTenantPropertyEdit, register };
}
