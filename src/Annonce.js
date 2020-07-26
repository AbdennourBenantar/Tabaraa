import React,{Component} from 'react';

export default class Annonce extends Component{

    render(){
        return (
            <div className="card">
                <img src={this.props.imagePath} alt={this.props.title}/>
                <h1>{this.props.title}</h1>
                <p className="num">{this.props.numero}</p>
                <p>{this.props.description}</p>
                <p><button><i className="fa fa-hand-paper-o"></i>&nbsp;&nbsp;&nbsp;&nbsp;Donner de l'aide</button></p>
            </div>
        );
    }
}