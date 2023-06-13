# PostIt
PostIt is a fully-featured social media web application, built with the MERN stack.  

Deployed at: https://post-it-heroku.herokuapp.com/  
![GIF of PostIt walkthrough](https://media.giphy.com/media/9tnaXy42T4NzSJdHhP/giphy.gif)

## Features
- Create, read, update and delete posts
- Like and unlike posts
- Create, reply to, read, update and delete nested comments
- Markdown for posts and comments
- Sign up and login using JWT for authentication
- Private message users in real-time using socket.io
- View profiles of users and browse through their posts, liked posts and comments
- Infinite scrolling 
- Sort posts by attributes such as like count, comment count and date created
- Profanity filtering and posting/commenting cooldowns
- Update bio which can be viewed by other users
- Search for posts by their title
- View the users who liked a particular post
- Fully responsive layout

## Installation and usage
1) Clone this repository  
```
git clone https://github.com/ihtasham42/social-media-app.git
```
2) Install dependencies  
```
cd social-media-app  
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd social-media-app
cd client
npm start
```

## Screenshots
### Explore view
![image](https://user-images.githubusercontent.com/76620777/170822044-44c5f2e6-879f-4b16-8059-f9e331ba57de.png)

### Post view
![image](https://user-images.githubusercontent.com/76620777/170822055-ac686a28-7d5b-4d44-b8d3-a028521534d8.png)

### Nested comments
![image](https://user-images.githubusercontent.com/76620777/170822065-64622f43-5f70-48c2-9503-0e1b80575fd2.png)

### Profile view
![image](https://user-images.githubusercontent.com/76620777/170822076-18741eef-ba2b-4750-b468-e7e9561a6a71.png)

### Real-time private messenger
![image](https://user-images.githubusercontent.com/76620777/170822084-89a9d3ac-22ed-4a92-ab58-9b0af878e03e.png)

### Search view
![image](https://user-images.githubusercontent.com/76620777/170821986-49d2a93a-5486-47fc-885e-37c0d3f628f3.png)

