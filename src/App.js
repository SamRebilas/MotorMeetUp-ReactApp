import NavBar from "./components/NavBar/NavBar"
import Single from "./components/single/Single";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom";
function App() {
  const user = false;
  return (
     <Router>
  <NavBar/>
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route  path="/register" element={<Register/>}/>
  <Route  path="/write" element={<Write/>}/>
  <Route  path="/single" element={<Single/>}/>
  <Route  path="/login" element={<Login/>}/>
  <Route  path="/settings" element={<Settings/>}/>
  <Route  path="/post/:postId" element={<Single/>}/>
  
           
        
  </Routes>
  </Router>
  );
}

export default App;
