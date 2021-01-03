import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PresidentDetail from "./PresidentDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" exact component={PresidentDetail} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
function NotFound() {
  return <>Not found</>;
}
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
export default App;
