import React, { Component } from 'react'

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state={
            task:""       
        }
    this.handleChange=this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                type="text"
                placeholder="new task"
                id="task"
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
    }
}

export default NewTodoForm;