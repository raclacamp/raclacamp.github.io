var preload = document.getElementsByClassName('preload')[0];
	
preload.classList.add('show-preloader');
window.addEventListener('load', function () {
    setTimeout(function () {
        preload.classList.remove('show-preloader');
    }, 1500);
});