var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
function myFunction(objName, objValue) {
  lion[objName] = objValue;
  return lion;
}
myFunction("roar", "roar-roar");
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;
