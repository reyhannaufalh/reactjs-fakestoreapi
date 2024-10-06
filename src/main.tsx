import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.tsx";
import LoginPage from "./pages/Login.tsx";
import { ProductDetailPage } from "./pages/ProductDetailPage.tsx";
import RegisterPage from "./pages/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <AppLayout>
        <ProductDetailPage />
      </AppLayout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
