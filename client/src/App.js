import React, { Component } from 'react';
import './App.css';
//list pages imports before router
import Home from './pages/Home/Home';
import Therapy from './pages/Therapy/Therapy';
import Contact from './pages/Contact/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  render() {
    return (
        <Router history={history} basename={process.env.PUBLIC_URL}>
            <Switch>
                 <Route exact path={`/`} component={Home}/>
                 <Route exact path={`/therapy`} component={Therapy}/>
                 <Route exact path={`/contact`} component={Contact}/>
           </Switch>
       </Router>

    );
  }
}

export default App;
