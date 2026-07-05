let correctPasscode = "1234"; // Sahi code 1234 rakha hai
let currentInput = "";

function pressKey(num) {
    if (currentInput.length < 4) {
        currentInput += num;
        updateDots();
    }
}

function clearCode() {
    currentInput = "";
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < currentInput.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

function checkCode() {
    if (currentInput === correctPasscode) {
        showScreen('screen-question');
        clearCode();
    } else {
        showScreen('screen-wrong-passcode');
        clearCode();
    }
}

function showScreen(screenId) {
    // Pehle saari screens ko mukammal chhupa do
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active', 'flex-active');
    });

    // Target screen ko show karo
    const targetScreen = document.getElementById(screenId);
    
    if (targetScreen.classList.contains('flex-center')) {
        targetScreen.classList.add('flex-active');
    } else {
        targetScreen.classList.add('active');
    }
}