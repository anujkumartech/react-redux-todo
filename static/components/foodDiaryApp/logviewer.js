import React, { Component, PropTypes } from 'react'
import Input from '../core/inputCompoent'
import Button from '../core/buttonComponent'

export class LogViewer extends Component {
 constructor(props){
     super(props);
     this.state = {
         'entries':['apple','orange'],
         'newEntryName':'',
         'newEntryCalory':''
     }
     this.onSubmit = this.onSubmit.bind(this);
     this.addLogEntry = this.addLogEntry.bind(this);
     this.addNewItemName = this.addNewItemName.bind(this);
     this.addNewItemCalories = this.addNewItemCalories.bind(this);
 }
 addNewItemName(event){
     const input = event.target;
     const text = input.value;
     if(text.length > 0){
           this.setState({'newEntryName':text});
     }
 } 
  addNewItemCalories(event){
     const input = event.target;
     const text = input.value;
     if(isNaN(text)){
         alert("Please Enter Valid Number");
         input.value = '';
         return;
     }
     if(text.length > 0){
           this.setState({'newEntryCalory':text});
     }
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
addLogEntry(){
    if(!this.state.newEntryName || !this.state.newEntryCalory){
        alert("Please fill required details");
        return;
    }
    this.props.addEntryFunction(this.props.currentDate,this.state.newEntryName,this.state.newEntryCalory);
    this.setState({'newEntryCalory':'','newEntryName':''});
    document.getElementsByClassName("item-value")[0].value='';
    document.getElementsByClassName("calory-value")[0].value='';
}  
  render(){    
    return (
        <div>
            <div className="row no-margin margin-bottom-10">
                <div className="col-md-6 no-padding">
                    <Input classNameValue="form-control item-value no-margin" placeHolderValue="Add A New Log Entry" onChangeFunction={this.addNewItemName}/>
                </div>
                <div className="col-md-3 no-padding left-padding-10">
                    <Input classNameValue="form-control calory-value no-margin" placeHolderValue="Calories" onChangeFunction={this.addNewItemCalories}/>
                </div>
                <div className="col-md-3">
                    <Button classNameValue="btn btn-info margin-left-btn" clickFunction={this.addLogEntry} textVal="ADD Entry" />
                </div>
            </div>
            <div className="clearfix"></div>
            <ul className="list-group">
            {
                this.props.entries.size > 0 ? (<li className="list-group-item hidden-overflow"><span className="pull-left">Item</span><span className="pull-right">Calories</span></li>): null
            }

            {
                this.props.entries.map((entry) =>(
                    <li key={entry.get('id')} className="list-group-item hidden-overflow"><span className="pull-left">{entry.get('entry')}</span><span className="pull-right">{entry.get('caloryCount')}</span></li>
                ))
            }
            {
                this.props.entries.size === 0 ? (<li className="list-group-item"><div className="alert alert-warning"><strong>Warning!</strong> No Entries Found For selected Date</div></li>): null
            }
            </ul>
        </div>
    );
  }
}

