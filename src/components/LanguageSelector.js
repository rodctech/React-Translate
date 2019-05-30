import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';


class LanguageSelector extends Component {
    static contextType = LanguageContext;  //Hooks up LangSelect to LangContext

    render() {
       // console.log(this.context);
        return (
            <div>
                Select language:
                <i className={"flag us"}
                   onClick={() => this.context.onLanguageChange('english')}
                />
                <i className={"flag nl"}
                   onClick={() => this.context.onLanguageChange('dutch')}
                />
            </div>
        );
    }
}

export default LanguageSelector;