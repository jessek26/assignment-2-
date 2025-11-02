const fs = require('fs');
const sampleNumbers = fs.readFileSync('./data/sample-numbers.txt', 'utf8');
//loading sample-number.txt data

//converting text to array 
const lines = sampleNumbers.split('\n');
const scores = [];

for (let i = 0; i<lines.length; i++) {
    const line = lines[i].trim(); //removes whitespace
    if(lines.length > 0) { //if the line isnt empty
        scores.push(parseFloat(line)); //converts strings from data file to floats 
    }
}

function sumOfAll(nums) {
    let sum = 0;
    if (!nums || nums.length === 0) {
        return 'The array is empty';}//what gets returned if the array is empty. 

    for(let i=0; i<nums.length; i++){
        if(typeof nums[i] === 'number'){ //verifies that array element is a number
        sum += nums[i] //adds each number to the sum
        } 
    }
    return sum
}

function highLow(nums){
    if (!nums || nums.length === 0) {
        return 'The array is empty';}//what gets returned if the array is empty. 

    sortedNums = nums.sort((a,b) => a-b) //sorts the numbers in order from least to greatest
    return `${sortedNums[sortedNums.length-1]}, ${sortedNums[0]}`;
}

function average(nums) {
    let sum = 0;
    let skips = 0; //will track elements of array that arent numbers 
    if (!nums || nums.length === 0) {
        return 'The array is empty';}//what gets returned if the array is empty.

    for(let i=0; i<nums.length; i++){ 
        if(typeof nums[i] === 'number'){ //verifies that array element is a number
        sum += nums[i] //adds each number to the sum
        }
        else if (typeof nums[i] !== 'number') {
            skips += 1
        }
    }
    let avg = Math.round(sum / (nums.length - skips)); //rounds to the whole number of the quotient of the sum divided by amount of numbers (not counting skips)
    return avg
}

console.log(sumOfAll(scores));
console.log(highLow(scores));
console.log(average(scores));

module.exports = {sumOfAll, highLow, average};