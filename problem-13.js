const numbers = [3, 2, 3, 5, 5, 4, 6, 7, 7, 8];


const uniqueNumber = [...new Set(numbers)].filter((num) => num > 3).sort((a,b)=> a-b)

console.log("uniqueNumber", uniqueNumber)