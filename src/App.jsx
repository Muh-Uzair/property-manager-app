import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePG from "./Pages/HomePG";
import ExpensesPG from "./Pages/ExpensesPG";
import AdmissionsPG from "./Pages/AdmissionsPG";
import AppLayout from "./ui/AppLayout";
import ErrorPG from "./Pages/ErrorPG";
import PageNotFound from "./Pages/PageNotFound";
import PropertyDetailsPG from "./Pages/PropertyDetailsPG";
import LoginPG from "./Pages/LoginPG";
import SinglePropertyDetails from "./features/ShowPropertyDetails/showSinglePropertyDetails/SinglePropertyDetails";
import PropertyEdit from "./features/ShowPropertyDetails/PropertyEdit/PropertyEdit";
import RentPaymentPG from "./Pages/RentPaymentPG";
// import DummyPG1 from "./Pages/DummyPG1";
import { Toaster } from "react-hot-toast";

// propertyEdit branch created

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
          <Route path="propertyDetails" element={<PropertyDetailsPG />} />
          {/* <Route path="propertyDetails" element={<DummyPG1 />} /> */}
          <Route
            path="propertyDetails/:propertyType"
            element={<PropertyDetailsPG />}
          />
          <Route
            path="propertyDetails/:propertyType/:propertyId"
            element={<SinglePropertyDetails />}
          />
          <Route
            path="propertyDetails/:propertyType/edit/:propertyId"
            element={<PropertyEdit />}
          />
          <Route path="rentPayment" element={<RentPaymentPG />}>
            {" "}
            <Route path=":propertyType" element={<RentPaymentPG />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
      ,
    </Route>,
  ),
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

// COMPONENT START///////////////////////////////////////////////
export default function App() {
  // STATE & VARIABLES`

  // FUNCTIONS

  // JSX//////////////////////////////////////////]
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
  // JSX//////////////////////////////////////////
}
// COMPONENT END/////////////////////////////////////////////////

///////////////////////////////////
///////////////////////////////////
//

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

//////////////////////////////////////
//////////////////////////////////////

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

// import {
//   BrowserRouter,
//   Navigate,
//   Route,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";
