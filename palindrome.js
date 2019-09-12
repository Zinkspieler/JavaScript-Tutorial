function reverse(string) {
  return Array.from(string)
    .reverse()
    .join("")
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
  let lower = string.toLowerCase();
  return lower === reverse(lower);
}

function emailParts(string) {
  return string.toLowerCase().split("@");
}
