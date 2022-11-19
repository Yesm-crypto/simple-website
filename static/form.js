function validateSignUpForm(){
    let userName = document.getElementById("userName");
    if (userName.value == ""){
        userName.focus();
		return false;
    }
    let email = document.getElementById("email");
    if (email.value == ""){
        email.focus();
		return false;
    }
    let password = document.getElementById("password");
    if (password.value == ""){
        password.focus();
		return false;
    } else if(password.value.length < 8){
        password.focus();
		return false;
    }
    let cPassword = document.getElementById("cPassword");
    if (cPassword.value){
        if (cPassword.value != password.value){
            alert("Passwords do not match.")
            cPassword.focus();
            return false;
        }
    } else{
        cPassword.focus();
        return false;
    }
}

function validateLoginForm(){
    let userName = document.getElementById("userName");
    if (userName.value != "admin"){
        userName.focus();
        alert("Invalid username!")
		return false;
    }
    let password = document.getElementById("password");
    if (password.value != "admin"){
        alert("Invalid password!")
        password.focus();
		return false;
    }
    return true;
}


let pw_eyes = document.getElementsByClassName("pw-eye");
for (let j=0; j<pw_eyes.length;j++){
    pw_eyes[j].addEventListener("click",()=>{
        pw_eyes[j].classList.toggle("eye-open");
        pw_eyes[j].classList.toggle("eye-closed");
        if(pw_eyes[j].classList.contains("eye-closed")){
            pw_eyes[j].setAttribute("src","./static/assets/images/closed_eye.png");
            pw_eyes[j].previousElementSibling.setAttribute("type","password")
        } else if(pw_eyes[j].classList.contains("eye-open")){
            pw_eyes[j].setAttribute("src","./static/assets/images/open_eye.png");
            pw_eyes[j].previousElementSibling.setAttribute("type","text")
        }
    })
}
