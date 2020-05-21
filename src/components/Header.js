import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

class Header extends React.Component
{
    componentDidMount(){
        console.log("header mounted!!! it means the compoent just born!")
    }

    render() {
        return(
            <div className="App-header">This is the HEADER</div>
        )
    }
}

export default Header