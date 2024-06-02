import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./container/AppLayout";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from './pages/ProductsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <p>User cart</p>,
      },
      {
        path: "/checkout",
        element: <p>Checkout page</p>,
      },
    ],
  },
]);

export default function MainAppRouter() {
  return <RouterProvider router={router} />;
}
