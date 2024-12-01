import {Routes,Route,NavLink} from  "react-router-dom";
import App1 from "./App1.js";
import Mail from "./Mail.js";
import "./nav.css";

function App(){


    return(<>

    <Routes>
        <Route path="/" element={<App1/>}></Route>
        <Route path="/mail" element={<Mail/>}></Route>
    </Routes>
<nav className="nav_container">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/mail">mail</NavLink>
    </nav>

    </>)

}
export default App;