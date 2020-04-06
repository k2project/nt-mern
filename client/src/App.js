import React, { Component } from 'react';
import './App.scss';
//list pages imports before router
import Home from './pages/Home/Home';
import Therapy from './pages/Therapy/Therapy';
import Contact from './pages/Contact/Contact';
import Resources from './pages/Resources/Resources';
import SkipToMainContentLink from './components/SkipToMainContentLink';
import Banner from './components/banner/Banner';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Google Anlitics: pages viewed
import Analytics from 'react-router-ga';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Analytics id='UA-127585560-1' debug>
                <SkipToMainContentLink />
                {/* <Banner /> */}
                <Switch>
                    <Route exact path={`/`} component={Home} />
                    <Route exact path={`/therapy`} component={Therapy} />
                    <Route exact path={`/contact`} component={Contact} />
                    <Route exact path={`/resources`} component={Resources} />
                    <Route component={Home} />
                </Switch>
            </Analytics>
        </Router>
    );
}

export default App;
