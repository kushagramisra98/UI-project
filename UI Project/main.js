let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");

let form = document.getElementById("form");

//for username
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(username.value.trim() === ""){
        errorMsg[0].innerHTML="Username can not be empty";
        failureIcon[0].style.opacity = 1;
        successIcon[0].style.opacity = 0;
    }
    else{
        errorMsg[0].innerHTML="";
        failureIcon[0].style.opacity=0;
        successIcon[0].style.opacity=1;
    }

    if(email.value.trim() === ""){
        errorMsg[1].innerHTML="Email can not be empty";
        failureIcon[1].style.opacity = 1;
        successIcon[1].style.opacity = 0;
    }
    else{
        errorMsg[1].innerHTML="";
        failureIcon[1].style.opacity=0;
        successIcon[1].style.opacity=1;
    }

    if(password.value.trim() === ""){
        errorMsg[2].innerHTML="Password can not be empty";
        failureIcon[2].style.opacity = 1;
        successIcon[2].style.opacity = 0;
    }
    else{
        errorMsg[2].innerHTML="";
        failureIcon[2].style.opacity=0;
        successIcon[2].style.opacity=1;
    }
     
})