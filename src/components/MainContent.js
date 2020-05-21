import React from 'react';
import TodoItem from './TodoItem';
import './../index.css';

class MainContent extends React.Component
{
    render() {
        const first_name = "AL";
        const last_name = "SH";
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        const styles = {
            fontWeight: "bold",
            backgroundColor: "#DDD",
            padding: 10,
            border: "1px solid #BBB"
        }

        if (hours < 12) {
            timeOfDay = "Morning"
            styles.color = "red";
        } else if (hours >=12 && hours < 17){
            timeOfDay = "Afternoon"
            styles.color = "#FF8c00";
        } else {
            timeOfDay = "Evening"
            styles.color = "brown";
        }

        return(
            <main className="App-content">
                <div style={ styles }>Good {timeOfDay}!, {` ${first_name} ${last_name} `}</div><br/>
            </main>
        )
    }
}

export default MainContent