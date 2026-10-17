import { motion } from 'framer-motion';
import { ShieldAlert, FileText, Calendar } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export const TermsPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Terms & Conditions
        </h1>
        <div className="flex items-center justify-center gap-4 text-xs text-white/40 font-mono">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Effective: June 1, 2026
          </span>
          <span>•</span>
          <span>Last Updated: October 2026</span>
        </div>
      </motion.div>

      {/* Notice Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-10"
      >
        <GlassCard className="p-6 border-violet-500/30 bg-violet-950/10">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-violet-400 shrink-0 mt-1" />
            <div className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Zero-Knowledge & Local-First Notice:</strong> CN Vault is an offline-capable, local-first software application. Your vault is encrypted and stored exclusively on your local device. We have no access to your master password, your encryption keys, or your stored credentials. You are solely responsible for memorizing your master password and keeping secure offline backups.
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
            <span className="text-violet-400 font-mono text-sm">1.</span> Product & Developer Identification
          </h2>
          <p>
            These Terms & Conditions ("Terms") govern your use of the software product known as <strong>CN Vault</strong> ("the Software", "the Application") and its associated website at <code className="text-cyan-300 font-mono">https://cnvault.codenestui.top/</code> ("the Website").
          </p>
          <p>
            CN Vault is developed and operated independently by <strong>Marjuk Amin</strong> (trading as CodeNest / CN Vault), based in Bangladesh. You may contact the developer directly regarding legal inquiries or software notices at <a href="mailto:marjukamin06@gmail.com" className="text-cyan-400 underline hover:text-cyan-300">marjukamin06@gmail.com</a>.
          </p>
          <p>
            By downloading, installing, accessing, or using CN Vault, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree, do not install or use the Software.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">2.</span> Software License Grant & Acceptable Use
          </h2>
          <p>
            <strong>Open-Source Core:</strong> The source code of CN Vault is publicly published and licensed under the permissive MIT License. You may inspect, audit, fork, and compile the source code in accordance with the MIT License terms published in the official GitHub repository (<a href="https://github.com/Marjuk06/CN-Vault" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/Marjuk06/CN-Vault</a>).
          </p>
          <p>
            <strong>Official Binary Distribution:</strong> Precompiled packages distributed through official distribution channels (such as the Microsoft Store, Canonical Snap Store, and official GitHub Releases) are licensed for personal, educational, and authorized commercial use. You are granted a non-exclusive, revocable, non-transferable license to install and run the Application on compatible devices.
          </p>
          <p>
            <strong>Acceptable Use:</strong> You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Use the Software for any unlawful purpose or in violation of any applicable local, national, or international law.</li>
            <li>Distribute malware, trojans, or malicious payloads masquerading as official CN Vault software.</li>
            <li>Misrepresent your affiliation with CN Vault, CodeNest, or developer Marjuk Amin.</li>
            <li>Infringe upon the trademark, brand assets, or proprietary presentation of CN Vault.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">3.</span> Commercial Licensing & Payment Providers
          </h2>
          <p>
            CN Vault offers a fully functional, free community edition. In the event that you purchase a commercial license, priority support subscription, or enterprise package:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Merchant of Record:</strong> Commercial payments may be processed by authorized third-party Merchant of Record platforms (such as Paddle.com or native app store payment systems). In such cases, your financial transaction is subject to the Merchant of Record's checkout terms, billing policies, and applicable regional sales tax or VAT rules.</li>
            <li><strong>License Scope:</strong> Commercial licenses grant permission for organizational and business deployment, as specified on our <Link to="/pricing" className="text-cyan-400 underline">Pricing</Link> page at the time of purchase.</li>
            <li><strong>No Fake Offers:</strong> If commercial licensing options are in the process of finalization, they will be clearly marked as planned offers rather than active payment transactions.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">4.</span> User Responsibilities: Master Password & Backups
          </h2>
          <p>
            CN Vault is architected from the ground up as a zero-knowledge local password manager. This architectural design creates strict boundaries regarding data custody:
          </p>
          <div className="space-y-2 pl-4 border-l-2 border-violet-500/40 text-white/70">
            <p>
              <strong className="text-white">A. Master Password Custody:</strong> Your master password is the cryptographic key that derives your vault encryption key via Argon2id. It is never transmitted to us or any cloud server. If you lose or forget your master password, <strong>IT CANNOT BE RESET, RECOVERED, OR BYPASSED BY THE DEVELOPER</strong>.
            </p>
            <p>
              <strong className="text-white">B. Backup Management:</strong> Your encrypted vault lives in a local SQLite file (<code className="text-cyan-300 font-mono">vault.db</code>) within your operating system user data folder. You bear exclusive responsibility for executing regular backups (via the in-app Encrypted Backup feature or manual file system copies) and storing them in safe locations.
            </p>
            <p>
              <strong className="text-white">C. Device Security:</strong> You are responsible for ensuring that the host machine on which CN Vault executes is maintained with security updates, free of keyloggers, unauthorized screen recorders, and physical intrusion.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">5.</span> Network Communication & External Services
          </h2>
          <p>
            CN Vault does not synchronize your vault to the cloud and maintains no telemetry, analytics, or user behavior tracking. The application contains one specific external network feature:
          </p>
          <p className="text-white/70">
            When you create or update a login entry with a website URL while connected to the internet, the application may make an outbound HTTPS GET request to public favicon services (<code className="text-cyan-300 font-mono">logo.clearbit.com</code> or the target domain's <code className="text-cyan-300 font-mono">favicon.ico</code>) to retrieve a domain icon. Only the domain name is queried. No usernames, passwords, or personal data are transmitted. You can disable internet access or use the application completely offline.
          </p>
        </section>

        {/* Section 6 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">6.</span> Intellectual Property
          </h2>
          <p>
            All copyrights, trademarks, logos, UI designs, and trade dress associated with CN Vault and CodeNest are owned by Marjuk Amin. Open-source rights under the MIT license apply to the source code as distributed in the official repository, but do not grant permission to use the "CN Vault" name or trademark in a manner that confuses consumers regarding the origin of third-party forks.
          </p>
        </section>

        {/* Section 7 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">7.</span> Disclaimers of Warranties
          </h2>
          <p className="text-white/70">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CN VAULT IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p className="text-white/70">
            WHILE CN VAULT APPLIES INDUSTRY-STANDARD CRYPTOGRAPHY (ARGON2ID AND AES-256-GCM), NO SOFTWARE SYSTEM IS 100% SECURE OR IMMUNE FROM OPERATING SYSTEM LEVEL COMPROMISE, HARDWARE FAILURE, OR USER ERROR. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE COMPLETELY ERROR-FREE OR OPERATE UNINTERRUPTED.
          </p>
        </section>

        {/* Section 8 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">8.</span> Limitation of Liability & Consumer Rights
          </h2>
          <p className="text-white/70">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MARJUK AMIN, CODENEST, OR CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF CREDENTIALS, BUSINESS INTERRUPTION, LOSS OF PROFITS, OR REPUTATIONAL HARM ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE THE SOFTWARE.
          </p>
          <p>
            <strong>Consumer Protection Rights:</strong> Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability for incidental or consequential damages. If such laws apply to you, nothing in these Terms will limit any non-waivable statutory rights that you enjoy as a consumer under applicable laws (including EU, UK, and Australian consumer protection directives).
          </p>
        </section>

        {/* Section 9 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">9.</span> Termination
          </h2>
          <p>
            You may terminate this agreement at any time by uninstalling CN Vault and destroying all local copies of the Software. Your license terminates automatically if you fail to comply with any material term of this agreement. Upon termination, all provisions which by their nature should survive will remain in effect.
          </p>
        </section>

        {/* Section 10 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">10.</span> Governing Law & Dispute Resolution
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of <strong>Bangladesh</strong>, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms shall be handled first through good-faith informal negotiations. If a resolution cannot be reached, disputes shall be submitted to the competent courts of Dhaka, Bangladesh, subject to mandatory local consumer protection rules where applicable.
          </p>
        </section>

        {/* Section 11 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-violet-400 font-mono text-sm">11.</span> Changes to Terms & Contact
          </h2>
          <p>
            We may revise these Terms occasionally to reflect changes in legislation, regulatory requirements, or software functionality. Material modifications will be indicated by updating the "Last Updated" date at the top of this page.
          </p>
          <div className="pt-2 text-white/70">
            For questions or legal notifications regarding these Terms, please contact:
            <div className="mt-2 p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-cyan-300">
              Developer: Marjuk Amin<br />
              Project: CN Vault (CodeNest)<br />
              Email: marjukamin06@gmail.com<br />
              Website: https://cnvault.codenestui.top/<br />
              Location: Dhaka, Bangladesh
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};
