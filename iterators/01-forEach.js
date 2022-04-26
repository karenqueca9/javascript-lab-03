// Imperative style

const someArray = ['kiwi','peras','bananas']

for (i in someArray){
  const sentence = `I like ${someArray[i]}`
  console.log(sentence)  
}

// The functional or declarative styles would be like:

someArray.forEach(function(fruit){
    const sentence = `I like ${fruit}`
    console.log(sentence)
})

// mini challenge print each element of the array in UPPERCASE

someArray.forEach(function(fruit){
    const sentence = `I like ${fruit.toUpperCase()}`
    console.log(sentence)
})