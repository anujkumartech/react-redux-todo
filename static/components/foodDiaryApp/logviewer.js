import React, { Component, PropTypes } from 'react'
import Input from '../core/inputCompoent'

export class LogViewer extends Component {
 constructor(props){
     super(props);
     this.state = {
         'entries':['apple','orange']
     }
     console.log(this.props.addEntryFunction);
     this.onSubmit = this.onSubmit.bind(this);
 } 
onSubmit(event){
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;
    if(enterPressed && validText) {      
    //this.props.addTodo(text);
    console.log(text);
    this.props.addEntryFunction(new Date(),text);
    input.value = '';
    }
}  
  
  render(){
    return (
        <div>
            <div>
            <Input classNameValue="form-control" placeHolderValue="Add A New Log Entry" keyDownFunction={this.onSubmit}/>
            </div>
            {
                this.state.entries.map((entry) =>(
                    <div>{entry}</div>
                ))
            }
            {
                this.state.entries.length === 0 ? (<div>No Entry Found</div>): null
            }
        </div>
    );
  }

}

