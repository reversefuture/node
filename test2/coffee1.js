// Generated by CoffeeScript 1.10.0
(function() {
  var diff, i, j, k, results, square, stdin, sum;

  for (i = j = 0; j <= 4; i = ++j) {
    console.log("hello " + i);
  }

  stdin = process.openStdin();

  stdin.setEncoding('utf8');


  /*
  stdin.on 'data', (input) -> 
      name = input.trim() 
      process.exit() if name == 'exit' 
      console.log "Hello #{name}"
      console.log "Enter another name or 'exit' to exit"
  console.log 'Enter your name'
   */

  square = function(x) {
    return x * x;
  };

  sum = function(nums) {
    return nums.reduce(function(a, b) {
      return a + b;
    });
  };

  diff = function(nums) {
    return (square(sum(nums))) - (sum(nums.map(square)));
  };

  console.log(diff((function() {
    results = [];
    for (k = 1; k <= 100; k++){ results.push(k); }
    return results;
  }).apply(this)));

}).call(this);
