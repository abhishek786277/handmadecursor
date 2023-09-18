var box = document.querySelector(".box");
var body = document.querySelector("body");

body.addEventListener("mousemove", (hoo) => {
//   console.log(hoo);
//   box.style.backgroundColor = "black";
  box.style.left = `${hoo.x}px`;
  box.style.top = `${hoo.y}px`;
 
});
