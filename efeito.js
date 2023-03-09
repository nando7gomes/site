// seleciona todas as divs com a classe "box"
const boxes = document.querySelectorAll('.box');

// adiciona um listener de rolagem na janela
window.addEventListener('scroll', () => {
  // para cada div, verifica se ela está na área visível da janela
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if (boxTop < windowHeight && boxBottom >= 0) {
      // se a div estiver na área visível, adiciona a classe "show"
      box.classList.add('show');

      // adiciona a classe de transição correspondente
      if (box.classList.contains('type-1')) {
        box.classList.add('type-1-show');
      } else if (box.classList.contains('type-2')) {
        box.classList.add('type-2-show');
      }else if (box.classList.contains('type-3')) {
        box.classList.add('type-3-show');
      }
    } else {
      // se não estiver na área visível, remove a classe "show"
      box.classList.remove('show');

      // remove a classe de transição correspondente
      if (box.classList.contains('type-1')) {
        box.classList.remove('type-1-show');
      } else if (box.classList.contains('type-2')) {
        box.classList.remove('type-2-show');
      }else if (box.classList.contains('type-3')) {
        box.classList.remove('type-3-show');
      }
      
    }
  });
});


