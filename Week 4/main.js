// var myCity = {
//   name: "Dubai",
//   country: "UAE",
//   place: "Dubai Mall",
// };

// console.log(myCity.name); // Outputs: Dubai
// console.log(myCity.country); // Outputs: UAE

// var myCity = ["Dubai", "UAE", "Dubai Mall"];

// console.log(myCity[0]); // Outputs: Dubai

// var myCities = [
//   {
//     name: "Dubai",
//     country: "UAE",
//     place: "Dubai Mall",
//   },
//   {
//     name: "Milan",
//     country: "Italy",
//     place: "Duomo Di Milano",
//   },
// ];

// console.log(myCities[1].country); // Outputs: Italy


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://AjaxxIsHere2.github.io/AjaxxIsHere2/city.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();
