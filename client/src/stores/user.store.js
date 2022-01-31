import { makeAutoObservable } from "mobx";

class userStore {
	name = localStorage.getItem("blog-user");

	constructor() {
		makeAutoObservable(this);
	}

	setUserName = (name) => {
		this.name = name;
	};
}

export default userStore;
