import React, { Component } from 'react'
import MobileNav from '../Components/MobileNav/MobileNav';
import { BrowserRouter as Router, Route, Link, Redirect,withRouter,Switch } from "react-router-dom";
import Homepage from '../views/Homepage/Homepage';
import routes from '../routes/routes';
import Other from '../views/Other/Other';

class Main extends Component {
    getRoutes = routes => {
        return routes.map((prop, key) => {
        //   if (prop.layout === "/admin") {
            return (
              <Route
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
        //   } else {
        //     return null;
        //   }
        });
    };
    render() {
        return (
            <div>
                <Router>
                    <MobileNav/>
                    <Switch>{this.getRoutes(routes)}</Switch>
                </Router>
               
            </div>
        )
    }
}

export default Main