Number.prototype.log = function () { console.log(this) }
Function.prototype.log = function () { console.log(this.toString()) }

let r

// Identity Funcion
console.log('Identity Funcion')
const I = a => a

r = I(3) // 3
r.log()
r = I(I) // [Function: I]
r.log()


// Self Application Function
console.log('Self Application Function');
const SELF = f => f(f)

r = SELF(I) // [Function: I]
r.log()


// First Function
console.log('First Function')
const FIRST = a => b => a

r = FIRST(7)(11) // 7
r.log()


// Last Function
console.log('Last Function')
const LAST = a => b => b

r = LAST(3)(5) // 5
r.log()


// Chage Function
console.log('Chage Function')
const CHANGE = f => a => b => f(b)(a)

r = CHANGE(LAST)(3)(5)
r.log()


// True or False

// Operation ? First : Last
console.log('True or False | Operation ? First : Last')
const T = FIRST
const F = LAST

// NOT Operator
console.log('NOT Operator')
const NOT = a => a(F)(T)

r = NOT(F)
r.log()
r = NOT(T)
r.log()


// AND Operator
console.log('AND Operator')
const AND = a => b => a(b)(F)

r = AND(T)(T)
r.log()
r = AND(T)(F)
r.log()
r = AND(F)(T)
r.log()
r = AND(F)(F)
r.log()


// OR Operator
console.log('OR Operator')
const OR = a => b => a(T)(b)

r = OR(T)(T)
r.log()
r = OR(T)(F)
r.log()
r = OR(F)(T)
r.log()
r = OR(F)(F)
r.log()


// EQ Operator
console.log('EQ Operator')
const EQ = a => b => a(b)(NOT(b))

r = EQ(T)(T)
r.log()
r = EQ(T)(F)
r.log()
r = EQ(F)(T)
r.log()
r = EQ(F)(F)
r.log()


// XOR Operator
console.log('XOR Operator')
const XOR = a => b => NOT(EQ(a)(b))

r = XOR(T)(T)
r.log()
r = XOR(T)(F)
r.log()
r = XOR(F)(T)
r.log()
r = XOR(F)(F)
r.log()
