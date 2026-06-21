
let app = document.getElementById("app");

app.innerHTML = "Sistema carregando...";

setTimeout(() => {
  app.innerHTML = "Diagnóstico funcionando!";
}, 1000);
