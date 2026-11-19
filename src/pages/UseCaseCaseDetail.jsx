import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, ClipboardList, TrendingUp, Wrench } from 'lucide-react';
import { useCases } from '../data/useCases';

const UseCaseCaseDetail = () => {
  const { slug, caseSlug } = useParams();
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return <Navigate to="/use-cases" replace />;

  const caseIndex = uc.cases.findIndex((c) => c.slug === caseSlug);
  const useCase = uc.cases[caseIndex];
  if (!useCase) return <Navigate to={`/use-cases/${uc.slug}`} replace />;

  const prevCase = uc.cases[(caseIndex - 1 + uc.cases.length) % uc.cases.length];
  const nextCase = uc.cases[(caseIndex + 1) % uc.cases.length];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: `url(${uc.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/88 via-blue-900/80 to-slate-900/88" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Link
            to={`/use-cases/${uc.slug}`}
            data-testid="back-to-industry-link"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to {uc.title} Use Cases
          </Link>
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold tracking-wide uppercase text-blue-100 mb-5">
            {uc.title} · Use Case {String(caseIndex + 1).padStart(2, '0')}
          </span>
          <h1
            data-testid="use-case-case-detail-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg"
          >
            {useCase.title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 italic max-w-3xl mx-auto drop-shadow">
            {useCase.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Challenge */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">The Challenge</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">{useCase.challenge}</p>
          </div>

          {/* What We Did */}
          <div className="mb-12">
            <div className="flex items-center mb-5">
              <ClipboardList className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What We Did</h2>
            </div>
            <div className="space-y-3">
              {useCase.whatWeDid.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mr-4 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-12 bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600 rounded-2xl p-8">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">The Outcome</h2>
            </div>
            <p
              data-testid="use-case-case-detail-outcome"
              className="text-slate-700 leading-relaxed mb-6"
            >
              {useCase.outcome}
            </p>
            {useCase.results && useCase.results.length > 0 && (
              <div className="grid sm:grid-cols-3 gap-4">
                {useCase.results.map((r, i) => (
                  <div
                    key={i}
                    className="bg-white border border-blue-100 rounded-xl px-4 py-4 text-center shadow-sm"
                  >
                    <p className="text-sm font-semibold text-slate-800 leading-snug">{r}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tools */}
          {useCase.tools && useCase.tools.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center mb-4">
                <Wrench className="w-5 h-5 text-blue-600 mr-3" />
                <h2 className="text-lg font-bold text-slate-900">Tools & Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {useCase.tools.map((t) => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center pt-4 pb-14 border-b border-slate-200">
            <Link
              to="/contact"
              data-testid="use-case-case-expert-cta"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-blue-600/20"
            >
              Talk to us about a similar challenge <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Prev / Next */}
          <div className="grid sm:grid-cols-2 gap-4 pt-10">
            <Link
              to={`/use-cases/${uc.slug}/${prevCase.slug}`}
              className="group flex items-center bg-white border border-slate-200 hover:border-blue-600 hover:shadow-lg rounded-xl p-5 transition"
            >
              <ArrowLeft className="w-5 h-5 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500 mb-1">Previous use case</p>
                <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                  {prevCase.title}
                </p>
              </div>
            </Link>
            <Link
              to={`/use-cases/${uc.slug}/${nextCase.slug}`}
              className="group flex items-center justify-between bg-white border border-slate-200 hover:border-blue-600 hover:shadow-lg rounded-xl p-5 transition text-right"
            >
              <div>
                <p className="text-xs text-slate-500 mb-1">Next use case</p>
                <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                  {nextCase.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-600 ml-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCaseCaseDetail;
