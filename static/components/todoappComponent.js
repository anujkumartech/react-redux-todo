import { TodoList } from './todoApp/todoListConnector'
import { FilterLink } from './todoApp/filterLinkConnector'
import {DailyLogComponent} from './foodDiaryApp/dailyLogComponentContainer'
import React, { Component, PropTypes } from 'react'
import {Header} from './headerComponent'


export class TodoApp extends Component {
    render(){
        return(
            <div> 
                <Header activeLink="todos"/>
                <div className="col-md-9">
                    <FilterLink />
                    <TodoList />   
                </div>             
            </div>
        );
    }
}
