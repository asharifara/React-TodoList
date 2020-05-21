import React from 'react';
import ReactDOM from 'react-dom'
import './../index.css';

class Footer extends React.Component
{
    componentDidMount(){
        console.log("footer mounted!!! it means the compoent just born!")
    }

    render() {
        return(
            <footer className="App-footer">  Developed by AL@2020 </footer>
        )
    }
}
export default Footer