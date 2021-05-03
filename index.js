const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat (Broom) {
    let output = cats.slice()
    output.push(Broom)
    return output
}
function prependCat (Broom) {
    let output = cats.slice()
    output.unshift(Broom)
    return output
}
function removeLastCat (Broom) {
    let output = cats.slice()
    output.pop(Broom)
    return output
}
function removeFirstCat (Broom) {
    let output = cats.slice()
    output.shift(Broom)
    return output
}