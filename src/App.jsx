// import {
//   BrowserRouter,
//   Navigate,
//   Route,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePG from "./Pages/HomePG";
import ExpensesPG from "./Pages/ExpensesPG";
import AdmissionsPG from "./Pages/AdmissionsPG";
import AppLayout from "./ui/AppLayout";
import ErrorPG from "./Pages/ErrorPG";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <ErrorPG />,
//     children: [
//       {
//         index: true,
//         element: <Navigate replace to="/home" />,
//       },
//       {
//         path: "home",
//         element: <HomePG />,
//       },
//       {
//         path: "expenses",
//         element: <ExpensesPG />,
//       },
//       {
//         path: "admissions",
//         element: <AdmissionsPG />,
//       },
//       {
//         path: "*", // Catch-all for unknown URLs
//         element: <ErrorPG />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<ErrorPG />}>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="home" element={<HomePG />} />
      <Route path="expenses" element={<ExpensesPG />} />
      <Route path="admissions" element={<AdmissionsPG />} />
      <Route path="*" element={<ErrorPG />} />
    </Route>,
  ),
);

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
