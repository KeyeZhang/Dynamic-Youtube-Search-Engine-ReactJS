//module, class and state ??
//This file: declare a new component "SearchBar", and export it. In index.js, import it and render it to the html

import React, { Component } from 'react';
//{ Component }: just like const Component = React.Compoent

//1. class based component
//"extends": give it all functionality that React.Component has
class SearchBar extends Component {
  //initial state in a class based component
  constructor(props){
    super(props);

    this.state = {term: ''}; //intialize the state, only use "this.state" in ctor, everywhere else, we use this.setState({term: ....})
  }

  render() {  //render method(function) of the class: must have
    // return <input onChange = {event => console.log(event.target.value)} />;
    return (
    <div className = "search-bar">
    <input
    value = {this.state.term}
    onChange = {event => this.onInputChange(event.target.vale)}/>
    </div>
  );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }



  //Event Handling
  //Step 1.define a EventHandler
  // onInputChange(event){ //when the users' input change, run the code inside here
  //   console.log(event.target.value);
  // }
  //Step 2.pass the EventHandler to where you want it to be monitored . Here we put it above in the <input /> tag
}

//2. functional component
// const SearchBar = () =>{
//   return <input />;  //remember: the translation React.createElement would require us to import React
// };

export default SearchBar;
//every file importing searchBar will get the access to "SearchBar" component
