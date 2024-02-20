// Manipulate by Adding ‘Yellow’ to the end of the ‘colors’ array and ‘Purple’ to the beginning of the array.Remove the last element of the array and print the final array.

const colors = ["Red", "Blue", "Green"];

//Adding element to end of array.
colors.push("Yellow");
//adding element to start of array
colors.unshift("Purple");
console.log(colors);

//removing last element of array.
colors.pop();
console.log(colors);