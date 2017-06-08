//===============Mars's Terrain Grid===========
 /* ========Grid not implemented yet
 var grid = [];
 for (var x = 0; x <= 10; x++) {
   grid[0] = x;
 }
 for (var y = 0; y <=10; y++) {
   grid[1] = y;
 }
*/
//===============Challenger Rover==================
var marsChallenger = {
  position: [0, 0], //coordinates(x,y)
  direction: 'N',
};

function roverPosition(rover) {
  console.log("Mars Challenger is in position " + marsChallenger.position[0] + "," + marsChallenger.position[1] + " and is facing " + marsChallenger.direction + " ." );
}
roverPosition(marsChallenger);



//=================Creating Borders and Overlapping the Rover========
function overLapMap(rover) {
  //set X overlaps
      var overLapX = marsChallenger.position[0];
          if (overLapX >= 11) {
            overLapX = 0;
      } else if (overLapX <= -1) {
            overLapX = 10;
      }
  //set Y overlaps
  var overLapY = marsChallenger.position[1];
    if (overLapY >= 11) {
          overLapY = 0;
    } else if (overLapY <= -1) {
          overLapY = 10;
    }
}
overLapMap(marsChallenger);

//===================Starter code - Moving Forward====================
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
  }
}
goForward(marsChallenger);

//================Moving Backwards=====================
function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
      break;
    case 'E':
      rover.position[0]--;
      break;
    case 'S':
      rover.position[1]++;
      break;
    case 'W':
      rover.position[0]++;
      break;
  }
}
goBackwards(marsChallenger);

//====================Turning Right=======================
function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction ='E';
      break;
    case 'E':
      rover.direction ='S';
      break;
    case 'S':
      rover.direction ='W';
      break;
    case 'W':
      rover.direction ='N';
      break;
  }
}
turnRight(marsChallenger);

//====================Turning Left=======================
function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction='W';
      break;
    case 'W':
      rover.direction='S';
      break;
    case 'S':
      rover.direction='E';
      break;
    case 'E':
      rover.direction='N';
      break;
  }
}
turnLeft(marsChallenger);

//==============Assigning functions to Commands========

//Ask the user for moving commands
var userInput = prompt("Move Rover with F (Forward), B (Backward), R (Right), L (Left)");

//Transform all the text inputted into uppercases
var checkedText = userInput.toUpperCase();

var commands = [];

for (var i = 0; i < checkedText.length; i++) {
  commands = checkedText[i];

  console.log("Houston, I'll go " + commands + " ;");
//Check for commands in the checked user input
  if (commands === 'F') {
        goForward(marsChallenger);
        overLapMap(marsChallenger);
  }  else if (commands  === 'B') {
        goBackwards(marsChallenger);
        overLapMap(marsChallenger);
  }  else if (commands  === 'R') {
        turnRight(marsChallenger);
        overLapMap(marsChallenger);
  }  else if (commands  === 'L'){
        turnLeft(marsChallenger);
        overLapMap(marsChallenger);
 }
}
roverPosition(marsChallenger);
