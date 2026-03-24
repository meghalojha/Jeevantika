function emergency(){window.location.href="tel:108"}

function hospital(){window.open("https://www.google.com/maps/search/hospital+near+me")}

function addCart(name){
let c=JSON.parse(localStorage.getItem("cart")||"[]")
c.push(name)
localStorage.setItem("cart",JSON.stringify(c))
alert("Added to Cart")
}

function confirmAppointment(){
db.collection("appointments").add({
doctor:"Mehta",
time:"10AM",
user:auth.currentUser.email
}).then(()=>alert("Booked"))
}
