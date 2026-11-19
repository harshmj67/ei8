import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Landmark,
  ShoppingCart,
  Truck,
  Heart,
  Briefcase,
  Radio,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { industries } from '../data/industries';

const iconMap = { Factory, Landmark, ShoppingCart, Truck, Heart, Briefcase, Radio, Building2 };

const Industries = () => (
  <div className="bg-white">
    {/* Hero */}
    <section
      className="relative bg-cover bg-center text-white py-28"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/5466277/pexels-photo-5466277.jpeg?auto=compress&w=1920)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          Industries We Empower
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow">
          Every industry generates data. Every industry faces different challenges.
        </p>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-5">
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
          At Ei8, we understand that no two
          industries operate alike. While technology forms the foundation of digital transformation,
          the real value lies in applying analytics, automation, and AI to solve industry-specific
          business challenges.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
          Our solutions are designed around operational realities, regulatory requirements, customer
          expectations, and market dynamics unique to each sector helping organizations transform
          data into measurable business outcomes.
        </p>
      </div>
    </section>

    {/* Section header + rows */}
    <section className="pb-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20">
        {/* Left-aligned section header (matches Capabilities page) */}
        <div className="mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            Deep domain knowledge across key sectors we speak your language and understand your
            challenges.
          </p>
        </div>

        <div className="space-y-8">
          {industries.map((item) => {
            const Icon = iconMap[item.icon] || Building2;
            return (
              <div
                key={item.slug}
                data-testid={`industry-card-${item.slug}`}
                className="group block bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-2xl border border-slate-200 hover:border-blue-600 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Image */}
                  <div className="lg:col-span-4">
                    <div className="relative h-72 lg:h-[380px] rounded-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="lg:col-span-8 space-y-8 lg:pt-4">
                    {/* Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {item.title}
                      </h3>
                    </div>

                    {/* 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-3 tracking-widest">
                          Challenge
                        </div>
                        <p className="text-base text-slate-700 leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-3 tracking-widest">
                          Solution
                        </div>
                        <p className="text-base text-slate-700 leading-relaxed">{item.solution}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-600 uppercase mb-3 tracking-widest">
                          Impact
                        </div>
                        <p className="text-base font-semibold text-slate-900 leading-relaxed">
                          {item.impact}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      {/* Learn More opens the Industry detail page (overview, challenges,
                          how Ei8 helps, business scenario) — separate from Use Cases. */}
                      <Link
                        to={`/industries/${item.slug}`}
                        data-testid={`industry-learn-more-${item.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold text-base"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default Industries;
