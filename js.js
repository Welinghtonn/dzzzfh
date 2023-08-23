var email, senha, texto;

function enviar() {
  email = document.getElementById("EMAIL").value;
  senha = document.getElementById("NOME").value;
  texto = document.getElementById("TEXTO").value;
  if (email != "" && senha != "" && texto != "") {
    alert("DEU CERTO");
  } else {
    alert("Email ou Senha estao vazios");
    document.getElementById("EMAIL").style.borderBottom = "4px solid Crimson";
    document.getElementById("NOME").style.borderBottom = "4px solid Crimson";
    document.getElementById("TEXTO").style.borderBottom = "4px solid Crimson";
  }
}
