import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import Menubar from "./Pages/Menubar/Menubar";
import Login from "./Shared/Login/Login";
import Register from "./Shared/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>{" "}
          <Route path="/home">
            <Events></Events>
          </Route>{" "}
          <Route path="/register">
            <Register></Register>
          </Route>{" "}
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
