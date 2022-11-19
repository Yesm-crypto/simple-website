let login_btn = document.getElementsByClassName("login_btn");
let sign_up_btn = document.getElementsByClassName("get_started_btn");

for(let i = 0; i<login_btn.length; i++){
    login_btn[i].addEventListener("click", ()=>{
        window.location.href = "login-form.html";
    });
}
console.log(sign_up_btn.length);
for(let i = 0; i<sign_up_btn.length; i++){
    sign_up_btn[i].addEventListener("click", ()=>{
        window.location.href = "sign-up-form.html";
    });
}

function submitMessage(){
    let name = document.getElementById("name");
    if(name.value == ""){
        name.focus();
        return false;
    }
    let email = document.getElementById("email");
    if(email.value == ""){
        email.focus();
        return false;
    }
    let phone = document.getElementById("phone");
    if(phone.value){
        if (phone.value.length<10){
            alert("Please provide valid phone number!")
            phone.focus()
            return false;
        }
    } else {
        phone.focus();
        return false;
    }
    let message = document.getElementById("message");
    if(message.value == ""){
        message.focus();
        return false;
    }
    alert("Message sent!")
}