function signup(){

let user={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value
};

localStorage.setItem("user",JSON.stringify(user));

alert("Signup Successful");
window.location="login.html";
}

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let saved=JSON.parse(localStorage.getItem("user"));

if(saved && saved.email==email && saved.password==password){
alert("Login Success");
window.location="home.html";
}
else{
alert("Invalid Login");
}
}
