import React, { Component } from 'react';
import $ from 'jquery';
import Days from './Components/Days';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons-master/css/weather-icons.min.css';
import './style.css';

class App extends Component {
    state = {
        location: '',
        city: '',
        cityid: '',
        country: '',
        data: {},
        days: []
    }

    fetchData = (evt) => {
        evt.preventDefault();   //Prevent the Browser from Refreshing
        var location = encodeURIComponent(this.state.location); //Get the Submitted Location


        if(location) {  //If a Location was not entered, do nothing.
            var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
            var urlSuffix = '&units=metric&cnt=7&appid=53ec7696670a30efac68f2323f1f97f6';
            var fullurl = urlPrefix + location + urlSuffix;

            var self = this;

            //Ajax request to URL to obatin weather data
            $.ajax({
              url: fullurl,
              dataType:'jsonp',
              cache: false,
              success: function(data){
                  self.setState({
                      data: data,
                      city: data.city.name,
                      cityid: data.city.id,
                      country: data.city.country,
                      days: data.list
                  });
              }
            });
        }
    };

    //If location changed, update location in state
    changeLocation = (evt) => {
        this.setState({
            location: evt.target.value
        });
    };

    // Render the application
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title">7 Day Forecast</div>
                        <div className="instruction">Enter the Name of a City to display its forecast.</div>
                        <form onSubmit={this.fetchData}>
                            <input placeholder="City, Country" type="text"  value={this.state.location} onChange={this.changeLocation} />
                            <input type="submit" value="Show Forecast" />
                        </form>
                    </div>
                </div>

                {(this.state.data.list) ? (
                    <div className="row">
                        <div className="col-sm-12">
                            <span className="city">This is what the weather looks in <strong>{this.state.city}, {this.state.country}</strong> for the next 7 Days.</span>
                            <Days days={this.state.days} />
                        </div>
                        <div className="copyright"><a href={'https://openweathermap.org/city/' + this.state.cityid} target="_blank">Data Obtained from OpenWeaterMap</a></div>
                    </div>

                ):null}
        </div>
        );
    }
}

export default App;
