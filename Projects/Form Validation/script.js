let section = document.createElement("section");
document.body.style.backgroundImage ="url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
let div = document.createElement("div");
div.style.width = "400px";
div.style.height = "550px";
div.style.backgroundColor = "white";
div.style.position = "absolute";
div.style.left = "32%";
div.style.top = "6%";
div.style.borderRadius = "20px";
div.style.fontFamily = "sans-serif";
div.style.fontWeight="bold"
let h1 = document.createElement("h1");
h1.style.textAlign = "center";
h1.innerText = "REGISTER";
h1.style.color = "rgb(255,200,0)";
h1.style.fontSize="30px"
let h3 = document.createElement("h3");
h3.innerText = "";
h3.style.textAlign = "center";
let forms = document.createElement("form");
forms.setAttribute("id", "form");
forms.setAttribute("autocomplete",false);
let inputgrp = document.createElement("div");
inputgrp.setAttribute("class", "input-Group");
let Name = document.createElement("input");
Name.setAttribute("type", "Text");
Name.setAttribute("placeholder", " Name");
Name.setAttribute("id", "Username");
Name.setAttribute("required", true);

Name.style.margin = "20px 20px";
Name.style.width = "340px";
Name.style.height = "20px";
Name.style.border = "none";
Name.style.borderBottom = "2px solid grey";
Name.style.outline = "none";
let nameerror = document.createElement("div");
nameerror.setAttribute("class", "error");
nameerror.style.paddingLeft = "20px";
nameerror.style.color = "red";
nameerror.style.fontSize = "15px";
let inputgrp1 = document.createElement("div");
inputgrp1.setAttribute("class", "input-Group");
let phone = document.createElement("input");
phone.setAttribute("type", "tel");
phone.setAttribute("placeholder", "Mobile Number");
phone.setAttribute("id", "mobile");
phone.setAttribute("required", true);
phone.style.margin = "20px 20px";
phone.style.width = "340px";
phone.style.height = "20px";
phone.style.border = "none";
phone.style.borderBottom = "2px solid grey";
phone.style.outline = "none";
let phoneerror = document.createElement("div");
phoneerror.setAttribute("class", "error");
phoneerror.style.paddingLeft = "20px";
phoneerror.style.color = "red";
phoneerror.style.fontSize = "15px";
let inputgrp2 = document.createElement("div");
inputgrp2.setAttribute("class", "input-Group");
let mail = document.createElement("input");
mail.setAttribute("type", "email");
mail.setAttribute("placeholder", "E-Mail");
mail.setAttribute("id", "mail");
mail.setAttribute("required", true);
mail.style.margin = "20px 20px";
mail.style.width = "340px";
mail.style.height = "20px";
mail.style.border = "none";
mail.style.borderBottom = "2px solid grey";
mail.style.outline = "none";
let mailerror = document.createElement("div");
mailerror.setAttribute("class", "error");
mailerror.style.paddingLeft = "20px";
mailerror.style.color = "red";
mailerror.style.fontSize = "15px";
let inputgrp3 = document.createElement("div");
inputgrp3.setAttribute("class", "input-Group");
let pwd = document.createElement("input");
pwd.setAttribute("id", "password");
pwd.setAttribute("type", "password");
pwd.setAttribute("placeholder", "Password");
pwd.setAttribute("required", true);
pwd.style.margin = "20px 20px";
pwd.style.width = "340px";
pwd.style.height = "20px";
pwd.style.border = "none";
pwd.style.borderBottom = "2px solid grey";
pwd.style.outline = "none";
let passworderror = document.createElement("div");
passworderror.setAttribute("class", "error");
passworderror.style.paddingLeft = "20px";
passworderror.style.color = "red";
passworderror.style.fontSize = "15px";
let inputgrp4 = document.createElement("div");
inputgrp4.setAttribute("class", "input-Group");
let cpwd = document.createElement("input");
cpwd.setAttribute("type", "password");
cpwd.setAttribute("placeholder", "Confirm Password");
cpwd.setAttribute("id", "cpassword");
cpwd.setAttribute("required", true);
cpwd.style.margin = "20px 20px";
cpwd.style.width = "340px";
cpwd.style.height = "20px";
cpwd.style.border = "none";
cpwd.style.borderBottom = "2px solid grey";
cpwd.style.outline = "none";
let cpassworderror = document.createElement("div");
cpassworderror.setAttribute("class", "error");
cpassworderror.style.paddingLeft = "20px";
cpassworderror.style.color = "red";
cpassworderror.style.fontSize = "15px";
let btn = document.createElement("button");
btn.setAttribute("id", "submit");
btn.innerText = "SUBMIT";
btn.style.cursor = "pointer";
btn.style.margin = "20px ";
btn.style.width = "350px";
btn.style.padding = "15px";
btn.style.fontSize="18px"
btn.style.fontWeight="bold"
btn.style.color="rgb(200,200,200)"
btn.style.borderRadius = "50px";
btn.style.border = "none";
btn.style.outline = "none";
btn.style.backgroundColor = "rgb(51, 109, 76)";
section.appendChild(div);
div.appendChild(h1);
div.appendChild(h3);
div.appendChild(forms);
forms.appendChild(inputgrp);
inputgrp.appendChild(Name);
inputgrp.appendChild(nameerror);
forms.appendChild(inputgrp1);
inputgrp1.appendChild(phone);
inputgrp1.appendChild(phoneerror);
forms.appendChild(inputgrp2);
inputgrp2.appendChild(mail);
inputgrp2.appendChild(mailerror);
forms.appendChild(inputgrp3);
inputgrp3.appendChild(pwd);
inputgrp3.appendChild(passworderror);
forms.appendChild(inputgrp4);
inputgrp4.appendChild(cpwd);
inputgrp4.appendChild(cpassworderror);
forms.appendChild(btn);
document.body.append(section);


btn.addEventListener("mouseover",()=>{
    btn.style.backgroundColor="rgb(55, 165, 103)"
})
btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor="rgb(51, 109, 76)"
})

//Form Submission
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    validateName() &&
    validatePhone() &&
    validateEmail() &&
    validatePassword() &&
    ConfirmPassword()
  ) {
    window.alert("Form submitted sucessfully");
  }
  localStorage.setItem("Name",Username.value);
localStorage.setItem("Mobile Number",mobile.value);
localStorage.setItem("E-mail id",mail.value);
localStorage.setItem("password",password.value);
});

//Name Validation
function validateName() {
  if (Username.value == "") {
    nameerror.innerHTML = "Name is Required";
    return false;
  }
  nameerror.innerHTML = "";
  return true;
}

//E-mail Validation
function validateEmail() {
  if (mail.value == "") {
    mailerror.innerHTML = "E-mail is Required";
    return false;
  }
  if (!mail.value.match(/^([A-Za-z\._\-0-9])*[@][A-Za-z]*[\.]([a-z]{2,4})$/)) {
    mailerror.innerHTML = "Please enter a valid E-mail ";
    return false;
  }
  mailerror.innerHTML = "";
  return true;
}

//Mobile Number Validation
function validatePhone() {
  if (mobile.value == "") {
    phoneerror.innerHTML = "Mobile Number is Required";
    return false;
  }
  if (
    !mobile.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    phoneerror.innerHTML = "Please enter a valid Mobile Number ";
    return false;
  }
  mailerror.innerHTML = "";
  return true;
}

//Password Validation
function validatePassword() {
  if (password.value == "") {
    passworderror.innerHTML = "Password is Required";
    return false;
  }
  if (
    !password.value.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    )
  ) {
    passworderror.innerHTML =
      "Password should contain 1 uppercase,1 Lowercase,1 Digit 1 Alphabet";
    return false;
  }
  passworderror.innerHTML = "";
  return true;
}

//Confirm Password Validation
function ConfirmPassword() {
  if (password.value !== cpassword.value) {
    cpassworderror.innerHTML = "Password does not match";
    return false;
  }
  cpassworderror.innerHTML = "";
  return true;
}


// localStorage.clear();

