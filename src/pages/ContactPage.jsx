import React from 'react';
import ContactSection from '../components/ContactSection';

const Contact = () => (
  <div className="bg-white">
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
          Let's talk about turning your data into outcomes.
        </p>
      </div>
    </section>
    <ContactSection />
  </div>
);

export default Contact;