import React, { Component, PropTypes } from 'react'
import { Calender } from './calanderComponent'
import { LogViewer } from './logviewer'


export class DailyLog extends Component {
  constructor(props){
    super(props);
    console.log(this.props.updateCurrentDate);
    this.updateFood = this.updateFood.bind(this);
  }
  updateFood(data){
      console.log(data);
      this.props.updateCurrentDate(data.date);
  }
  addALog(date,entry){
    this.props.addLog(date,entry);
  }
  
  render(){
    const { logEntries,addLog,selectedDate,updateCurrentDate} = this.props;
    console.log(selectedDate.get('date'));
    return (
        <div className="row">
          
          <div className="col-md-4">
                <Calender dateClick={this.updateFood}/>
          </div>
          <div className="col-md-3">
            <div>{selectedDate.get('date').toDateString()}</div>
            <LogViewer addEntryFunction={(date,entry)=>this.addALog(date,entry)} />
          </div>
        </div>
    );
  }

}

