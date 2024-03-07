/* React */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* Bootstrap */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Components */
import App from "./App.tsx";

import Dashboard from "./pages/Dashboard.tsx";
import Announcement from "./pages/Announcement.tsx";
import Officers from "./pages/Officers.tsx";
import History from "./pages/History.tsx";

/* Setup page routes */
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/announcement",
        element: <Announcement />,
      },
      {
        path: "/officers",
        element: <Officers />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

/* react does some cool stuff here i mean it creates our website in index.html's div#root i think */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
