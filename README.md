## Mars Rover programming problem

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth...

## How I solved the assignment

I have chosen to do this task in JavaScript. 
I started of by building the rover class as a stand alone component. I used Jest for unit testing as I wanted to try it out (I have only used Jasmine before). I also added a border check for the plateau so if you run an instruction that hits the border, it will be ignored. I used a grid class to controlle the size of the grid, that way the rover can ask the grid if a move is allowed or not. Finally since I like the frontend a lot, I decided to add a small web app as well where you can navigate a single rover.

### The app can be run in three ways:

Start by running npm install then:

1. **npm run test** Starts the unit tests with Jest.

2. **npm run app** Starts an interactive node.js app where you can control the rover via the terminal window or load an instruction file.

3. **npm run web** Starts a web app where you can control a single rover using buttons or the arrow keys. 