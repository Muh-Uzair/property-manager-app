import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarCMP";
import { NameLogo } from "./NameLogo";

// COMPONENT START///////////////////////////////////////////////
export default function AppLayout() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="grid h-screen grid-rows-[60px_1fr]">
      <header className="flex justify-between border-b-[1px] border-sky-200 bg-gray-100">
        <NameLogo />

        <div className="bg-red-300">user+other</div>
      </header>
      <div className="grid grid-cols-[220px_1fr]">
        <aside className="rounded-br-[5px] rounded-tr-[5px] bg-sky-500">
          <Sidebar />
        </aside>
        <main className="bg-white p-[10px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
  // JSX//////////////////////////////////////////
}
