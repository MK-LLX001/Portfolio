import App from './App.jsx';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Review_Websit_LPB from './components/Review_Websit_LPB.jsx';

const router = createBrowserRouter([
  {
    path: "/", // เส้นทางหลัก (root path)
    element: <App />, // องค์ประกอบที่จะแสดง
  },
  {
    path: "reviewLPB", // เส้นทางหลัก (root path)
    element: <Review_Websit_LPB />, // องค์ประกอบที่จะแสดง
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
