import React from 'react';
import './App.css'
import Header from './Header/Header';
import SearchBox from './SearchBox/SearchBox';
class App extends React.Component{
    state={
        name:"Name-Gen",
        expanded:true
    }
    handleChange=(i)=>{
       this.setState({expanded:!(i)})
      
    }
    render(){
    return (
        <div>
            <Header headerExpand={this.state.expanded} title={this.state.name}/>
              <SearchBox onInputChange={this.handleChange}/>
        </div>
    )
}
}
export default App