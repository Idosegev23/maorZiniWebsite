"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import InputField from '../common/InputField';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      setFormStatus('error');
      setErrorMessage('יש לאשר את מדיניות הפרטיות לפני השליחה');
      return;
    }
    
    setFormStatus('submitting');
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'אירעה שגיאה בשליחת הטופס');
      }
      
      // טיפול בהצלחה
      setFormStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      setPrivacyAccepted(false);
      
      // איפוס סטטוס הטופס אחרי 5 שניות
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('שגיאה בשליחת הטופס:', error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'אירעה שגיאה בלתי צפויה');
      
      // איפוס סטטוס השגיאה אחרי 5 שניות
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage(null);
      }, 5000);
    }
  };
  
  return (
    <section className="bg-brandBeige py-16 md:py-24 relative" id="contact">
      {/* קו דקורטיבי עדין בחלק העליון */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
      <div className="container">
        <SectionTitle
          title="צור קשר"
          subtitle="אשמח לעמוד לרשותך בכל שאלה"
          center
          showUnderline
          boldSubtitle
        />
        
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
          {formStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-6xl text-green-500 mb-4">✓</div>
              <h3 className="text-2xl font-bold text-brandBlue mb-2">תודה על פנייתך!</h3>
              <p className="text-brandGray">אחזור אליך בהקדם האפשרי.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {formStatus === 'error' && errorMessage && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">
                  <p className="font-medium text-center">{errorMessage}</p>
                </div>
              )}
              
              <InputField
                id="name"
                name="name"
                label="שם מלא"
                type="text"
                placeholder="ישראל ישראלי"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <InputField
                id="phone"
                name="phone"
                label="טלפון"
                type="tel"
                placeholder="050-1234567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              
              <InputField
                id="email"
                name="email"
                label="דוא״ל"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <InputField
                id="message"
                name="message"
                label="הודעה"
                isTextArea
                placeholder="כתוב את הודעתך כאן..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
              />
              
              {/* הודעת שקיפות ופרטיות */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-brandBlue mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-brandBlue leading-relaxed">
                    <p className="font-medium mb-2">שקיפות:</p>
                    <p className="mb-2">
                      הפרטים נדרשים לצורך טיפול בפנייה וחזרה אליך. ייתכן שנעביר מידע לספקי תשתית (אירוח/דוא"ל) 
                      ולגוף ביטוחי רלוונטי לבקשה. לפרטים המלאים וזכויות עיון/תיקון/מחיקה – 
                      ראו <Link href="/privacy-policy" className="underline hover:text-brandGold">מדיניות פרטיות</Link>.
                    </p>
                    <p className="text-xs">
                      פניות בנושא פרטיות: <a href="mailto:maor@maorz.co.il" className="underline">maor@maorz.co.il</a>, 
                      טל' <a href="tel:03-5040049" className="underline">03-5040049</a>.<br/>
                      <strong>מאור זיני - ביטוח ופיננסים</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* תיבת הסכמה לפרטיות */}
              <div className="mt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 text-brandBlue border-gray-300 rounded focus:ring-brandBlue"
                    required
                  />
                  <span className="text-sm text-brandGray">
                    קראתי והבנתי את{' '}
                    <Link href="/privacy-policy" className="text-brandBlue underline hover:text-brandGold">
                      מדיניות הפרטיות
                    </Link>
                    {' '}ואני מסכים/ה לעיבוד הפרטים לצורך מתן מענה לפנייה
                  </span>
                </label>
              </div>
              
              <div className="mt-6">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  ariaLabel="שליחת הטופס"
                  className={`text-lg py-3 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-md ${
                    formStatus === 'submitting' || !privacyAccepted ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={formStatus === 'submitting' || !privacyAccepted}
                >
                  {formStatus === 'submitting' ? 'שולח...' : 'שליחה'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      {/* קו דקורטיבי עדין בחלק התחתון */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
    </section>
  );
};

export default ContactForm; 