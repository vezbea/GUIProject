import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class Weatherbar extends Component {
    constructor(props){
        super(props);

    }




    render(){
        return(
            <div class = {style.todayWeather}>
                <table>



                    <tr>
                        <div class = "sunrise">
                            <td><img src = "../../assets/icons/png/sunrise.png" style="width:50px;height:50px"/></td>
                            <td><p>SUNRISE: </p></td>
                            <td>{this.props.sunriseHr}:{this.props.sunriseMin}</td>
                        </div>
                    </tr>



                    <tr>
                        <div class = "sunset">
                            <td><img src = "../../assets/icons/png/sunset-1.png" style="width:50px;height:50px"/></td>
                            <td><p>SUNSET: </p></td>
                            <td>{this.props.sunsetHr}:{this.props.sunsetMin}</td>
                        </div>
                    </tr>



                    <tr>
                        <div class = "visibility">
                            <td><img src = "../../assets/icons/png/visibility.png" style="width:50px;height:50px"/></td>
                            <td><p>VISIBILITY: </p></td>
                            <td>{this.props.vis1} km</td>
                        </div>
                    </tr>

                    <tr>
                    <div class = "cloudcover">
                        <td><img src = "../../assets/icons/png/clouds.png" style="width:50px;height:50px"/></td>
                        <td><p>CLOUD COVER: </p></td>
                        <td><span>{this.props.c} % </span></td>
                    </div>
                    </tr>
                </table>
            </div>
        )
    }
}
