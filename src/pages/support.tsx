import Head from 'next/head';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';

export default function TechnicalSupport() {
  return (
    <>
      <Head>
        <title>Technical Support | GenZBot</title>
      </Head>
      <main className="relative min-h-screen bg-slate-950">
        <div className="absolute -left-40 -top-20 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(34,197,94,0.35), transparent 70%)' }} />
        <div className="absolute -right-40 -bottom-24 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(244,63,94,0.35), transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Technical Support</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">Reach our team for priority assistance. We aim to respond within 24 hours on business days.</p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              {[{icon: <Mail className='w-5 h-5'/>, title: 'Email', value: 'support@genzbots.com'},
                {icon: <Phone className='w-5 h-5'/>, title: 'Phone', value: '+1 (508) 501 6411'},
                {icon: <Clock className='w-5 h-5'/>, title: 'Hours', value: 'Mon–Fri, 9am–6pm EST'}].map(x => (
                <div key={x.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">{x.icon}</div>
                  <div>
                    <div className="text-sm text-slate-400">{x.title}</div>
                    <div className="text-white">{x.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <form className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <h2 className="text-white font-semibold text-lg">Submit a ticket</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="Full name" className="px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white placeholder-slate-400 outline-none" />
                <input placeholder="Work email" className="px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white placeholder-slate-400 outline-none" />
              </div>
              <input placeholder="Subject" className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white placeholder-slate-400 outline-none" />
              <textarea placeholder="Describe your issue..." rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white placeholder-slate-400 outline-none" />
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100">
                <MessageSquare className="w-4 h-4" /> Submit Ticket
              </button>
              <p className="text-xs text-slate-400">By submitting, you agree to our processing your information for support purposes.</p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
} 