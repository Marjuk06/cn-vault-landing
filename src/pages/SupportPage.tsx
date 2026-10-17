import { motion } from 'framer-motion';
import { LifeBuoy, Mail, GitBranch, Clock, AlertCircle, ShieldCheck, HelpCircle } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const SupportPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-5xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <LifeBuoy className="w-3.5 h-3.5" />
          <span>Help & Assistance</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          CN Vault Support Center
        </h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto">
          Need technical assistance, have a feature request, or wish to inquire about commercial licensing? We are here to help.
        </p>
      </motion.div>

      {/* Support Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <GlassCard glow className="p-8 border-violet-500/30 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6 text-violet-400">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Direct Developer Support</h2>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Email developer Marjuk Amin directly for bug reports, billing issues, refund requests, or commercial workplace inquiries.
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-cyan-300 select-all mb-4">
              marjukamin06@gmail.com
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <Clock className="w-3.5 h-3.5 text-violet-400" />
              <span>Typical response time: 24–48 business hours</span>
            </div>
          </div>

          <a
            href="mailto:marjukamin06@gmail.com?subject=CN%20Vault%20Support%20Inquiry"
            className="mt-8 w-full py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-center flex items-center justify-center gap-2 transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
        </GlassCard>

        <GlassCard glow className="p-8 border-cyan-500/30 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
              <GitBranch className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-2">GitHub Public Tracker</h2>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Submit public bug reports, inspect active pull requests, audit source code, or request new features in the open-source repository.
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-white/70 select-all mb-4">
              github.com/Marjuk06/CN-Vault/issues
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Publicly audited & community visible</span>
            </div>
          </div>

          <a
            href="https://github.com/Marjuk06/CN-Vault/issues"
            target="_blank"
            rel="noreferrer"
            className="mt-8 w-full py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-center flex items-center justify-center gap-2 transition-colors text-sm border border-white/10"
          >
            <GitBranch className="w-4 h-4" />
            <span>Open GitHub Issue</span>
          </a>
        </GlassCard>
      </div>

      {/* Troubleshooting Common Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-8">Troubleshooting & Diagnostics</h2>

        <GlassCard className="p-6">
          <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            Windows: WebView2 Runtime Error on Startup
          </h3>
          <p className="text-sm text-white/60 leading-relaxed pl-6">
            CN Vault relies on Microsoft Edge WebView2 for rendering native UI in Tauri. On Windows 10 and 11, WebView2 is normally installed by default. If the app fails to start or shows a missing component dialog, download the official Evergreen WebView2 Bootstrapper from Microsoft's official download portal.
          </p>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-cyan-400" />
            Linux: Clipboard Access or Icon Fetching under Snap
          </h3>
          <p className="text-sm text-white/60 leading-relaxed pl-6">
            The Snap package is strictly confined for security. If clipboard copying is restricted by your desktop environment, ensure your desktop session grants access to standard X11 or Wayland clipboard portals.
          </p>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-violet-400" />
            Forgotten Master Password Recovery
          </h3>
          <p className="text-sm text-white/60 leading-relaxed pl-6">
            Please be advised that because CN Vault utilizes zero-knowledge client-side encryption (Argon2id + AES-256-GCM), <strong>we do not possess recovery keys and cannot reset your master password</strong>. If you are locked out, you will need to re-initialize your vault or restore from an earlier backup for which you know the password.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
};
