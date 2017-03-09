import style from './style';
import { h, render, Component } from 'preact';


export default class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {greeting : this.props.precipitation > 0 ? "STAY DRY!":"Today's weather"};
        /*this.state = {isCelsius : true};
        this.state = {temp : this.props.temC};*/
    }

    handleClick=()=>{

        console.log("clicked");

    };

    render() {

        return (

                <div class = {style.floatshadow}>

                    <p>{this.state.greeting}</p>

                    <div class = {style.city}>{this.props.city}</div>
                    <div class = {style.temp} ><a href="#" onClick = {this.handleClick}>{this.props.tempC}</a>°C</div>
                    <div class = {style.sunny}> </div>
                </div>

        );
      }
}
