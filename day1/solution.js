import { input } from "./input.js";

// PART I
// Find the two entries that sum to 2020
// Multiply those two numbers together

function sumOfTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 2020) {
                return `
                    ${console.log(arr[i] + ' + ' + arr[j] + ' = ' + (arr[i] + arr[j]))}
                    ${console.log(arr[i] + ' * ' + arr[j] + ' = ' + (arr[i] * arr[j]))}
                `
            }
        }
    }
}

//  PART II
// Find the three entries that sum to 2020
// Multiply those three numbers together

function sumOfThree(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 2020) {
                    return `
                        ${console.log(arr[i] + ' + ' + arr[j] + ' + ' + arr[k] + ' = ' + (arr[i] + arr[j] + arr[k]))}
                        ${console.log(arr[i] + ' * ' + arr[j] + ' * ' + arr[k] + ' = ' + (arr[i] * arr[j] * arr[k]))}
                    `
                }
            }
        }
    }
}

sumOfTwo(input)
sumOfThree(input)