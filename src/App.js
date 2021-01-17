import './App.css';
import React, { Component } from "react";
import { Header, MainContent } from './components/common';


class App extends Component {
    render(){
        return (
            <div class="App">
                 <br />
                <Header />
                <CreateButton />
                <MainContent />

                <MainContent />

                <MainContent />

                <MainContent />

                <MainContent />
                
            </div>
        );
    }
}

export default App;


class CreateButton extends Component{
    render(){
        return(
            <button className="create-button">CREATE POST</button>
        );
    }
}