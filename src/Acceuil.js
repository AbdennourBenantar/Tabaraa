import React, {Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Annonce from './Annonce';
import 'react-awesome-slider/dist/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import Valeur from './Valeurs';


const AutoplaySlider = withAutoplay(AwesomeSlider);
export var annoncesList=[
    {
        "imagePath":"/assets/image1.jpg",
        "title":"this is a title",
        "numero":"0779089015",
        "description":"This is a description"
    },
    {
        "imagePath":"/assets/image3.jpg",
        "title":"this is a title",
        "numero":"0779089015",
        "description":"This is a description"
    },
    {
        "imagePath":"/assets/image2.jpg",
        "title":"this is a title",
        "numero":"0779089015",
        "description":"This is a description"
    },
    {
        "imagePath":"/assets/image1.jpg",
        "title":"this is a title",
        "numero":"0779089015",
        "description":"This is a description"
    },
    {
        "imagePath":"/assets/image3.jpg",
        "title":"this is a title",
        "numero":"0779089015",
        "description":"This is a description"
    },
];

class Acceuil extends Component{
    
    
    render(){
        
        return(
            <div className="container">
                <div className="carousel">
                    <AutoplaySlider className="carou" play={true} bullets={false} fillParent={true}>
                        <div data-src="/assets/image1.jpg" />
                        <div data-src="/assets/image2.jpg" />
                        <div data-src="/assets/image3.jpg" />
                    </AutoplaySlider>
                    <div className="top">
                        <h1>Ils sont déjà  0 à se rendre service gratuitement.</h1>  
                        <h1>Et si vous tentiez l'aventure ?</h1>
                        <div className="btn-row">
                            <button><i className="fa fa-hand-paper-o"></i>&nbsp;&nbsp;&nbsp;&nbsp;J'ai besoin d'aide</button>
                            <button><i className="fa fa-search"></i>&nbsp;&nbsp;&nbsp;&nbsp;Je propose mon aide</button>
                        </div>
                    </div>
                </div>
                <div>
                <h2>Découvrez nos 0 annonces</h2>
                </div>
                <div className="annonces">      
                    {annoncesList.map((annonce,index)=>(
                        <Annonce key={index} imagePath={annonce.imagePath} title={annonce.title} numero={annonce.numero} description={this.description}/>
                    ))}

                </div>
                <hr className="divider"></hr>
                <div>
                <h2>Nos Valeurs</h2>
                </div>
                <div className="valeurs">
                    <Valeur icon="fa fa-handshake-o fa-3x" valeur="Solidarité" detail="La solidarité, le partage et la bienveillance vous tiennent à coeur, nous aussi"/>
                    <Valeur icon="fa fa-lock fa-3x" valeur="Sécurité" detail="Tabaraa serein ! Tout est là pour garantir confiance et respect"/>
                    <Valeur icon="fa fa-heart fa-3x" valeur="Amour" detail="On le fait par amour, on adore voir les gens s'entre aider"/>
                    <Valeur icon="fa fa-bolt fa-3x" valeur="Efficacité" detail="Vous allez avoir vos besoins dans un minimum de temps, ne vous inquiétez surtout pas"/>
                </div>
            </div>
        );
    };
}
export default Acceuil;