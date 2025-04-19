
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', { name, email, subject, message });
    setIsSubmitted(true);
    // Clear form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gbsky-600 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-gbsky-100">Get in touch with our friendly team</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gbearth-800 mb-6">Our Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-gbsky-100 rounded-lg flex items-center justify-center text-gbsky-600 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gbearth-800 mb-1">Office Address</h3>
                    <p className="text-gbearth-600">Main Road, Near Clock Tower, Gilgit City, Gilgit-Baltistan, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-gbsky-100 rounded-lg flex items-center justify-center text-gbsky-600 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gbearth-800 mb-1">Phone Numbers</h3>
                    <p className="text-gbearth-600">+92 345 1234567 (Main)</p>
                    <p className="text-gbearth-600">+92 321 7654321 (Support)</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-gbsky-100 rounded-lg flex items-center justify-center text-gbsky-600 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gbearth-800 mb-1">Email Addresses</h3>
                    <p className="text-gbearth-600">info@gbhotels.com</p>
                    <p className="text-gbearth-600">support@gbhotels.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-gbsky-100 rounded-lg flex items-center justify-center text-gbsky-600 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gbearth-800 mb-1">Business Hours</h3>
                    <p className="text-gbearth-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gbearth-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gbearth-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gbearth-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 bg-gbsky-500 hover:bg-gbsky-600 rounded-full flex items-center justify-center text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-gbsky-500 hover:bg-gbsky-600 rounded-full flex items-center justify-center text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-gbsky-500 hover:bg-gbsky-600 rounded-full flex items-center justify-center text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gbearth-800 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                  <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gbearth-700 font-medium mb-2">Your Name</label>
                    <input 
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gbearth-700 font-medium mb-2">Email Address</label>
                    <input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gbearth-700 font-medium mb-2">Subject</label>
                    <input 
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2"
                      placeholder="Booking Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gbearth-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-2 px-6 rounded shadow transition-colors inline-flex items-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
              
              <div className="mt-8 bg-gbearth-50 rounded-lg p-4">
                <h3 className="font-semibold text-gbearth-800 mb-2">For Hotel Managers</h3>
                <p className="text-gbearth-600 mb-4">
                  Interested in listing your property on GB Hotels? Contact our partner relations team 
                  at <a href="mailto:partners@gbhotels.com" className="text-gbsky-600 hover:underline">partners@gbhotels.com</a> 
                  or call +92 333 9876543.
                </p>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12 bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103229.84589700906!2d74.26612759553255!3d35.91977217301953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64a95dd180d69%3A0xf67b3c75f8bfaa43!2sGilgit%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="GB Hotels Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
