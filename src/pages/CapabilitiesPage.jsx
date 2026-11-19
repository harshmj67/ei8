import React from 'react';
import { Link } from 'react-router-dom';
import { Database, BarChart3, Brain, TrendingUp, Workflow, Boxes, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/Capabilities';

const iconMap = { Database, BarChart3, Brain, TrendingUp, Workflow, Boxes };

const CapabilitiesPage = () => (
  <div className="bg-white">
    {/* Hero */}
    <section
      className="relative bg-cover bg-center text-white py-28 lg:py-36"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          Our Capabilities
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
          End-to-end data, analytics and AI capabilities to turn your data into measurable outcomes.
        </p>
      </div>
    </section>

    {/* Section header + cards */}
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
            WHAT WE DO
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Capabilities Built for Business Impact
          </h2>
          <p className="text-xl text-slate-600">
            We don't just implement technology we solve strategic problems that drive revenue,
            reduce costs, and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Database;
            return (
              <Link
                key={s.slug}
                to={`/capabilities/${s.slug}`}
                data-testid={`capability-card-${s.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Image + floating icon */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Title + Tagline + Description */}
                <div className="px-6 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {s.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mt-1 italic">{s.short}</p>
                  {s.cardDescription && (
                    <p className="text-sm text-slate-600 leading-relaxed mt-3">
                      {s.cardDescription}
                    </p>
                  )}
                </div>

                {/* Core Focus / Business Impact */}
                <div className="p-6 space-y-5 flex-1 flex flex-col">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Core Focus
                    </div>
                    <ul className="space-y-1.5">
                      {s.features.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-sm text-slate-600 leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                      Business Impact
                    </div>
                    <ul className="space-y-1.5">
                      {s.benefits.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-sm font-medium text-slate-900 leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 mt-auto">
                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                      Explore Capability
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default CapabilitiesPage;