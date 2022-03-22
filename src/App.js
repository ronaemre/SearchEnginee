import React, { useState } from 'react'
import './App.css';
import SearchMain from './Components/SearchMain';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchMore from './Components/SearchMore';

function App() {
  const [searchs, setSearchs] = useState([])

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <SearchMain searchs={searchs} setSearchs={setSearchs} />
              </React.Fragment>
            )}>
          </Route>
          <Route
            path="/more"
          >
            <SearchMore searchs={searchs} setSearchs={setSearchs} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
