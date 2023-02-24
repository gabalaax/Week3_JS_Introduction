// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const Mitzi = {
  id: 1,
  name: "Mitzi",
  email: "mmelloy0@psu.edu",
  gender: "F",
}
const Kennan = {
  id: 2,
  name: "Kennan",
  email: "kdiben1@tinypic.com",
  gender: "M",
  profile: function (){
    return `Hello, my name is Kennan! ${this.name}`
  }
}
const Keven = {
  id: 3,
  name: "Kennan",
  email: "kmummery2@wikimedia.org",
  gender: "M"
}

const Gannie = {
  id: 4,
  name: "Gannie",
  email: "gmartinson3@illinois.edu",
  gender: "M"
}

const Antonietta = {
  id: 5,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F",
  multiplyNums: function() {
    return `${this.multiplyNums(3 * 4)}` 
  }
}

  
  // Write your intern objects here:
  
  
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  console.log(Mitzi);
  
  // Kennan's ID
  console.log(Kennan);
  // Keven's email
  console.log(Keven);
  // Gannie's name
  console.log(Gannie);
  // Antonietta's Gender
  console.log(Antonietta);


  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
  console.log(kennan.profile());
  
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3*4));
  
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  