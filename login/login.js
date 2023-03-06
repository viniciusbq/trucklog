const email = document.getElementById("email");
const senha = document.getElementById("password");
const SECRET = "ableblué";
//const jwt = require("jsonwebtoken")

let userValid = {
    name: "",
    email: "",
    senha: "",
    telefone: ""
}

let usuarioLogado = JSON.parse(localStorage.getItem("userLogado"));

async function logar() {
    if (email.value === "") {
        window.alert("Digite um E-mail!");
    }
    else if (senha.value === "") {
        window.alert("Digite uma senha!")
    }
    else {
        const resp = await fetch("http://localhost:3000/users")
        console.log(resp)

        const data = await resp.json();
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === email.value && data[i].senha === senha.value){
                console.log("login válido");
                userValid = {
                    nome: data[i].nome,
                    email: data[i].email,
                    senha: data[i].senha,
                    telefone: data[i].telefone
                }
                //const token = jwt.sign({email: data[i].email}, SECRET, {expiresIn: 300});
                let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                localStorage.setItem("token", token);
                localStorage.setItem("userLogado", JSON.stringify(userValid));
                window.location.href = "../index.html"
                break;
            }
            else {
                alert("Email ou senha inválidos");
            }
        }

    }
}

function deslogar(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado")
    window.location.reload();
}
