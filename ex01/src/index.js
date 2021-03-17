var myPet = {
    species: "Poodle",
    name: "Bella",
    legs: 4,
    friends: ["Coco", "Charlie"]
};
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };