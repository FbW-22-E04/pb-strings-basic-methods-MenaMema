//Q1

const num1 = 75;
const num2 = 40;

console.log(
  `both numbers are in the range 40..60 or in the range 70..100`,
  (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)
);
//Q2

const num3 = 15;

console.log(num3 < 19 ? 19 - num3 : (num3 - 19) * 3);

//Q3

const num4 = 40;
const num5 = 10;

console.log(num4 === 50 || num5 === 50 || num4 + num5 === 50);

//Q4

const num6 = 40;
const num7 = 10;

console.log(num6 > 0 && num7 < 0 ? "Yes" : "No");
console.log(num6 > 0 || num7 < 0 ? "Yes" : "No");

//Q5

const string = "Michelle";
console.log(string.slice(0, 2) === "Py" ? string : "Py" + string);
console.log("------------");
//Q6

const string1 = "Pomodoro";
const string2 = string1.slice(-3);
console.log(string2);
console.log(string2 + string1 + string2);

//Q7

const var1 = 20;
const var2 = 10;
const var3 = 35;

let maxNum = -Infinity;

console.log(var1 > maxNum ? (maxNum = var1) : maxNum);
console.log(var2 > maxNum ? (maxNum = var2) : maxNum);
console.log(var3 > maxNum ? (maxNum = var3) : maxNum);
console.log("Result is", maxNum);

//Q8
const num8 = 50;
const num9 = 88;
console.log(100 - num8 < 100 - num9 ? num8 : num9);

//Q9

const num10 = "15";
const num11 = "25";
const num12 = "35";

console.log(num10.slice(-1));
console.log(num11.slice(-1));
console.log(num12.slice(-1));

console.log(
  num10.slice(-1) == num11.slice(-1) && num12.slice(-1)
    ? "The last digit is same"
    : "The last digit is not same"
);
