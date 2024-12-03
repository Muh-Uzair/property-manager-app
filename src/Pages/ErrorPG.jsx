import ErrorDisplay from "@/features/errorDisplay/ErrorDisplay";
import { useRouteError } from "react-router-dom";

// COMPONENT START///////////////////////////////////////////////
export default function ErrorPG() {
  // STATE & VARIABLES
  const error = useRouteError();

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return <ErrorDisplay errorMsg={error?.message} />;
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
