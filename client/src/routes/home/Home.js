import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";

import "./Home.scss";

export default function Home() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		getBlogs();
	}, []);

	const getBlogs = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_SERVER}/blogs`);
		const data = await response.json();

		const publishedBlogs = data.filter((blog) => blog.published);
		setBlogs(publishedBlogs);
	};

	return (
		<div>
			<Header />
			<div className="section">
				<div className="section__header">
					<h1>Published Blogs</h1>
				</div>
				{blogs?.map((blog) => {
					const options = { year: "numeric", month: "long", day: "numeric" };
					const date = blog.date && new Date(blog.date);
					return (
						<div className="section__body" key={blog._id}>
							<div className="section__body__wrapper">
								<Link className="section__body__title" to={`/blog/${blog._id}`}>
									{blog?.title}
								</Link>
								<h3>{blog?.subtitle}</h3>
							</div>
							<div className="section__body__info">
								<h3 className="section__body__author">{blog?.author}</h3>
								<h3>{date.toLocaleDateString("is-IS", options)}</h3>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
