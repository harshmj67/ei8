import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { useCases } from '../data/useCases';

const UseCaseDetail = () => {
  const { slug } = useParams();
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return <Navigate to="/use-cases" replace />;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center text-white py-28"
        style={{ backgroundImage: `url(${uc.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Link
            to="/use-cases"
            data-testid="back-to-use-cases-link"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Use Cases
          </Link>
          <h1
            data-testid="use-case-detail-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
            >
            {uc.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 italic max-w-4xl mx-auto drop-shadow">
            {uc.tagline}
          </p>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center mb-4">
            <Layers className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {uc.title} Use Cases
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl">{uc.casesIntro}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {uc.cases.map((c, idx) => (
              <Link
                key={c.slug}
                to={`/use-cases/${uc.slug}/${c.slug}`}
                data-testid={`use-case-sub-card-${c.slug}`}
                className="group flex flex-col bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300"
              >
                <span className="text-sm font-bold text-blue-600 mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {c.title}
                </h3>
                <p className="text-sm text-blue-700 italic mb-3">{c.tagline}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                  {c.summary}
                </p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm mt-auto">
                  Read the full use case
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCaseDetail;
