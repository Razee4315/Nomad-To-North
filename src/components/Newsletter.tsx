import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would subscribe the user to a newsletter
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-gbsky-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Nomad To North</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Subscribe to our newsletter for exclusive deals, travel tips, and updates on new hotels in Gilgit-Baltistan.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-gbsky-600 hover:bg-gbstone-100 font-medium px-6 py-3 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 bg-white/20 text-white p-3 rounded-md">
              Thank you for subscribing! We'll send you the latest updates soon.
            </div>
          )}
          
          <p className="text-white/60 text-sm mt-4 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
