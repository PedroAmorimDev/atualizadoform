const form = document.querySelector("#formularioEntrar");

form.addEventListener("submit", function validacao(event) {
    event.preventDefault();

    let hasErrors = false;

    const emailentrar = document.querySelector("#emailentrar")
    const senhaentrar = document.querySelector("#senhaentra")
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!emailRegex.test(emailentrar)) {
        document.getElementById('error-required-emailentrar').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-emailentrar').style.display = "none";
    }

    if (!senhaentrar) {
        document.getElementById('error-required-senhalogin').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin').style.display = "none";
    }

    if (senhaentrar.length < 8) {
        document.getElementById('error-required-senhalogin8').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin8').style.display = "none";
    }

    if (!hasErrors) {
        document.getElementById('sucesso').style.display = "block";
    }
})
function darkmode() {
    const pagina = document.body;
    const formulario = document.getElementById("formulario");
    const navcor = document.getElementById(".navcor");

    formulario.classList.toggle("formulario");
    pagina.classList.toggle("dark-mode");

    const botao = document.getElementById('darkmode');
    const isdarkmode = document.body.classList.contains("dark-mode");

    if (isdarkmode === true) {
        botao.textContent = "Modo Claro"
    } else {
        botao.textContent = "Modo Escuro"
    }
}   
