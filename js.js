
var email, nome, texto;

function enviar() {
  email = document.getElementById("EMAIL").value;
  nome = document.getElementById("NOME").value;
  texto = document.getElementById("TEXTO").value;
  if (email != "" && nome != "" && texto != "") {
    alert("Deu certo");
  } else {
    alert("Existem campos vazios");
  }
  if (email === "") {
    document.getElementById("EMAIL").style.borderBottom = "3px solid Crimson";
  }
  if (nome === "") {
    document.getElementById("NOME").style.borderBottom = "3px solid Crimson";
  }
  if (texto === "") {
    document.getElementById("TEXTO").style.borderBottom = "3px solid Crimson";
  }
}
