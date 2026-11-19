import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setError(err?.text || 'Failed to send. Please email sales@ei8.in directly.');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Book a free consultation</h2>
          <p className="text-slate-600 text-lg mb-8">
            Tell us about your data and AI goals. Our team will get back to you within 24 hours.
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1" />
              <a href="mailto:sales@ei8.in" className="hover:text-blue-600">sales@ei8.in</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1" />
              <span>+91 8469571283</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <span>India</span>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
              <input name="from_name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
              <input type="email" name="from_email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
              <input name="company" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
              <input
               name="phone"
                type="tel"
                required
               className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
            <textarea name="message" required rows="5" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Tell us a bit about your project or goals…" />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {status === 'sending' ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
            ) : (
              <><Send className="w-4 h-4 mr-2" /> Book consultation</>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
              <CheckCircle2 className="w-5 h-5 mt-0.5" />
              <span>Thanks! We've received your message and will reply within 24 hours.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm">{error}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;