import {DailyLogComponent} from './foodDiaryApp/dailyLogComponentContainer'
import { Header } from './headerComponent'
import React, { Component, PropTypes } from 'react'


export class FoodDairyApp extends Component {
    render(){
        return(
         <div> 
            <Header activeLink="foodDiary"/>
            <div className="col-md-9">
                <DailyLogComponent />
            </div>             
          </div>
        );
    }
}
