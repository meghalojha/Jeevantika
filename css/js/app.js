function emergency(){location.href="tel:108"}
function map(){window.open("https://maps.google.com")}
function addCart(n){
let c=JSON.parse(localStorage.getItem("cart")||"[]")
c.push(n)
localStorage.setItem("cart",JSON.stringify(c))
alert("Added")
}
function aiCheck(){
let s=sym.value.toLowerCase()
if(s.includes("heart")) res.innerHTML="Consult Cardiologist"
else res.innerHTML="Consult General Physician"
}
