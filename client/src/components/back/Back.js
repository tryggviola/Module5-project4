import { useNavigate } from "react-router-dom";

import "./Back.scss";

export default function Back() {
	const navigate = useNavigate();

	return (
		<button className="back-button" onClick={() => navigate(-1)}>
			{"< Back"}
		</button>
	);
}
