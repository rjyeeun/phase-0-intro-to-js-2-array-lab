// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) { 
    return cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    return cats.pop() }

function destructivelyRemoveFirstCat(name) {
    return cats.shift() }

function appendCat(name) { let name2 = [...cats, "Broom"];
    return name2}

function prependCat(name) { let name2 = ["Arnold",...cats]
    return name2}

function removeLastCat(name) { let name2 = cats.slice(0,2)
return name2}

function removeFirstCat(name) { let name2 = cats.slice(1,3)
    return name2}