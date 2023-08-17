
var email, senha, texto


function enviar(){
   email = document.getElementById("EMAIL").value
 senha = document.getElementById("NOME").value
 texto = document.getElementById("TEXTO").value
  if(email != "" && senha != "" && texto != ""){
    alert('DEU CERTO')
  }else{
  alert('Email ou Senha estao vazios')
}
}
