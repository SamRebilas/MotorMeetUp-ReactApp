import NavBar from "./components/NavBar/NavBar"
import Single from "./components/single/Single";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom";
function App() {
  return (
     <Router>
  <NavBar/>
  <Routes>
  <Route path="/"/>
           <Home/>
        
  </Routes>
  </Router>
  );
}

export default App;
