import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {annoncesList} from './Acceuil';
import Annonce from './Annonce'


class DBesoins extends Component{
    render(){
        return(
            <div className="dbesoins">
                <h3><i className="fa fa-bolt fa-lg"></i>&nbsp;&nbsp;Ils ont besoin d'un coup de main</h3>
                <hr className="divider"></hr>
                <div className="annonces">      
                    {annoncesList.map((annonce,index)=>(
                        <Annonce key={index} imagePath={annonce.imagePath} title={annonce.title} numero={annonce.numero} description={this.description}/>
                    ))}
                </div>


            </div>
        );
    };
}
export default DBesoins;