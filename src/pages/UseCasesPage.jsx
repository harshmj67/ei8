import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCases } from '../data/useCases';

const UseCasesPage = () => (
  <div className="bg-white">
    {/* Hero */}
    <section
      className="relative bg-cover bg-center text-white py-28"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          Use Cases
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow">
          Real business scenarios where data, analytics, and AI create measurable impact across industries.
        </p>
      </div>
    </section>

    {/* Section */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
            INDUSTRY USE CASES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How Ei8 Delivers Value Across Industries
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            Explore how leading organizations use analytics, automation, and AI to solve real
            business challenges.
          </p>
        </div>

        <div className="space-y-8">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              to={`/use-cases/${uc.slug}`}
              data-testid={`use-case-card-${uc.slug}`}
              className="group block bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-2xl border border-slate-200 hover:border-blue-600 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative h-72 lg:h-[340px] rounded-2xl overflow-hidden">
                  <img
                    src={uc.image}
                    alt={uc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 space-y-5 lg:pt-2">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {uc.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {uc.cases.length} Use Cases
                      </span>
                    </div>
                    <p className="text-lg text-blue-600 italic mt-2 font-medium">{uc.tagline}</p>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed line-clamp-4">
                    {uc.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {uc.cases.map((c) => (
                      <span
                        key={c.slug}
                        className="inline-block px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {c.title}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center text-blue-600 font-semibold text-base">
                      Explore the {uc.cases.length} Use Cases
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default UseCasesPage;