import React, {Component} from 'react';

import Annonce from './Annonce';
import ImageUploader from 'react-images-upload';



class MBesoins extends Component{
    constructor(props){
        super(props);
        this.state={
            mesBesoins:[ 
                {      
                    "imagePath":"/assets/image1.jpg",
                    "title":"this is a title",
                    "numero":"0779089015",
                    "description":"This is a description"
                }
            ],
            pictures:[]
        };
        this.onDrop=this.onDrop.bind(this);
    }
    onDrop(picture){
        this.setState({
            pictures:this.state.pictures.concat(picture),
        })
    }
    render(){
        return(
            <div className="dbesoins">
                <h3><i className="fa fa-bolt fa-lg"></i>&nbsp;&nbsp;Vos derniers besoins</h3>
                <hr className="divider"></hr>
                <div className="annonces">      
                    {this.state.mesBesoins.map((annonce,index)=>(
                        <Annonce key={index} imagePath={annonce.imagePath} title={annonce.title} numero={annonce.numero} description={this.description}/>
                    ))}
                </div>
                <hr className="divider"></hr>
                <h3><i className="fa fa-plus"></i>&nbsp;&nbsp;Poster un nouveau besoin</h3>
                <div className="connexionc">
                <div className="header">
                    <h4 className="dialogTitle">Remplissez ce formulaire avec les informations relatives à votre besoin</h4>
                </div>
                <div className="body">
                    <form>
                        <div className="inputs">
                            <input id="titre" className="form-control" name="_titre"  required="required"  placeholder="Titre du besoin" onChange={this.handleChange} />
                        </div>
                        <div className="input">
                            <input id="numero" className="form-control" name="_numero"  required="required"  placeholder="Votre numéro" onChange={this.handleChange} />
                        </div>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Ajouter une photo de votre besoin'
                            onChange={this.onDrop}
                            withPreview={true}
                            singleImage={true}
                        />
                        <div className="row">
                        <p><button><i className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;Poster le besoin</button></p>
                        </div>
                        
                    </form>
                </div>
                <div className="footer">
                   
                </div>
                
            </div>


            </div>
        );
    };
}
export default MBesoins;