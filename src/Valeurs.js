import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Valeur extends Component{
    render(){
        return(
            <div className="cardv">
                <i className={this.props.icon}  ></i>
                <h2>{this.props.valeur}</h2>
                <p>{this.props.detail}</p>
            </div>
        );
    }
}