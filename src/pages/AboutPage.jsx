import React from 'react';
import { Compass, Target, Sparkles } from 'lucide-react';

const About = () => (
  <div className="bg-white">
    <section
      className="relative bg-cover bg-center text-white py-24"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=1920&q=80)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">About Ei8</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
          Your Data Holds More Potential Than You Think.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Businesses today generate more information than ever before, 
          yet much of it remains fragmented, underutilized, or difficult to interpret. 
          Without the right strategy, valuable opportunities stay hidden, decisions take longer, 
          and growth becomes harder to sustain.
        </p>
        <p>
          Ei8 bridges this gap by combining data analytics, artificial intelligence, automation, 
          and business intelligence into practical solutions that solve real business challenges. 
          We don't just implement technology, we create systems that enable better decisions, greater efficiency, 
          and measurable business outcomes.
        </p>
        <p>
          Whether you're optimizing operations, improving customer experiences, forecasting future trends, or building an AI-first organization, 
          we become your long-term partner in transforming data into sustainable competitive advantage.
        </p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="relative py-24 lg:py-28 overflow-hidden bg-slate-900">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-emerald-500/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-semibold text-blue-200 mb-6">
            <Sparkles className="w-4 h-4" /> WHAT DRIVES US
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Vision &amp; Mission
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Two ideas that shape every engagement, every dashboard, and every line of code we ship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/60 via-blue-400/10 to-transparent hover:from-blue-400 transition-all duration-500">
            <div className="relative h-full bg-slate-900/60 backdrop-blur rounded-3xl p-10 overflow-hidden">
              <Compass className="absolute -right-6 -bottom-6 w-40 h-40 text-blue-500/10 group-hover:text-blue-500/20 group-hover:rotate-12 transition-all duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7 text-blue-400" />
                </div>
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Our Vision</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2 mb-5 leading-snug">
                  Your one-stop technology partner
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  To become a trusted technology consulting partner for businesses — bringing
                  together the right technology, expertise, and solutions to make business
                  simpler, smarter, and more efficient.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We envision Ei8 as a one-stop technology partner where businesses can find the
                  technical expertise and solutions they need to solve challenges, improve
                  operations, make better decisions, and grow with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-emerald-500/60 via-emerald-400/10 to-transparent hover:from-emerald-400 transition-all duration-500">
            <div className="relative h-full bg-slate-900/60 backdrop-blur rounded-3xl p-10 overflow-hidden">
              <Target className="absolute -right-6 -bottom-6 w-40 h-40 text-emerald-500/10 group-hover:text-emerald-500/20 group-hover:rotate-12 transition-all duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-emerald-400" />
                </div>
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Our Mission</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2 mb-5 leading-snug">
                  Technology, minus the complexity
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  To simplify technology for businesses by understanding their challenges and
                  delivering practical, scalable solutions across data, analytics, AI,
                  automation, and technology consulting.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We aim to take the complexity out of technology — helping businesses identify
                  what they actually need, implement the right solution, and turn technology into
                  a meaningful business advantage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars strip */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {['Data', 'Analytics', 'Artificial Intelligence', 'Automation', 'Technology Consulting'].map(
            (pillar) => (
              <span
                key={pillar}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition"
              >
                {pillar}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  </div>
);

export default About;