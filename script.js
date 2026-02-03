// Function to make "No" buttons evade
function evadeButton(noBtn) {
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.position = 'absolute';
    });
    noBtn.addEventListener('click', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
}

// Apply evasion to all "No" buttons
evadeButton(document.getElementById('no1'));
evadeButton(document.getElementById('no2'));
evadeButton(document.getElementById('no3'));
evadeButton(document.getElementById('no4'));

// Handle "Yes" clicks to progress through questions
document.getElementById('yes1').addEventListener('click', () => {
    document.getElementById('q1').classList.add('hidden');
    document.getElementById('q2').classList.remove('hidden');
});

document.getElementById('yes2').addEventListener('click', () => {
    document.getElementById('q2').classList.add('hidden');
    document.getElementById('q3').classList.remove('hidden');
});

document.getElementById('yes3').addEventListener('click', () => {
    document.getElementById('q3').classList.add('hidden');
    document.getElementById('q4').classList.remove('hidden');
});

document.getElementById('yes4').addEventListener('click', () => {
    document.getElementById('q4').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
});