import { useNavigate } from "react-router-dom";
import Back from "../../../../components/back/Back";
import Switch from "../switch/Switch";

import "./BlogForm.scss";

export default function BlogForm(props) {
	const { blog, updateBlog, saveBlog, deleteBlog, message } = props;
	const navigate = useNavigate();

	return (
		<div className="blog-form">
			<Back />
			<div className="title">
				<label className="title__label">
					Title
					<input
						value={blog.title || ""}
						onChange={(e) => updateBlog("title", e.target.value)}
					/>
				</label>
				<label>
					<span>{blog.published ? "Published" : "Publish"}</span>
					<Switch
						onChange={(e) => updateBlog("published", e)}
						checked={!!blog.published}
					/>
				</label>
			</div>
			<div className="subtitle">
				<label>
					Subtitle
					<input
						value={blog.subtitle || ""}
						onChange={(e) => updateBlog("subtitle", e.target.value)}
					/>
				</label>
				<div>{blog.posted_at}</div>
			</div>
			<textarea
				className="content"
				value={blog.content}
				onChange={(e) => updateBlog("content", e.target.value)}
			/>
			<div className="footer">
				<span>{message}</span>

				<div className="buttons">
					{blog._id && (
						<button
							className="preview-button"
							onClick={() => navigate(`/blog/${blog._id}`)}
						>
							Preview
						</button>
					)}

					<button className="save-button" onClick={saveBlog}>
						Save
					</button>
					<button className="delete-button" onClick={deleteBlog}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
