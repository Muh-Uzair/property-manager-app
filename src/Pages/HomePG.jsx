import { useEffect } from "react";
import { getAllFlats } from "../Services/flats";

// COMPONENT START///////////////////////////////////////////////
export default function HomePG() {
  // STATE & VARIABLES

  // FUNCTIONS

  useEffect(() => {
    getAllFlats();
  });

  // JSX//////////////////////////////////////////
  return <div>Home</div>;
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
