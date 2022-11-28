function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "Matheus" && senha == "admin") {
        alert("sucesso");
        location.href = "index.html";
    } else {
        alert("usuario ou senha incorreta");
    }

}