

/*

 console.log("Hello from treehouse.js");
 console.log("Hello again");

var name = prompt("what is your name?");
alert("Hello " + name);

name = "Nick";
console.log("The user's name is " + name);
*/

/*

var name = prompt("WHat is your name?");

if (name) {
    console.log("if block")
} else {
    console.log("Else Block")
}


*/

/*
var counter = 10;
while (counter) {
    console.log("Hello World");
    console.log("Hi")
    counter = counter - 1;
}

while (prompt("What is your name?")){
    console.log ("got your name!")
}
*/
/*
for (var counter= 10;counter; counter = counter -1) {
    console.log("Hello World", counter)
}
 console.log("before");

console.log("After");
*/


/*
var msg="hi";

function test(){
      msg = 'bye';
    return msg;
}
test();
console.log(msg)

*/


/*
console.log(smooth())
var temp = [32,44,48,52,55,54,60,63,60,57,54];

    function smooth(points){
        var array=[];
            for(var i = 0; i < points.length; i++){
                if (i === 0 || i === points.length-1) {
                    array.push(points[i]);
                }   else{
                    var normalized = (points[i-1] + points[i] + points [i+1]) / 3;
                    array.push(normalized);
        return array;
    }
*/
/*
var num=[1,2,4,7,8,9];

function maxVals(arr, num) {
    maxVals([1,3,9,8,4,7,2,10]5);
    var newarr = [i];
    for (var i = 0, i < arr.length; i++){
    if (arr <= max);
    newarr.push();
}
}
    */

/*
Var friends = ["nick, michael, amit"];

console.log ("friends");
*/
/*
reverse("test");
function reverse(str){
    var letters = str.split(',');
    for(var i = letters.length; i >= 0; i--){

    }
*/
/*
var friends=["amanda", "joanna", "suzie", "ashlee", "ashley"];
console.log (friends);
console.log (friends.length);

friendNumber = 1;
console.log (friends[friendNumber]);

for(var i=0; i < friends.length;i+=1) {
    console.log(friends[i]);
}


var me = {
    first_name: "James",
    last_name: "Sondag",
    "Employee Number": 1
}

console.log(me.first_name);
console.log(me.last_name);
console.log(me["Employee Number"]);
console.log(me);

var key = "first_name"
console.log(me[key])

*/

var sayHello = function () {
    var message = "Hello";
    message = message + " World!"
    console.log(message);
}

var debug = function (message) {
    console.log ("Debug", message);
}

var doubleNumber = function (num){
    return num * 2;
}

debug (doubleNumber(452));

sayHello()

var x = 1

debug ("x has been set")

sayHello();

x += 10;
var y = 100;
debug ("x has been increased. y has been set")

sayHello();
