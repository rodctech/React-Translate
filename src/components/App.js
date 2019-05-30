import React, {Component} from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({language})
    };

    render() {
        return (
            <div className={"ui container"}>
                <div>
                    Select language:
                    <i className={"flag us"}
                       onClick={() => this.onLanguageChange('english')}
                    />
                    <i className={"flag nl"}
                       onClick={() => this.onLanguageChange('dutch')}
                    />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;

{/* Wrapping with Provider creates a branch/pipeline with that default value
WE DONT ALWAYS USE THIS.STATE for def value, it can be a prop or harcoded

<LanguageContext.Provider value={"english"}>
    <UserCreate />
</LanguageContext.Provider>

<UserCreate/>*/}
