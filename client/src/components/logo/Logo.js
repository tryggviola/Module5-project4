import { Link } from "react-router-dom";
import "./logo.scss";


import logo from "../../img/logo.svg";

export default function Logo() {
	return (
		<Link to="/">
			<img src={logo} alt="logo" />
		</Link>
	);
}
