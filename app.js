/* =========================
   SIGNUP FUNCTION
========================= */

function signup(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(name=="" || email=="" || password==""){
alert("Please fill all fields");
return;
}

let user={
name:name,
email:email,
password:password
};

localStorage.setItem("user",JSON.stringify(user));

alert("Signup Successful ✅");

window.location.href="login.html";
}


/* =========================
   LOGIN FUNCTION
========================= */

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let saved=JSON.parse(localStorage.getItem("user"));

if(saved && saved.email==email && saved.password==password){

alert("Login Success ✅");

window.location.href="home.html";

}else{

alert("Invalid Login ❌");

}

}


/* =========================
   APPOINTMENT BOOK FUNCTION
========================= */

function book(){

let doctor=document.getElementById("doctor").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;

if(date==""){
alert("Please select date");
return;
}

let appointment={
doctor:doctor,
date:date,
time:time
};

localStorage.setItem("appointment",JSON.stringify(appointment));

alert("Appointment Booked Successfully ✅");

window.location.href="home.html";
}
