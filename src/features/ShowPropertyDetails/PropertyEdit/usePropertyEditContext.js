import { useContext } from "react";
import { PropertyEditContext } from "./PropertyEdit";

export function usePropertyEditContext() {
  const { dataPropertyEditForm, register } = useContext(PropertyEditContext);

  return { dataPropertyEditForm, register };
}
