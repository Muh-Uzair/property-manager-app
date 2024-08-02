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
import ErrorPG from "./Pages/ErrorPG";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPG />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/home" />,
        errorElement: <ErrorPG />,
      },
      {
        path: "/home",
        element: <HomePG />,
        errorElement: <ErrorPG />,
      },
      {
        path: "/expenses",
        element: <ExpensesPG />,
        errorElement: <ErrorPG />,
      },
      {
        path: "/admissions",
        element: <AdmissionsPG />,
        errorElement: <ErrorPG />,
      },
      {
        path: "*", // Catch-all for unknown URLs
        element: <ErrorPG />,
        errorElement: <ErrorPG />,
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
