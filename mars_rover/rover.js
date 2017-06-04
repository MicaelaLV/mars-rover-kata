//==============Map Grid Here==================
var grid = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];



//===============Challenger Rover==================
var marsChallenger = {
  position: [0, 0], //coordinates(x,y)
  direction: "",
  movementInput: '',
};


//==============Directioning the Rover===============
function getDirection(rover) {
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
//print out the directioning in the console
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
//activate the function
getDirection(marsChallenger);


//===============Moving the Rover Around==============
function goMove(rover) {
  switch(rover.movementInput) {
    case 'f':
    rover.position[1]++;
    break;
    case 'b':
    rover.position[1]--;
    break;
    case 'r':
    rover.position[0]++;
    break;
    case 'l':
    rover.position[0]--;
    break;
  }
//print out the new position of the Rover
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
//activate the function
goMove(marsChallenger);


//=================Creating Borders and Overlapping the Rover========
function overLapMap(rover) {
//set Y overlaps
  var overLapY = marsChallenger.position[1];
    if (overLapY >= 10) {
          overLapY = 0;
    } else if (overLapY <= -1) {
          overLapY = 9;
    }
//set X overlaps
    var overLapX = marsChallenger.position[0];
        if (overLapX >= 10) {
          overLapX = 0;
    } else if (overLapX <= -1) {
          overLapX = 9;
    }
//print out the position after the overlap setting
    console.log("New Rover Position: [" + overLapY + ", " + overLapX + "]");
}
overLapMap(marsChallenger);
