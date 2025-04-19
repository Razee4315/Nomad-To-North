import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', { firstName, lastName, email, phone, message });
    setIsSubmitted(true);
    // Clear form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
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
        {/* Professional minimalist header */}
        <div className="py-8 px-4 sm:px-8 bg-white border-b border-gray-100 flex flex-col items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gbearth-800 mb-2 text-center">Contact Us</h1>
          <p className="text-gbearth-600 text-lg text-center max-w-2xl">We'd love to hear from you. Reach out for inquiries, support, or partnership opportunities.</p>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div>
              <h1 className="text-4xl font-bold text-gbearth-800 mb-4">Contact Us</h1>
              <p className="text-gbearth-600 mb-8 max-w-md">Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
              <div className="space-y-6 text-base">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gbsky-500" />
                  <span className="text-gbearth-800 font-medium">03436845475</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gbsky-500" />
                  <span className="text-gbearth-800 font-medium">info@nomadtonorth.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gbsky-500" />
                  <span className="text-gbearth-800 font-medium">Skardu, Gilgit-Baltistan, Pakistan</span>
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gbearth-700 font-medium mb-1">First</label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                      className="block w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2 bg-gray-50"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gbearth-700 font-medium mb-1">Last</label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                      className="block w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2 bg-gray-50"
                      placeholder="Last"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gbearth-700 font-medium mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="block w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2 bg-gray-50"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gbearth-700 font-medium mb-1">Phone (optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="block w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2 bg-gray-50"
                    placeholder="xxx-xxx-xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gbearth-700 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    className="block w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 px-4 py-2 bg-gray-50"
                    placeholder="Type your message ..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gbsky-500 hover:bg-gbsky-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
                {isSubmitted && <div className="text-green-600 text-center font-semibold">Thank you! Your message has been sent.</div>}
              </form>
            </div>
          </div>
          {/* Map below the form/info */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103229.84589700906!2d74.26612759553255!3d35.91977217301953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64a95dd180d69%3A0xf67b3c75f8bfaa43!2sGilgit%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Nomad To North Location"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
