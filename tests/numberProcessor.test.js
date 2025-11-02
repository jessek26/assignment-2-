const {sumOfAll, highLow, average} = require('../src/numberProcessor');

describe('testing sumOfAll function', () => {
    test('should correctly find the sum', () => {
        const result = sumOfAll([2,2])
        expect(result).toBe(4);
    });
    test('should correctly add negative numbers', () => {
        const result = sumOfAll([-4,5]);
        expect(result).toBe(1)
    }); 
    test('should ignore strings', () => {
        const result = sumOfAll([1,1,'1','two']);
        expect(result).toBe(2)
    });
    test('should properly handle empty array', () => {
        const result = sumOfAll([]);
        expect(result).toBe('The array is empty')
    });
})

describe('testing highLow function', () => {
    test('should correctly find high and low numbers', () => {
        const result = highLow([4,1,8,3,9])
        expect(result).toBe('9, 1')
    });
    test('should properly handle negative numbers', () => {
        const result = highLow([5,-4,62,104])
        expect(result).toBe('104, -4')
    });
        test('should properly handle an empty array', () => {
        const result = highLow([])
        expect(result).toBe('The array is empty')
    });
    test('should properly handle a single number array', () => {
        const result = highLow([5])
        expect(result).toBe('5, 5')
    });
    test('should ignore strings', () => {
        const result = highLow(['5', 3, 6])
        expect(result).toBe('6, 3')
    });
    
describe('testing average function', () => {
    test('should correctly find average', () =>{
        const result = average([7,5,3])
        expect(result).toBe(5)
    });
    test('should correctly handle empty array', () =>{
        const result = average([])
        expect(result).toBe('The array is empty')
    });
    test('should ignore strings', () =>{
        const result = average(['5', 7, 5, 3])
        expect(result).toBe(5)
    });
})
})