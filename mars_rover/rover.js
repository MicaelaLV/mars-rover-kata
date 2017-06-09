//===========Rover Touch Down========
//when document has loaded send out the landing message
$(document).ready (function (){
  document.getElementById("control-msg").innerHTML =("Challenger: has successfully landed on Mars Ground...");
});

//wait 5 seconds before displaying the message communicating the rover's position
window.setTimeout (retrievingPosition, 5000);
  function retrievingPosition (){
    document.getElementById("control-msg").innerHTML =("Houston, retrieving Challenger position...");
  }

//===============Challenger Rover==================
var marsChallenger = {
  position: [0, 0], //coordinates(x,y)
  direction: 'N',
};
//display position after 10 seconds
window.setTimeout (starterPosition, 10000);

function starterPosition() {
document.getElementById("control-msg").innerHTML =("Challenger: is in position " + "[" + marsChallenger.position[0] + ", " + marsChallenger.position[1] + "]" + " and is facing " + marsChallenger.direction + " ." );
}

//================Communicating Rover Position===========
function printPosition(rover) {
  document.getElementById("challenger-msg").innerHTML =("Challenger is in position " + "[" + marsChallenger.position[0] + ", " + marsChallenger.position[1] + "]" + " and is facing " + marsChallenger.direction + " ." );
}
//================Mars Grid==================
var grid = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

//=============Obstacles================
var alienContact = [1, 3];
var rockWall = [5, 5];
var alienNest = [8, 9];
var cliff = [3, 8];



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
window.setTimeout (goMove, 20000);

//Ask the user for moving commands
function goMove(rover) {
  document.getElementById("control-msg").innerHTML = ("Houston, Move Challenger with F (Forward), B (Backward), R (Right), L (Left)");
      var userInput = document.getElementById("commandInput").value;
      //Transform all the text inputted into uppercases
        var checkedText = userInput.toUpperCase();
      //Check all text inputted for movement commands
          var commands = [];
            for (var i = 0; i < checkedText.length; i++) {
                commands = checkedText[i];
                  //document.getElementById("challenger-msg").innerHTML =
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
                document.getElementById("challenger-msg").innerHTML = ("Houston, one of your requests is not supported. I will apply all supported commands");
            }
          }
}

goMove(marsChallenger);
printPosition(marsChallenger);
