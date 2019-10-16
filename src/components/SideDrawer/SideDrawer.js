import React from 'react'
import './SideDrawer.css';


const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    let styles = {
        width: '100%',
        marginLeft: '-40px',
        position: 'fixed',
        bottom: '0'
    };
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <img src={require("./3.jpg")} alt="photos1" style={styles} />


            </ul>

        </nav>
    );
};

export default sideDrawer