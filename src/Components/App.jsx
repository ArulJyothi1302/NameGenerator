import React from 'react';
import './App.css'
import Header from './Header/Header';
import SearchBox from './SearchBox/SearchBox';
import Result from './Results/Result';
const name =  require('@rstacruz/startup-name-generator')
class App extends React.Component{
    constructor(props){
        super(props)
    this.state={
        name:"Name-Gen",
        expanded:true,
        suggestedName:[]
    }
}
    handleChange=(i)=>{
      name(i);
       this.setState({expanded:!i,
        suggestedName:i?name(i):[]})
      
    }

    render(){
    return (
        <div>
            <Header headerExpand={this.state.expanded} title={this.state.name}/>
              <SearchBox onInputChange={this.handleChange}/>
              <Result suggest={this.state.suggestedName}/>
        </div>
    )
}
}
export default App