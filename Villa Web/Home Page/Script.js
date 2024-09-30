
   window.addEventListener('scroll', function() {
    const video = document.getElementById('video');
    const scrollPosition = window.scrollY;
    const maxScale = 1;  
    const minScale = 0.5;  
    const maxTranslateY = -300; 
    const delayThreshold = 150; 

   
    let scale = maxScale - (scrollPosition / 500);
    if (scale < minScale) {
        scale = minScale;
    }

    let translateY = 0;
    if (scrollPosition > delayThreshold) {
        translateY = -((scrollPosition - delayThreshold) / 5);
        if (translateY < maxTranslateY) {
            translateY = maxTranslateY;
        }
    }

    video.style.transform = `scale(${scale}) translateY(${translateY}vh)`;
});

