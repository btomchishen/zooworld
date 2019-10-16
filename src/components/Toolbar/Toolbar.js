import React from 'react'
import './Toolbar.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Products from './../Pages/Products/Products';
import Users from './../Pages/Users/Users';



const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <Router>
                        <Link to="/products"><li><a href="/">Products</a></li></Link>
                        <Link to="/users"><li><a href="/">Users</a></li></Link>
                    <Switch>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch>
                    </Router>

                </ul>
            </div>
        </nav>
    </header >
);

export default toolbar