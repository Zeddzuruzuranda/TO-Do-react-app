
This repository contains the frontend code for a simple To-Do App built with React. The code consists of three components: NavBar, Login, and LoginForm.

NavBar
The NavBar component is responsible for rendering the top navigation bar of the application. It takes two props: user and setUser. The user prop contains the current user object, and the setUser prop is a callback function that updates the current user. The NavBar component consists of three links: "TO-DO APP," "New Task," and "Logout." It also has a button that toggles the dark mode.

Login
The Login component renders the login and signup forms. It takes a prop onLogin, which is a callback function that is called when the user logs in or signs up successfully. The component uses the state to keep track of whether to show the login or signup form.

LoginForm
The LoginForm component renders the login form. It takes a prop onLogin, which is a callback function that is called when the user logs in successfully. The component uses the state to keep track of the username, password, errors, and loading status.

Installation and Usage
Clone the repository: git clone https://github.com/Zeddzuruzuranda/TO-Do-react-app
Install the dependencies: npm install
Start the development server: npm start
The application will be running on http://localhost:3000/.

Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feat/your-feature-name)
Make changes and commit them (git commit -am "Add your feature")
Push to the branch (git push origin feat/your-feature-name)
Open a pull request.


