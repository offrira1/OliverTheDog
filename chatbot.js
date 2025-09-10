// WhatsApp Chatbot for Oliver Landing Page
class WhatsAppChatbot {
  constructor() {
    this.isOpen = false;
    this.config = window.CHATBOT_CONFIG || {};
    this.whatsappNumber = this.config.whatsappNumber || '';
    this.init();
  }

  init() {
    this.bindEvents();
    this.hideBadgeAfterDelay();
  }

  bindEvents() {
    // Toggle chat window
    document.getElementById('chat-toggle').addEventListener('click', () => {
      this.toggleChat();
    });

    // Close chat window
    document.getElementById('chat-close').addEventListener('click', () => {
      this.closeChat();
    });

    // Send message
    document.getElementById('send-btn').addEventListener('click', () => {
      this.sendMessage();
    });

    // Send on Enter key
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });

    // Quick action buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const message = e.target.getAttribute('data-message');
        this.addUserMessage(message);
        this.handleBotResponse(message);
      });
    });

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
      const chatWidget = document.getElementById('whatsapp-chat');
      if (this.isOpen && !chatWidget.contains(e.target)) {
        this.closeChat();
      }
    });
  }

  toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const badge = document.querySelector('.chat-badge');
    
    if (this.isOpen) {
      this.closeChat();
    } else {
      this.openChat();
    }
  }

  openChat() {
    const chatWindow = document.getElementById('chat-window');
    const badge = document.querySelector('.chat-badge');
    
    chatWindow.classList.add('active');
    this.isOpen = true;
    badge.style.display = 'none';
    
    // Focus on input
    setTimeout(() => {
      document.getElementById('chat-input').focus();
    }, 300);
  }

  closeChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.remove('active');
    this.isOpen = false;
  }

  hideBadgeAfterDelay() {
    // Hide badge after 5 seconds
    setTimeout(() => {
      const badge = document.querySelector('.chat-badge');
      if (badge) {
        badge.style.display = 'none';
      }
    }, 5000);
  }

  addUserMessage(message) {
    const messagesContainer = document.querySelector('.chat-messages');
    const messageElement = this.createMessageElement(message, 'user');
    messagesContainer.appendChild(messageElement);
    this.scrollToBottom();
  }

  addBotMessage(message) {
    const messagesContainer = document.querySelector('.chat-messages');
    const messageElement = this.createMessageElement(message, 'bot');
    messagesContainer.appendChild(messageElement);
    this.scrollToBottom();
  }

  createMessageElement(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const messageText = document.createElement('p');
    messageText.textContent = message;
    contentDiv.appendChild(messageText);
    
    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = this.getCurrentTime();
    
    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeDiv);
    
    return messageDiv;
  }

  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('he-IL', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }

  scrollToBottom() {
    const messagesContainer = document.querySelector('.chat-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message) {
      this.addUserMessage(message);
      input.value = '';
      this.handleBotResponse(message);
    }
  }

  handleBotResponse(userMessage) {
    // Simulate typing delay
    setTimeout(() => {
      const response = this.getBotResponse(userMessage);
      this.addBotMessage(response);
    }, 1000);
  }

  getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Hebrew responses
    if (lowerMessage.includes('הזמנה') || lowerMessage.includes('הזמין') || lowerMessage.includes('ספר')) {
      return 'נהדר! אני יכול לעזור לך להזמין את הספר "אוליבר הכלב המלוכלך". יש לנו עותקים מודפסים ודיגיטליים. איזה פורמט מעניין אותך יותר?';
    }
    
    if (lowerMessage.includes('מחיר') || lowerMessage.includes('כמה') || lowerMessage.includes('עלות')) {
      return 'המחירים משתנים לפי הפורמט. עותק מודפס: 45 ש"ח, עותק דיגיטלי: 25 ש"ח. רוצים שאני אשלח לך קישור להזמנה?';
    }
    
    if (lowerMessage.includes('איך') && lowerMessage.includes('מקבל')) {
      return 'הזמנה פשוטה! עותק מודפס יישלח בדואר תוך 3-5 ימי עסקים. עותק דיגיטלי יישלח מיידית למייל שלך. איזה פורמט מתאים לך?';
    }
    
    if (lowerMessage.includes('שלום') || lowerMessage.includes('היי') || lowerMessage.includes('הי')) {
      return 'שלום! 👋 אני אוליבר, הכלב המלוכלך! איך אני יכול לעזור לך היום?';
    }
    
    if (lowerMessage.includes('תודה') || lowerMessage.includes('תודה רבה')) {
      return 'בכיף! 😊 אני כאן תמיד לעזור. יש עוד משהו שתרצה לדעת על הספר?';
    }
    
    if (lowerMessage.includes('עזרה') || lowerMessage.includes('עזור')) {
      return 'אני כאן לעזור! אני יכול לענות על שאלות על הספר, להסביר על תהליך ההזמנה, או לעזור עם כל דבר אחר. מה תרצה לדעת?';
    }
    
    // Default response
    return 'תודה על ההודעה! אני כאן לעזור עם כל שאלה על הספר "אוליבר הכלב המלוכלך". איך אני יכול לעזור לך?';
  }

  // Method to send message to WhatsApp
  sendToWhatsApp(message) {
    if (!this.whatsappNumber) {
      alert('מספר WhatsApp לא מוגדר. אנא עדכן את הקובץ config.js');
      return;
    }
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  }

  // Method to set WhatsApp number
  setWhatsAppNumber(number) {
    this.whatsappNumber = number;
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const chatbot = new WhatsAppChatbot();
  
  // You can set your WhatsApp number here
  // chatbot.setWhatsAppNumber('972501234567'); // Replace with your actual number
  
  // Add a "Send to WhatsApp" button functionality
  const addWhatsAppButton = () => {
    const messagesContainer = document.querySelector('.chat-messages');
    
    // Add WhatsApp button after bot messages
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('bot-message')) {
            // Add WhatsApp button after bot message
            setTimeout(() => {
              const whatsappBtn = document.createElement('button');
              whatsappBtn.className = 'whatsapp-send-btn';
              whatsappBtn.innerHTML = '📱 שלח ב-WhatsApp';
              whatsappBtn.style.cssText = `
                background: linear-gradient(135deg, #25D366, #128C7E);
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                cursor: pointer;
                margin-top: 8px;
                transition: all 0.2s ease;
              `;
              
              whatsappBtn.addEventListener('click', () => {
                const message = node.querySelector('.message-content p').textContent;
                chatbot.sendToWhatsApp(message);
              });
              
              node.appendChild(whatsappBtn);
            }, 500);
          }
        });
      });
    });
    
    observer.observe(messagesContainer, { childList: true });
  };
  
  addWhatsAppButton();
});

// Export for potential external use
window.WhatsAppChatbot = WhatsAppChatbot;
