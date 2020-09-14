import React, {Component} from 'react';
import { createButton } from "react-social-login-buttons";
import { Link } from 'react-router-dom';

const config = {
    text: "Register with Facebook",
    icon: "facebook",
    iconFormat: name => `fa fa-${name}`,
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
  };

const MyFbRegisterButton= createButton(config);

const configg = {
    text: "Register with Google",
    icon: "google",
    iconFormat: name => `fa fa-${name}`,
    style: { background: "rgb(203, 63, 34) none repeat scroll 0% 0%" },
    activeStyle: { background: "rgb(170, 63, 34)" }
  };

const MyGoogleRegisterButton= createButton(configg);

const configgg = {
    text: "Register",
    icon: "check",
    iconFormat: name => `fa fa-${name}`,
    style: { background: "rgb(63, 203, 34) none repeat scroll 0% 0%" },
    activeStyle: { background: "rgb(63, 180, 34)" }
  };

const RegisterButton= createButton(configgg);

class Register extends Component{
    handleChange(event){
        return 0;
    }
    render(){
        return(
            <div className="container-row">
            <div className="connexion">
                <div className="header">
                    <h4 className="dialogTitle">M'inscrire</h4>
                </div>
                <div className="body">
                    <p className="center">En quelques secondes avec</p>
                    <div className="row">
                        <MyFbRegisterButton onClick={()=>alert("Hello")}/>
                        <MyGoogleRegisterButton onClick={()=>alert("hello google")}/>
                    </div>
                    <h2 className="center fancy">
                        <span>
                            Ou
                        </span>
                    </h2>
                    <form>
                        <div className="input">
                            <input id="prenom" className="form-control" name="_prenom"  required="required"  placeholder="Prénom *" onChange={this.handleChange} />
                        </div>
                        <div className="input">
                            <input id=",om" className="form-control" name="_nom"  required="required" placeholder="Nom *" onChange={this.handleChange} />
                        </div>
                        <div className="input">
                            <input id="username" className="form-control" name="_username"  required="required" type="email" placeholder="Adresse email *" onChange={this.handleChange} />
                        </div>
                        <div className="input">
                            <input id="exampleInputPassword" className="form-control" name="_password"  required="required" type="password" placeholder="Mot de passe *" onChange={this.handleChange} />
                        </div>
                        <div className="help">8 caractères minimum</div>
                        <div className="input">
                            <input id="code" className="form-control" name="_code"  required="required"  placeholder="Code postal *" onChange={this.handleChange} />
                        </div>
                        <h4 className="help right">* champs obligatoires</h4>
                        <div className="gap"></div>
                        <div className="checkbox">
                            <label>
                                <input id="agree" type="checkbox" name="_agree" />
                                &nbsp;En créant mon compte j'accepte les conditions générales d'utilisation et je certifie avoir plus de 12 ans. 
                            </label>
                        </div>
                        <div className="row">
                            <RegisterButton onClick={()=>alert("hello google")}/>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    Déja membre ? 
                    <Link to="/monCompte">
                    <a href="#"> Connectez-vous</a>
                    </Link>
                </div>
            </div>
            <div className="connexion">
                <div className="body center">
                    <h3>
                        Sur Tabaraa, on se rend service gratuitement.
                        <br/>
                        C'est simple et éfficace
                    </h3>
                    <h4>En m'inscrivant je peux :</h4>
                    <ul className="list-group">
                        <li className="item">
                            <i className="fa fa-users ">&nbsp;&nbsp;Contacter les personnes qui proposent ou demandent de l’aide</i>  
                        </li>
                        <li className="item">
                            <i className="fa fa-edit ">&nbsp;&nbsp;Poster mes propres annonces</i>  
                        </li>
                        <li className="item">
                            <i className="fa fa-map-marker ">&nbsp;&nbsp;&nbsp;Recevoir tous les 15 jours les dernières annonces près de chez moi</i>  
                        </li>
                    </ul>
                    <h2 id='titleh2'>Tabaraa, c'est quoi ?</h2>
                    <p id="para">Bienvenue chez Tabaraa, le meilleur endroit sur le net pour se donner un coup de pouce. Pas de rémunération, pas d’échange, pas d’engagement : sur Tabaraa chacun aide gratuitement quand il veut et quand il peut.
Tabaraa est un site d’entraide qui met en relation des personnes qui ont besoin d’aide (particuliers, associations, collectivités…) avec des personnes prêtes à les aider ponctuellement et gratuitement.
Sur Tabaraa, je peux demander de l’aide pour monter un meuble, tenir compagnie à mon voisin, aider mon enfant en maths, initier ma mère au web, nettoyer un espace vert, demander un médicament ,faire une collecte pour mon association ou bien proposer de faire des courses pour des personnes âgées.</p>
                    <div className="pic">
                        <img src="./assets/logo.png" width="100%"/>
                    </div>
                </div>
            </div>
            </div>
        );
    };
}
export default Register;