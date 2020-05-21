import React from 'react';
import './../index.css';

class TodoItem extends React.Component {
 
    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps + "it fires when it components received anything from its parent")
    }

    render() {
        return (
            this.props.isLoading ? <h5> Loading ... </h5> :
            <div className="todo-item">
                <input
                    onChange={ () => this.props.handleChange(this.props.todo_item.id)}
                    disabled={this.props.todo_item.completed} 
                    type="checkbox"
                    name={this.props.todo_item.id} 
                    id={this.props.todo_item.id} 
                />
                {this.props.todo_item.id ? this.props.todo_item.id : "none"}-
                <label
                    style={{textDecoration: this.props.todo_item.completed && "line-through" }} 
                    htmlFor={this.props.todo_item.id}
                > 
                 {this.props.todo_item.text}
                </label>
            </div>
        )
    }
}

export default TodoItem