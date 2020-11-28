let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let nomeOK = false
let emailOK = false
let assuntoOK = false



nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '101%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style ="margin:1px; margin-left:8px; color: red;"
       let nomeOK = false
    }
    else {
        txtNome.innerHTML = ' '
        txtNome.style.margin = "20px"
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style ="margin:1px; margin-left:8px; color: red;"
        let emailOK = false
    }
    else {
        txtEmail.innerHTML = ' '
        txtEmail.style.margin = "20px"
        emailOK = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >=100){
        txtAssunto.innerHTML = "Texto grande demais. Máximo: 100 caracteres"
        txtAssunto.style ="margin:1px; margin-left:8px; color: red;"
        let assuntoOK = false
    }
    else {
        txtAssunto.innerHTML = " "
        txtAssunto.style.margin = "20px"
        assuntoOK = true
    }
}

function enviar(){
    if (nomeOK && emailOK && assuntoOK){
        alert('Formulário enviado com sucesso')
    }
    else{
        alert('Favor preencher o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = "500px"
    mapa.style.height = "500px"
}

function mapaNormal(){
    mapa.style.width = "300px"
    mapa.style.height = "300px"
}