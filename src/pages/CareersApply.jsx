import React from 'react';
import CareerApplicationForm from '../components/CareerApplicationForm';

const CareersApply = () => (
  <div className="bg-white">
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-semibold leading-[1.03] tracking-tight mb-5">
          Join Ei8
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
          Tell us about yourself. A real person on our team reads every application.
        </p>
      </div>
    </section>
    <CareerApplicationForm />
  </div>
);

export default CareersApply;
