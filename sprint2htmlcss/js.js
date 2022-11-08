
//llamar input
const fristName = document.querySelector("#iNombre")
const lastName = document.querySelector("#iApellido")
const email = document.querySelector("#iEmail")
const password = document.querySelector("#iContraseña")

console.log(fristName);
// llamar error
const fristNameError = document.querySelector("#nameError")
const lastNameError = document.querySelector("#lastNameError")
const emailError = document.querySelector("#emailError")
const passwordError = document.querySelector("#passwordError")
// llame al botton
const button = document.querySelector("#btn")
//evento a al botton
button.addEventListener("click", (event) => {
    event.preventDefault();
    validateEmpty(fristName.value, fristName, fristNameError, "nombre no puede estar vacio");
    validateEmpty(lastName.value, lastName, lastNameError, "apellido no puede estar vacio");
    validateEmail(email.value, email, emailError,);
    validateEmpty(password.value, password, passwordError, "contraseña no puede etar vacio");

});

function validateEmail(valueInput, divInput, divError) {
    let regularExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regularExp.test(valueInput) == true) {
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, "Parece que esto no es un correo electrónico");
    }
}


function hideError(divInput, divError) {
    divInput.style.border = ' 1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``
}


function validateEmpty(valueinput, divInput, divError, nameIput) {
    if (valueinput.length == 0) {
        showError(divInput, divError, nameIput)
    } else {
        hideError(divInput, divError)
    }
}

function showError(divInput, divError, error) {
    divInput.style.border = " 1px solid red"
    divError.innerHTML = `<img class="icon-error" src="./img/icon-error.svg" alt="">
<p class="error">${error} </p>`

}

function hideError(divInput, divError) {
    divInput.style.border = " 2px solid gray "
    divError.innerHTML = ``;
}

// fin de la validacion

// cominzo del loca strege










