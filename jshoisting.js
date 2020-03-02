//1. 

var hello = 'world';                                 
console.log(hello);                                   

//2,
var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle);
}
test();

//3. 
var brendan = 'super cool';
console.log(brendan);
function print(){
	brendan = 'only okay';
	console.log(brendan);
}

//4.

var food = 'chicken';
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
    console.log(food);
}
eat();

//5.
var food = "fish";
console.log(food);
function mean() {
    food = "chicken";
	console.log(food);
    console.log(food);
    console.log(food);
}
mean();


//6.
var genre = "disco";
console.log(genre);
function rewind() {
    genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
rewind();
console.log(genre);


//7.
dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
learn();
console.log(dojo);
