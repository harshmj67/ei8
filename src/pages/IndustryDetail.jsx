import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { industries } from '../data/industries';

const IndustryDetail = () => {
  const { slug } = useParams();
  const item = industries.find((i) => i.slug === slug);
  if (!item) return <Navigate to="/industries" replace />;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center text-white py-28"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Link
            to="/industries"
            data-testid="back-to-industries-link"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Industries
          </Link>
          <h1
            data-testid="industry-detail-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            {item.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 italic max-w-3xl mx-auto drop-shadow">
            {item.hero}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p
            data-testid="industry-detail-description"
            className="text-slate-600 text-lg leading-relaxed mb-12"
          >
            {item.description}
          </p>

          {/* Business Challenges */}
          {item.challengesNarrative && (
            <div className="mb-14">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Business Challenges
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">{item.challengesNarrative}</p>
            </div>
          )}

          {/* How Ei8 Helps */}
          {item.howWeHelp && item.howWeHelp.length > 0 && (
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                How Ei8 Helps
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {item.howWeHelp.map((h) => (
                  <div
                    key={h.title}
                    className="bg-white border border-slate-200 hover:border-blue-600 hover:shadow-lg rounded-xl p-5 transition"
                  >
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{h.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{h.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business Scenario */}
          {item.businessScenario && (
            <div className="mb-14 bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600 rounded-2xl p-8">
              <div className="flex items-center mb-3">
                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Business Scenario</h2>
              </div>
              <p
                data-testid="industry-detail-scenario"
                className="text-slate-700 leading-relaxed"
              >
                {item.businessScenario}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;