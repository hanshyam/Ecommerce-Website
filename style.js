let b = 0;
let togglenavbar = document.getElementsByClassName('togglenavbar')[0];
let burger = document.querySelector('.navtoggle');
let numpro = document.getElementsByClassName('numpro');
let numproinput = document.getElementById("numproinput");
let numprobtn = document.getElementById("numprobtn");

let cdata = JSON.parse(localStorage.getItem("data"))
for(let i =0;i<cdata.length;i++)
{
   b += Number(cdata[i].Quantity)
   numpro[0].innerHTML = b; 
   numpro[1].innerHTML = b; 
}
setInterval(() => {
  if (window.outerWidth >= 1200) {
    if (togglenavbar.style.opacity === "1") {
      togglenavbar.style.opacity = "0";
      togglenavbar.style.zIndex = "-1";
    }
  }
}, 100);


burger.addEventListener('click', () => {
  if (togglenavbar.style.opacity === "0") {
    togglenavbar.style.opacity = "1";
    togglenavbar.style.zIndex = "2";
  }
  else {
    togglenavbar.style.opacity = "0";
    togglenavbar.style.zIndex = "-1";
  }
})


let search = document.getElementsByClassName("search")[0];
let searchBar = document.getElementsByClassName('search-bar')[0];
let searchBtn = document.getElementsByClassName('search-btn')[0];
let menuSearchBtn = document.getElementsByClassName('menu-search-btn');

Array.from(menuSearchBtn).forEach((element) => {
  element.addEventListener('click', () => {
    if (search.style.opacity === "0") {
      search.style.opacity = "1";
      search.style.zIndex = "3";
    }
    else {
      search.style.opacity = "0";
      search.style.zIndex = "-3";
    }
  })
})
let product = document.getElementsByClassName('product');
let pname = document.getElementsByClassName('p-name');
let pprice = document.getElementsByClassName('p-price');
let filter = document.getElementsByClassName('search-bar').value;
function searrch() {

  for (let i = 0; i < pname.length; i++) {
    let e = product[i].getElementsByClassName('p-name')[0];
    let d = e.innerHTML || e.innerText || e.textContent;
    if (d.indexOf(filter) > -1) {
      product[i].style.display = "";
    }
    else {
      product[i].style.display = "none";
    }
  }
}

var b2 = document.getElementsByClassName('right-nav')[0].querySelectorAll('a');
for (var i = 0; i < b2.length; i++) {
  b2[i].addEventListener("click", function () {
    var current2 = document.getElementsByClassName("active")[0];
    if (current2.innerText !== b[i].innerText) {
      current2.className = current2.className.replace("active", "menu-item");
      this.className = this.className.replace("menu-item", "active");
    }
  });
}
let cartdata = [

]

let addtocart = document.getElementsByClassName('p-button')
let table = document.getElementsByTagName('table')[0]
for (let t = 0; t < addtocart.length; t++) {
  addtocart[t].addEventListener('click', () => {
    let imgg = product[t].querySelector('img');
    cartdata = JSON.parse(localStorage.getItem("data"))
    cartdata.push({
        Remove : "",
        Image : imgg.src,
        Product : `${pname[t].innerText}`,
        Price : `${pprice[t].innerHTML}`,
        Quantity : 1,
        Total : `${pprice[t].innerHTML}`
     });
     localStorage.setItem("data",JSON.stringify(cartdata))
  })
}
// let cdata = JSON.parse(localStorage.getItem("data"))




console.log(b)
numpro[0].innerHTML = b
numpro[1].innerHTML = b
