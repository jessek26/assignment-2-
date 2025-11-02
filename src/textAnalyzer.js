const fs = require('fs');

// Read the entire file as text
const sampleText = fs.readFileSync('./data/sample-text.txt', 'utf8');
const quotes = fs.readFileSync('./data/quotes.txt', 'utf8');

function totalWords (text) {
if (!text || text.trim() === ''){
    return 0;
}
//if there are no words returns 0 

return text.trim().split(/\s+/).length
}
//makes an array full of each word, returns how many items are in the array.


function longestWord(text) {
if (!text || text.trim() === ''){
    return 'there are no words';
}
//if there are no words
let words = text.replace(/[^a-zA-Z0-9\s]/g, '');
//trims out everything that is not letters so we can focus on the words 
words = words.trim().split(/\s+/);
//makes an arrary with each word stored
let longest = words[0];
//stores first word in array as the longest word
for(let i=1; i<words.length; i++){
    if (words[i].length > longest.length){
        longest = words[i];
    }
}
return longest}
//loops through the array and returns the longest word 

function lineCount(text){
    const lines = text.split('\n')
    if (!text || text.trim() === ''){
    return 0;
}
    return lines.length; 
}

console.log(totalWords(quotes));
console.log(longestWord(quotes));
console.log(lineCount(quotes));

console.log(totalWords(sampleText));
console.log(longestWord(sampleText));
console.log(lineCount(sampleText));

module.exports = {totalWords, longestWord, lineCount};