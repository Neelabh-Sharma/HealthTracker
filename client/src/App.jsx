import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/common/Home";
import Checkup from "./pages/common/Checkup"
import Expensive from "./pages/common/Expensive"
import DoctorConsult from "./pages/common/DoctorConsult"
import Help from "./pages/common/Help"
import Recomdation from "./pages/common/Recomdation"
import Setting from "./pages/common/Setting"
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
function App() {
  const [isLogin, setLogin] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        {/* Default routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/*User Login  Access*/}
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate to="/login" />}
        />
         <Route
          path="/checkup"
          element={isLogin ? <Checkup /> : <Navigate to="/login" />}
        />
         <Route
          path="/expensive"
          element={isLogin ? <Expensive /> : <Navigate to="/login" />}
        />
         <Route
          path="/doctorConsult"
          element={isLogin ? <DoctorConsult /> : <Navigate to="/login" />}
        />
         <Route
          path="/help"
          element={isLogin ? <Help /> : <Navigate to="/login" />}
        />
         <Route
          path="/recomendation"
          element={isLogin ? <Recomdation /> : <Navigate to="/login" />}
        />
         <Route
          path="/setting"
          element={isLogin ? <Setting /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
