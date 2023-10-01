# express-server

This repository contains a simple Node.js and Express server that serves dummy user data. You can access the homepage at localhost:3000 and view all users by navigating to localhost:3000/users. Additionally, you can view specific user details by providing the user ID as a parameter in the URL.
This server uses **nodemon** which is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

# Prerequisites
Before running the server, make sure you have the following installed:

-> Node.js (v12.0.0 or higher)

-> npm (v6.0.0 or higher)
Getting Started
Follow these steps to get the server up and running:

# Clone this repository to your local machine:

git clone https://github.com/manjeetrawat28/express-server

# Install the project dependencies:

 npm install
 
# Start the server:

npm start (command for running the server)

The server should now be running at http://localhost:3000

# Routes
## Homepage: 
Visit http://localhost:3000 to view a simple HTML page.

### All Users: 
Access the list of all users by going to http://localhost:3000/users

### Specific User: 
To view details of a specific user, provide their ID as a parameter in the URL. For example, to view user with ID 1, go to http://localhost:3000/users/1.

### Dummy User Data
The server serves dummy user data stored in the data/users.json file. You can modify this data or add more users as needed.

## Server Configuration
You can configure the server settings, such as the port it listens on, by modifying the app.js file.

# Dependencies
Express: A fast and minimalistic web framework for Node.js.


# Acknowledgments
This project was created for educational purposes as a basic example of using Node.js and Express for serving data.
Feel free to customize and expand upon this project as needed for your own purposes. Happy coding!
