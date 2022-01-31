import { Link } from "react-router-dom";

import "./Header.scss";
import Logo from "../logo/Logo";
import { useStores } from "../../stores";

function Header() {
	const { userStore } = useStores();

	return (
		<header className="header">
			<Logo />
			{userStore.name ? (
				<Link to="/gallery">{userStore.name}</Link>
			) : (
				<Link to="/login">Login</Link>
			)}
		</header>
	);
}

export default Header;
