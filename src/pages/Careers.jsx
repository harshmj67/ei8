import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

/* =====================================================================
   EDIT CONTENT HERE — everything on the page is driven by these arrays.
   ===================================================================== */

// Current openings. Add a new object to add a role; remove one to remove it.
const openRoles = [
  {
    title: 'Marketing Intern',
    type: 'Internship',
    team: 'Marketing',
    text: 'Help shape how Ei8 tells its story. Support content, social, campaigns and go-to-market projects while working directly with our leadership team.',
  },
];

// How the culture reads on the page.
const principles = [
  {
    title: 'Outcomes over output',
    text: "We're measured by the impact we deliver for clients, not the hours we log.",
  },
  {
    title: 'Mentorship that is built in',
    text: "Senior engineers and data scientists actively coach the team. You're never left to work it out alone.",
  },
  {
    title: 'Ownership from day one',
    text: 'Whether you are starting out or experienced, you get a real piece of an engagement and the trust to run with it.',
  },
  {
    title: 'Learn by shipping',
    text: 'Our best training is real client problems, with room to try new tools, models and methods.',
  },
  {
    title: 'Direct line to leadership',
    text: 'Small teams mean your ideas reach the people who make decisions, and your work gets seen.',
  },
  {
    title: 'Honest, regular feedback',
    text: 'Clear, kind and specific, so you always know where you stand and what to grow into next.',
  },
];

// The three dots on the growth curve in the hero.
const milestones = [
  {
    when: 'Week one',
    text: 'You join a real client workstream, with a mentor to learn alongside.',
  },
  {
    when: 'Month three',
    text: 'You own a deliverable end to end and present it to the client.',
  },
  {
    when: 'Year one',
    text: "You're coaching newer teammates and shaping how we work.",
  },
];

// TODO: replace these with real quotes from Ei8 team members before launch.
const testimonials = [
  {
    quote:
      'I was in client conversations in my first month. Nobody waited for me to feel ready. They made sure I had what I needed to be ready.',
    name: 'Data Analyst',
    detail: 'Joined as a graduate hire',
    initials: 'DA',
  },
  {
    quote:
      'My mentor reviews my work like it matters, because it does. I learn something from every review.',
    name: 'Data Engineer',
    detail: 'Analytics & AI team',
    initials: 'DE',
  },
  {
    quote:
      "We're judged on what the client does with our work, not on how busy we looked. That changes how you think about every task.",
    name: 'BI Consultant',
    detail: 'Client delivery',
    initials: 'BC',
  },
];

const hiringSteps = [
  { title: 'Apply', text: 'Tell us about yourself and what you have built or want to build.' },
  { title: 'Conversation', text: 'Meet the people you would actually work with.' },
  { title: 'Working session', text: 'Think through a data problem together, the way we do on engagements.' },
  { title: 'Decision', text: 'We follow up with every applicant, whatever the outcome.' },
];

/* ===================== growth curve (hero graphic) ===================== */

const W = 560;
const H = 320;
const PX = 20;
const BASE = 290;
const TOP = 34;
const K = 3.4;
const curveY = (t) => BASE - (BASE - TOP) * ((Math.exp(K * t) - 1) / (Math.exp(K) - 1));
const point = (t) => ({ x: PX + t * (W - 2 * PX), y: curveY(t) });

const STEPS = 60;
const curvePath = Array.from({ length: STEPS + 1 }, (_, i) => {
  const { x, y } = point(i / STEPS);
  return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(' ');
const areaPath = `${curvePath} L${W - PX} ${BASE} L${PX} ${BASE} Z`;
const linearEnd = { x: W - PX, y: BASE - (BASE - TOP) * 0.3 };
const dotTimes = [0.1, 0.55, 0.92];
const DRAW_SECONDS = 2.4;
const DRAW_DELAY = 0.3;

const GrowthCurve = () => (
  <svg
    viewBox={`0 0 ${W} ${H}`}
    role="img"
    aria-label="A chart comparing a typical linear career path with a compounding career path at Ei8, with three milestones: week one, month three and year one."
    className="w-full h-auto"
  >
    {[0.25, 0.5, 0.75].map((g) => (
      <line
        key={g}
        x1={PX}
        x2={W - PX}
        y1={BASE - (BASE - TOP) * g}
        y2={BASE - (BASE - TOP) * g}
        stroke="#fff"
        strokeOpacity="0.07"
      />
    ))}
    <line x1={PX} x2={W - PX} y1={BASE} y2={BASE} stroke="#fff" strokeOpacity="0.25" />

    {/* typical, linear path */}
    <line
      x1={PX}
      y1={BASE}
      x2={linearEnd.x}
      y2={linearEnd.y}
      stroke="#94a3b8"
      strokeWidth="2"
      strokeDasharray="6 7"
      strokeLinecap="round"
    />

    {/* compounding path */}
    <path d={areaPath} fill="#29CC83" fillOpacity="0.1" className="ei8-fade" style={{ animationDelay: '1.6s' }} />
    <path
      d={curvePath}
      pathLength="1"
      fill="none"
      stroke="#29CC83"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ei8-draw"
    />

    {dotTimes.map((t, i) => {
      const { x, y } = point(t);
      return (
        <g
          key={t}
          className="ei8-pop"
          style={{ animationDelay: `${(DRAW_DELAY + t * DRAW_SECONDS).toFixed(2)}s` }}
        >
          <circle cx={x} cy={y} r="17" fill="#0F2A33" stroke="#29CC83" strokeWidth="3" />
          <text
            x={x}
            y={y + 6}
            textAnchor="middle"
            fontSize="17"
            fontWeight="700"
            fill="#fff"
            style={{ fontFamily: 'inherit' }}
          >
            {i + 1}
          </text>
        </g>
      );
    })}
  </svg>
);

/* ============================== page ============================== */

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent';

const Careers = () => (
  <div className="bg-white">
    {/* ---------- Hero ---------- */}
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-semibold leading-[1.03] tracking-tight mb-6">
            Do the best work of your career
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 max-w-xl leading-relaxed mb-10">
            Join a team of builders turning data into measurable outcomes for the world's most ambitious enterprises, and grow faster than you thought possible.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#openings"
              className={`inline-flex items-center bg-brand-accent text-brand-dark hover:bg-brand-mint px-7 py-4 rounded-lg font-semibold transition ${focus}`}
            >
              See open roles
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <Link
              to="/careers/apply"
              className={`inline-flex items-center px-7 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/10 transition ${focus}`}
            >
              Apply now
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            {openRoles.length} open {openRoles.length === 1 ? 'role' : 'roles'} right now. Open applications always welcome.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <p className="text-sm text-blue-200 mb-2">How growth looks at Ei8</p>
            <GrowthCurve />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100 mt-3 mb-6">
              <span className="inline-flex items-center gap-2">
                <svg width="26" height="4" aria-hidden="true">
                  <line x1="1" y1="2" x2="25" y2="2" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
                </svg>
                A typical role: steady, linear
              </span>
              <span className="inline-flex items-center gap-2">
                <svg width="26" height="4" aria-hidden="true">
                  <line x1="1" y1="2" x2="25" y2="2" stroke="#29CC83" strokeWidth="4" strokeLinecap="round" />
                </svg>
                At Ei8: compounding
              </span>
            </div>
            <ol className="grid sm:grid-cols-3 gap-5 border-t border-white/10 pt-5">
              {milestones.map((m, i) => (
                <li key={m.when} className="flex sm:block gap-3">
                  <span className="inline-flex sm:flex w-7 h-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-accent text-sm font-bold sm:mb-2">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{m.when}</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>

    {/* ---------- Why Ei8 ---------- */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-8">
            Build the technology that real businesses run on.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            Every engagement is real ownership, real impact and real growth from day one. That's what we mean by a career that compounds: every project makes you better at the next one.
          </p>
        </div>
      </div>
    </section>

    {/* ---------- Culture ---------- */}
    <section className="py-20 lg:py-28 bg-blue-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-5">
              How we work
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Six habits that shape every engagement and every team. They're also what you can expect from us.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {principles.map((p) => (
            <div key={p.title} className="border-t-2 border-blue-600 pt-5">
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- Open positions ---------- */}
    <section id="openings" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-5">
              Current openings
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pick a role to apply directly. Applications go straight to our careers team.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-b border-slate-200">
              {openRoles.map((role) => (
                <li key={role.title} className="border-t border-slate-200">
                  <div className="py-8 grid md:grid-cols-[1fr_auto] gap-6 md:items-center">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                          {role.type}
                        </span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                          {role.team}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">{role.title}</h3>
                      <p className="text-slate-600 leading-relaxed max-w-xl">{role.text}</p>
                    </div>
                    <Link
                      to={`/careers/apply?role=${encodeURIComponent(role.title)}`}
                      className={`inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${focus}`}
                    >
                      Apply for this role
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900 mb-1">Don't see your role?</h3>
                <p className="text-slate-600">
                  We're always meeting strong data, analytics and AI people. Tell us what you'd like to build.
                </p>
              </div>
              <Link
                to="/careers/apply"
                className={`inline-flex items-center justify-center border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${focus}`}
              >
                Send an open application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ---------- Testimonials ---------- */}
    {/* Placeholder quotes: swap in real ones in the `testimonials` array above. */}
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-14 max-w-2xl">
          In their words
        </h2>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <figure className="lg:col-span-7 self-start border-l-4 border-brand-accent pl-6 lg:pl-10">
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 leading-snug tracking-tight">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-4 mt-8">
              <span className="w-12 h-12 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center">
                {testimonials[0].initials}
              </span>
              <span>
                <span className="block font-semibold text-slate-900">{testimonials[0].name}</span>
                <span className="block text-sm text-slate-500">{testimonials[0].detail}</span>
              </span>
            </figcaption>
          </figure>

          <div className="lg:col-span-5 space-y-10">
            {testimonials.slice(1).map((t) => (
              <figure key={t.name} className="border-t border-slate-300 pt-8">
                <blockquote className="text-lg text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3 mt-5">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900 text-sm">{t.name}</span>
                    <span className="block text-sm text-slate-500">{t.detail}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ---------- Apply ---------- */}
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Ready to build a career that compounds?
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed max-w-lg mb-9">
            We hire engineers, scientists, consultants, designers and storytellers who care about what data does once it leaves the dashboard.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/careers/apply"
              className={`inline-flex items-center bg-brand-accent text-brand-dark hover:bg-brand-mint px-8 py-4 rounded-lg text-lg font-semibold transition ${focus}`}
            >
              Apply now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:careers@ei8.in"
              className={`inline-flex items-center gap-2 text-blue-100 hover:text-white underline underline-offset-4 ${focus}`}
            >
              <Mail className="w-4 h-4" />
              careers@ei8.in
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold mb-6">What happens after you apply</h3>
          <ol className="space-y-6">
            {hiringSteps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="w-9 h-9 flex-shrink-0 rounded-full border-2 border-brand-accent flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
