import React, { Component, PropTypes } from 'react'
import { Calender } from './calanderComponent'


export class DailyLog extends Component {
  updateFood(data){
        console.log(data);
  }
  
  render(){
    return (
        <div className="row">
          <div className="col-md-6">
                <Calender dateClick={this.updateFood}/>
          </div>
        </div>
    );
  }

}

