import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarCMP";
import { Header } from "./Header";

// COMPONENT START///////////////////////////////////////////////
export default function AppLayout() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="grid h-[100vh] grid-rows-[60px_1fr]">
      <Header />
      <div className="grid grid-cols-[220px_1fr]">
        <aside className="rounded-br-[8px] rounded-tr-[8px] bg-sky-500">
          <Sidebar />
        </aside>
        <main className="bg-white px-[20px] py-[10px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
  // JSX//////////////////////////////////////////
}
