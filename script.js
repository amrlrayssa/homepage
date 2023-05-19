document.getElementById("abrir-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("fundo-modal").style.display = "block";
    document.body.classList.add("modal-aberto");
  });
  
  document.getElementsByClassName("fechar")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("fundo-modal").style.display = "none";
    document.body.classList.remove("modal-aberto");
  });
  
  