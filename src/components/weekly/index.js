import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class Weekly extends Component {
    constructor(props){
        super(props);
    }

    parseWeeklyWeatherData = (parsed_json) => {

        var day1 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['weekday'];
        var day2 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['weekday'];
        var day3 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['date']['weekday'];
        var day4 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['date']['weekday'];
        var day5 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['date']['weekday'];
        var day6 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['date']['weekday'];
        var day7 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['date']['weekday'];

        var high1 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['celsius'];
        var high2 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['high']['celsius'];
        var high3 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['high']['celsius'];
        var high4 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['high']['celsius'];
        var high5 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['high']['celsius'];
        var high6 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['high']['celsius'];
        var high7 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['high']['celsius'];

        var low1 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['celsius'];
        var low2 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['low']['celsius'];
        var low3 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['low']['celsius'];
        var low4 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['low']['celsius'];
        var low5 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['low']['celsius'];
        var low6 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['low']['celsius'];
        var low7 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['low']['celsius'];

        var cond1 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['conditions'];
        var cond2 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['conditions'];
        var cond3 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['conditions'];
        var cond4 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['conditions'];
        var cond5 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['conditions'];
        var cond6 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['conditions'];
        var cond7 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['conditions'];

        var rain1 = parsed_json['forecast']['simpleforecast']['forecastday'][0]['pop'];
        var rain2 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['pop'];
        var rain3 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['pop'];
        var rain4 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['pop'];
        var rain5 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['pop'];
        var rain6 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['pop'];
        var rain7 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['pop'];

        console.log("Success");
        // set the states for fields so they could be rendered later on with all the datas saved into states.
        this.setState({
              d1 : day1,
              d2 : day2,
              d3 : day3,
              d4 : day4,
              d5 : day5,
              d6 : day6,
              d7 : day7,

              h1 : high1,
              h2 : high2,
              h3 : high3,
              h4 : high4,
              h5 : high5,
              h6 : high6,
              h7 : high7,

              l1 : low1,
              l2 : low2,
              l3 : low3,
              l4 : low4,
              l5 : low5,
              l6 : low6,
              l7 : low7,

              con1 : cond1,
              con2 : cond2,
              con3 : cond3,
              con4 : cond4,
              con5 : cond5,
              con6 : cond6,
              con7 : cond7,

              pop1 : rain1,
              pop2 : rain2,
              pop3 : rain3,
              pop4 : rain4,
              pop5 : rain5,
              pop6 : rain6,
              pop7 : rain7,
        });
    }

    componentWillMount = () => {
        var url = "http://api.wunderground.com/api/e882807beab49ff4/forecast10day/q/UK/London.json";
        //fetch API
        $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: this.parseWeeklyWeatherData,
              error: function(req, err) { console.log('API call failed ' + err); }
          })
  }

    render (){
        return (
            <div class = {style.weekly}>
                <table class = {style.weeklyTable}>
                    <tr>
                        <th></th>
                        <th><img src="https://cdn3.iconfinder.com/data/icons/weather-16/256/Hot_Day-512.png" class = {style.images}/></th>
                        <th>Condition</th>
                        <th><img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.images}/></th>
                    </tr>

                    <tr class = {style.topRow}>
                        <th>Today</th>
                        <td>{this.state.l1}°C - {this.state.h1}°C</td>
                        <td>{this.state.con1}</td>
                        <td> {this.state.pop1}% </td>
                    </tr>
                    <tr>
                        <th>{this.state.d2}</th>
                        <td>{this.state.l2}°C - {this.state.h2}°C</td>
                        <td>{this.state.con2}</td>
                        <td> {this.state.pop2}% </td>
                    </tr>
                    <tr>
                        <th>{this.state.d3}</th>
                        <td>{this.state.l3}°C - {this.state.h3}°C</td>
                        <td>{this.state.con3}</td>
                        <td> {this.state.pop3}% </td>
                    </tr>
                    <tr>
                        <th>{this.state.d4}</th>
                        <td>{this.state.l4}°C - {this.state.h4}°C</td>
                        <td>{this.state.con4}</td>
                        <td> {this.state.pop4}% </td>
                    </tr>
                    <tr>
                        <th>{this.state.d5}</th>
                        <td>{this.state.l5}°C - {this.state.h5}°C</td>
                        <td>{this.state.con5}</td>
                        <td> {this.state.pop5}% </td>
                    </tr>
                    <tr>
                        <th>{this.state.d6}</th>
                        <td>{this.state.l6}°C - {this.state.h6}°C</td>
                        <td>{this.state.con6}</td>
                        <td> {this.state.pop6}% </td>
                    </tr>
                    <tr>
                        <th>{this.state.d7}</th>
                        <td>{this.state.l7}°C - {this.state.h7}°C</td>
                        <td>{this.state.con7}</td>
                        <td> {this.state.pop7}% </td>
                    </tr>
                </table>
            </div>
        )
    }
}
