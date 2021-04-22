import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">Your code goes here.</header>
    </div>
  );
}

const rootApp = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default rootApp;
