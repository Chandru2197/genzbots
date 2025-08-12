import Head from 'next/head';

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation | GenZBot</title>
      </Head>
      <main className="relative min-h-screen bg-slate-950">
        <div className="absolute -left-48 top-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent 70%)' }} />
        <div className="absolute -right-48 bottom-10 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(244,63,94,0.35), transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Documentation</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">Guides and references to build, deploy, and scale with GenZBot.</p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 space-y-2">
              {['Overview', 'Quickstart', 'Core Concepts', 'CLI & Tools', 'API Reference', 'Tutorials'].map((label) => (
                <a key={label} className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 border border-white/10" href="#">
                  {label}
                </a>
              ))}
            </aside>

            <section className="lg:col-span-9 space-y-8">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <h2 className="text-white font-semibold text-lg mb-2">Overview</h2>
                <p className="text-sm leading-7">GenZBot streamlines automation through modular bots, integrations, and a reliable delivery pipeline. This section describes architecture, environments, and deployment flow.</p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <h2 className="text-white font-semibold text-lg mb-2">Quickstart</h2>
                <ol className="list-decimal list-inside text-sm space-y-2 text-slate-300">
                  <li>Book a discovery call and finalize your blueprint.</li>
                  <li>Enable integrations and environment secrets.</li>
                  <li>Deploy your first bot and validate outputs.</li>
                </ol>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <h2 className="text-white font-semibold text-lg mb-2">API Reference</h2>
                <p className="text-sm">Full REST/GraphQL references coming soon. Contact support for early access.</p>
              </article>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 