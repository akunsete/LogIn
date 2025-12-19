const emailInput = document.getElementById("Email");
const pswrdInput = document.getElementById("Password");

const logoEmail = document.querySelector(".LogoEmail");
const logoPassword = document.querySelector(".LogoLock");

const eye = document.getElementById("Eyes");
const hidepassword = document.getElementById("Hides");

const submitBtn = document.getElementById("GetStart");

const classClose_Eye = "bx  bx-eye-slash"
const classOpen_Eye = "bx  bx-eye"

let activeStart = false;

let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let dataUser = {
    email : undefined,
    password : undefined
};

const bannedPassword = new Set([
    "admin",
    "123456789",
    "password",
    "hello",
    "good",
    "games",
    "user"
]);

let localstorageData = localStorage.getItem("DataUser");

if(localstorageData) {
    localstorageData = localstorageData || 0;
    console.log(localstorageData);
    window.location.href = "styles.css"
}

function checkPassword(passwords) {
    return bannedPassword.has(passwords);
}

emailInput.addEventListener('click', function(){
    emailInput.addEventListener('input', function(){
    let valueEmail = emailInput.value;    
    if(valueEmail.trim() === "") {
        logoEmail.style.display = "block";
    } else {
        logoEmail.style.display = "none";
    }
});
});

pswrdInput.addEventListener('click', function(){
    pswrdInput.addEventListener('input', function(){
    let valuePassword = pswrdInput.value;    
    if(valuePassword.trim() === "") {
        logoPassword.style.display = "block";
    } else {
        logoPassword.style.display = "none";
    }
});
});

hidepassword.addEventListener('click', function(){
    if(pswrdInput.type === "password") {
        pswrdInput.type = "text"
        eye.className = classOpen_Eye;
    } else if(pswrdInput.type === "text") {
        pswrdInput.type = "password"
        eye.className = classClose_Eye;
    }
});

submitBtn.addEventListener('click', function(){
    if(activeStart === false) {
        activeStart = true;
        let valueEmail = emailInput.value;
        let valuePassword = pswrdInput.value.toLowerCase();
        if(email.test(valueEmail)){
            dataUser.email = valueEmail;
            emailInput.value = "";
        } else {
            return;
        }
        if(checkPassword(valuePassword) && valuePassword) {
            alert("YOU NEED USER ANOTHER PASSWORD")
            return;
        } else {
            dataUser.password = valuePassword;
            pswrdInput.value = "";
        }
        const jsonUser = JSON.stringify(dataUser);
        localstorageData = localStorage.setItem("DataUser", jsonUser)
        window.location.href = "styles.css"
        activeStart = false;
    } 
});