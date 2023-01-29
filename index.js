function printError(idE, errorMsg) {
    document.getElementById(idE).innerHTML = errorMsg;
}
function iconError(idE) {
    document.getElementById(idE).classList.add("error-icon");
}

function iconSuccess(idE) {
    document.getElementById(idE).classList.remove("error-icon");
    document.getElementById(idE).classList.add("success-icon");
}

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var userpassword = document.contactForm.userpassword.value;
    var userpasswordrepeat = document.contactForm.userpasswordrepeat.value;

    var nameErr = emailErr = userpasswordErr = userpasswordrepeatErr = true;

    // Validacion nombre
    if (name == "") {
        printError("nameErr", "Rellene este campo");
        iconError("username");

    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Nombre no valido. Este campo solo permite caracteres alfabéticos.");
            iconError("username");
        } else {
            printError("nameErr", "");
            nameErr = false;
            iconSuccess("username");
        }
    }

    // Validacion Email
    if (email == "") {
        printError("emailErr", "Rellene este campo");
        iconError("useremail");

    } else {
        // Expresion regular
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Email invalido");
            iconError("useremail");

        } else {
            printError("emailErr", "");
            emailErr = false;
            iconSuccess("useremail");
        }
    }


    // Validacion Password

    if (userpassword == "") {
        printError("userpasswordErr", "Rellene este campo");
        iconError("userpassword");
    } else {
        // Validacion cantidad de caracteres 
        if (userpassword.length > 8) {
            printError("userpasswordErr", "El password no debe tener más de 8 caracteres.");
            iconError("userpassword");
        } else {
            printError("userpasswordErr", "");
            userpasswordErr = false;
            document.getElementById('userpassword').classList.remove("error-icon");
            iconSuccess("userpassword");
        }
    }


    // Validacion Password 
    if (userpasswordrepeat == "") {
        printError("userpasswordrepeatErr", "Rellene este campo");
        iconError("userpasswordrepeat");
    } else {
        if (userpasswordrepeat !== userpassword) {
            printError("userpasswordrepeatErr", "Las contraseñas no coinciden");
            iconError("userpasswordrepeat");

        } else {
            printError("userpasswordErr", "");
            userpasswordrepeatErr = false;
            iconSuccess("userpasswordrepeat");


        }

    }

    if ((nameErr || emailErr || userpasswordErr || userpasswordrepeatErr) == true) {
        return false;
    } else {
        alert("La inscripción ha sido correcta.");
    }
};