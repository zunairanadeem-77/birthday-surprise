let correctPasscode = "101007"; // 6-digit Birthday code
let currentInput = "";

// Text Animations Constants
const questionText = "I made something special for u, do u wanna see it? ";
const birthdayWishText =" Happyyyy wallllaa birthdaayyyyy merraaa paaarrraaa saaaaa miiiiyyyaaan geee😭💋💗🥹 MERA TALLUU Toh aj woh din hy jis din mera shehzada asman sa utra tha zameen par😭💋or ap mera pura jahaan ho💋mera bachaw, mera babbyy, mera shohar jee👑❤️, meri jaan🥹 mera gentleman💗💗moiii forever🤌🏻🥺🫀moi jaanneman👑❤️ moi dil ka tukra🤧moii jigar ka tukra, moi sukoon💍🥹🫀 Allah lambi zindagi ata farmayee💋❤️meri pyaarii si jaan ko meri vi umer lg jyee🥹💌🎀Allah apko hmesha khush rkhein mery sath💗🥹apka hath hmesha mery hath ma rhy🤧💍🥹💋 ONCE AGAINNN HAPPYYY WALLA BIRTHDAYYYYYY💗🎀I LOVEE YOUUU SO MUCHHH🤧🤧🤧🤧🫀❤️💋🎀"
const emotionalMessage = "This is for you😭🫂 I dont know how to explain what u truly mean to me bcz some feelings are just too deep for words😭💗 You came into my life so silently....but now ur presence is the loudest, most beautiful part of my world🥹💋. Every day feels lighter, every problem feels smaller and every smile feels more real just bcz u are here🫂🫶🏻. Sometimes I sit alone and think about how lucky i am to have you🥹👑 In the world full of noise, u feel like peace😭🎀💍. You understand my silence, u notice my mood and u care in ways that most people don't even try to🤌🏻🤧 You are not just someone I talk to. You are the person I think about when something good happens. You are the one I want to tell first. You are the comfort I look for when things go wrong😭💌💗. Your words heal me in ways you probably don't even realise. I promise to always respect u, support u and stand by u❤️🥹🫂 Mera bachaww i love you so muchh🥹🤧💋may Allah always keep us happy together 4ever and unite us in nikkah AMEEN🫀🫶🏻💋🥹I miss you sm🥺❤️🫀"

let textIndex = 0;
let typingTimer = null;

function pressKey(num) {
    if (currentInput.length < 6) {
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
        alert("Incorrect passcode! Try again.");
        clearCode();
    }
}

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');

        // Typing Animations Trigger
        if (screenId === 'screen-question') {
            startTypewriterAnimation('animated-text', questionText, 50);
        } else if (screenId === 'screen-happy-birthday') {
            startTypewriterAnimation('wish-text', birthdayWishText, 30);
        } else if (screenId === 'screen-solo-picture') {
            startTypewriterAnimation('emotional-message', emotionalMessage, 25);
        }
    }
}

function startTypewriterAnimation(elementId, textToType, speed) {
    const textElement = document.getElementById(elementId);
    textElement.innerHTML = '<span class="cursor"></span>';
    textIndex = 0;

    if (typingTimer) clearInterval(typingTimer);

    typingTimer = setInterval(() => {
        if (textIndex < textToType.length) {
            const cursor = textElement.querySelector('.cursor');
            const currentChar = textToType.charAt(textIndex);
            
            cursor.insertAdjacentHTML('beforebegin', currentChar);
            textIndex++;
        } else {
            clearInterval(typingTimer);
            const cursor = textElement.querySelector('.cursor');
            if (cursor) cursor.style.display = 'none';
        }
    }, speed);
}