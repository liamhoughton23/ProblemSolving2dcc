"use script";  
function capitolStuff(){
	let words = prompt("enter phrase:");
	words = words.toLowerCase();
	let aWords = words.split(" ");
	let capWords = [];
	for(let i = 0; i < aWords.length; i++) {
		capWords.push(aWords[i].charAt(0).toUpperCase() + aWords[i].slice(1));

	}
	capWords = capWords.join(" ");
	return capWords;
}
let finalResult = capitolStuff();
console.log(finalResult);











//getUserInput = prompt("")-done
//take user input and split at space-done 
//make an empty array
//create a loop that will stop at each index 
//in that index we need it to capitalize the first index of that index
//look into charAt, push, slice