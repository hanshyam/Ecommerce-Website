let togglenavbar = document.getElementsByClassName('togglenavbar')[0];
let burger = document.querySelector('.navtoggle');
setInterval(()=>{
if(window.outerWidth>=1200)
{
      if(togglenavbar.style.opacity === "1")
      {
        togglenavbar.style.opacity = "0";
        togglenavbar.style.zIndex = "-1";
      } 
}
else{
    console.log("1")
  }
},100);

burger.addEventListener('click',()=>{
      if(togglenavbar.style.opacity==="0")
      {
       togglenavbar.style.opacity = "1";
       togglenavbar.style.zIndex = "2";
      }
      else{
       togglenavbar.style.opacity = "0";
       togglenavbar.style.zIndex = "-1";
      }
})


    