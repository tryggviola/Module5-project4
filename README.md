# Javacript - React // Module 4 - project 4

# Back-end - REST API // Module 5 - Project 4

## Project brief

Create a website which includes a CRUD method. I took the time to also do the React/Javascript project from Module 4.

## The Goal

<ul>
<li>Understand the crud operations</li>
<li>Understand the flow of data from databases to the user</li>
<li>Understand http requests and how to handle them</li>
<li>Understand different types of requests and map them to corresponding database request</li>
<li>Be able to make a REST API on top of a database</li>
<li>Be able to connect a front-end to a database with the use of a backe-end</li>
</ul>

## Intro

Diving deeper into the back-end portion was a lot of fun. I was falling a little bit behind and had not done the React assignment in Module 4 so I decided too combine those to assignments together and put some effort into the client side of this project as well. I was also in charge of doing the UI for my group project so I was able to use some of that as well. Every line is a code from me and adapted to suite this project.

## The Process

I started by drawing a simple user journey map in <strong>Figma</strong> so I knew what functions I needed and were they needed to be placed and after that I setup my client and backend and started coding in <strong>VS Code</strong>, setup the server side in <strong>MongoDB</strong>.

## Video walkthrough of the client

If you dont want to test out the client you can see a short video walkthrough of it here.



https://user-images.githubusercontent.com/89194851/151892378-94ce1900-1ba6-4a26-95b1-c467f40f58e1.mp4




# Install the server and the client

### 1) Start by cloning the project to your local machine

### 2) Running the server

Open a terminal window and navigate to the /Module5-project4/backend folder and run:

```
yarn install
yarn start
```

### 3) Test the server

**You can use this Postman collection to try out the CRUD endpoints:**
https://www.getpostman.com/collections/66a7241e34531ff93027

### 4) Running the client

Add a .env file at the root of the /Module5-project4/client folder:

```
REACT_APP_API_SERVER=http://localhost:4000
```

Open another separate terminal window and navigate to /client folder and run:

```
yarn install
yarn start
```

You browser should open at https://localhost:3000 if not you can open your local browser and navigate to https://localhost:3000
Everything should be up and running.

# Test the client

When you have started the server and the client you can try it out. You can see all the features in the video above but here is a short walkthrough all the features.

### Front Page

On the front page you can see all the published blogs, there is only one there but you can add more if you want. If you want to learn more about illustrations in UI/UX design please click on it and read through it! If you are already logged in and click on your own blog you should see a edit button at the top right corner of the blog.

### Login

You can click on the "Login" button and choose a username that you like. There is no password needed as this is a dummy login feature that stores the username in the localStorage of the browser and is then stored in a mobX store to be able to use it throughout the client.

### The Dashboard

There are no blogs created yet by your username but you can click the new button and create your own blog or login with my username Tryggvi and you should see the blog post there.

### Create blog

Here you can write your own blog! Put a title in the first input (it is required) and subtitle (not required) in the next input. The big box is for your main text, you can use HTML tags to create headlines, lists, insert images and all the glories that HTML has to offer.

In the bottom right corner you can see three buttons:

<ul>
  <li><strong>Preview: </strong>Will only appear once you have saved a blog. Here you can see how your article looks in its current state. You can click on the edit button again on the Preview page to get back to updating your new blog. </li>
  <li><strong>Save: </strong>Here you can save your blog, You don't need to publish it straight away, you can save it and come back to it whenever you want.</li>
  <li><strong>Delete: </strong>Here you can delete your blog.
</ul>
After you have written your blog you can publish (or unpublish) your blog with the toggle button in the top right corner.

When you have written your blog you can click the "Back" button and there on the <strong>Dashboard</strong> you can see your newly (and old) created blog. From there you can <strong>Edit</strong> which takes you back to the <strong>Create blog</strong> page, you can delete it or you can use the toggle button to publish or unpublish the article.

After you have published your blog you should be able too see it on the <strong>Front page</strong>. If you click on the blog you can <strong>Edit</strong> the blog straight from the front page - as long as you are logged in as the author of the blog.

If you want to logout simply just click on your name and in the bottom left corner of that page there is a <strong>Logout</strong> button and your are logged out and transferred to the front page where the <strong>Login</strong> button reappears.

# Final words

I hope everything was understandable and easy to execute, if there are any questions at all then you can contact me on Slack. Thanks a lot!
