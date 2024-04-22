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


// Chage Function
const CHANGE = f => a => b => f(b)(a)

r = CHANGE(LAST)(3)(5)


// True or False

// Operation ? First : Last
const T = FIRST 
const F = LAST

// NOT Operator
const NOT = a => a(F)(T)

r = NOT(F)
console.log(r)

r = NOT(T)
console.log(r)