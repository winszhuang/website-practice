/*click*/
var btn = document.getElementById("click");
var extramenu = document.getElementById("mmm");

btn.addEventListener("click", () => {
    extramenu.style.display = "block";
})

var x = document.querySelector("#x");
x.addEventListener("click", () => {
    extramenu.style.display = "none";
})


/*mouseOver*/
var pic1 = document.querySelector("article>.block>.pic1");
var pic2 = document.querySelector("article>.block>.pic2");

function mouseOut(){
    this.style.opacity = 0.6;
}
function mouseOver(){
    this.style.opacity = 1;
}
pic1.addEventListener("mouseover", mouseOver);
pic1.addEventListener("mouseout", mouseOut);
pic2.addEventListener("mouseover", mouseOver);
pic2.addEventListener("mouseout", mouseOut);

pic1.addEventListener("mousemove", function(event) {
    myFunction(event);
  });

function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
  }

// pic1.addEventListener("mouseover", () => {  爛寫法
//     pic1.style.opacity = "1";
// })
// pic1.addEventListener("mouseout", () => {
//     pic1.style.opacity = "0.6";
// })

// pic2.addEventListener("mouseover", () => {
//     pic2.style.opacity = "1";
// })
// pic2.addEventListener("mouseout", () => {
//     pic2.style.opacity = "0.6";
// })


