import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BlogForm from "../components/blog-form/BlogForm";
import { useStores } from "../../../stores";

export default function NewBlog() {
	const { userStore } = useStores();
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const [blog, setBlog] = useState({
		author: userStore.name,
		title: "",
		content: "",
	});

	const saveBlog = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_SERVER}/blogs`,
				{
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8", // Indicates the content
					},
					body: JSON.stringify(blog),
				}
			);
			console.log("data", response);

			if (response.status === 200) {
				const data = await response.json();
				navigate(`/gallery/blogs/${data._id}`);
			} else {
				const message = await response.text();
				console.log("message", message);
				setMessage(`${response.statusText}: ${message}`);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const deleteBlog = async () => {
		navigate("/gallery/blogs");
	};

	const updateBlog = (key, value) => {
		setBlog({
			...blog,
			[key]: value,
		});
	};

	return (
		<BlogForm
			saveBlog={saveBlog}
			deleteBlog={deleteBlog}
			updateBlog={updateBlog}
			blog={blog}
			message={message}
		/>
	);
}
