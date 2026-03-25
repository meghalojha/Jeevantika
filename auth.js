import { 
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth();

window.signup = function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email=="" || password==""){
alert("Fill all fields");
return;
}

createUserWithEmailAndPassword(auth,email,password)
.then(()=>{
alert("Signup Success ✅");
location.href="login.html";
})
.catch(err=>alert(err.message));

}

window.login = function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email=="" || password==""){
alert("Fill all fields");
return;
}

signInWithEmailAndPassword(auth,email,password)
.then(()=>{
alert("Login Success ✅");
location.href="index.html";
})
.catch(err=>alert(err.message));

}

window.logout = function(){

signOut(auth).then(()=>{
alert("Logged Out");
location.href="login.html";
})

}

window.checkUser = function(){

onAuthStateChanged(auth,user=>{
if(!user){
location.href="login.html";
}
else{
document.getElementById("userEmail").innerText=user.email;
}
})

}
