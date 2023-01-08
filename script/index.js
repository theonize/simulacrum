window.addEventListener('load', event=>{
  if ("ontouchstart" in document.documentElement) { 
    document.querySelector(".hint").innerHTML = "<p>Swipe left or right to navigate</p>";
  }
  
  impress().init()
})