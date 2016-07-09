import React, { Component, PropTypes } from 'react'
import Input from '../core/inputCompoent'

export class LogViewer extends Component {
 constructor(props){
     super(props);
     this.state = {
         'entries':['apple','orange']
     }
     this.onSubmit = this.onSubmit.bind(this);
 } 
onSubmit(event){
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;
    if(enterPressed && validText) {      
        this.props.addEntryFunction(this.props.currentDate,text);
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
                this.props.entries.map((entry) =>(
                    <div key={entry.get('id')}>{entry.get('entry')}</div>
                ))
            }
            {
                this.props.entries.size === 0 ? (<div>No Entry Found</div>): null
            }
        </div>
    );
  }
}

