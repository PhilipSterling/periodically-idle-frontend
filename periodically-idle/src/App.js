import React from "react";
import tableOfElements from "./components/tableOfElements";
import store from "./store"
import atom from "./components/atom"
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    console.log("The stored state" , store.getState())
    return (
      <div className="app bg">
        <Router>
          <Route path="/TOE" component={tableOfElements} />
          <Route path="/" component={atom} />
        </Router>
      </div>
    );
  }
}

export default App;
