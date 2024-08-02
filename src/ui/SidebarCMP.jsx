import { NavLink, Link } from "react-router-dom";
import { HiCubeTransparent } from "react-icons/hi";

// COMPONENT START///////////////////////////////////////////////
export default function Sidebar() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <aside className="grid h-[100%] grid-rows-[auto_1fr] justify-center border-[1px] border-stone-200 bg-white">
      <Link to={"/home"}>
        <div className="h-[100px] w-[100px] justify-center rounded-full bg-black hover:cursor-pointer">
          <HiCubeTransparent
            style={{
              height: "100px",
              width: "100px",

              borderRadius: "1000px",
              padding: "10px",
            }}
            size={"80px"}
            color="38bdf8"
          />
        </div>
      </Link>

      <nav className="w-[100%] bg-red-300">
        <ul>
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/expenses"}>Expenses</NavLink>
          </li>
          <li>
            <NavLink to={"/admissions"}>Admissions</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
