function fizzBuzz(fizz, buzz, count) {
  let output = '';
  // Check if divideriders are within challenge constraints...
  if (fizz > 20 || buzz > 20) {
    throw "Error: Your divider must be ≤ 20.";
  }

  // Check the range of the count...
  if (count < 21 || count > 100) {
    throw "Error: Your count must be greater than 21 and less than 100";
  }

  for (var i = 1; i <= count; i++) {
    let x = i;

    if (x % fizz === 0 && x % buzz === 0) {
      x = 'FB';
    } else if (x % fizz === 0) {
      x = 'F'
    } else if (x % buzz === 0) {
      x = 'B'
    }

    output += x + ' ';
  }

  return output;
}

console.log(fizzBuzz(3, 5, 30));
