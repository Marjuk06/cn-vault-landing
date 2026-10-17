import { motion } from 'framer-motion';
import { Building2, User, ArrowRight, Check, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export const CommercialSection = () => {
  return (
    <section className="py-24 relative" id="licensing">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Licensing & Commercial Status</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A Transparent <span className="text-gradient">Business Model</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We believe security software should have no hidden agendas. We offer a genuine, free community edition alongside dedicated commercial licensing for organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          
          {/* Card 1: Free Community Edition */}
          <GlassCard className="p-8 border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Community Edition
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                  Free Forever
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100% Free & Open Source</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Full access to all cryptographic features, unlimited credential storage, and encrypted local backups under the MIT license.
              </p>
              <ul className="space-y-2.5 text-xs text-white/70 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Argon2id + AES-256-GCM authenticated encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Local SQLite database with WAL journaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Zero telemetry, zero ads, zero tracking</span>
                </li>
              </ul>
            </div>
            <Link
              to="/download"
              className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm text-center flex items-center justify-center gap-2 transition-colors border border-white/10"
            >
              <span>Download Community Edition</span>
            </Link>
          </GlassCard>

          {/* Card 2: Commercial Licensing */}
          <GlassCard glow className="p-8 border-violet-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-violet-300 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" /> Commercial Deployment
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 font-mono">
                  Finalizing
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Commercial Workplace Licenses</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Designed for businesses, engineering teams, and corporate workstations requiring formal licensing, VAT invoicing, and direct developer support.
              </p>
              <ul className="space-y-2.5 text-xs text-white/70 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-violet-400" />
                  <span>Commercial workplace usage rights & compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-violet-400" />
                  <span>Direct priority email support with developer Marjuk Amin</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-violet-400" />
                  <span>Official Merchant of Record VAT / Tax invoices</span>
                </li>
              </ul>
            </div>
            <Link
              to="/pricing"
              className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm text-center flex items-center justify-center gap-2 transition-colors shadow-lg shadow-violet-600/20"
            >
              <span>Review Commercial Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>

        </div>

        {/* Reassurance note */}
        <div className="text-center text-xs text-white/40 max-w-xl mx-auto">
          We never introduce artificial lockouts, cloud surveillance, or forced renewals for personal desktop password management.
        </div>
      </div>
    </section>
  );
};
