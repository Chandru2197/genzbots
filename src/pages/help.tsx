import Head from 'next/head';
import { Search, HelpCircle, MessageSquare, LifeBuoy } from 'lucide-react';

export default function HelpCenter() {
  return (
    <>
      <Head>
        <title>Help Center | GenZBot</title>
      </Head>
      <main className="relative min-h-screen">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
          <div className="absolute -left-40 -top-40 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%)' }} />
          <div className="absolute -right-40 -bottom-40 w-[45rem] h-[45rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(244,63,94,0.35), transparent 70%)' }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Help Center</h1>
            <p className="mt-4 text-slate-300 max-w-2xl">Find answers to common questions and learn how to get the most out of GenZBot.</p>

            <div className="mt-8 max-w-2xl">
              <div className="flex items-center gap-3 bg-slate-800/70 border border-slate-700 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-slate-400" />
                <input className="w-full bg-transparent outline-none text-slate-100 placeholder-slate-400" placeholder="Search for topics, e.g. onboarding, pricing, bots..." />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <HelpCircle className="w-6 h-6" />, title: 'Getting Started', desc: 'New to GenZBot? Start here to set things up quickly.' },
                { icon: <MessageSquare className="w-6 h-6" />, title: 'FAQs', desc: 'Quick answers to the most commonly asked questions.' },
                { icon: <LifeBuoy className="w-6 h-6" />, title: 'Troubleshooting', desc: 'Fix common problems and learn best practices.' }
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{card.title}</h3>
                  <p className="text-slate-300 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-white font-semibold mb-4">Popular questions</h2>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li>How do I book a Discovery Call?</li>
                  <li>Where can I find my invoices?</li>
                  <li>How do I request a custom bot?</li>
                  <li>Can I upgrade my plan later?</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-white font-semibold mb-4">Account & billing</h2>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li>Updating payment method</li>
                  <li>Managing team access</li>
                  <li>Security & privacy controls</li>
                  <li>Canceling a subscription</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 