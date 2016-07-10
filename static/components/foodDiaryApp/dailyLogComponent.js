import React, { Component, PropTypes } from 'react'
import { Calender } from './calanderComponent'
import { LogViewer } from './logviewer'
import {List}  from 'immutable';


export class DailyLog extends Component {
  constructor(props){
    super(props);
    this.updateFood = this.updateFood.bind(this);
    this.state ={
           'currentDay' : this.props.selectedDate.get('date').toDateString()
    };
  }
  updateFood(data){
      this.props.updateCurrentDate(data.date);
  }
  addALog(date,entry){
    this.props.addLog(date,entry);
  }
  render(){
    const { logEntries,addLog,selectedDate,updateCurrentDate} = this.props;
    const filteredEntries = logEntries.filter(entry => entry.get('date').toDateString() == selectedDate.get('date').toDateString());
    return (
          <div className="row">          
            <div className="col-md-4">
                  <Calender dateClick={this.updateFood}/>
            </div>
            <div className="col-md-3">
            <div className="list-group">
              <span href="#" className="list-group-item active">{selectedDate.get('date').toDateString()}</span>
            </div>
            <LogViewer entries={filteredEntries} currentDate={selectedDate.get('date')} addEntryFunction={(date,entry)=>this.addALog(date,entry)} />
            </div>
          </div>
      );
    }

}

