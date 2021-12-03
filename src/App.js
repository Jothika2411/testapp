import "./App.css";
import Dashboard from "./Icons/Dashboard";
import AssignmentRules from "./Icons/AssignmentRules";
import Tickets from "./Icons/Tickets";
import Logout from "./Icons/Logout";
import Sidebar from "./components/SideBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/contact" component={AssignmentRules} />
          <Route exact path="/profile" component={Tickets} />
          <Route exact path="/share" component={Logout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
