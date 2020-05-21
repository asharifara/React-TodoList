import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import TodoItem from './components/TodoItem';
import todolistData from './todolistData';

class App extends React.Component
{
    constructor() {
        super();
        this.state = {
            title: "TODOs",
            todos: todolistData,
            remainedTodo:10,
            isLoading: true,
            character: {}
        }
    this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({isLoading:false})
        fetch("https://api.callfire.com/v2/texts?limit=50&offset=200")
            .then(response => response.json())
            .then(data => {
            this.setState({
                isLoading: false,
                character: data
            })
        });
    }

    handleChange(id)
    {
       this.setState(prevState => {
           const updatedTodos = prevState.todos.map( todo => { 
               if (todo.id === id){
                   todo.completed = !todo.completed;
               }
               return todo;
           });
           return {
               todos : updatedTodos
           }
       });
    }

    handleRemainedTodos()
    {
       this.setState(prevState => {
           const count = prevState.todos.map( todo => { 
               if (!todo.completed){
                   count +=1
               }
               return count;
           });
           return {
               remainedTodo : count
           }
       });
    }

    render() {
        let todoListComponent = this.state.todos.map((item) =>{
            return(
                <TodoItem isLoading={this.state.isLoading} 
                handleChange={this.handleChange} 
                key={item.id} todo_item = {{ id:item.id, text:item.text, completed:item.completed }} />
            )
        });

        return(
        <div>
        <Header />
        <MainContent /> 
            <div className="title"><h3>{this.state.title}({this.state.remainedTodo})</h3></div>
            <div className="todo-list">
                {todoListComponent}
            </div>
            <div>
                {this.state.character.email}
            </div>
        <Footer />
        </div>
        )
    }
}

export default App