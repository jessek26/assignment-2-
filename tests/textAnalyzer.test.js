const {totalWords, longestWord, lineCount} = require('../src/textAnalyzer.js');

describe('totalWords function tests', () => {
    test('should count the total number of words', () => {
        const result = totalWords('Hello world');
        expect(result).toBe(2);
    });
    test('should count strictly words, not gaps/spaces and new lines', () => {
        const result = totalWords('first    line \n second line');
        expect(result).toBe(4);
    });
    test('should properly handle empty text', () => {
        const result = totalWords('');
        expect(result).toBe(0);
    });
})

describe('longestWord function tests', () =>{
    test('should return the longest word', () => {
        const result = longestWord('what is the longest word in this sentence');
        expect(result).toBe('sentence');
    });
    test('should not count special characters', () =>{
        const result = longestWord('which is the$#$#%#% longest word????')
        expect(result).toBe('longest');
    });
    test('should properly handle blank text', () => {
        const result = longestWord('');
        expect(result).toBe('there are no words');
    });
    test('should separate words via new lines and gaps', () => {
        const result = longestWord('which \n word   is longest')
        expect(result).toBe('longest')
    });
});

describe('lineCount function tests', () =>{
    test('should return correct number of lines in text', () => {
        const result = lineCount('hello \n world');
        expect(result).toBe(2)
    });
    test('should properly handle text w/o a new line', () => {
        const result = lineCount('hello world')
        expect(result).toBe(1);
    })
    test('should properly handle blank text', () => {
        const result = lineCount('');
        expect(result).toBe(0)
    });
})
