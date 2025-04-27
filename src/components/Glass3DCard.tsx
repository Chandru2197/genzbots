import React from "react";

export default function Glass3DCard({
  title = "UIVERSE (3D UI)",
  description = "Create, share, and use beautiful custom elements made with CSS",
}) {
  return (
    <div
      className="relative w-[340px] h-[340px] rounded-[2.5rem] bg-gradient-to-br from-green-300 via-emerald-300 to-teal-300 shadow-2xl p-6 flex flex-col justify-between overflow-hidden border-2 border-green-200 transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.18)]"
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
    >
      {/* Concentric Circles & Logo */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none">
        <span className="absolute top-4 right-4 w-28 h-28 rounded-full bg-white/10 blur-[2px]" />
        <span className="absolute top-8 right-8 w-20 h-20 rounded-full bg-white/20 blur-[2px]" />
        <span className="absolute top-12 right-12 w-12 h-12 rounded-full bg-white/30 blur-[1px]" />
        {/* Logo */}
        <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-emerald-400 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-2xl tracking-wider select-none">UI</span>
        </div>
      </div>
      {/* Glass overlay */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-white/30 backdrop-blur-[6px] pointer-events-none" />
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-emerald-900 mb-2">{title}</h2>
          <p className="text-emerald-800/80 font-medium">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition">
              {/* Instagram */}
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </button>
            <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition">
              {/* Twitter */}
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.924c-.793.352-1.644.59-2.538.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12 9.29c0 .352.04.695.116 1.022C8.728 10.16 5.7 8.6 3.671 6.149a4.48 4.48 0 0 0-.607 2.254c0 1.555.792 2.927 2.002 3.732a4.48 4.48 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.053-.397.081-.607.081-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.194-.004-.387-.013-.578A9.13 9.13 0 0 0 24 4.59a8.94 8.94 0 0 1-2.6.714z"/>
              </svg>
            </button>
            <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition">
              {/* Discord */}
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.074.074 0 0 0-.078.037c-.34.607-.719 1.396-.984 2.013a18.13 18.13 0 0 0-5.646 0c-.265-.617-.644-1.406-.984-2.013a.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.683 4.369a.07.07 0 0 0-.032.027C1.533 7.362.371 10.274.371 13.246c0 .04.015.078.041.108a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.13 13.13 0 0 1-1.885-.9.077.077 0 0 1-.008-.127c.127-.096.254-.195.377-.297a.074.074 0 0 1 .079-.01c3.927 1.793 8.18 1.793 12.104 0a.074.074 0 0 1 .08.01c.123.102.25.201.377.297a.077.077 0 0 1-.007.127 12.98 12.98 0 0 1-1.886.9.076.076 0 0 0-.04.104c.352.699.764 1.364 1.226 1.994a.077.077 0 0 0 .084.027 19.9 19.9 0 0 0 5.993-3.03.077.077 0 0 0 .041-.108c0-2.972-1.162-5.884-3.28-8.85a.07.07 0 0 0-.032-.027z"/>
              </svg>
            </button>
          </div>
          <button className="text-emerald-700 font-bold flex items-center gap-1 hover:underline">
            View more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 