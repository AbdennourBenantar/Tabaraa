import React, {Component} from 'react';
import NavBar from './NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DBesoins from './dernierBesoins';
import MBesoins from './mesBesoins';
import Acceuil from './Acceuil';
import Compte from './Compte';
import Register from './Register';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <NavBar/>
                <div className="main">
                <Switch>
                       <Route exact path="/">
                            <Acceuil/>
                       </Route>
                       <Route exact path="/dernierBesoins">
                            <DBesoins/>
                       </Route>
                       <Route exact path="/mesBesoins">
                            <MBesoins/>
                       </Route>
                       <Route exact path="/monCompte">
                            <Compte />
                       </Route>
                       <Route exact path="/register">
                           <Register />
                       </Route>
                </Switch>
                </div> 
            </BrowserRouter>
        );
    };
}
export default App;