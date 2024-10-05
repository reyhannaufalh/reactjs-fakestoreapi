import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.tsx";
import LoginPage from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <App />
      </AppLayout>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
