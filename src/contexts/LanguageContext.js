import React, {Component} from 'react';

const Context = React.createContext('english');
//NOTE Context here ^^ with CAPITAL 'C' because it is a Component we created ourselves,
//and it will to be used below as <Context.Provider>  must be Capital

//We can share any Info we want inside the context  defValue,
//Like strings, objects, arrays, etc.

//Then link to our Component outside class with Comp.contextType = NameOfContextFile.
//or inside Class with Ex: static contextType = LanguageContext;
// This will give us access to (this.context)




export class LanguageStore extends Component {
    state = {language: 'english'};

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange:this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;

//We can now import our renamed:
// import Context  as Context or rename back to LanguageContext and
// import {LanguageStore}