// var menuItem = document.getElementsByClassName("li")
var menuItem = document.getElementById("menu").getElementsByTagName("li");
var headLine = document.querySelector("#text"); // للمتصفحات الحديثة
var btn = document.getElementById("zar");
var myMenu = document.getElementById("menu");
var counter = 1;

// menuItem[0].innerHTML= "hallo world"
// menuItem[1].innerHTML= "hallo world"
// menuItem[2].innerHTML= "hallo world"
// menuItem[3].innerHTML= "hallo world"
// for = loop = دوران

// for (i = 0; i < menuItem.length; i++){
//     menuItem[i].innerHTML = "hallo world"
// }

// for (i = 0; i < menuItem.length; i++){
//   menuItem[i].addEventListener("click", selectItem);
// }
myMenu.addEventListener("click", selectItem)

// function selectItem(){
//  alert("neu nachrecht");
//  }

function selectItem(n) {
    if (n.target.nodName == "LI") {
        
    }
                                       // headLine.innerHTML = "HALLO WORLD";
  headLine.innerHTML = n.target.innerHTML;
  for (i=0; i < menuItem.length; i++){
  
  menuItem[i].classList.remove("selected");
 }
 n.target.classList.add("selected");
}

btn.addEventListener("click", neuItem);

// function neuItem() {
//   headLine.innerHTML = "hallo world";
//   btn.innerHTML = "klick hier";
//   menuItem[2].innerHTML = "javascript";
//   menuItem[1].innerHTML = "html";
//   menuItem[0].innerHTML = "css";
//   menuItem[3].innerHTML = "React";
// }

function neuItem() {
  myMenu.innerHTML += "<li> neu line"  + counter + "</li>";
  counter++;
//   menuItem[2].innerHTML = "javascript";
//   btn.innerHTML = "klick hier";
}
