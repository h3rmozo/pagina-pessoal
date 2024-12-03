function copyText() {
    // Seleciona o texto
    const numberToCopy = document.getElementById("numberToCopy").innerText;

    // Usa a API Clipboard para copiar o texto
    navigator.clipboard.writeText(numberToCopy).then(() => {
        setTimeout(() => {
            copyMessage.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const conhecimentosDiv = document.getElementById('conhecimento-gerais');
    
    // Inicialmente, ocultar o conteúdo e remover a classe border-sec
    conhecimentosDiv.style.display = 'none';
    
    // Função para alternar a visibilidade e a classe
    toggleButton.addEventListener('click', () => {
      if (conhecimentosDiv.style.display === 'none') {
        conhecimentosDiv.style.display = 'block';
      } else {
        conhecimentosDiv.style.display = 'none';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleIcon = document.getElementById('toggleIcon');
  
    toggleButton.addEventListener('click', function() {
      // Alterna a classe do ícone entre "fa-plus" e "fa-minus"
      if (toggleIcon.classList.contains('fa-plus')) {
        toggleIcon.classList.remove('fa-plus');
        toggleIcon.classList.add('fa-minus');
      } else {
        toggleIcon.classList.remove('fa-minus');
        toggleIcon.classList.add('fa-plus');
      }
    });
  });