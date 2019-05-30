import React from 'react';


export default React.createContext('english');

//We can share any Info we want inside the context  defValue,
//Like strings, objects, arrays, etc.

//Then link to our Component outside class with Comp.contextType = NameOfContextFile.
//or inside Class with Ex: static contextType = LanguageContext;
// This will give us access to (this.context).