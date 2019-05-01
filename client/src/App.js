import React, { Component } from 'react';
import './App.css';
//list pages imports before router
import Home from './pages/Home/Home';
import Therapy from './pages/Therapy/Therapy';
import Contact from './pages/Contact/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Google Anlitics: pages viewed
import Analytics from 'react-router-ga';


class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Analytics id="UA-127585560-1" debug>
                <Switch>
                    <Route exact path={`/`} component={Home}/>
                    <Route exact path={`/therapy`} component={Therapy}/>
                    <Route exact path={`/contact`} component={Contact}/>
                </Switch>
            </Analytics>
       </Router>

    );
  }
}

export default App;
