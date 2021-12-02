import "./App.css";
import Header from "./components/Header";
import Home from "./Icons/Home";
import Contact from "./Icons/Contact";
import Profile from "./Icons/Profile";
import Share from "./Icons/Share";
import Sidebar from "./components/SideBar";
import { Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/share" component={Share} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
