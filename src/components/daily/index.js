import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class Daily extends Component {
    constructor(props){
        super(props);
      //  this.parseHourlyWeatherData();
    }


    parseHourlyWeatherData = (parsed_json) => {

        var hr1 = parsed_json['hourly_forecast'][0]['FCTTIME']['hour_padded'];
        var hr2 = parsed_json['hourly_forecast'][1]['FCTTIME']['hour_padded'];
        var hr3 = parsed_json['hourly_forecast'][2]['FCTTIME']['hour_padded'];
        var hr4 = parsed_json['hourly_forecast'][3]['FCTTIME']['hour_padded'];
        var hr5 = parsed_json['hourly_forecast'][4]['FCTTIME']['hour_padded'];
        var hr6 = parsed_json['hourly_forecast'][5]['FCTTIME']['hour_padded'];
        var hr7 = parsed_json['hourly_forecast'][6]['FCTTIME']['hour_padded'];

        var cover1 = parsed_json['hourly_forecast'][0]['sky'];
        var cover2 = parsed_json['hourly_forecast'][1]['sky'];
        var cover3 = parsed_json['hourly_forecast'][2]['sky'];
        var cover4 = parsed_json['hourly_forecast'][3]['sky'];
        var cover5 = parsed_json['hourly_forecast'][4]['sky'];
        var cover6 = parsed_json['hourly_forecast'][5]['sky'];
        var cover7 = parsed_json['hourly_forecast'][6]['sky'];

        var rain1 = parsed_json['hourly_forecast'][0]['pop'];
        var rain2 = parsed_json['hourly_forecast'][1]['pop'];
        var rain3 = parsed_json['hourly_forecast'][2]['pop'];
        var rain4 = parsed_json['hourly_forecast'][3]['pop'];
        var rain5 = parsed_json['hourly_forecast'][4]['pop'];
        var rain6 = parsed_json['hourly_forecast'][5]['pop'];
        var rain7 = parsed_json['hourly_forecast'][6]['pop'];



    		console.log("Success");
    		// set the states for fields so they could be rendered later on with all the datas saved into states.
    		this.setState({
    					hour1 : hr1,
              hour2 : hr2,
              hour3 : hr3,
              hour4 : hr4,
              hour5 : hr5,
              hour6 : hr6,
              hour7 : hr7,

              cloud1 : cover1,
              cloud2 : cover2,
              cloud3 : cover3,
              cloud4 : cover4,
              cloud5 : cover5,
              cloud6 : cover6,
              cloud7 : cover7,

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
        var url = "http://api.wunderground.com/api/e882807beab49ff4/hourly/q/UK/London.json";
        //fetch API
        $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: this.parseHourlyWeatherData,
              error: function(req, err) { console.log('API call failed ' + err); }
          })
  }

    render (){
        return (
            <div class = {style.daily}>
            <table class = {style.dailyTable}>
                <tr>
                    <td><img src="https://cdn0.iconfinder.com/data/icons/feather/96/clock-128.png" class = {style.cloud}/></td>

                    <th> {this.state.hour1}:00 </th>
                    <th> {this.state.hour2}:00 </th>
                    <th> {this.state.hour3}:00 </th>
                    <th> {this.state.hour4}:00 </th>
                    <th> {this.state.hour5}:00 </th>
                    <th> {this.state.hour6}:00 </th>
                    <th> {this.state.hour7}:00 </th>
                </tr>
                <tr>

                

                    <td><img src="http://simpleicon.com/wp-content/uploads/cloud-10.png" class = {style.cloud}/></td>
                    <td> {this.state.cloud1}% </td>
                    <td> {this.state.cloud2}% </td>
                    <td> {this.state.cloud3}% </td>
                    <td> {this.state.cloud4}% </td>
                    <td> {this.state.cloud5}% </td>
                    <td> {this.state.cloud6}% </td>
                    <td> {this.state.cloud7}% </td>
                </tr>
                <tr>
                    <td></td>
                    <td> {this.state.pop1>=50 && <img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.imagesD}/>} </td>
                    <td> {this.state.pop2>=50 && <img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.imagesD}/>} </td>
                    <td> {this.state.pop3>=50 && <img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.imagesD}/>} </td>
                    <td> {this.state.pop4>=50 && <img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.imagesD}/>} </td>
                    <td> {this.state.pop5>=50 && <img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.imagesD}/>} </td>
                    <td> {this.state.pop6>=50 && <img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.imagesD}/>} </td>
                    <td> {this.state.pop7>=50 && <img src="http://www.morningrefresh.com/images/dynamic/201411/1417016079D2x.png" class = {style.imagesD}/>} </td>

                </tr>
            </table>
            </div>
        )
    }
}
