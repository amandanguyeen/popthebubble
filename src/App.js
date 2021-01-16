import './App.css';
import React, { Component } from "react";
import { Header, MainContent } from './components/common';


class App extends Component {
    render(){
        return (
            <div class="App">
                <Header />
                <MainContent />
            </div>
        );
    }
}

export default App;