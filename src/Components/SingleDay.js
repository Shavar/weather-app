import React, { Component } from 'react';
import weatherIcons from '../icons.json';

class SingleDay extends Component {
    render() {
        var columnSize = 'col-xs-12 col-sm-6 col-md-4'; //Define Default Column Size
        var thisDate = new Date(); // Create Current Date Variable
        thisDate.setHours(-24); // Offset the Date
        thisDate.setHours(24*this.props.id); // Set the Correct Date

        var prefix = 'wi wi-';
        var code = this.props.day.weather[0].id;
        var icon = weatherIcons[code].icon;

        // If we are not in the ranges mentioned above, add a day/night prefix.
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }

        // Finally tack on the prefix.
        icon = prefix + icon;

        var weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";

        var month=new Array(12);
        month[0]="January";
        month[1]="February";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="August";
        month[8]="September";
        month[9]="October";
        month[10]="Novemnet";
        month[11]="December";

        if(this.props.id === 1){
            columnSize = 'col-xs-12';
        }

        return (
            <div className={columnSize}>
                <div className={'single-wrapper ' + weekday[thisDate.getDay()]}>
                        <div className="single-dates">
                            <span className="weekday">{weekday[thisDate.getDay()]}</span>
                            <span className="thedate">{month[thisDate.getMonth()]} {thisDate.getDate()}</span>
                        </div>


                        <div className="single-temperature">
                            <span className="temp-high">{this.props.day.temp['max'].toFixed()}°C</span>
                            <span className="temp-low"> / {this.props.day.temp['min'].toFixed()}°C</span>
                        </div>
                        <div className="single-icon">
                            <i className={icon}></i>
                        </div>
                        <div className="single-details">
                            <span className="overview">{this.props.day.weather[0].description}</span>
                            <span className="cloud">Cloud: {this.props.day.clouds.toFixed()} %</span>
                            <span className="pressure">Pressure: {this.props.day.pressure.toFixed()} hpa</span>
                        </div>

                </div>
            </div>
        );
    }
}

export default SingleDay;
