const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
		},
		published: {
			type: Boolean,
		},
		content: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
		author: {
			type: String,
      required: true,
		},
	},
	{
		collection: "blog",
	}
);

module.exports = mongoose.model("Blog", blogSchema);
