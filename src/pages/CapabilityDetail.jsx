import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../data/Capabilities';

const CapabilityDetail = () => {
  const { slug } = useParams();
  const capability = services.find((s) => s.slug === slug);
  if (!capability) return <Navigate to="/capabilities" replace />;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: `url(${capability.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Link
            to="/capabilities"
            data-testid="back-to-capabilities-link"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Capabilities
          </Link>
          <h1
            data-testid="capability-detail-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            {capability.title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 italic max-w-3xl mx-auto drop-shadow mb-2">
            {capability.short}
          </p>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto drop-shadow">
            {capability.hero}
          </p>
        </div>
      </section>

      {/* Overview + sidebar */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Overview</h2>
            <p
              data-testid="capability-detail-description"
              className="text-slate-600 text-lg leading-relaxed mb-10 whitespace-pre-line"
            >
              {capability.description}
            </p>

            {capability.businessInAction && (
              <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600 rounded-2xl p-8 mb-10">
                <div className="flex items-center mb-3">
                  <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-slate-900">Business in Action</h3>
                </div>
                <p
                  data-testid="capability-detail-business-in-action"
                  className="text-slate-700 leading-relaxed"
                >
                  {capability.businessInAction}
                </p>
              </div>
            )}

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Focus</h3>
            <ul className="space-y-3 mb-10">
              {capability.features.map((f) => (
                <li key={f} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="bg-slate-50 rounded-2xl p-8 h-fit sticky top-24">
            <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
              Business Impact
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Business outcomes</h3>
            <ul className="space-y-3 mb-6">
              {capability.benefits.map((b) => (
                <li key={b} className="flex items-start text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              data-testid="talk-to-expert-cta"
              className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Talk to an expert <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CapabilityDetail;