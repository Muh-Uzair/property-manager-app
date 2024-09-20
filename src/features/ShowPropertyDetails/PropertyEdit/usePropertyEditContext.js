import { useContext } from "react";
import { PropertyEditContext } from "./PropertyEditForm";

export function usePropertyEditContext() {
  const { dataPropertyEditForm, register } = useContext(PropertyEditContext);

  return { dataPropertyEditForm, register };
}
