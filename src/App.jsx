// import {
//   BrowserRouter,
//   Navigate,
//   Route,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomePG from "./Pages/HomePG";
import ExpensesPG from "./Pages/ExpensesPG";
import AdmissionsPG from "./Pages/AdmissionsPG";

import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="home" />,
      },
      {
        path: "home",
        element: <HomePG />,
      },
      {
        path: "expenses",
        element: <ExpensesPG />,
      },
      {
        path: "admissions",
        element: <AdmissionsPG />,
      },
    ],
  },
]);

// COMPONENT START///////////////////////////////////////////////
export default function App() {
  // STATE & VARIABLES

  // FUNCTIONS

  // JSX//////////////////////////////////////////
  return <RouterProvider router={router} />;
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////

///////////////////////////////////
///////////////////////////////////

// export default function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<AppLayout />}>
//             <Route index element={<Navigate replace to="home" />} />
//             <Route path="home" element={<HomePG />} />
//             <Route path="expenses" element={<ExpensesPG />} />
//             <Route path="admissions" element={<AdmissionsPG />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
//
// }
