let email = document.querySelector("#email")
let nome = document.querySelector("#nome")
let assunto = document.querySelector("#assunto")
let emailOk = false
let nomeOk = false
let assuntoOk =  false

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1 ) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color = "red"
    }   else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 10) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 200 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha os campos corretamente...")
    }
}