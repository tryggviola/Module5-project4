import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Back from "../../components/back/Back";

import Header from "../../components/header/Header";
import Markdown from "../../components/markdown/Markdown";
import { useStores } from "../../stores";

import "./Blog.scss";

export default function Blog() {
	const params = useParams();
	const navigate = useNavigate();
	const { userStore } = useStores();

	const [blog, setBlog] = useState({});
	useEffect(() => {
		const getBlog = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_API_SERVER}/blogs/${params.id}`
			);
			const data = await response.json();

			setBlog(data);
		};

		getBlog();
	}, []);

	const options = { year: "numeric", month: "long", day: "numeric" };
	const date = blog.date && new Date(blog.date);

	return (
		<div>
			<Header />
			<div className="blogContent">
				<Back />
				<div className="blogContent__header">
					<h1>{blog.title}</h1>
					<div className="blogContent__info">
						{userStore.name === blog.author && (
							<button
								className="edit-button"
								onClick={() => navigate(`/gallery/blogs/${blog._id}`)}
							>
								Edit
							</button>
						)}
						<h3 className="blogContent__author">{blog.author}</h3>
						<h3>{date?.toLocaleDateString("is-IS", options)}</h3>
					</div>
				</div>
				<h2>{blog.subtitle}</h2>
				<div className="blogContent__content">
					<Markdown>{blog.content}</Markdown>
				</div>
			</div>
		</div>
	);
}
