import './App.css';
import React, { Component } from "react";
import { Header, MainContent } from './components/common';


class App extends Component {
    render(){
        return (
            <div class="App">
                 <br />
                <Header />
                <MainContent />

                <MainContent />

                <MainContent />
                
            </div>
        );
    }
}

export default App;