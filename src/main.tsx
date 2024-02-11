import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/Donat/",
    element: <App />,
    children: [
      {
        path: "/Donat/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "/Donat/announcement",
      //   element: <Announcement />,
      // },
      // {
      //   path: "/Donat/officers",
      //   element: <Officers />,
      // },
      // {
      //   path: "/Donat/history",
      //   element: <History />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
