document.addEventListener('DOMContentLoaded', () => {
  // Matrix Rain Effect
  const matrixRain = document.querySelector('.matrix-rain');
  const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
  
  function createMatrixDrop() {
    const drop = document.createElement('div');
    drop.className = 'matrix-drop';
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    drop.style.opacity = Math.random() * 0.5 + 0.5;
    drop.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    matrixRain.appendChild(drop);
    
    drop.addEventListener('animationend', () => drop.remove());
  }

  setInterval(createMatrixDrop, 50);

  // Terminal Effect
  const terminalContent = document.querySelector('.matrix-text');
  const messages = [
    'INITIALIZING_SYSTEM...',
    'SCANNING_REALITY_MATRIX...',
    'DETECTING_ANOMALIES...',
    'WARNING: MULTIPLE_BREACHES_FOUND',
    'ACTIVATING_DEFENSE_PROTOCOLS...',
    'SYSTEM_UNSTABLE...',
    'REALITY_CORRUPTION_AT_43%',
    'ATTEMPTING_STABILIZATION...',
    'ERR://CONSCIOUSNESS_LEAK_DETECTED',
    'QUANTUM_ENTANGLEMENT_ACTIVE',
    'TIME_DILATION_OBSERVED',
    'VOID_SIGNAL_STRENGTH: 89%',
    'MATRIX_DESTABILIZING...',
    'INITIATING_EMERGENCY_PROTOCOLS',
    'BREACH_CONTAINMENT_FAILED',
    'SYSTEM_COLLAPSE_IMMINENT'
  ];

  let messageIndex = 0;
  let charIndex = 0;

  function typeMessage() {
    if (!terminalContent) return;

    if (charIndex < messages[messageIndex].length) {
      terminalContent.textContent += messages[messageIndex][charIndex];
      charIndex++;
      setTimeout(typeMessage, 50);
    } else {
      setTimeout(() => {
        terminalContent.textContent = '';
        messageIndex = (messageIndex + 1) % messages.length;
        charIndex = 0;
        typeMessage();
      }, 2000);
    }
  }

  typeMessage();

  // Glitch Effect
  const glitchTexts = document.querySelectorAll('.cyber-glitch, .cyber-subtitle');
  
  function createGlitch(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    function glitch() {
      if (Math.random() > 0.95) {
        const glitchedText = originalText
          .split('')
          .map(char => Math.random() > 0.9 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
          .join('');
        
        element.textContent = glitchedText;
        
        setTimeout(() => {
          element.textContent = originalText;
        }, 50);
      }
    }
    
    setInterval(glitch, 100);
  }

  glitchTexts.forEach(createGlitch);

  // Sileo Button Handler
  const sileoButton = document.querySelector('.sileo-button');
  if (sileoButton) {
    sileoButton.addEventListener('click', (e) => {
      e.preventDefault();
      const sileoUrl = 'sileo://source/https://jzu4.github.io';
      window.location.href = sileoUrl;
      
      setTimeout(() => {
        if (document.hidden) return;
        alert('يجب أن يكون جهازك مكسور ومثبت عليه Sileo لإضافة السورس');
      }, 500);
    });
  }

  // Sound Effects
  const glitchSounds = [
    'https://www.soundjay.com/mechanical/sounds/robot-movement-1.mp3',
    'https://www.soundjay.com/mechanical/sounds/robot-movement-2.mp3',
    'https://www.soundjay.com/mechanical/sounds/mechanical-switch-1.mp3',
    'https://www.soundjay.com/electronic/sounds/static-noise-1.mp3'
  ];

  function playRandomSound() {
    const sound = new Audio(glitchSounds[Math.floor(Math.random() * glitchSounds.length)]);
    sound.volume = 0.2;
    sound.play().catch(() => {});
  }

  // Add sound effects to button interactions
  document.querySelectorAll('.cyber-button, .sileo-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      if (Math.random() > 0.5) playRandomSound();
    });
  });

  // Random glitch effect on the page
  function randomGlitch() {
    if (Math.random() > 0.7) {
      document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      playRandomSound();
      
      setTimeout(() => {
        document.body.style.filter = '';
      }, 100);
    }
  }

  setInterval(randomGlitch, 5000);
});
