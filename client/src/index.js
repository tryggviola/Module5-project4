import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Home from "./routes/home/Home";
import Gallery from "./routes/gallery/Gallery";
import Blog from "./routes/blog/Blog";
import Login from "./routes/login/Login";

const rootElement = document.getElementById("root");

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="blog/:id" element={<Blog />} />
			<Route path="gallery/*" element={<Gallery />} />
			<Route path="login" element={<Login />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
