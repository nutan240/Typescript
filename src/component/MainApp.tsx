import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import Phonelogin from "./Phonelogin";
import Trands from "../Pages/Trands";
import Settings from "../Pages/Settings";
import Empregistrationdashboard from "../Pages/Empregistrationdashboard";
import Employee from "../Pages/Employee";
function MainApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/phone" element={<Phonelogin />} />
          <Route path="/trands" element={<Trands />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/about" element={<Empregistrationdashboard />} />
          <Route path="/user" element={<Employee />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainApp;
