import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
    static contextType = LanguageContext;

    render() {
        //console.log(this.context);
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <button className={"ui button primary"}>{text}</button>
        );
    }
}

//Can also add context Prop  =   Button.contextType = LanguageContext;

export default Button;