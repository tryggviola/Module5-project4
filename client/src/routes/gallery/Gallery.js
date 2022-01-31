import { Routes, Route, Navigate } from "react-router-dom";

import Blogs from "./blogs/Blogs";
import Layout from "./components/layout/Layout";
import Blog from "./blog/Blog";
import NewBlog from "./new-blog/NewBlog";

const Studio = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate replace to="blogs" />} />
				<Route path="blogs/new-blog" element={<NewBlog />} />
				<Route path="blogs/:id" element={<Blog />} />
				<Route path="blogs" element={<Blogs />} />
			</Routes>
		</Layout>
	);
};

export default Studio;
