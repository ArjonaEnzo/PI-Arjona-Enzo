import "./App.css";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Create from "./views/Create/Create";
import Details from "./views/Details/Details";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Route path={"*"} component={Navbar} />
        <Switch>
          <Route path={"/home"} component={Home} />
          <Route path={"/"} component={Landing} />
          <Route path={"/create"} component={Create} />
          <Route path={"/details"} component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
