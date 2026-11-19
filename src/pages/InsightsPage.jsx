import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { insights } from '../data/insights';

const Insights = () => (
  <div className="bg-white">
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">Insights</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
          Reports, playbooks and ideas from the Ei8 team.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((p) => (
          <Link
            key={p.slug}
            to={`/insights/${p.slug}`}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-600 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-8">
              <p className="text-xs font-semibold text-blue-600 uppercase mb-2">{p.category} • {p.date}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">{p.title}</h3>
              <p className="text-slate-600 mb-6">{p.short}</p>
              <span className="inline-flex items-center text-blue-600 font-semibold">
                Read <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Insights;