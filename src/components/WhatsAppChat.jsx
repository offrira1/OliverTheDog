import React, { useState, useEffect } from 'react'

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'שלום! 👋',
      time: 'עכשיו'
    },
    {
      type: 'bot',
      content: 'אני אוליבר, הכלב המלוכלך! איך אני יכול לעזור לך היום?',
      time: 'עכשיו'
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const quickActions = [
    'אני רוצה להזמין את הספר',
    'איך אני מקבל את הספר?',
    'מה המחיר?'
  ]

  const handleSendMessage = (message) => {
    if (!message.trim()) return

    const newMessage = {
      type: 'user',
      content: message,
      time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')

    // Bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message)
      setMessages(prev => [...prev, {
        type: 'bot',
        content: botResponse,
        time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
      }])
    }, 1000)
  }

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('הזמנה') || lowerMessage.includes('הזמנת')) {
      // Scroll to order section
      setTimeout(() => {
        const orderSection = document.getElementById('order')
        if (orderSection) {
          orderSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 500)
      return 'מעולה! 🎉 אני מעביר אתכם ישירות לחלק ההזמנות. שם תוכלו למלא את הפרטים ולהזמין את הספר!'
    }
    
    if (lowerMessage.includes('מחיר') || lowerMessage.includes('כמה')) {
      return 'עלות הספר היא 40 שקלים לעותק מודפס, לא כולל משלוח. ניתן גם לאסוף את הספר בנקודות איסוף .'
    }
    
    if (lowerMessage.includes('איך') || lowerMessage.includes('קבל')) {
      return 'קל מאוד! 🚀 סמנו את הכתובת שלכם, מלאו את הפרטים, ותקבלו את הספר ישירות אליכם!'
    }
    
    if (lowerMessage.includes('ספר') || lowerMessage.includes('אוליבר')) {
      return 'זהו סיפור מקסים על כלב שובב שמגלה כמה כיף להיות נקי! 🐕✨ מלא הרפתקאות, צחוקים ומסרים חשובים לילדים.'
    }
    
    return 'תודה על השאלה! 😊 אני כאן לעזור. תוכלו לשאול אותי על ההזמנה, המחירים, או כל דבר אחר שקשור לספר!'
  }

  const handleQuickAction = (action) => {
    handleSendMessage(action)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue)
    }
  }

  return (
    <div className="whatsapp-chat">
      <div 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" fill="currentColor"/>
        </svg>
        <span className="chat-badge">1</span>
      </div>
      
      {isOpen && (
        <div className="chat-window active">
          <div className="chat-header">
            <div className="chat-avatar">🐶</div>
            <div className="chat-info">
              <h4>אוליבר</h4>
              <p>זמין עכשיו</p>
            </div>
            <button 
              className="chat-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}-message`}>
                <div className="message-content">
                  <p>{message.content}</p>
                </div>
                <div className="message-time">{message.time}</div>
              </div>
            ))}
          </div>
          
          <div className="chat-input-container">
            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <button 
                  key={index}
                  className="quick-btn"
                  onClick={() => handleQuickAction(action)}
                >
                  {action}
                </button>
              ))}
              <button 
                className="whatsapp-redirect-btn"
                onClick={() => window.open('https://wa.me/972546682114?text=היי%20אשמח%20לשמוע%20על%20הספר%20-%20אוליבר%20הכלב%20המלוכלך', '_blank', 'noopener,noreferrer')}
              >
                📱 שלח לווטסאפ
              </button>
            </div>
            <div className="chat-input-wrapper">
              <input 
                type="text" 
                id="chat-input"
                placeholder="כתבו הודעה..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="send-btn"
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WhatsAppChat