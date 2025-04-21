document.addEventListener('DOMContentLoaded', function() {
    const imgCristiano = document.getElementById('cristiano');
    const imgMessi = document.getElementById('messi');
    const imgVersus = document.getElementById('versus');
  
    let cristianoFlipped = false;
    let messiFlipped = false;
  
    imgVersus.addEventListener('click', function() {
      // Voltear la imagen de Cristiano Ronaldo
      if (!cristianoFlipped) {
        imgCristiano.style.transform = `scaleX(-1)`;
        cristianoFlipped = true;
      } else {
        imgCristiano.style.transform = `scaleX(1)`;
        cristianoFlipped = false;
      }
  
      // Voltear la imagen de Lionel Messi
      if (!messiFlipped) {
        imgMessi.style.transform = `scaleX(-1)`;
        messiFlipped = true;
      } else {
        imgMessi.style.transform = `scaleX(1)`;
        messiFlipped = false;
      }
    });
  });