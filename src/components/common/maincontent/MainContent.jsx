import React, { Component } from "react";
import './MainContent.css'

class MainContent extends Component {
    render() {
        return(
            <section className = "mainContent">
                <LeftSection />
                <TitleSection />
                <RightSection />
            </section>
        );
    }
}

export default MainContent;


class LeftSection extends Component{
    render(){
        return(
            <section 
                className = "left-section" 
                style={{height: 180, width: 360, overflow: 'scroll'}}
            >
                <ol>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                 </ol>
            </section>
        );
    }
}

class TitleSection extends Component{
    render(){
        return(
            <section 
                className = "title-section" 
                style={{height: 190, width: 525, overflow: 'scroll'}}
            >
                <ol>
                Joe Biden should proceed to launch an investigation on questionable events during the election. 
                 </ol>
            </section>
        );
    }
}



class RightSection extends Component{
    render(){
        return(
            <section 
                className = "right-section" 
                style={{height: 180, width: 360, overflow: 'scroll'}}
            >
                <ol>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                 </ol>
            </section>
        );
    }
}
