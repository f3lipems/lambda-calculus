let r

// Identity Funcion
const I = a => a

r = I(3) // 3
r = I(I) // [Function: I]


// Self Application Function
const SELF = f => f(f)

r = SELF(I) // [Function: I]


// First Function
const FIRST = a => b => a

r = FIRST(7)(11) // 7


// Last Function
const LAST = a => b => b

r = LAST(3)(5) // 5

console.log(r)