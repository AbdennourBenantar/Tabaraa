import React from 'react';
import {Link} from "react-router-dom";
class NavBar extends React.Component {
    render(){
        return (
            <div className="topnav">
                
                <div className="row1">
                    <img src="./assets/logo.png" width="150%"/>
                </div>
                <div className="row1">
                    <Link to='/'>
                    <a href="#">Acceuil</a>
                    </Link>
                    <Link to='/dernierBesoins'>
                    <a href="#">Derniers Besoins</a>
                    </Link>
                    <Link to='/mesBesoins'>
                    <a href="#">Mes Besoins</a>
                    </Link>
                    <Link to='/monCompte'>
                    <a href="#">Mon Compte</a>
                    </Link>
                
                </div>
            </div>
        )
    }
}
export default NavBar;