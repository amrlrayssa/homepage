// Função para abrir o modal com o vídeo correto
function openModal(videoId) {
  const modal = document.getElementById('myModal');
  const videoFrame = document.getElementById('videoFrame');
  videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
  modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('myModal');
  const videoFrame = document.getElementById('videoFrame');
  videoFrame.src = ''; // Remova a URL do vídeo para parar de reproduzir
  modal.style.display = 'none';
}

// Feche o modal se o usuário clicar fora da área do modal
window.addEventListener('click', function (event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
      closeModal();
  }
});
