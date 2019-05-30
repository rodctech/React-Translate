import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends Component {
    //static contextType = LanguageContext;  PROVIDER APPROACH
    // ^^Not needed when using a Consumer approach instead of contextType

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        //console.log(this.context);
        // old PROVIDER  const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return ( /// replaced with <LangCont.Consumer> {text}
            <ColorContext.Consumer>
                {(color) =>
                 this.renderButton(color)
                }
            </ColorContext.Consumer>
        );
    }
}

//Can also add context Prop  =   Button.contextType = LanguageContext;

export default Button;