

function playSound(event) { 
    const audio = document.querySelector(`audio[dataKey="${event.keyCode}"]`);
    const key = document.querySelector(`.key[dataKey="${event.keyCode}"]`);
    if(!audio)
     return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');  
    console.log(key)
}

function removeTransition(event) {
    const key = document.querySelector(`.key[dataKey="${event.keyCode}"]`);
    key.classList.remove('play');
}

window.addEventListener('keydown',playSound);
window.addEventListener('keyup',removeTransition);