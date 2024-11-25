import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import MoonLoader from "react-spinners/MoonLoader";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addcoffee",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center">
                <MoonLoader />
              </div>
            }
          >
            <AddCoffee />
          </Suspense>
        ),
      },
      {
        path: "updateCoffee/:id",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center">
                <MoonLoader />
              </div>
            }
          >
            <UpdateCoffee />
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
    ],
  },
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  },
]);

export default router;
