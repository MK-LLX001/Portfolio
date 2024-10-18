import App from './App.jsx';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";

import Review_Websit_LPB from './components/Review_Websit_LPB.jsx';
import Expenses from './components/Review_Expen_system.jsx';
import Review_Brijark_system from './components/Review_Brijark_system.jsx';
import Review_Image from './components/Review_Image.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio"> {/* basename ต้องตรงกับชื่อโฟลเดอร์ของ GitHub Pages */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="reviewLPB" element={<Review_Websit_LPB />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="brijack" element={<Review_Brijark_system />} />
        <Route path="image" element={<Review_Image />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
