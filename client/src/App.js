import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Create from "./views/Create/Create";
import Details from "./views/Details/Details";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./views/NotFound/NotFound";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <Navbar /> : null}

      <Switch>
        <Route path={"/home"} component={Home} />
        <Route path={"/create"} component={Create} />
        <Route path={"/details/:id"} component={Details} />
        <Route path={"/"} component={Landing} />
        <Route exact path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
