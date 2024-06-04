const darkModeToggle = document.querySelector('.switch input[type="checkbox"]');
const body = document.body;

function setMode(isDarkMode){
    if(isDarkMode){
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    else{
        body.classList.remove('dark-mode');
        darkModeToggle.checked = false;
    }
}

const isDarkMode = localStorage.getItem('dark-mode') === 'true';

setMode(isDarkMode);

darkModeToggle.addEventListener('change', function(){
    const isDarkMode = darkModeToggle.checked;
    localStorage.setItem('dark-mode', isDarkMode);
    setMode(isDarkMode);
});