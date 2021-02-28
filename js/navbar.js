window.onresize = function(){ location.reload(); }

if(screen.width < 814) {
  document.getElementById("navbtn").style.display = "flex";
  document.getElementById("navlinks").style.display = "none";
  document.getElementById("mynavbar").style.justifyContent = "flex-start";
  document.getElementById('brandname').style.paddingLeft = "10px";
  document.getElementById('fixedside').style.display = "flex";
} else {
  document.getElementById("navbtn").style.display = "none";
  document.getElementById("navlinks").style.display = "block";
  document.getElementById("mynavbar").style.justifyContent = "space-between";
  document.getElementById('brandname').style.paddingLeft = "50px";
  document.getElementById('fixedside').style.display = "none";
}

const openNav = () => {
  const width = document.getElementById("sidenav").style.width;
  if(width == "0px" || !width){
    document.getElementById("sidenav").style.width = "180px";
    document.getElementById("sidenav").style.display = "flex";
  } else {
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("sidenav").style.display = "none";
  }
}

// console.log(document.body.scrollTop);


// var nav = $("#mynavbar");

// $(document).scroll(function(){
//      if($(this).scrollTop() > 100)
//     {
//         // alert("hello");
//         nav.addClass("navbar-scroll"); 
//         // img.css({
//         //     width: "50px",
//         //     height: "50px",
//         //     margin: "10px"
//         // });
//     }
//     else
//     {
//         nav.removeClass("navbar-scroll"); 
//         // img.css({
//         //     width: "100px",
//         //     height: "100px",
//         //     margin: "30px"
//         // });
//     }
// });