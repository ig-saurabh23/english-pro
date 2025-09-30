// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Module Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding tab pane
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Chatbot Functionality
const chatInput = document.getElementById('chat-input');
const sendMessageBtn = document.getElementById('send-message');
const chatMessages = document.getElementById('chatbot-messages');

// Sample bot responses
const botResponses = [
    "That's a great question! Let me think about how to explain it.",
    "I understand what you're asking. Here's my response in English.",
    "Your English is improving! Try to use complete sentences when practicing.",
    "That's an interesting point. In English, we would typically say it like this...",
    "Good job practicing! Remember to pay attention to verb tenses.",
    "I notice you're making progress. Keep up the good work!",
    "Let me correct that sentence for you: [corrected version]",
    "Here's a vocabulary tip: [word] means [definition].",
    "Your pronunciation of that word is getting better!",
    "Try to use more descriptive words in your sentences."
];

sendMessageBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Simulate bot thinking
    setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        addMessage(randomResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    if (sender === 'user') {
        messageDiv.classList.add('user-message');
        messageDiv.style.alignSelf = 'flex-end';
        messageDiv.innerHTML = `<p style="background-color: var(--primary); color: white; padding: 10px 15px; border-radius: 15px 15px 0 15px;">${text}</p>`;
    } else {
        messageDiv.classList.add('bot-message');
        messageDiv.innerHTML = `<p>${text}</p>`;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Vocabulary Quiz
const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.querySelector('.quiz-result');

quizOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Check if answer is correct (second option is correct)
        const isCorrect = option.textContent === 'Continuing despite difficulties';
        
        // Show result
        quizResult.classList.remove('hidden');
        
        // Style options based on correctness
        quizOptions.forEach(opt => {
            if (opt.textContent === 'Continuing despite difficulties') {
                opt.style.backgroundColor = 'var(--success)';
                opt.style.color = 'white';
            } else {
                opt.style.backgroundColor = 'var(--danger)';
                opt.style.color = 'white';
            }
            opt.disabled = true;
        });
    });
});

// Pronunciation Tool
const wordDisplay = document.getElementById('word-display');
const listenBtn = document.getElementById('listen-btn');
const wordItems = document.querySelectorAll('.word-item');

wordItems.forEach(item => {
    item.addEventListener('click', () => {
        const word = item.getAttribute('data-word');
        wordDisplay.textContent = word;
    });
});

listenBtn.addEventListener('click', () => {
    // In a real implementation, this would play audio
    // For demo, we'll just show an alert
    alert(`Pronunciation for "${wordDisplay.textContent}" would play here`);
});

// Calendar Navigation (Simplified)
const calendarNavs = document.querySelectorAll('.calendar-nav');

calendarNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        // In a real implementation, this would change the calendar month
        alert('Calendar navigation would work here');
    });
});

// Subscription Plan Selection
const planCards = document.querySelectorAll('.plan-card');

planCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove featured class from all cards
        planCards.forEach(c => c.classList.remove('featured'));
        
        // Add featured class to clicked card
        card.classList.add('featured');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Progress Bar Animation on Scroll
const progressBars = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const progress = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = progress;
        }, 300);
    });
}

// Intersection Observer for progress bars
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe the dashboard section
const dashboardSection = document.getElementById('dashboard');
if (dashboardSection) {
    observer.observe(dashboardSection);
}

// Form Submission Handling (for demo purposes)
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Subscribe') || 
        button.textContent.includes('Book') || 
        button.textContent.includes('Join')) {
        
        button.addEventListener('click', (e) => {
            if (!button.classList.contains('quiz-option')) {
                e.preventDefault();
                alert('This would redirect to payment/booking in the live version');
            }
        });
    }
});

// Initialize the page with some sample data
document.addEventListener('DOMContentLoaded', () => {
    // Add a welcome message to the chatbot
    setTimeout(() => {
        addMessage("Welcome to EnglishPro! I'm here to help you practice your English. Try asking me a question or just have a conversation with me.", 'bot');
    }, 500);
});