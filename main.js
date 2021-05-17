//text declaration
const latterO = "O";
const latterX = "X";
var counterAll = [];
if (counterAll == 12) {
    document.alert("hello sir how are you!");
}
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");

f1.addEventListener("click",funcf1);
function funcf1() {
    f1.innerText = latterO;
    f2.innerText = latterX;
    counterAll[0] = 12;
}
console.log(counterAll);