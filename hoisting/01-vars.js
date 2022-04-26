// This is what a programmer would write
console.log(someVar) // undefined
var someVar = "algo"

// But JS interpreter hoist var variables to the top of their scope
var someVar
console.log(someVar) // undefined
var someVar = "algo"






