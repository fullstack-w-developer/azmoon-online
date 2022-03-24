import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./pages/login/Login";
import Verify from "./pages/verify/Verify";
import Home from "./pages/home/Home";
import CreateQuestion from "./pages/create-question/CreateQuestion";
import Profile from "./pages/profile/Profile";
import MyTest from "./pages/myTest/MyTest";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { loginInfoContext } from "./contexts/LoginInfoConText";
import firebase from "./firebase";
import About from "./pages/aboutme/About";

const queryClient = new QueryClient();

function App() {
  const { loginInfo } = useContext(loginInfoContext);
  axios.defaults.headers.common["x-access-token"] =
    loginInfo.token && loginInfo.token;


  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/azmoon-online" element={loginInfo.token  && loginInfo.idSignup ? <Navigate to="/azmoon-online/home"/> :<Login/>} />
          <Route path="/azmoon-online/verify" element={<Verify />} />
          <Route path="/azmoon-online/home" element={<Home />} />
          <Route path="/azmoon-online/create-question" element={<CreateQuestion />} />
          <Route path="/azmoon-online/profile" element={<Profile />} />
          <Route path="/azmoon-online/tests" element={<MyTest />} />
          <Route path="/azmoon-online/about" element={<About />} />
          <Route
        path="*"
        element={<Navigate to="/azmoon-online" replace />}
    />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
