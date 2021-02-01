/*
Instructions

golfScore(4, 1) should return "Hole-in-one!"
golfScore(4, 2) should return "Eagle"
golfScore(5, 2) should return "Eagle"
golfScore(4, 3) should return "Birdie"
golfScore(4, 4) should return "Par"
golfScore(1, 1) should return "Hole-in-one!"
golfScore(5, 5) should return "Par"
golfScore(4, 5) should return "Bogey"
golfScore(4, 6) should return "Double Bogey"
golfScore(4, 7) should return "Go Home!"
golfScore(5, 9) should return "Go Home!"
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par -2)
  {
    return names[1];
  } else if (strokes == par -1)
  {
    return names[2];
  } else if (strokes == par)
  {
    return names[3];
  } else if (strokes == par +1)
  {
    return names[4];
  } else if (strokes == par +2)
  {
    return names[5];
  } else if (strokes >= par +3)
  {
    return names[6];
  }

  // Only change code above this line
}

golfScore(5, 4);
