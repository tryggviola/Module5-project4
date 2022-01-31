import { useNavigate, Link } from "react-router-dom";

import Logo from "../../../../components/logo/Logo";
import { useStores } from "../../../../stores";
import "./Layout.scss";

export default function Layout({ children }) {
	const { userStore } = useStores();
	const navigate = useNavigate();

	const logout = () => {
		userStore.setUserName(null);
		localStorage.removeItem("blog-user");

		navigate("/");
	};
	return (
		<div className="layout">
			<div className="sidebar">
				<div className="sidebar__links">
					<Logo />
					<Link to="/gallery/blogs">Blogs</Link>
				</div>
				<div className="sidebar__user">
					<p>{userStore.name}</p>
					<button onClick={logout}>Logout</button>
				</div>
			</div>
			<div className="content">{children}</div>
		</div>
	);
}
