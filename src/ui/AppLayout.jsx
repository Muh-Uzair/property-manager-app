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
      <div className="hidden smallTab:grid smallTab:grid-cols-[80px_1fr] largeTab:grid-cols-[170px_1fr] largeScreen:grid-cols-[220px_1fr]">
        <aside className="bg-sky-500">
          <Sidebar />
        </aside>
        <main className="px-[20px] py-[10px]">
          <Outlet />
        </main>
      </div>
      <div className="p-[5px] smallTab:hidden">
        <Outlet />
      </div>
    </div>
  );
  // JSX//////////////////////////////////////////
}
