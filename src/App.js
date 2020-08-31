import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1> Serach Result Page</h1>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
