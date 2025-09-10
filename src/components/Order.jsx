import React, { useState } from 'react'

const Order = () => {
  const [formData, setFormData] = useState({
    city: '',
    street: '',
    number: '',
    entrance: '',
    firstName: '',
    lastName: '',
    phone: '',
    quantity: '1'
  })
  const [isSelfPickup, setIsSelfPickup] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelfPickupChange = (e) => {
    setIsSelfPickup(e.target.checked)
  }

  const generateWhatsAppMessage = () => {
    if (isSelfPickup) {
      return `היי אני ${formData.firstName} ${formData.lastName} אשמח לרכוש את הספר אוליבר הכלב המלוכלך, 
כמות: ${formData.quantity} עותקים
ניתן ליצור קשר במספר: ${formData.phone}
ניתן לאסוף מ-רחוב שחף - קריית מלאכי`
    } else {
      return `היי אני ${formData.firstName} ${formData.lastName} אשמח לרכוש את הספר אוליבר הכלב המלוכלך, 
כמות: ${formData.quantity} עותקים
הפרטים שלי:
עיר ${formData.city} רחוב ${formData.street}, מספר: ${formData.number} כניסה: ${formData.entrance} 
ניתן ליצור קשר לשליחויות במספר:
${formData.phone}`
    }
  }

  const handleOrder = () => {
    if (!isSelfPickup) {
      // Check if all required fields are filled for delivery
      const requiredFields = ['city', 'street', 'number', 'firstName', 'lastName', 'phone', 'quantity']
      const missingFields = requiredFields.filter(field => !formData[field].trim())
      
      if (missingFields.length > 0) {
        alert('אנא מלא את כל השדות הנדרשים')
        return
      }
    } else {
      // Check if required fields are filled for self pickup
      const requiredFields = ['firstName', 'lastName', 'phone', 'quantity']
      const missingFields = requiredFields.filter(field => !formData[field].trim())
      
      if (missingFields.length > 0) {
        alert('אנא מלא את כל השדות הנדרשים')
        return
      }
    }

    const message = generateWhatsAppMessage()
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/972546682114?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="order" className="container section card">
      <div className="order" style={{border: 'none', padding: 0, background: 'none'}}>
        <div className="order-copy">
          <h2>הזמנה בקליק</h2>
          <p>הזמינו את הספר עכשיו במחיר השקה מיוחד!</p>
          <div className="kids-plans">
            <div className="plan">
              <div className="price">
                <span className="old-price">50 ש"ח</span>
                <span className="new-price">מחיר השקה! 40 ש"ח</span>
              </div>

              
              <div className="order-options">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={isSelfPickup}
                    onChange={handleSelfPickupChange}
                  />
                  <span>איסוף עצמי (רחוב שחף - קריית מלאכי)</span>
                </label>
              </div>

              <button 
                className="btn wide" 
                onClick={() => setShowForm(!showForm)}
                style={{marginBottom: '20px'}}
              >
                {showForm ? 'סגור פרטים' : 'מלא פרטים'}
              </button>

              {showForm && (
                <div className="delivery-form">
                  <h4>{isSelfPickup ? 'פרטי איסוף עצמי' : 'פרטי משלוח'}</h4>
                  
                  {/* Personal Information Section */}
                  <div className="form-section">
                    <h5>פרטים אישיים</h5>
                    <div className="form-row">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="שם פרטי *"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="שם משפחה *"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="פלאפון *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Order Details Section */}
                  <div className="form-section">
                    <h5>פרטי ההזמנה</h5>
                    <div className="form-row">
                      <input
                        type="number"
                        name="quantity"
                        placeholder="כמות עותקים *"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        min="1"
                        required
                      />
                    </div>
                  </div>

                  {/* Delivery Address Section - only shown for delivery */}
                  {!isSelfPickup && (
                    <div className="form-section">
                      <h5>כתובת למשלוח</h5>
                      <div className="form-row">
                        <input
                          type="text"
                          name="city"
                          placeholder="עיר *"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="street"
                          placeholder="רחוב *"
                          value={formData.street}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-row">
                        <input
                          type="text"
                          name="number"
                          placeholder="מספר בית *"
                          value={formData.number}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="entrance"
                          placeholder="כניסה"
                          value={formData.entrance}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  )}

                  {/* Self Pickup Info - only shown for self pickup */}
                  {isSelfPickup && (
                    <div className="form-section pickup-info">
                      <h5>מיקום איסוף</h5>
                      <div className="pickup-address">
                        <p>רחוב שחף - קריית מלאכי</p>
                        <small>ניתן לאסוף את הספר בכתובת זו</small>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button className="btn wide" onClick={handleOrder}>
                הזמנה
              </button>
            </div>
          </div>

        </div>

        <div className="order-art">
          <img src="/Oliver-rev-15.0_Page_01.png" alt="כריכת הספר — אוליבר הכלב המלוכלך" />
        </div>
      </div>
    </section>
  )
}

export default Order