import React from 'react';
import {Link} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

class NavBar extends React.Component {
    render(){
        return (
            <div className="topnav">
                
                <div className="row1">
                    <img src="./assets/logo.png" width="150%"/>
                </div>
                <div className="row1">
                    <Link to='/'>
                    <a href="#"><i className="fa fa-home fa-lg"></i>&nbsp;&nbsp;Acceuil</a>
                    </Link>
                    <Link to='/dernierBesoins'>
                    <a href="#"><i className="fa fa-bolt fa-lg"></i>&nbsp;&nbsp;Derniers Besoins</a>
                    </Link>
                    <Link to='/mesBesoins'>
                    <a href="#"><i className="fa fa-cart-arrow-down fa-lg"></i>&nbsp;&nbsp;Mes Besoins</a>
                    </Link>
                    <Link to='/monCompte'>
                    <a href="#"><i className="fa fa-id-card fa-lg"></i>&nbsp;&nbsp;Mon Compte</a>
                    </Link>
                
                </div>
            </div>
        )
    }
}
export default NavBar;