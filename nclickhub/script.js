// nClickHub - Interactive Button Showcase JavaScript

// DOM Elements
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const buttonGrid = document.getElementById('button-grid');
const noResults = document.getElementById('no-results');
const modal = document.getElementById('code-modal');
const modalTitle = document.getElementById('modal-title');
const codeDisplay = document.getElementById('code-display');

// Global variables
let currentFilter = 'all';
let currentTab = 'html';
let currentButtonType = '';

// Code snippets for each button type
const codeSnippets = {
    neon: {
        html: `<button class="neon-button" onclick="neonButtonClick(this)">
  <span class="neon-text">NEON PULSE</span>
</button>`,
        css: `.neon-button {
  background: transparent;
  border: 2px solid #00ffff;
  padding: 12px 24px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.neon-text {
  color: #00ffff;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff,
    0 0 15px #00ffff,
    0 0 20px #00ffff;
  animation: pulse 2s infinite;
}

.neon-button:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff;
  transform: translateY(-2px);
}

@keyframes pulse {
  0%, 100% {
    text-shadow: 
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 15px #00ffff,
      0 0 20px #00ffff;
  }
  50% {
    text-shadow: 
      0 0 2px #00ffff,
      0 0 5px #00ffff,
      0 0 8px #00ffff,
      0 0 12px #00ffff;
  }
}`,
        js: `function neonButtonClick(button) {
  const text = button.querySelector('.neon-text');
  
  // Create click effect
  button.style.transform = 'scale(0.95)';
  text.style.color = '#ffffff';
  
  // Add temporary intense glow
  text.style.textShadow = \`
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff,
    0 0 40px #00ffff
  \`;
  
  // Reset after animation
  setTimeout(() => {
    button.style.transform = '';
    text.style.color = '#00ffff';
    text.style.textShadow = '';
  }, 200);
}`
    },
    flip: {
        html: `<div class="flip-button-container">
  <button class="flip-button" onclick="flipButtonClick(this)">
    <div class="flip-button-inner">
      <div class="flip-button-front">
        <span>HOVER ME</span>
      </div>
      <div class="flip-button-back">
        <span>CLICKED!</span>
      </div>
    </div>
  </button>
</div>`,
        css: `.flip-button-container {
  perspective: 1000px;
}

.flip-button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.flip-button-inner {
  position: relative;
  width: 150px;
  height: 50px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-button:hover .flip-button-inner {
  transform: rotateY(180deg);
}

.flip-button-front,
.flip-button-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  color: white;
}

.flip-button-front {
  background: linear-gradient(45deg, #667eea, #764ba2);
}

.flip-button-back {
  background: linear-gradient(45deg, #f093fb, #f5576c);
  transform: rotateY(180deg);
}`,
        js: `function flipButtonClick(button) {
  const inner = button.querySelector('.flip-button-inner');
  
  // Trigger flip animation
  inner.style.transform = 'rotateY(180deg)';
  
  // Reset after 2 seconds
  setTimeout(() => {
    inner.style.transform = 'rotateY(0deg)';
  }, 2000);
}`
    },
    gradient: {
        html: `<button class="gradient-button" onclick="gradientButtonClick(this)">
  <span class="gradient-text">GRADIENT MAGIC</span>
</button>`,
        css: `.gradient-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 300% 300%;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  animation: gradientShift 3s ease infinite;
  transition: all 0.3s ease;
}

.gradient-text {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.gradient-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
        js: `function gradientButtonClick(button) {
  // Create a wave effect
  button.style.animation = 'none';
  button.style.transform = 'scale(1.1) rotate(5deg)';
  
  setTimeout(() => {
    button.style.transform = 'scale(1)';
    button.style.animation = 'gradientShift 3s ease infinite';
  }, 300);
}`
    },
    ripple: {
        html: `<button class="ripple-button" onclick="rippleButtonClick(this, event)">
  <span>RIPPLE CLICK</span>
</button>`,
        css: `.ripple-button {
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.ripple-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(142, 45, 226, 0.3);
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  transform: scale(0);
  animation: rippleEffect 0.6s linear;
}

@keyframes rippleEffect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`,
        js: `function rippleButtonClick(button, event) {
  const rect = button.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}`
    },
    glitch: {
        html: `<button class="glitch-button" onclick="glitchButtonClick(this)" data-text="GLITCH">
  <span>GLITCH</span>
</button>`,
        css: `.glitch-button {
  background: #0a0a0a;
  border: 2px solid #ff0040;
  padding: 12px 24px;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: 'Courier New', monospace;
}

.glitch-button:hover {
  animation: glitch 0.3s;
}

.glitch-button::before,
.glitch-button::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.glitch-button::before {
  color: #ff0040;
  animation: glitch-1 0.3s infinite;
}

.glitch-button::after {
  color: #00ff40;
  animation: glitch-2 0.3s infinite;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}`,
        js: `function glitchButtonClick(button) {
  // Trigger intense glitch effect
  button.style.animation = 'glitch 0.1s infinite';
  
  setTimeout(() => {
    button.style.animation = '';
  }, 1000);
}`
    },
    morph: {
        html: `<button class="morph-button" onclick="morphButtonClick(this)">
  <span>MORPH ME</span>
</button>`,
        css: `.morph-button {
  background: linear-gradient(45deg, #ff9a9e, #fecfef);
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.morph-button:hover {
  border-radius: 5px;
  background: linear-gradient(45deg, #a8edea, #fed6e3);
  transform: scale(1.1);
}`,
        js: `function morphButtonClick(button) {
  // Morph the button shape and color
  button.style.borderRadius = '50%';
  button.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
  button.style.transform = 'scale(1.2) rotate(360deg)';
  
  setTimeout(() => {
    button.style.borderRadius = '25px';
    button.style.background = 'linear-gradient(45deg, #ff9a9e, #fecfef)';
    button.style.transform = 'scale(1)';
  }, 1000);
}`
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateButtonCount();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
    });
    
    // Modal close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.button-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        const isVisible = name.includes(searchTerm) || category.includes(searchTerm);
        
        if (isVisible && (currentFilter === 'all' || card.dataset.category === currentFilter)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    updateButtonCount(visibleCount);
}

// Filter functionality
function handleFilter(filter) {
    currentFilter = filter;
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    // Filter cards
    const cards = document.querySelectorAll('.button-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const category = card.dataset.category;
        const searchTerm = searchInput.value.toLowerCase();
        const name = card.dataset.name.toLowerCase();
        
        const matchesFilter = filter === 'all' || category === filter;
        const matchesSearch = !searchTerm || name.includes(searchTerm) || category.includes(searchTerm);
        
        if (matchesFilter && matchesSearch) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    updateButtonCount(visibleCount);
}

// Update button count
function updateButtonCount(count = null) {
    const buttonCountEl = document.getElementById('button-count');
    if (count !== null) {
        buttonCountEl.textContent = count;
    } else {
        const visibleCards = document.querySelectorAll('.button-card[style*="display: block"], .button-card:not([style*="display: none"])');
        buttonCountEl.textContent = visibleCards.length;
    }
}

// Button interaction functions
function neonButtonClick(button) {
    const text = button.querySelector('.neon-text');
    
    // Create click effect
    button.style.transform = 'scale(0.95)';
    text.style.color = '#ffffff';
    
    // Add temporary intense glow
    text.style.textShadow = `
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 30px #00ffff,
        0 0 40px #00ffff
    `;
    
    // Reset after animation
    setTimeout(() => {
        button.style.transform = '';
        text.style.color = '#00ffff';
        text.style.textShadow = '';
    }, 200);
}

function flipButtonClick(button) {
    const inner = button.querySelector('.flip-button-inner');
    
    // Trigger flip animation
    inner.style.transform = 'rotateY(180deg)';
    
    // Reset after 2 seconds
    setTimeout(() => {
        inner.style.transform = 'rotateY(0deg)';
    }, 2000);
}

function gradientButtonClick(button) {
    // Create a wave effect
    button.style.animation = 'none';
    button.style.transform = 'scale(1.1) rotate(5deg)';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.animation = 'gradientShift 3s ease infinite';
    }, 300);
}

function rippleButtonClick(button, event) {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function glitchButtonClick(button) {
    // Trigger intense glitch effect
    button.style.animation = 'glitch 0.1s infinite';
    
    setTimeout(() => {
        button.style.animation = '';
    }, 1000);
}

function morphButtonClick(button) {
    // Morph the button shape and color
    button.style.borderRadius = '50%';
    button.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
    button.style.transform = 'scale(1.2) rotate(360deg)';
    
    setTimeout(() => {
        button.style.borderRadius = '25px';
        button.style.background = 'linear-gradient(45deg, #ff9a9e, #fecfef)';
        button.style.transform = 'scale(1)';
    }, 1000);
}

// Modal functions
function showCode(buttonType) {
    currentButtonType = buttonType;
    const buttonNames = {
        neon: 'Neon Pulse Button',
        flip: '3D Flip Button',
        gradient: 'Gradient Glow Button',
        ripple: 'Ripple Effect Button',
        glitch: 'Glitch Effect Button',
        morph: 'Morphing Shape Button'
    };
    
    modalTitle.textContent = buttonNames[buttonType] + ' Code';
    showTab('html');
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function showTab(tab) {
    currentTab = tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add('active');
    
    // Update code display
    const code = codeSnippets[currentButtonType][tab];
    codeDisplay.textContent = code;
}

function copyCode() {
    const code = codeSnippets[currentButtonType][currentTab];
    navigator.clipboard.writeText(code).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
        }, 2000);
    });
}

// Keyboard shortcuts
function handleKeyboard(e) {
    // ESC to close modal
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
    
    // Ctrl+K to focus search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
}

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Add some interactive touches
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle parallax effect to header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        header.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
    
    // Add loading animation to cards
    const cards = document.querySelectorAll('.button-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});