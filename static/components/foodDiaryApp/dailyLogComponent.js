import React, { Component, PropTypes } from 'react'
import { Calender } from './calanderComponent'
import { LogViewer } from './logviewer'


export class DailyLog extends Component {
  constructor(props){
    super(props);
    //this.props.addLog(new Date(),"apple");
  }
  updateFood(data){
      console.log(data);
  }
  addALog(date,entry){
    console.log(date);
    console.log(entry);
    this.props.addLog(date,entry);
  }
  
  render(){
    const { logEntries,addLog} = this.props;
    console.log(logEntries);
    return (
        <div className="row">
          <div className="col-md-4">
                <Calender dateClick={this.updateFood}/>
          </div>
          <div className="col-md-3">
            <LogViewer addEntryFunction={(date,entry)=>this.addALog(date,entry)} />
          </div>
        </div>
    );
  }

}

