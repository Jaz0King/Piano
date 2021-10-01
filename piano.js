
  
  
  const piano = e => {
    
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    console.log(key);
  
    if (!audio) return; 
    audio.currentTime = 0; 
    audio.play();
    key.classList.add('playing');
  };
  
  const removeTransitions = e => {
    if (e.propertyName !== 'transform') return; 
    e.target.classList.remove('playing');
  };
  
  const keys = document.querySelectorAll('.key');
  console.log(keys);
  
  keys.forEach(key => key.addEventListener('transitionend', removeTransitions));
  
  window.addEventListener('keydown', piano);