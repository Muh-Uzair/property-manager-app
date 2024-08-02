import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarCMP";

// COMPONENT START///////////////////////////////////////////////
export default function AppLayout() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] gap-[5px] bg-slate-50">
      <div className="h-[100%] min-w-[250px]">
        {/* <aside className="h-[100%] border-[1px] border-stone-200 bg-white">
          sidebar
        </aside> */}
        <Sidebar />
      </div>
      <div className="flex flex-col gap-[5px]">
        <header className="h-[80px] w-[100%] rounded-bl-[5px] border-[1px] border-stone-200 bg-white">
          HEADER
        </header>
        <main className="h-[100%] rounded-tl-[5px] border-[1px] border-stone-200 bg-white p-[10px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
