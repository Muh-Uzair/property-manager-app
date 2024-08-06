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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePG from "./Pages/HomePG";
import ExpensesPG from "./Pages/ExpensesPG";
import AdmissionsPG from "./Pages/AdmissionsPG";
import AppLayout from "./ui/AppLayout";
import ErrorPG from "./Pages/ErrorPG";
import PageNotFound from "./Pages/PageNotFound";
import PropertyDetailsPG from "./Pages/PropertyDetailsPG";
import LoginPG from "./ui/LoginPG";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

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
    <Route>
      <Route path="login" element={<LoginPG />} />
      <Route path="/" element={<AppLayout />} errorElement={<ErrorPG />}>
        <Route errorElement={<ErrorPG />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePG />} />
          <Route path="expenses" element={<ExpensesPG />} />
          <Route path="admissions" element={<AdmissionsPG />} />
          <Route path="property-details" element={<PropertyDetailsPG />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
      ,
    </Route>,
  ),
);

// COMPONENT START///////////////////////////////////////////////
export default function App() {
  // STATE & VARIABLES`     kkkkkkkkkkkkkkkkkk;

  // FUNCTIONS

  // JSX//////////////////////////////////////////]
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
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
