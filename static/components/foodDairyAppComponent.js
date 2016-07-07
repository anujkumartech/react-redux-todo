import { DailyLogComponent } from './foodDiaryApp/dailyLogComponentContainer'
import { Calender } from './foodDiaryApp/calanderComponent'
import { Header } from './headerComponent'
import React, { Component, PropTypes } from 'react'


export class FoodDairyApp extends Component {
    render(){
        return(
         <div> 
            <Header activeLink="foodDiary"/>
            <div className="col-md-6">
                <DailyLogComponent />
                <Calender />
                
            </div>
            <div className="col-md-3">
            </div>           
          </div>
        );
    }
}
