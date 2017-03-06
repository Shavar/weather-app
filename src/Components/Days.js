import React, { Component } from 'react';
import SingleDay from './SingleDay';

class Days extends Component {
    render() {
        let singleDays;
        var number = 0; // Used to ensure a Unique Key is Passed & Counter
        var pressure = 0; // Varaible to Tally Daily Pressure
        if(this.props.days){
            singleDays = this.props.days.map(day => {
                number++;
                pressure += day.pressure;
                return (
                    // Create Single Day Object
                    <SingleDay key={number} id={number} day={day}/>
                );
            });
            var averagepressure = (pressure/number).toFixed();
        }

        return (
            <div className="row">
                <div>The Average Pressure is: <strong>{averagepressure}</strong> hpa</div>
                {singleDays}
            </div>
        );
    }
}

export default Days;
