// function foo(a, b) {
//   alert(a + b);
// }

// function foo() {
//   var now = new Date().getHours();
//   document.write(now);
// }
// function imgSize() {
//   var img_Size = document.getElementById("nana");
//   img_Size.style.height = "140px";
// }
// function add() {
//   var add = document.getElementById("add");
//   add.style.backgroundColor = "red";
// }
function bulbon() {
  var bulbOn = (document.getElementById("myImage").src =
    "../events/light-bulb-on.jpg");
  bulbOn.style.widht = "200px";
}

function bulboff() {
  var bulbOff = (document.getElementById("myImage").src =
    "../events/light-bulb-off.jpg");
  bulbOff.style.widht = "200px";
}
