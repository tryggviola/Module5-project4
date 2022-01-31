import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import { useStores } from "../../stores";

import "./Login.scss";


export default function Login() {
	const { userStore } = useStores();
	const navigate = useNavigate();
	const [user, setUser] = useState();

	const authenticate = () => {
		userStore.setUserName(user);
		localStorage.setItem("blog-user", user);

		navigate("/gallery");
	};

	return (
		<div>
			<Header />
			<div className="loginbox">
        <label htmlFor="username">Username</label>
				<input id="username" value={user || ""} onChange={(e) => setUser(e.target.value)} />
				<button className="save-button" onClick={authenticate}>
					Login
				</button>
			</div>
		</div>
	);
}
