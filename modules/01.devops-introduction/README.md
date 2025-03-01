## Lab1 Solution
Implementing DevOps to IT companies is starting from writing a clean and high-quality source code as well as its documentation. The goal of the lab is to learn the proper way of creating an IT project following best practices.

As an example of programming language, we will use JavaScript with its server-side runtime - NodeJS. It is one of the most popular languages for developing various types of applications, and it's very easy to get started with.

## Objectives
1. Start a project
2. Initialize a NodeJS package
3. Create a NodeJS script
4. Create a web application using the ExpressJS package
5. Create a ``CHANGELOG.md`` file
6. Describe the project in a ``README.md`` file \
As result, you will achieve creation a documented project on NodeJS of a simple web server displaying a "Hello world!" message on a home page.

## Before starting
1. Install an IDE or a text editor, for example, Atom or VS Code.
2. Install Git, use for installation:
- Windows: https://gitforwindows.org/
- Linux: https://git-scm.com/download/linux
- macOS: https://git-scm.com/download/mac
3. Install NodeJS: https://nodejs.org/
4. Open a command-line interface:
- macOS or Linux: use Terminal
- Windows: use Git Bash (should be installed when installing Git). Note! Don't use default CMD.exe, because it has different commands from a command line of the Linux OS, which is used in most IT environments.

## 1. Start a project
Note! Don't put spaces ( ) ether in folder names either in file names. Otherwise, you will have to use escape characters when navigating to them. Use the "kebab-case" naming convention by separating words with dashes (-).

1. Using CLI bash commands in your terminal (Terminal or Git Bash) navigate to the directory where you will store your project folder.
Learn basic CLI bash commands

Example:
````
cd ~/path/to/your-root-project-directory
````
2. Choose a name for your project (for example, dsti-devops) and create a directory:
````
mkdir dsti-devops
````
Then navigate to this directory:
````
cd dsti-devops
````
3. Initialize a Git repository
````
git init
````
## 2. Initialize a NodeJS package
1. Initialize a NodeJS package running this command:
````
npm init -y
````
This will create an initial package.json file with the package (NodeJS project) description. Later, you can manually modify the content respecting the JSON format. For example, these values:
- ``author``
- ``description``
2. Run the NPM script:
````
npm run test
# or
npm test
````
It will run the bash script echo \"Error: no test specified\" && exit 1 defined in the package.json file, which outputs the string Error: no test specified to stdout.
## 3. Create a NodeJS script
Now, we start using a text editor or IDE (Atom, VS Code, WebStorm, or up to your choice).

1. Open a project folder in your editor.
You also can use bash commands for opening it. Being under the root of the project directory, run one of the commands:
````
# For Atom
atom .

# For VS Code
code .
````
2. Create a file ``index.js`` with the following content:
````
str = "Hello NodeJS!"
console.log(str)
````
3. Run the NodeJS script in the terminal:
````
node index.js
````
It will print the message Hello NodeJS!.
4. Define this command as an NPM script. Modify in the package.json file like this:
````
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
...
````
5. Run the NPM script with the command:
````
npm run start
# or
npm start
````
It will do the same as in step 2.
## 4. Create a web application using ExpressJS package
1. Install the ExpressJS package:
````
npm install express
````
It will install the package files and their dependencies sourced on GitHub to you project directory inside node_modules folder.

Also, this command will add a dependency to your package.json like:
````
...
"dependencies": {
    "express": "^4.17.1"
  }
...  
````
It is a NodeJS (actually NPM) "feature" to let developers install all the necessary packages for the current project using just one single command, instead of installing each package repeating such a command like ``npm install PACKAGE_NAME``. You can experiment with it by removing the entire ``node_modules`` folder and running the npm install command.

2. Modify the ``index.js`` file with the following content:
````
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})
````
3. Run the NPM start script like in the previous step.
## 5. Create a ``CHANGELOG.md`` file
``CHANGELOG.md`` is a file that describes the evolution of the project. All notable changes will be documented in this file.

Read more about CHANGELOG

1. Create the ``CHANGELOG.md`` file under the root of your project with content like:
````
# Changelog

## Unreleased

### Added
````
- Create an HTTP web server using Express
- Initialize a project
Since now, when working on the project you will be constantly updating it.
## 6. Describe the project in the README.md file
We document about  our project in this section

## Author information
Name : Aminu Habib Abiola \
Contact: habib.aminu@edu.dsti.institute
