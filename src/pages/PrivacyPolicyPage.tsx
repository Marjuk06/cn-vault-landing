import { motion } from 'framer-motion';
import { Shield, Eye, Lock, HardDrive, Wifi, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const PrivacyPolicyPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Privacy & Data Transparency</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <div className="flex items-center justify-center gap-4 text-xs text-white/40 font-mono">
          <span>Effective Date: June 1, 2026</span>
          <span>•</span>
          <span>Last Updated: October 2026</span>
        </div>
      </motion.div>

      {/* Highlights Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-10"
      >
        <GlassCard className="p-6 border-emerald-500/30 bg-emerald-950/10">
          <div className="flex items-start gap-4">
            <Eye className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Our Privacy Commitment:</strong> CN Vault is designed on the principle of minimal data collection. We do not operate a hosted SaaS database of your credentials. All vault records are encrypted and stored locally on your device. We do not track your behavior, log your entries, or sell your information.
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-8 text-white/80 leading-relaxed text-sm"
      >
        {/* Section 1 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">1.</span> Introduction & Scope
          </h2>
          <p>
            This Privacy Policy explains how <strong>Marjuk Amin</strong> ("developer", "we", "us", "our"), creator of <strong>CN Vault</strong> and operator of the website at <code className="text-cyan-300 font-mono">https://cnvault.codenestui.top/</code> ("Website"), processes information in connection with:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>The <strong>CN Vault Desktop Application</strong> (Windows and Linux binaries).</li>
            <li>The <strong>CN Vault Official Website</strong>.</li>
            <li>Customer support communications, billing, and licensing interactions.</li>
          </ul>
          <p>
            Because the Desktop Application and the Website perform completely distinct functions, their data practices are detailed separately below.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">2.</span> CN Vault Desktop Application: Data Practices
          </h2>

          <div className="space-y-3 text-white/70">
            <h3 className="text-white font-medium flex items-center gap-2 text-sm">
              <HardDrive className="w-4 h-4 text-cyan-400" /> A. Local Storage Architecture
            </h3>
            <p>
              When you use the CN Vault desktop app, all your vault contents—including website logins, usernames, passwords, API keys, recovery codes, secure notes, and user preferences—are saved locally inside an SQLite database file (<code className="text-cyan-300 font-mono">vault.db</code>) on your local hard drive.
            </p>
            <p>
              Your database is stored in standard operating system application data directories:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs font-mono text-white/60">
              <li>Windows: %APPDATA%\com.cnvault.desktop\vault.db</li>
              <li>Linux: ~/.local/share/com.cnvault.desktop/vault.db (or snap application container)</li>
            </ul>
          </div>

          <div className="space-y-3 text-white/70 pt-2 border-t border-white/5">
            <h3 className="text-white font-medium flex items-center gap-2 text-sm">
              <Lock className="w-4 h-4 text-violet-400" /> B. Cryptographic Protection & Zero Knowledge
            </h3>
            <p>
              Your vault is secured using verified, robust cryptography implemented directly in Rust:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Key Derivation:</strong> Your Master Password is transformed into an encryption key using <strong>Argon2id (version 0x13)</strong>, parameterized with a cryptographically secure 16-byte random salt generated on your machine.</li>
              <li><strong>Symmetric Encryption:</strong> Each vault entry is encrypted using <strong>AES-256-GCM</strong> (Authenticated Encryption with Associated Data) with a unique 12-byte random nonce per entry. Sensitive fields reside entirely in the <code className="text-cyan-300 font-mono">encrypted_blob</code> database column.</li>
              <li><strong>Memory Protection:</strong> Passwords and derived secret keys are managed with Rust zeroization libraries (<code className="text-cyan-300 font-mono">zeroize</code>), actively scrubbing cryptographic keys from RAM when locked or upon process termination.</li>
              <li><strong>Zero-Knowledge Limitation:</strong> We never possess, receive, or store your master password. <strong>If you lose your master password, neither we nor any third party can decrypt or recover your vault.</strong></li>
            </ul>
          </div>

          <div className="space-y-3 text-white/70 pt-2 border-t border-white/5">
            <h3 className="text-white font-medium flex items-center gap-2 text-sm">
              <Wifi className="w-4 h-4 text-amber-400" /> C. External Network Calls: Favicon Fetcher
            </h3>
            <p>
              The desktop app runs locally and does not sync your vault to the internet. However, to present accurate visual logos for your saved accounts, the app contains an optional domain icon fetcher:
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
              <p>
                <strong>Trigger:</strong> When you enter or edit an entry that includes a website URL (e.g. <code className="text-cyan-300">https://github.com</code>) while connected to the internet.
              </p>
              <p>
                <strong>Network Action:</strong> The application makes an outbound HTTPS GET request to <code className="text-cyan-300">https://logo.clearbit.com/[domain]</code> or <code className="text-cyan-300">https://[domain]/favicon.ico</code> to retrieve the public website icon.
              </p>
              <p>
                <strong>Data Transmitted:</strong> Only the domain name itself is requested. No usernames, passwords, vault IDs, metadata, or account credentials are transmitted.
              </p>
              <p>
                <strong>Offline Graceful Fallback:</strong> If no internet connection is detected or the fetch fails, the app uses localized colored initials without making further network attempts.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-white/70 pt-2 border-t border-white/5">
            <h3 className="text-white font-medium flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> D. No Telemetry, Analytics, or Crash Trackers
            </h3>
            <p>
              The desktop application does NOT include Google Analytics, Sentry, Mixpanel, Firebase, PostHog, or any third-party behavioral analytics or crash telemetry SDKs. The app does not send usage statistics or heartbeat signals.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">3.</span> Website Data Practices
          </h2>
          <p>
            When you visit our website at <code className="text-cyan-300 font-mono">https://cnvault.codenestui.top/</code>:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Hosting Infrastructure:</strong> The website is statically hosted on <strong>Vercel</strong>. Like all web servers, Vercel automatically collects transient server access logs (such as IP address, browser user-agent, requested page, and timestamp) for network routing, DDoS mitigation, and system security.</li>
            <li><strong>Cookies & Tracking:</strong> The website does NOT use tracking cookies, marketing cookies, third-party advertising pixels, or invasive behavioral trackers. No cookie consent banners are required because no non-essential cookies are set.</li>
            <li><strong>Content Delivery:</strong> External font files (Inter from Google Fonts) are loaded to render modern typography.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">4.</span> Customer Support Communications
          </h2>
          <p>
            If you contact developer Marjuk Amin by email (<a href="mailto:marjukamin06@gmail.com" className="text-cyan-400 underline">marjukamin06@gmail.com</a>) or submit an issue on GitHub:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>We receive your email address, your name (if provided), and the content of your message.</li>
            <li>This information is used strictly to assist with your inquiry, troubleshoot technical issues, or verify your licensing status.</li>
            <li>We do not sell, rent, or share your email address with marketers. Support threads are retained only as long as necessary to provide service and maintain administrative records.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">5.</span> Payment & Commercial Licensing Information
          </h2>
          <p>
            When you purchase a commercial license or support tier:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Financial transactions are handled by authorized payment providers / Merchants of Record (such as Paddle or native App Store processors).</li>
            <li>We do not collect or store full credit card numbers or banking credentials on our servers.</li>
            <li>The payment processor provides us with transactional metadata (e.g., buyer email address, order ID, product tier, and tax jurisdiction) solely to fulfill license delivery, issue invoices, and manage refunds.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">6.</span> Your Data Rights (GDPR, CCPA, and Global Laws)
          </h2>
          <p>
            Under regulations such as the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you have rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Access & Portability:</strong> Since all vault data resides locally on your device in standard SQLite and JSON export formats, you already possess complete, unfettered access to all your personal credentials.</li>
            <li><strong>Erasure & Deletion:</strong> You can permanently erase all stored credentials at any time by deleting the local <code className="text-cyan-300 font-mono">vault.db</code> file or uninstalling the application. For support emails or commercial invoice records, you may email us to request deletion.</li>
            <li><strong>No Sale of Data:</strong> We never sell personal data.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm">7.</span> Contact & Privacy Inquiries
          </h2>
          <p>
            If you have questions, comments, or requests regarding this Privacy Policy, please contact the developer directly:
          </p>
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-cyan-300">
            Developer: Marjuk Amin<br />
            Brand: CodeNest / CN Vault<br />
            Email: marjukamin06@gmail.com<br />
            Website: https://cnvault.codenestui.top/<br />
            GitHub: https://github.com/Marjuk06
          </div>
        </section>
      </motion.div>
    </div>
  );
};
