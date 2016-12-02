// Day 1 Part 1
var day1part1 = function(input) {
  var x = 0;
  var y = 0;
  var dir = 0;

  var directions = {
    0: function(num) { y += num; },
    1: function(num) { x += num; },
    2: function(num) { y -= num; },
    3: function(num) { x -= num; },
  };

  for (var i = 0; i < input.length; i++) {
    var num = parseInt(input[i].slice(1, input[i].length));
    if (input[i][0] === 'R') {
      if (dir === 3) {
        dir = 0;
      } else {
        dir += 1;
      }
    } else if (input[i][0] === 'L') {
      if (dir === 0) {
        dir = 3;
      } else {
        dir -= 1;
      }
    }
    directions[dir](num);
  }

  return Math.abs(x) + Math.abs(y);
};


// Day 1 Part 2
var day1part2 = function(input) {
  var x = 0;
  var y = 0;
  var dir = 0;
  var visited = {};

  var directions = {
    0: function(num) {
      for (var i = 0; i < num; i++) {
        if (visited[x + ',' + y] !== undefined) {
          return true;
        } else {
          visited[x + ',' + y] = true;
          y++;
        }
      }
      return false;
    },
    1: function(num) {
      for (var i = 0; i < num; i++) {
        if (visited[x + ',' + y] !== undefined) {
          return true;
        } else {
          visited[x + ',' + y] = true;
          x++;
        }
      }
      return false;
    },
    2: function(num) {
      for (var i = 0; i < num; i++) {
        if (visited[x + ',' + y] !== undefined) {
          return true;
        } else {
          visited[x + ',' + y] = true;
          y--;
        }
      }
      return false;
    },
    3: function(num) {
      for (var i = 0; i < num; i++) {
        if (visited[x + ',' + y] !== undefined) {
          return true;
        } else {
          visited[x + ',' + y] = true;
          x--;
        }
      }
      return false;
    },
  };

  for (var i = 0; i < input.length; i++) {
    var num = parseInt(input[i].slice(1, input[i].length));
    if (input[i][0] === 'R') {
      if (dir === 3) {
        dir = 0;
      } else {
        dir += 1;
      }
    } else if (input[i][0] === 'L') {
      if (dir === 0) {
        dir = 3;
      } else {
        dir -= 1;
      }
    }
    if (directions[dir](num) === true) {
      return Math.abs(x) + Math.abs(y);
    }
  }
};
