import { useRouteError } from "react-router-dom";

// COMPONENT START///////////////////////////////////////////////
export default function ErrorPG() {
  // STATE & VARIABLES
  const error = useRouteError();
  console.log(error);

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div>
      Error Page <span>{error?.data || error?.message}</span>
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
