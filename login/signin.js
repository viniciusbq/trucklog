const nameTxt = document.getElementById("name");
const emailTxt = document.getElementById("email");
const passTxt = document.getElementById("password");
const telTxt = document.getElementById("phone");

const patternTelRgx = /^\(?[1-9]{2}\)?\s?[2-9][0-9]{3,4}\-?[0-9]{4}$/;
const patternEmailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const patternPassRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

console.log(patternTelRgx.test("(51) 4234-5678"))

var user = {
    nome: "",
    email: "",
    senha: "",
    telefone: ""
}

function cadastrar() {
    if (nameTxt.value != "") {
        user.nome = nameTxt.value;
    }
    else {
        alert("Digite um nome");
    }

    if (patternEmailRgx.test(emailTxt.value)) {
        user.email = emailTxt.value;
    }
    else {
        alert("Digite um E-mail válido");
    }

    if (patternPassRgx.test(passTxt.value)) {
        user.senha = passTxt.value;
    }
    else {
        alert("Digite uma senha válida");
    }

    if (patternTelRgx.test(telTxt.value)) {
        user.telefone = telTxt.value;
    }
    else {
        alert("Digite um telefone válido")
    }

    if (user != null) {
        fetch('https://json-login-kappa.vercel.app/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        alert("cadastrado!")
        window.location.href = '../../index.html';
    }

}

async function post(data) {
    try {
        // Create request to api service
        const req = await fetch('https://json-login-kappa.vercel.app/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            // format the data
            body: JSON.stringify({
                nome: data.nome,
                email: data.email,
                senha: data.senha,
                telefone: data.telefone
            }),
        });
        console.log("AAAA");
        const res = await req.json();

        // Log success message
        console.log(res);
    } catch (err) {
        console.error('Error:', err);
    }
}

// Call your function
post() // with your parameter of Course
