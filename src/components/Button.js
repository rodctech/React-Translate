import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
    //static contextType = LanguageContext;  PROVIDER APPROACH
    // ^^Not needed when using a Consumer approach instead of contextType

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        //console.log(this.context);
       // old PROVIDER  const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return ( /// replaced with <LangCont.Consumer> {text}
            <button className={"ui button primary"}>
               <LanguageContext.Consumer>
                   {(value) => this.renderSubmit(value)}
               </LanguageContext.Consumer>
            </button>
        );
    }
}

//Can also add context Prop  =   Button.contextType = LanguageContext;

export default Button;