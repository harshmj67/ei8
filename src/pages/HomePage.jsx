import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => (
  <div className="bg-white">
    {/* Hero */}
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <span
            data-testid="hero-eyebrow"
            className="inline-flex items-center px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700"
          >
            <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 animate-pulse" />
            Empowering Businesses with Data, Intelligence & Innovation
          </span>

          <h1
            data-testid="hero-headline"
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-slate-900"
          >
            Transforming Data into{' '}
            <span className="text-blue-600">Decisions That Drive Business Growth.</span>
          </h1>

          <div className="space-y-5 max-w-xl">
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
              Every business creates data. The difference lies in how it's used.
            </p>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
              At <span className="font-semibold text-slate-900">Ei8</span>, we help organizations transform complex data into meaningful insights, intelligent systems, and strategic decisions. From analytics and automation to AI-driven innovation, we empower businesses to operate smarter, grow faster, and stay ahead in an increasingly data-driven world.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              'Trusted Across Multiple Industries',
              'End-to-End Analytics Expertise',
              'Scalable Solutions for Growing Businesses',
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-lg text-slate-700">
                <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              data-testid="cta-build-strategy"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-lg font-semibold transition shadow-lg shadow-blue-600/20"
            >
              Let's Build Your Data Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              data-testid="cta-explore-solutions"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-lg text-lg font-semibold transition"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Data analytics dashboard"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block">
            <div className="text-5xl font-bold text-blue-600 mb-1">35%</div>
            <div className="text-sm text-slate-600 font-medium">Avg. Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;