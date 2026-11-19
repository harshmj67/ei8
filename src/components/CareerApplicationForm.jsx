import React, { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';

// This form always sends to careers@ei8.in.
// The "to" address is configured on the EmailJS TEMPLATE itself
// (Template > Settings > "To email": careers@ei8.in) — see README-CAREERS-EMAIL.md
const CareerApplicationForm = () => {
  const formRef = useRef(null);
  const [searchParams] = useSearchParams();
  const roleFromUrl = searchParams.get('role') || '';
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_CAREERS_TEMPLATE_ID,
        formRef.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setError(err?.text || 'Failed to send. Please email careers@ei8.in directly.');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {roleFromUrl ? `Apply: ${roleFromUrl}` : 'Get in touch about a role'}
          </h2>
          <p className="text-slate-600 text-lg">
            Fill this out and our team will get back to you. Your message goes straight to{' '}
            <a href="mailto:careers@ei8.in" className="text-blue-600 hover:underline">careers@ei8.in</a>.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-4"
        >
          {/* Hidden field so the email template can show which role this is about */}
          <input type="hidden" name="role" value={roleFromUrl || 'General application'} />

          {roleFromUrl && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
              Applying for: {roleFromUrl}
            </div>
          )}

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
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
              <input name="phone" type="tel" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn / Portfolio / Resume link</label>
              <input name="link" type="url" placeholder="https://" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
            <textarea name="message" required rows="5" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Tell us why you'd be a great fit…" />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {status === 'sending' ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
            ) : (
              <><Send className="w-4 h-4 mr-2" /> Submit application</>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
              <CheckCircle2 className="w-5 h-5 mt-0.5" />
              <span>Thanks! Your application has been sent to our careers team.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm">{error}</div>
          )}
        </form>

        <p className="text-center text-sm text-slate-500 mt-6 flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" /> Prefer email? Write to{' '}
          <a href="mailto:careers@ei8.in" className="text-blue-600 hover:underline">careers@ei8.in</a>
        </p>
      </div>
    </section>
  );
};

export default CareerApplicationForm;
