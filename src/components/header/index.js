import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Weather App</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/sunshade">Sun Shade</Link>
					<Link href="/location">Location</Link>
					<Link href="/settings">Setting</Link>
				</nav>
			</header>
		);
	}
}
