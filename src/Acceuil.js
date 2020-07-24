import React, {Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

class Acceuil extends Component{
    render(){
        return(
            <div>
                <div className="carousel">
                    <AutoplaySlider play={true} bullets={false} fillParent={true}>
                        <div data-src="/assets/image1.jpg" />
                        <div data-src="/assets/image2.jpg" />
                        <div data-src="/assets/image3.jpg" />
                    </AutoplaySlider>
                    <div className="top">
                        <h1>Ils sont déjà  0 à se rendre service gratuitement.</h1>  
                        <h1>Et si vous tentiez l'aventure ?</h1>
                        <div className="btn-row">
                            <button>J'ai besoin d'aide</button>
                            <button>Je propose mon aide</button>
                        </div>
                    </div>
                </div>
               
                
            </div>
        );
    };
}
export default Acceuil;