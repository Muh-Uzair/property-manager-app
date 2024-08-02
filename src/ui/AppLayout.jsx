import { Outlet } from "react-router-dom";

// COMPONENT START///////////////////////////////////////////////
export default function AppLayout() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return (
    <div className="absolute inset-[20px] grid grid-cols-[auto_1fr] gap-[10px] rounded-[15px] bg-slate-50">
      <div className="h-[100%] min-w-[250px]">
        <aside className="bo h-[100%] rounded-[10px] border-[1px] border-stone-200 bg-white">
          sidebar
        </aside>
      </div>
      <div className="flex flex-col gap-[10px]">
        <header className="h-[80px] w-[100%] rounded-[10px] border-[1px] border-stone-200 bg-white">
          HEADER
        </header>
        <main className="h-[100%] rounded-[10px] border-[1px] border-stone-200 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////
