//setup date
const date =(document.getElementById("date").innerHTML=new Date().getFullYear());
// setup nav
const navbtn =document.getElemnentById("nav-btn");
const navbar=document.getElementById("navbar");
const navclose=document.getElementById("nav-close");
//show nav
navbtn.addEventListener("click",() => {
    navbar.classList.add("showNav");
});
//close nav
navclose.addEventListener("click",() => {
    navbar.classList.remove("showNav");
});
function fun(){
    
}