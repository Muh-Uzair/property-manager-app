import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import LoadingWrapperCenter from "./ui/LoadingWrapperCenter";
import LoadingSpinner from "./ui/LoadingSpinner";

const ErrorPG = lazy(() => import("./Pages/ErrorPG"));
const LoginPG = lazy(() => import("./Pages/LoginPG"));
const SignUpPG = lazy(() => import("./Pages/SignUpPG"));
const ProtectedRoutePG = lazy(() => import("./Pages/ProtectedRoutePG"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const HomePG = lazy(() => import("./Pages/HomePG"));
const PropertyDetailsPG = lazy(() => import("./Pages/PropertyDetailsPG"));
const SinglePropertyDetails = lazy(
  () => import("./features/showSinglePropertyDetails/SinglePropertyDetails"),
);
const PropertyEdit = lazy(() => import("./features/propertyEdit/PropertyEdit"));
const RentPaymentPG = lazy(() => import("./Pages/RentPaymentPG"));
const AdmissionsPG = lazy(() => import("./Pages/AdmissionsPG"));
const Admissions = lazy(() => import("./features/Admissions/Admissions"));
const OccupyProperty = lazy(
  () => import("./features/Admissions/OccupyProperty"),
);
const LeavePropertyPG = lazy(() => import("./Pages/LeavePropertyPG"));
const LeaveProperty = lazy(
  () => import("./features/leaveProperty/LeaveProperty"),
);
const AppLayout = lazy(() => import("./ui/AppLayout"));

// new node dist

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPG />}>
      <Route path="/login" element={<LoginPG />} />
      <Route path="/register" element={<SignUpPG />} />
      <Route
        path="/"
        element={
          <ProtectedRoutePG>
            <AppLayout />
          </ProtectedRoutePG>
        }
        errorElement={<ErrorPG />}
      >
        {/* DIVIDER */}
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePG />} />

        {/* DIVIDER */}
        <Route path="/propertyDetails" element={<PropertyDetailsPG />} />
        <Route
          path="/propertyDetails/:propertyType"
          element={<PropertyDetailsPG />}
        />
        <Route
          path="/propertyDetails/:propertyType/:propertyId"
          element={<SinglePropertyDetails />}
        />
        <Route
          path="/propertyDetails/:propertyType/edit/:propertyId"
          element={<PropertyEdit />}
        />

        {/* DIVIDER */}
        <Route path="/rentPayment" element={<RentPaymentPG />}>
          {" "}
          <Route path=":propertyType" element={<RentPaymentPG />} />
        </Route>

        {/* DIVIDER */}
        <Route path="/admissions" element={<AdmissionsPG />} />

        <Route path="/admissions/:propertyType" element={<Admissions />} />
        <Route
          path="/admissions/:propertyType/:propertyId"
          element={<OccupyProperty />}
        />

        {/* DIVIDER */}
        <Route path="/leaveProperty" element={<LeavePropertyPG />}>
          <Route path=":propertyType" element={<LeaveProperty />} />
        </Route>

        {/* DIVIDER */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
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
  //  VARIABLES`

  // FUNCTIONS

  // JSX//////////////////////////////////////////]
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense
        fallback={
          <div className="flex h-[100vh] items-center justify-center">
            <LoadingWrapperCenter>
              <LoadingSpinner />
            </LoadingWrapperCenter>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
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
