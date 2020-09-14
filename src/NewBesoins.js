import React from 'react';

export default class CCard extends React.Component{
    render(){
        return <div className="ccard">
            <button><i className="fa fa-add"></i></button>
            <p><button><i className="fa fa-hand-paper-o"></i>&nbsp;&nbsp;&nbsp;&nbsp;Donner de l'aide</button></p>
        </div>
    }
}