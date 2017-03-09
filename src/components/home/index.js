import { h, render, Component } from 'preact';
import style from './style';
import Menu from '../menu';
import Greeting from '../greeting';
import Weatherbar from '../weatherbar';
import Searchbox from '../searchbox';
import Weekly from '../weekly';
import Daily from '../daily';
import Dropdown from '../dropdown';
import $ from 'jquery';


export default class Home extends Component {

	constructor(props){
		super(props);
	}


	componentWillMount = () => {

		var url = "http://api.wunderground.com/api/7785277273971137/geolookup/astronomy/conditions/forecast/q/UK/London.json";
		//fetch API
		$.ajax({
		            url: url,
		            dataType: "jsonp",
		            success: this.parseResponse,
		            error: function(req, err) { console.log('API call failed ' + err); }
		})

		$.ajax({
		            url: "http://api.wunderground.com/api/7785277273971137/hourly/q/UK/London.json",
		            dataType: "jsonp",
		            success: this.parseResponseHourly,
		            error: function(req, err) { console.log('API call failed ' + err); }
		})

	}



	render() {
			//const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
			return (
					<div class ={ style.container }>

						<div class={style.home}>
							<div class = {style.overflow}>
								<ul>
									<li class = {style.screen1}>
										<div class = {style.header}>
											<Menu />
											<Searchbox />
										</div>
										<div class = {style.forecast}>

											<Greeting precipitation1 = {this.state.precipitation} city = {this.state.currentCity} tempF = {this.state.tempFa} tempC = {this.state.tempCel} iconURL = {this.state.icon} />

											<Weatherbar sunriseHr = {this.state.sunrise_hr} sunriseMin = {this.state.sunrise_min} sunsetHr = {this.state.sunset_hr} sunsetMin = {this.state.sunset_min} vis1 = {this.state.vis}  c = {this.state.cloud}/>

										</div>
									</li>

									<li class = {style.screen2}>
										<div class = {style.dailyweekly }>
											<div class = {style.daily}>
												<Daily />
											</div>
												<div class = {style.weekly}>
													<Weekly />
												</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

		);
	}

parseResponse = (parsed_json) => {
		var city = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var temp_f = parsed_json['current_observation']['temp_f'];
		var precip = parsed_json['current_observation']['precip_today_in'];


		console.log("Success");

		var rise_hr = parsed_json['sun_phase']['sunrise']['hour'];
		var rise_min = parsed_json['sun_phase']['sunrise']['minute'];
		var set_hr = parsed_json['sun_phase']['sunset']['hour'];
		var set_min = parsed_json['sun_phase']['sunset']['minute'];

		var visibility_km = parsed_json['current_observation']['visibility_km'];


		console.log("Today Weather: Success");

		// set the states for fields so they could be rendered later on with all the datas saved into states.
		this.setState({
			currentCity: city,
			tempCel: temp_c,
			tempFa: temp_f,
			precipitation : precip,
			sunrise_hr : rise_hr,
			sunrise_min : rise_min,
			sunset_hr : set_hr,
			sunset_min : set_min,

			vis : visibility_km


		});
}
	parseResponseHourly = (parsed_json) => {
		var c = parsed_json['hourly_forecast'][0]['sky'];
		console.log("Today Weather Houly: Success");

		this.setState({
				cloud: c

		})
	}





}
