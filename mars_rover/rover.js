//===========Rover Touch Down========
console.log("Houston, Challenger has successfully landed on Mars Ground, ready for commands");

console.log("Communicating Position ...");


//===============Challenger Rover==================
var marsChallenger = {
  position: [0, 0], //coordinates(x,y)
  direction: 'N',
};
console.log("Challenger is in position " + marsChallenger.position[0] + ", " + marsChallenger.position[1] + " and is facing " + marsChallenger.direction + " ." );

//================Mars Grid==================
var grid = new Array(10);
for (var x = 0; x <= 10; x++) {
  grid[x] = new Array(10);
  for (var y = 0; y <= 10; y++) {
    grid[x][y] = '[' + x + ', ' + y + ']';
  }
}
//=============Obstacles================
var alienContact = [1, 3];
var rockWall = [5, 5];
var alienNest = [8, 9];
var cliff = [3, 8];

//================Communicating Rover Position===========
function printPosition(rover) {
  console.log("Mars Challenger is in position " + '[' + marsChallenger.position[0] + ", " + marsChallenger.position[1] + ']' + " and is facing " + marsChallenger.direction + " ." );
}

//==================Overcoming Obstacles==============
function checkPosition(rover) {
// check the position to see if it matches one of the Obstacles
   if (rover.position[0] === alienContact[0] && rover.position[1] === alienContact[1]) {
     console.log("Hi Alien, I come in peace");
   } else if (rover.position[0] === rockWall[0] && rover.position[1] === rockWall[1]) {
     console.log("Houston, There's a rock wall ahead. Turn me round and round");
   } else if (rover.position[0] === alienNest[0] && rover.position[1] === alienNest[1]) {
     console.log("Houston, I've just crashed an alien party. I might be here a while!");
   } else if (rover.position[0] === cliff[0] && rover.position[1] === cliff[1]) {
     console.log("Houston, turn around there's a cliff just in front of me!");
   }
 }
 checkPosition(marsChallenger);

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

//==============Assigning functions to Commands========
function goMove(rover) {
  //Ask the user for moving commands
    confirm("Houston, request Challenger to move?");
      var userInput = prompt("Move Challenger with F (Forward), B (Backward), R (Right), L (Left)");
      //Transform all the text inputted into uppercases
        var checkedText = userInput.toUpperCase();
      //Check all text inputted for movement commands
          var commands = [];
            for (var i = 0; i < checkedText.length; i++) {
                commands = checkedText[i];
                  console.log("Houston, going " + commands + " ;");
    //Check for commands in the checked user input
          if (commands === 'F') {
            goForward(marsChallenger);
              overLapMap(marsChallenger);
                checkPosition(marsChallenger);
            }  else if (commands  === 'B') {
                goBackwards(marsChallenger);
                  overLapMap(marsChallenger);
                    checkPosition(marsChallenger);

            }  else if (commands  === 'R') {
                turnRight(marsChallenger);
                  overLapMap(marsChallenger);
                  checkPosition(marsChallenger);

            }  else if (commands  === 'L'){
                turnLeft(marsChallenger);
                  overLapMap(marsChallenger);
                  checkPosition(marsChallenger);

            } else {
                alert("Houston, one of your requests is not supported. I will apply all supported commands");
            }
          }
}
goMove(marsChallenger);
printPosition(marsChallenger);
