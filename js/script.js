// CHANGE BG WHEN GO MOBILE
function updateVideoSource(mediaQuery) {
    var video1 = document.getElementById("video-background");
    var video2 = document.getElementById("video-background-2");

    if (video1) {
        video1.src = mediaQuery.matches ? '../assets/videos/portrait/nsx.mp4' : '../assets/videos/landscape/mainvid.mp4';
    }

    if (video2) {
        video2.src = mediaQuery.matches ? '../assets/videos/portrait/c61.mp4' : '../assets/videos/landscape/rwb.mp4';
    }
}

var mediaQuery = window.matchMedia("(max-width: 768px)");

updateVideoSource(mediaQuery);

mediaQuery.addEventListener("change", function() {
    updateVideoSource(mediaQuery);
});

// SCROLL SVG SCRIPT
const scrollIcon = document.querySelector('.scroll-icon-container');
const gameplayDescription = document.getElementById('gameplay-description');

if(scrollIcon && gameplayDescription){ //THIS CAUSED THE PROBLEM HOLY SKIBIDI
    scrollIcon.addEventListener('click', () => {
        gameplayDescription.scrollIntoView({ behavior: 'smooth' });
    });
}

// HAMBURGER MENU SCRIPT
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

//  SUBSCRIPTION FORM LOGIC

function validateForm(){
    const form = document.getElementById('subscription-form');
    const roleInputs = document.getElementsByName('subs-role');
    const nameInput = document.getElementById('subs-name');
    const emailInput = document.getElementById('subs-email');
    const passwordInput = document.getElementById('subs-password');
    const dobInput = document.getElementById('subs-date');
    const genderSelect = document.getElementById('subs-gender');
    const agreeCheckbox = document.getElementById('subs-agree');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerText='';

    let isRole = false;
    for (let i = 0; i < roleInputs.length; i++) {
        if (roleInputs[i].checked) {
            isRole = true;
            break;
        }
    }

    if(!isRole){
        errorMessage.innerText = "Please select a role";
        return false;
    }

    if(nameInput.value.length < 3){
        errorMessage.innerText = "Name must have at least 3 characters"
        return false;
    }

    if(!emailInput.value.includes('@')){
        errorMessage.innerText = "Email must contains @";
        return false;
    }

    if(passwordInput.value.length < 8){
        errorMessage.innerText = "Password must have at least 8 characters";
        return false;
    }

    const today = new Date();
    const minAge = 15;

    if(dobInput.value === ''){
        errorMessage.innerText = "Please enter your date of birth";
        return false;
    }

    const selectedDate = new Date(dobInput.value);
    const age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    const dayDiff = today.getDate() - selectedDate.getDate();

    if (age < minAge || (age === minAge && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
        errorMessage.innerText = "You must be at least 15 years old";
        return false;
    }

    if(genderSelect.value === ''){
        errorMessage.innerText = "Please select a gender";
        return false;
    }

    if(!agreeCheckbox.checked){
        errorMessage.innerText = "You must agree to the Terms and Conditions to continue";
        return false;
    }

    alert('Form submitted successfully!');
    form.reset();
    return true;
}

function resetForm() {
    document.getElementById("subscription-form").reset();
    document.getElementById('errorMessage').innerText = '';
}