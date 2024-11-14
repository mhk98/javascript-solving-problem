let a = 5;
let b = 10;

// Using a temporary variable to swap values
let temp = a; // Store the value of 'a' in 'temp'
a = b; // Assign the value of 'b' to 'a'
b = temp; // Assign the stored value of 'temp' (which was 'a') to 'b'

console.log(a); // 10
console.log(b); // 5

