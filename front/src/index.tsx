import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginInfoContext from "./contexts/LoginInfoConText";
import axios from "axios";
import "./../node_modules/react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();
const App = React.lazy(() => import("./App"));

axios.defaults.baseURL = "https://azmoononlinenodejs.ap-1.evennode.com/api";
axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <LoginInfoContext>
      <Suspense
        fallback={
          <div className="bg-blue-500 h-screen grid place-items-center">
            <h1 className="bold text-center text-white text-2xl">
              مهدی شریفلو
            </h1>
          </div>
        }
      >
        <App />
      </Suspense>
    </LoginInfoContext>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
