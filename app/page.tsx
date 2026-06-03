export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  const faqs = [
    {
      q: "How do I deploy a purchased command?",
      a: "After purchase you receive a ready-to-paste code snippet and step-by-step instructions for your bot framework (Discord.js, Sapphire, etc.)."
    },
    {
      q: "What bot frameworks are supported?",
      a: "Commands are available for Discord.js v14, Sapphire Framework, and discord.py. Each listing clearly states compatibility."
    },
    {
      q: "Can I sell my own commands?",
      a: "Yes. Subscribe as a developer, upload your command package, set your price, and start earning. We handle payments and delivery."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">
      {/* Hero */}
      <section className="text-center space-y-6">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          Gaming Tools Marketplace
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Buy &amp; Sell Custom<br />
          <span className="text-[#58a6ff]">Discord Bot Commands</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Browse production-ready bot commands built by expert developers. Purchase once, deploy in minutes — no coding required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="text-[#8b949e] text-sm">Trusted by 500+ Discord server owners · Cancel anytime</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "⚡", title: "Instant Deploy", desc: "Copy-paste snippets ready for your bot" },
          { icon: "🛡️", title: "Moderation Suite", desc: "Auto-mod, anti-raid, role management" },
          { icon: "💰", title: "Earn as Dev", desc: "Upload commands and earn passive income" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-2">
            <div className="text-3xl">{f.icon}</div>
            <div className="font-semibold text-white">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="flex justify-center">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center space-y-5">
          <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full uppercase">Pro Plan</span>
          <div>
            <span className="text-5xl font-extrabold text-white">$15</span>
            <span className="text-[#8b949e]">/mo</span>
          </div>
          <ul className="text-left space-y-2 text-sm text-[#c9d1d9]">
            {[
              "Unlimited command downloads",
              "Instant deployment guides",
              "Discord OAuth integration",
              "Priority support via Discord",
              "Sell your own commands",
              "Early access to new releases"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
          <p className="text-[#8b949e] text-xs">Secured by Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-4">
        <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-1">
              <div className="font-semibold text-white">{faq.q}</div>
              <div className="text-[#8b949e] text-sm">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} CommandMarket. Built for Discord server owners.
      </footer>
    </main>
  );
}
