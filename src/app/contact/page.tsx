import SectionTitle from '@/components/common/SectionTitle';
import ContactForm from '@/components/home/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'צור קשר | מאור זיני - ביטוח ופיננסים',
  description: 'צרו קשר עם מאור זיני, מנהלת תכנון פנסיוני, פיננסים וביטוחים מוסמכת. השאירו פרטים לחזרה או התקשרו ישירות לתיאום פגישת ייעוץ.',
};

const ContactPage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="צור קשר"
            subtitle="אשמח לענות על כל שאלה"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
                <h3 className="text-2xl font-bold text-brandBlue mb-6">פרטי התקשרות</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="text-brandGold mt-1">
                      <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-brandBlue mb-1">טלפון</p>
                      <p className="text-brandGray">03-5040049</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="text-brandGold mt-1">
                      <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-brandBlue mb-1">דוא"ל</p>
                      <p className="text-brandGray">maor@maorz.co.il</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="text-brandGold mt-1">
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-brandBlue mb-1">כתובת המשרד</p>
                      <p className="text-brandGray">רחוב פיק״א 13, ראשון  לציון</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="text-brandGold mt-1">
                      <Clock size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-brandBlue mb-1">שעות פעילות</p>
                      <p className="text-brandGray">ימים א'-ה': 09:00-18:00</p>
                      <p className="text-brandGray">יום ו': 09:00-13:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-brandBlue mb-6">בואו נקבע פגישה</h3>
                <p className="text-brandGray mb-6">
                  הדרך הטובה ביותר להבין את הצרכים שלך היא בפגישה אישית. פגישת הייעוץ הראשונית אינה כרוכה בתשלום וללא התחייבות.
                </p>
                <a 
                  href="https://wa.me/972534842700?text=שלום%20מאור,%20אשמח%20לקבוע%20פגישת%20ייעוץ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                  </svg>
                  תיאום פגישה בוואטסאפ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* מפת גוגל עם מיקום המשרד */}
      <div className="w-full h-96">
        <iframe 
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=רחוב+פיקא+13,+ראשון+לציון,+ישראל&zoom=18&language=iw"
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="מיקום המשרד של מאור זיני - רחוב פיק״א 13, ראשון לציון"
          aria-label="מפת גוגל המציגה את מיקום המשרד ברחוב פיק״א 13, ראשון לציון"
        />
      </div>
    </main>
  );
};

export default ContactPage; 