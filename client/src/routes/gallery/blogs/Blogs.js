import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Switch from "../components/switch/Switch";
import { useStores } from "../../../stores";
import "./Blogs.scss";

export default function Blogs() {
	const { userStore } = useStores();

	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		getBlogs();
	}, []);

	const getBlogs = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_SERVER}/blogs`);
		const data = await response.json();
		const filteredBlogs = data.filter((blog) => blog.author == userStore.name);
		setBlogs(filteredBlogs);
	};

	const updateBlog = async (published, blog) => {
		const updatedBlog = {
			...blog,
			published,
		};
		const updatedBlogs = blogs.map((a) =>
			a._id === blog._id ? updatedBlog : a
		);

		setBlogs(updatedBlogs);

		await fetch(`${process.env.REACT_APP_API_SERVER}/blogs/${blog._id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json; charset=UTF-8", // Indicates the content
			},
			body: JSON.stringify(updatedBlog),
		});
	};

	const deleteBlog = async (blog) => {
		await fetch(`${process.env.REACT_APP_API_SERVER}/blogs/${blog._id}`, {
			method: "DELETE",
		});

		getBlogs();
	};

	return (
		<div className="blog-list">
			<div className="title">
				<h1>Your Blogs</h1>
				<Link to="/gallery/blogs/new-blog">
					<button className="new-blog">New</button>
				</Link>
			</div>
			{blogs?.map((blog) => (
				<div className="blog" key={blog._id}>
					<div>
						<h2>{blog?.title}</h2>
						<h3>{blog?.subtitle}</h3>
					</div>
					<div className="actions">
						<Link to={`/blog/${blog?._id}`}>
							<button className="preview-button">Preview</button>
						</Link>
						<Link to={`/gallery/blogs/${blog?._id}`}>
							<button className="edit-button">Edit</button>
						</Link>
						<button className="delete-button" onClick={() => deleteBlog(blog)}>
							Delete
						</button>
						<Switch
							onChange={(value) => updateBlog(value, blog)}
							checked={!!blog.published}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
