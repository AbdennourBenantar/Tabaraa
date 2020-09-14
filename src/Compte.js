import React, {Component} from 'react';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import {Link} from "react-router-dom";

class Compte extends Component{
    handleChange(event){
        return 0;
    }
    render(){
        return(
            <div className="connexionc">
                <div className="header">
                    <h4 className="dialogTitle">Me connecter</h4>
                </div>
                <div className="body">
                    <form>
                        <div className="inputs">
                            <input id="username" className="form-control" name="_username"  required="required" type="email" placeholder="Adresse email" onChange={this.handleChange} />
                        </div>
                        <div className="input">
                            <input id="exampleInputPassword" className="form-control" name="_password"  required="required" type="password" placeholder="Mot de passe" onChange={this.handleChange} />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input id="remember_me" type="checkbox" name="_remember_me" />
                                &nbsp;Se souvenir de moi
                            </label>
                        </div>
                        <div className="row">
                            <FacebookLoginButton onClick={()=>alert("Hello")}/>
                            <GoogleLoginButton onClick={()=>alert("hello google")}/>
                        </div>
                        <div className="pwdforget">
                            <a href="#">J'ai oublié mon mot de passe</a>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    Pas encore inscrit ?
                    <Link to="/register">
                    <a href="#"> Créer un compte</a>
                    </Link> 
                </div>
                
            </div>
        );
    };
}
export default Compte;