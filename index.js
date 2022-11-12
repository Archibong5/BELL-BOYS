
// SECOND CONTAINER
var numberOfBoyButtons = document.querySelectorAll(".btn2").length;

for (v = 0; v < numberOfBoyButtons; v++){
  document.querySelectorAll(".btn2")[v].addEventListener("click", function(){
    var buttonInnerHTML2 = this.innerHTML;
    // greetings(buttonInnerHTML2);
    animation(buttonInnerHTML2);
    animation2(buttonInnerHTML2);

  })
}


// KEYBOARD
document.addEventListener("keypress", function(event){
  // greetings(event.key);
  animation(event.key);
  animation2(event.key);

})

//
// function greetings(key){
//   switch (key) {
//     case "m":
//     alert("Hello, My name is " + bellBoy1.name + " from "  + bellBoy1.country + ". I am " + bellBoy1.age + " years old.");
//
//       break;
//       case "n":
//       alert("Hello, My name is " + bellBoy2.name + " from "  + bellBoy2.country + ". I am " + bellBoy2.age + " years old.");
//
//         break;
//         case "o":
//         alert("Hello, My name is " + bellBoy3.name + " from "  + bellBoy3.country + ". I am " + bellBoy3.age + " years old.");
//
//           break;
//     default: console.log(key);
//
//   }
// }

function animation(currentButton){
  var activeButton = document.querySelector(".second-container");
  activeButton.classList.add("shine");

  setTimeout(function(){
    activeButton.classList.remove("shine");
  }, 200);
}

function animation2(currentButton2){
var activeButton2 = document.querySelector(".b-boys");
activeButton2.classList.add("pop");

setTimeout(function(){
  activeButton2.classList.remove("pop");
}, 200);
}

function BellBoy(name, country, age){
  this.name = name;
  this.country = country;
  this.age = age;
  this.clean = function(){
    alert("cleaning in progress")
  }
}

var bellBoy1 = new BellBoy("Timmy", "Nigeria", 25);

var bellBoy2 = new BellBoy("James", "USA", 26);


var bellBoy3 = new BellBoy("Scott", "UK", 27);
