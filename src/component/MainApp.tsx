
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import Phonelogin from './Phonelogin';
function MainApp() {
  return (
    <>
       <Router>
       <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/phone" element={<Phonelogin/>} />
       </Routes>
       </Router>
  
    </>
  )
}

export default MainApp