import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { insights } from '../data/insights';

const InsightDetail = () => {
  const { slug } = useParams();
  const item = insights.find((i) => i.slug === slug);
  if (!item) return <Navigate to="/insights" replace />;

  return (
    <div className="bg-white">
      <section
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Link to="/insights" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
          <p className="text-sm font-semibold text-blue-200 mb-2">{item.category} • {item.date}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">{item.title}</h1>
          <p className="text-xl text-blue-100 drop-shadow">{item.short}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">{item.body}</p>
        </div>
      </section>
    </div>
  );
};

export default InsightDetail;