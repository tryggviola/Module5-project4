import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BlogForm from "../components/blog-form/BlogForm";

export default function Blog() {
	const params = useParams();
	const navigate = useNavigate();

	const [blog, setBlog] = useState({});
	const [message, setMessage] = useState("");
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

	useEffect(() => {
		saveBlog();
	}, [blog.published]);

	const saveBlog = async () => {
		return fetch(`${process.env.REACT_APP_API_SERVER}/blogs/${params.id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json; charset=UTF-8", // Indicates the content
			},
			body: JSON.stringify(blog),
		});
	};

	const test = async () => {
		await saveBlog();
		setMessage("Blog successfully updated!");
	};

	const deleteBlog = async () => {
		await fetch(`${process.env.REACT_APP_API_SERVER}/blogs/${params.id}`, {
			method: "DELETE",
		});

		navigate("/gallery/blogs");
	};

	const updateBlog = (key, value) => {
		setMessage("");

		setBlog({
			...blog,
			[key]: value,
		});
	};

	return (
		<BlogForm
			saveBlog={test}
			deleteBlog={deleteBlog}
			updateBlog={updateBlog}
			blog={blog}
			message={message}
		/>
	);
}
