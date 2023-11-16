const input = document.getElementById("textInput");
const textButton = document.getElementById("submitBtn");
const textResult = document.getElementById("result");

textButton.onclick = onTextSubmit;

function onTextSubmit() {
  const inputText = input.value;
  const result = reverseWord(inputText);
  textResult.innerText = result;
}

const arr = [5, 15, 55, 515];
const arrButton = document.getElementById("arrButton");
const arrResult = document.getElementById("arrResult");

arrButton.onclick = onArrSubmit;
function onArrSubmit() {
  const result = arr.countNumber(5);
  arrResult.innerText = JSON.stringify(result);
}

const arrContainer = document.getElementById("arrContainer");
arrContainer.innerHTML = JSON.stringify(arr);
/**
 * 2 Count the numbers
    Write an extension for collections of integers that returns the number of times a specific digit appears in any of its numbers.
    Sample input and output
    • The code [5, 15, 55, 515].challenge37(count: "5") should return 6.
    • The code [5, 15, 55, 515].challenge37(count: "1") should return 2.
    • The code [55555].challenge37(count: "5") should return 5.
    • The code [55555].challenge37(count: "1") should return 0.
 */

function countNumber(_num) {
  if (!_num) {
    throw "Must enter a number";
  }
  const n = Number(_num);
  if (n < 0 || n > 9) {
    throw "Must enter a valid number";
  }
  const num = n.toString();
  return this.join("")
    .split("")
    .filter((e) => e === num).length;
}
Array.prototype.countNumber = countNumber;
/**
 * 1 Reverse the words in a string
Write a function that returns a string with each of its words reversed but in the original order, without using a loop.
Sample input and output
The string “Swift Coding Challenges” should return “tfiwS gnidoC segnellahC”.
The string “The quick brown fox” should return “ehT kciuq nworb xof”.
 */
function reverseWord(text) {
  if (!text) {
    throw "Must enter a text";
  }
  return text.split("").reverse().join("").split(" ").reverse().join(" ");
}

const str = "Swift Coding Challenges";
console.log(reverseWord(str));
console.log([5, 15, 55, 515].countNumber(1));
