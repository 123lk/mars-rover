# Mars Rover

## Design and assumptions
I created 2 classes, Plataeu and Rover.  I decided to put methods for interpreting each instruction on the Rover class as these are specific to each rover.  The brief outlined that each rover will be 'finished sequentially' so in order for this to occur I decided to store the rovers in an array in the Plateau class and only send directions once the final position of the previous rover has been received. 

As the first line of input provided was 5, 5 I assumed that the plateau has the potential to be various sizes and so set the height and width based on the input.

The brief outlines that the position instruction is 'two integers and a letter separated by spaces' so I assumed this would be a string.

## Installation 
You will need to have Node.js installed to run this application.  Type the below command into the terminal to check if you already have node installed;
```
$node -v
```
If you already have node installed it will tell you which version (e.g. v8.4.0).  If you need to install node.js please follow this [link](https://nodejs.org/en/).

To install all the dependencies please enter the following command into the terminal once you have navigated into the root directory; 
```
$npm install
```

## How to run the application
In order to run the application with the supplied test input (5 5, 1 2 N, LMLMLMLMM, 3 3 E, MMRMMRMRRM) and view the output please enter the following command;
```
$npm run
```

## Testing
To run the tests, enter the following command into the terminal;
```
$npm test
```
## Built With
JavaScript

[Mocha](https://mochajs.org/) - JavaScript test framework

[Chai](https://www.chaijs.com//) - BDD / TDD assertion library
