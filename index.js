var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
destructivelyPrependKitten("Bob");

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
destructivelyRemoveFirstKitten();

//error
function appendKitten(name) {
  return [kittens,...name];
}
appendKitten("Broom");

function prependKitten(name) {
 return [name,...kittens];
}
prependKitten("Arnold");

//error
function removeLastKitten() {
  return kittens.slice(kittens.length-1);
}
removeLastKitten();

//error
function removeFirstKitten() {
  return (kittens - kittens.slice(0));
}
removeFirstKitten();