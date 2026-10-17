import { motion } from 'framer-motion';
import { Check, HelpCircle, Mail, Sparkles, Building2, User, Download, Info } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export const PricingPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Licensing</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Simple, Honest <span className="text-gradient">Pricing</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">
          Local-first security should be transparent. Start completely free with the open-source Community edition, or inquire about upcoming commercial workplace licenses.
        </p>
      </motion.div>

      {/* Reviewer / Commercial Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-14"
      >
        <GlassCard className="p-6 border-cyan-500/30 bg-cyan-950/15">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-sm text-white/80 leading-relaxed">
              <strong className="text-white">Commercial Licensing Status:</strong> The current desktop release (v1.0.1) is distributed as a 100% free, open-source application under the MIT License. Commercial workplace licenses, priority enterprise support agreements, and merchant checkout integrations (including Paddle) are currently being finalized. No simulated checkouts or misleading claims are active.
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
        
        {/* Tier 1: Community Edition (Active & Free) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard glow className="h-full p-8 md:p-10 border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-white/60 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <User className="w-4 h-4 text-violet-400" />
                  Community Edition
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Available Now
                </span>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">$0</div>
                <div className="text-sm text-white/50">Free forever • Open source under MIT</div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-8">
                Designed for individuals, developers, and privacy advocates who want complete, autonomous ownership of their passwords on their local machines.
              </p>

              <div className="space-y-3.5 mb-8 text-sm">
                <div className="font-semibold text-white text-xs uppercase tracking-wider text-white/40">Included Features</div>
                {[
                  "Unlimited password & login entries",
                  "Secure Notes, API Keys & 2FA Recovery Codes",
                  "AES-256-GCM + Argon2id local encryption",
                  "Entropy-scoring password generator",
                  "Auto-lock timers & memory zeroization",
                  "Encrypted SQLite backup with integrity verification",
                  "Windows & Linux desktop support",
                  "Public GitHub community issue tracking"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white/80">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/download"
              className="w-full py-4 rounded-full bg-white text-black font-semibold text-center flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download Free Version</span>
            </Link>
          </GlassCard>
        </motion.div>

        {/* Tier 2: Commercial & Priority Support (Finalizing) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard glow className="h-full p-8 md:p-10 border-violet-500/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-violet-500/20 text-violet-300 text-xs font-mono px-4 py-1.5 rounded-bl-xl border-l border-b border-violet-500/30">
              Commercial Roadmap
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-violet-400" />
                  Commercial License
                </span>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Details Finalizing</div>
                <div className="text-sm text-cyan-400 font-mono">Planned as perpetual license + annual maintenance</div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-8">
                Intended for commercial businesses, engineering teams, and enterprise workstations requiring commercial deployment rights and direct developer support.
              </p>

              <div className="space-y-3.5 mb-8 text-sm">
                <div className="font-semibold text-white text-xs uppercase tracking-wider text-white/40">Planned Commercial Package</div>
                {[
                  "All Community Edition cryptographic features",
                  "Commercial deployment license for business workstations",
                  "Direct priority email support with developer Marjuk Amin",
                  "Commercial VAT / Sales Tax invoice documentation",
                  "Security audit documentation & verification assistance",
                  "Guaranteed 24–48 business hour response SLA",
                  "14-day money-back satisfaction guarantee"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white/80">
                    <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="mailto:marjukamin06@gmail.com?subject=CN%20Vault%20Commercial%20Licensing%20Inquiry"
              className="w-full py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-center flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-violet-600/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact for Commercial Inquiries</span>
            </a>
          </GlassCard>
        </motion.div>

      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-center mb-8">Licensing Model Breakdown</h2>
        
        <GlassCard className="p-0 overflow-hidden border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-4 md:p-6 text-white font-semibold">Dimension</th>
                  <th className="p-4 md:p-6 text-emerald-400 font-semibold">Community Edition</th>
                  <th className="p-4 md:p-6 text-violet-400 font-semibold">Commercial License (Planned)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/70">
                <tr>
                  <td className="p-4 md:p-6 font-medium text-white">Price</td>
                  <td className="p-4 md:p-6 text-emerald-300 font-mono">$0 (Free forever)</td>
                  <td className="p-4 md:p-6 text-violet-300 font-mono">Being finalized with Merchant of Record</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-medium text-white">License Type</td>
                  <td className="p-4 md:p-6">MIT Open Source</td>
                  <td className="p-4 md:p-6">Commercial Software License</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-medium text-white">Permitted Use</td>
                  <td className="p-4 md:p-6">Personal, educational, non-commercial</td>
                  <td className="p-4 md:p-6">Commercial workplace & enterprise systems</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-medium text-white">Vault Data & Crypto</td>
                  <td className="p-4 md:p-6">Full features (AES-256-GCM + Argon2id)</td>
                  <td className="p-4 md:p-6">Full features (identical security architecture)</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-medium text-white">Support Channel</td>
                  <td className="p-4 md:p-6">Public GitHub Community Issues</td>
                  <td className="p-4 md:p-6">Direct Priority Email Support (24-48h SLA)</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-medium text-white">Invoicing & VAT</td>
                  <td className="p-4 md:p-6">N/A</td>
                  <td className="p-4 md:p-6">Official tax invoice from Merchant of Record</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-medium text-white">Current Availability</td>
                  <td className="p-4 md:p-6 text-emerald-400 font-semibold">Available for Windows & Linux</td>
                  <td className="p-4 md:p-6 text-cyan-300 font-mono">Under Review / Finalization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>

      {/* Frequently Asked Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-white/50 text-sm">Everything you need to know about CN Vault's licensing and business model.</p>
        </div>

        {[
          {
            q: "Is CN Vault really free to use right now?",
            a: "Yes. The current public releases of CN Vault on the Microsoft Store, Snap Store, and GitHub are 100% free and open-source under the MIT license. You can download and use all local features without paying anything or entering credit card details."
          },
          {
            q: "Why are you introducing a Commercial License?",
            a: "Commercial licensing allows businesses and professional organizations to deploy CN Vault with legal commercial warranties, formal VAT/tax invoicing, and dedicated priority support directly from developer Marjuk Amin. This sustains ongoing software maintenance, security audits, and future platform development."
          },
          {
            q: "Will the free version have features locked behind a paywall?",
            a: "No. Core cryptographic features, password generation, local SQLite storage, memory zeroization, and offline backups will always remain unrestricted in the Community edition. We do not believe in holding your personal security hostage."
          },
          {
            q: "How will commercial payments be handled?",
            a: "Commercial payments will be processed through authorized Merchant of Record providers (such as Paddle) or verified app store marketplaces, guaranteeing secure payments, local tax compliance, and automated receipt delivery."
          },
          {
            q: "What is your refund policy for future paid licenses?",
            a: "We offer a 14-day refund policy for all direct commercial license purchases. If CN Vault does not fit your operational workflow, you can request a prompt refund by contacting us at marjukamin06@gmail.com. Please review our full Refund Policy page for details."
          }
        ].map((faq, idx) => (
          <GlassCard key={idx} className="p-6">
            <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-violet-400 shrink-0" />
              {faq.q}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed pl-6">{faq.a}</p>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  );
};
