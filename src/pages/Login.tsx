import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login submitted:', { email, password });
    } else {
      console.log('Registration submitted:', { name, email, password });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gbsky-50 to-white">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-gbsky-600 to-gbsky-700 p-8 text-center">
              <h2 className="text-3xl font-bold text-white">
                {isLogin ? 'Welcome Back!' : 'Create an Account'}
              </h2>
              <p className="mt-2 text-gbsky-100">
                {isLogin ? 'Sign in to your account' : 'Join our community'}
              </p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gbearth-700">
                      Full Name
                    </label>
                    <input 
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={!isLogin}
                      className="mt-1 block w-full rounded-lg border border-gbearth-300 px-4 py-3 text-gbearth-700 focus:border-gbsky-500 focus:ring-2 focus:ring-gbsky-500 focus:ring-opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gbearth-700">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-lg border border-gbearth-300 px-4 py-3 text-gbearth-700 focus:border-gbsky-500 focus:ring-2 focus:ring-gbsky-500 focus:ring-opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gbearth-700">
                    Password
                  </label>
                  <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-lg border border-gbearth-300 px-4 py-3 text-gbearth-700 focus:border-gbsky-500 focus:ring-2 focus:ring-gbsky-500 focus:ring-opacity-50"
                    placeholder="••••••••"
                  />
                </div>
                
                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gbearth-300 text-gbsky-600 focus:ring-gbsky-500" />
                      <span className="ml-2 text-gbearth-600">Remember me</span>
                    </label>
                    <a href="#" className="text-gbsky-600 hover:text-gbsky-800 font-medium">
                      Forgot password?
                    </a>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-gbsky-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gbsky-700 focus:outline-none focus:ring-2 focus:ring-gbsky-500 focus:ring-opacity-50 transition-colors"
                >
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gbearth-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-gbsky-600 hover:text-gbsky-800 font-medium"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gbearth-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gbearth-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gbearth-300 rounded-md shadow-sm bg-white text-sm font-medium text-gbearth-700 hover:bg-gbearth-50">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </button>
                  <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gbearth-300 rounded-md shadow-sm bg-white text-sm font-medium text-gbearth-700 hover:bg-gbearth-50">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 11h8.533c.044.385.067.773.067 1.167 0 3.13-1.125 5.767-3.057 7.43C15.866 21.129 14.013 22 12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2c2.89 0 5.35 1.21 7.19 3.24l-2.879 2.88C15.32 7.08 13.8 6.4 12 6.4c-3.093 0-5.6 2.507-5.6 5.6 0 3.093 2.507 5.6 5.6 5.6 1.44 0 2.719-.533 3.713-1.4.999-.867 1.69-2.107 1.946-3.56H12v-1.64z" />
                    </svg>
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-gbearth-500">
            By signing in or creating an account, you agree to our{' '}
            <a href="#" className="text-gbsky-600 hover:text-gbsky-800">Terms of Service</a> and{' '}
            <a href="#" className="text-gbsky-600 hover:text-gbsky-800">Privacy Policy</a>.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
