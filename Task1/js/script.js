// window.onload = function() {loadFunction()};

// function loadFunction(){
//     document.getElementById("navbar").style.padding = "15px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").classList.add("p-3");
    document.getElementById("logo").classList.add("p-3");
    document.getElementById("navbar").classList.remove("p-5");
    document.getElementById("logo").classList.remove("p-5");
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").classList.add("p-5");
    document.getElementById("logo").classList.add("p-5");
    document.getElementById("navbar").classList.remove("p-3");
    document.getElementById("logo").classList.remove("p-3");
  }
}

