import React, { Component } from 'react'
import MobileNav from '../Components/MobileNav/MobileNav';
import { HashRouter  as Router, Route, Link, Redirect,withRouter,Switch } from "react-router-dom";
import Homepage from '../views/Homepage/Homepage';
import routes from '../routes/routes';
import Other from '../views/Other/Other';
import TopNav from '../Components/TopNav/TopNav';

class Main extends Component {
    getRoutes = routes => {
        return routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
        });
    };
    render() {
        return (
            <div>
                <Router>
                    {/* <MobileNav/> */}
                    <TopNav/>
                    <Switch>{this.getRoutes(routes)}</Switch>
                </Router>
               
            </div>
        )
    }
}

export default Main