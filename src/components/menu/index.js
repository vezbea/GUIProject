import style from './style';
import { h, render, Component } from 'preact';

export default class Menu extends Component{

    constructor(props){
        super(props);

		// button display state
		this.setState({ display: true });
    }

    componentWillMount = () => {
        const script = document.createElement("script");

        script.src = "https://code.jquery.com/jquery-2.2.4.min.js";
        script.async = true;

        script.addEventListener('load', function (e) {
            $(function(){
                console.log('content loaded');


                $('#sunrise').click(function(){
                    toggleVisibility('.sunrise');
                });
                $('#sunset').click(function(){
                    toggleVisibility('.sunset');
                });
                $('#visibility').click(function(){
                    toggleVisibility('.visibility');
                });
                $('#cloudcover').click(function(){
                    toggleVisibility('.cloudcover');
                });

                function toggleVisibility(cName){
                    if (!$(cName).hasClass('hidden')) {
                        $(cName).addClass('hidden');
                        $(cName).css('visibility','hidden');
                    }
                    else {
                        $(cName).removeClass('hidden');
                        $(cName).css('visibility','visible');
                    }
                }






            });
        }, false);


        document.body.appendChild(script);
}


    render(){


        return (
            <div class = { style.menu }>
                <span >
                    <div class={style.menuline}></div>
                    <div class={style.menuline}></div>
                    <div class={style.menuline}></div>
                </span>

                <div class= {style.dropdownContent}>

                    <p id="sunrise">SUNRISE</p>
                    <p id="sunset">SUNSET</p>
                    <p id="visibility">VISIBIITY</p>
                    <p id="cloudcover">CLOUD COVER</p>

                </div>

            </div>



        )
    }


}
