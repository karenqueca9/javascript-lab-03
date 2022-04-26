// Filter returns a sub array with the result of the callback function

const words = ['hola','mundo','que','tal','como','estas','?']

const result = words.filter(function(word){
    return word.length > 3
})

console.log(result)

const numbers = [1,2,3,4,5,6,7,8,9]

const evenNums = numbers.filter(function(num){
    return num % 2 == 0
})

console.log(evenNums)