Readme
# Proyecto-Piano 
## Piano en JavaScript
Este proyecto tiene un teclado funcional que puede utilizarce desde el teclado, las notas según el piano real, con notas altas y bajas, teclas altas y bajas, utilizé la funcionalidad para declarar el evento constante de toclar una tecla, cuando dejamos de presionar la tecla se detiene el sonido, así como la función predeterminada ddata-key  
[
const piano = e => {
    
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; 
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('playing');
  };
]
---
