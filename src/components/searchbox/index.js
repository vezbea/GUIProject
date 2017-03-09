
  import { h, render, Component } from 'preact';
  import style from './style';
  import $ from 'jquery';

  export default class Searchbox extends Component {

    constructor(props){
        super(props);

    }


    getLondon = () => {
      var url = "http://api.wunderground.com/api/7785277273971137/geolookup/conditions/forecast/q/UK/London.json";
        $.ajax({
                url: url,
                dataType: "jsonp",
                success: this.parseResponse,
                error: function(req, err) { console.log('API call failed ' + err); }
      })
    }

    getSussex = () => {
    var url = "http://api.wunderground.com/api/7785277273971137/geolookup/conditions/forecast/q/UK/Sussex.json";
      $.ajax({
              url: url,
              dataType: "jsonp",
              success: this.parseResponse,
              error: function(req, err) { console.log('API call failed ' + err); }
    })
  }

    fetchLocation = () => {
      switch(true) {
        case 1: if (document.getElementById("search").value == 'London'){
        {this.getLondon()}
        }
        break;

        case 2: if (document.getElementById("search").value == 'Sussex'){
        {this.getSussex()}
        break;
        }
      }
       }


    render(){
        return (
            <div class = {style.search}>

                <input type="search" name = "search" placeholder="Search City"/>

            </div>
        )
    }

    parseResponse = (parsed_json) => {
      var city = parsed_json['current_observation']['display_location']['city'];
      var country = parsed_json['current_observation']['display_location']['country'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      var conditions = parsed_json['current_observation']['weather'];
      console.log("Success");
      // set the states for fields so they could be rendered later on with all the datas saved into states.
      this.setState({
        currentCity: city,
        currentCountry: country,
        temp: temp_c,
        cond: conditions
      });
   }
  }
