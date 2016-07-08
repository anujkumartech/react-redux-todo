import React, { Component, PropTypes } from 'react'
const uid = () => Math.random().toString(5).slice(3);

export class Calender extends Component {
    constructor(props) {
        super(props);
        this.monthMap={
            'JAN':0,
            'FEB':1,
            'MAR':2,
            'APRL':3,
            'MAY':4,
            'JUN':5,
            'JULY':6,
            'AUG':7,
            'SEP':8,
            'OCT':9,
            'NOV':10,
            'DEC':11
        }
       this.state ={
           'selectedMonth' : new Date().getMonth(),
           'selectedYear': new Date().getFullYear()
        };
        this.executeUserevent = this.executeUserevent.bind(this);
        console.log(props);
    };
    getSelectedMonthName(val){
        let month = '';
        for(let x in this.monthMap){
            if(this.monthMap[x] == val){
                month = x;
                break;
            }
        }
        return month;
    };
    generateDateArr(){
        let currentDate,month;
        currentDate = new Date(this.state.selectedYear,this.state.selectedMonth,1);       
        const currDay =  currentDate.getDay();
        let DateArr=[currentDate];
        let dayIncrementer = 1;
        
        for(let i=currDay-1;i >=0;i--){
            const tempDate= new Date(this.state.selectedYear,this.state.selectedMonth,1);
            tempDate.setDate(currentDate.getDate() - dayIncrementer);
            dayIncrementer++;
            DateArr.unshift(tempDate);
        }
        dayIncrementer = 1;
        for(let i= currDay + 1;i<=6;i++){
            const tempDate= new Date(this.state.selectedYear,this.state.selectedMonth,1);      
            tempDate.setDate(currentDate.getDate() + dayIncrementer);
            dayIncrementer++;
            DateArr.push(tempDate);         
        }
        let masterDateArr= [DateArr];
        let pushNextDate = true;
        let nextDateConst =1;
        while(pushNextDate){
            let nextDateArr= [];
            nextDateConst = 1;
            let lastDateArr = masterDateArr[masterDateArr.length-1];
            if(lastDateArr[lastDateArr.length-1].getMonth() > this.state.selectedMonth || lastDateArr[lastDateArr.length-1].getFullYear() > this.state.selectedYear){
                 pushNextDate = false;
                 break;
            }
            DateArr.map( date =>{
                let nextDate = new Date(this.state.selectedYear,this.state.selectedMonth,1);
                nextDate.setDate(lastDateArr[lastDateArr.length-1].getDate() + nextDateConst);
                nextDateConst++;
                nextDateArr.push(nextDate);
            });
            masterDateArr.push(nextDateArr);
        }
        return masterDateArr;
    }
    updateSelectedMonth(flag){
        if(flag){
           if(this.state.selectedMonth === 11){
              this.setState({selectedMonth: 0,selectedYear: this.state.selectedYear+1}) ; 
           }else{
              this.setState({selectedMonth: this.state.selectedMonth+1}) ;
           }           
        }else{
         if(this.state.selectedMonth === 0){
              this.setState({selectedMonth: 11,selectedYear: this.state.selectedYear-1}) ; 
           }else{
              this.setState({selectedMonth: this.state.selectedMonth-1}) ;
           }           
        }   
    }
    updateSelectedYear(flag){
        if(flag){
           this.setState({selectedYear: this.state.selectedYear+1}) ;
        }else{
           this.setState({selectedYear: this.state.selectedYear-1}) ;
        }   
    }
    generateData(dateArrs){
        let dateMap =[];
        dateArrs.map((dateArr) =>{
            const obj = {'key': uid(),'dates':[]};
            dateArr.map((d) => {
                var dateObj={'key': uid(),'date':d,'payload':{}};
                obj.dates.push(dateObj);
            })
            dateMap.push(obj);
        });        
        return dateMap;
    }
    executeUserevent(d){
        if(this.props.dateClick !== undefined){
           this.props.dateClick(d); 
        }
    }
    render(){
        const allDates= this.generateData(this.generateDateArr());
        return(
            <div>
                <div className="change-wrapper">
                    <div className="pull-left">
                        <span className="left-arrow" onClick={() => this.updateSelectedMonth(false)}>{'<'}</span>
                        <span>{this.getSelectedMonthName(this.state.selectedMonth)}</span>
                        <span className="right-arrow" onClick={() => this.updateSelectedMonth(true)}>{'>'}</span>
                    </div> 
                    <div className="pull-right">
                        <span className="left-arrow" onClick={() => this.updateSelectedYear(false)}>{'<'}</span>
                        <span>{this.state.selectedYear}</span>
                        <span className="right-arrow" onClick={() => this.updateSelectedYear(true)}>{'>'}</span>
                    </div>  
                </div>                      
                <table className="table table-inverse table-backround">
                    <thead>
                        <tr className="table-header">
                        <th>SUN</th>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDates.map( dateArr =>(
                                <tr key={dateArr.key}> 
                                    { dateArr.dates.map(d =>(
                                        <td onClick = {(e) => this.executeUserevent(d)} className={d.date.getMonth() === this.state.selectedMonth  ? d.date.getDate() === new Date().getDate() ? 'current-month curent-day': 'current-month':'prev-month'} key={d.key}>{d.date.getDate()}</td>
                                    ))}                   
                                </tr>
                            ))
                        }                   
                    </tbody>
                </table>
            </div> 
        );
    }
}

