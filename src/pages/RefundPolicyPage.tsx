import { motion } from 'framer-motion';
import { RotateCcw, ShieldCheck, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';

export const RefundPolicyPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Customer Protection</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Refund Policy
        </h1>
        <div className="flex items-center justify-center gap-4 text-xs text-white/40 font-mono">
          <span>Effective Date: June 1, 2026</span>
          <span>•</span>
          <span>Last Updated: October 2026</span>
        </div>
      </motion.div>

      {/* Free Tier Notice Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-10"
      >
        <GlassCard className="p-6 border-cyan-500/30 bg-cyan-950/10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Free Community Edition Available:</strong> The core CN Vault desktop application is completely free and open source. We encourage all prospective users and organizations to download and evaluate CN Vault directly from the <Link to="/download" className="text-cyan-400 underline">Snap Store or Microsoft Store</Link> prior to purchasing any future commercial license or priority support plan.
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
            <span className="text-cyan-400 font-mono text-sm">1.</span> Policy Scope & Commercial Licensing
          </h2>
          <p>
            This Refund Policy outlines the terms and procedures under which refunds are reviewed and issued for commercial software licenses, priority support subscriptions, or paid enterprise add-ons purchased for <strong>CN Vault</strong>, developed by <strong>Marjuk Amin</strong>.
          </p>
          <p>
            Because the core desktop application is free to download, test, and use with full local cryptographic capabilities, users can verify hardware compatibility, performance, and workflow suitability prior to making any commercial commitment.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">2.</span> Refund Window & Eligibility
          </h2>
          <p>
            We aim for complete customer satisfaction. For direct purchases of commercial software licenses or priority support tiers, we offer a <strong>14-day refund request window</strong> from the date of purchase:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <h3 className="font-semibold text-emerald-400 flex items-center gap-2 text-xs uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4" /> Eligible Circumstances
              </h3>
              <ul className="text-xs text-white/70 space-y-1.5 list-disc pl-4">
                <li>Accidental duplicate purchases or incorrect quantities.</li>
                <li>Critical defect or software incompatibility that our technical support team cannot resolve within a reasonable timeframe.</li>
                <li>Failure of license key generation, activation, or delivery that cannot be remediated.</li>
                <li>Cancellation within the statutory cooling-off period where applicable by law.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <h3 className="font-semibold text-amber-400 flex items-center gap-2 text-xs uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4" /> Ineligible Scenarios
              </h3>
              <ul className="text-xs text-white/70 space-y-1.5 list-disc pl-4">
                <li>Refund requests submitted after the 14-day window has expired.</li>
                <li>Loss of vault data resulting from a forgotten Master Password (which is mathematically unrecoverable by design).</li>
                <li>Failure to maintain local device backups or operating system failures unrelated to CN Vault.</li>
                <li>Violations of the Acceptable Use Terms or abusive chargeback attempts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">3.</span> How to Request a Refund
          </h2>
          <p>
            To request a refund, please send an email directly to the developer at <a href="mailto:marjukamin06@gmail.com" className="text-cyan-400 underline hover:text-cyan-300">marjukamin06@gmail.com</a> with the subject line <code className="text-cyan-300 font-mono">Refund Request - [Your Order Reference]</code>.
          </p>
          <p>Please include the following information in your request to ensure rapid processing:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>Your full name and the email address used during purchase.</li>
            <li>Order Number, Invoice Reference, or Transaction ID from your receipt.</li>
            <li>Date of purchase and product tier purchased.</li>
            <li>The license key (if one was issued).</li>
            <li>A brief explanation of the reason for your refund request, and if technical, any error messages or diagnostic logs.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">4.</span> Review Process & Timelines
          </h2>
          <div className="space-y-2 text-white/70">
            <p className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <span><strong>Initial Response:</strong> We review all refund requests individually and respond within <strong>2 business days (Monday–Friday)</strong>.</span>
            </p>
            <p>
              <strong>Evaluation:</strong> If the issue is technical, we may offer immediate troubleshooting assistance or an updated build. If you prefer to proceed with the refund or the technical issue cannot be fixed, the refund will be approved promptly.
            </p>
            <p>
              <strong>Payment Disbursement:</strong> Once approved, the refund is submitted through the original payment method. Depending on your financial institution or card issuer, funds typically appear on your statement within 5 to 10 business days.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">5.</span> Role of Payment Processors & Merchants of Record
          </h2>
          <p>
            When purchasing commercial software licenses through authorized payment platforms (such as <strong>Paddle</strong>, or app marketplaces like the Microsoft Store):
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Merchant of Record Responsibility:</strong> The authorized payment provider acts as the Merchant of Record for financial transactions. They handle payment processing, sales tax/VAT compliance, and currency conversions in accordance with their legal buyer terms.</li>
            <li><strong>Store-Specific Purchases:</strong> If you purchase a paid license directly through the Microsoft Store or another platform marketplace, that platform's native refund mechanism and terms may apply to the billing transaction.</li>
            <li><strong>Support Assistance:</strong> Regardless of the checkout channel, you can always contact us at <a href="mailto:marjukamin06@gmail.com" className="text-cyan-400 underline">marjukamin06@gmail.com</a> for assistance with billing questions or license verification.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">6.</span> Subscriptions & Cancellation (Where Applicable)
          </h2>
          <p>
            If a recurring commercial support tier or maintenance subscription is purchased:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>You may cancel recurring billing at any time via your customer billing portal or by emailing our support address.</li>
            <li>Upon cancellation, your subscription remains active through the end of the current paid billing cycle, after which no further renewal charges will be assessed.</li>
            <li>Unless required by mandatory consumer protection law, partial refunds for unused days within an ongoing monthly or annual billing period are not automatically issued, but may be granted on a case-by-case basis.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">7.</span> Statutory Consumer Rights
          </h2>
          <p className="text-white/70">
            Nothing in this Refund Policy affects or restricts your statutory rights under applicable consumer protection legislation. Customers residing in the European Union, United Kingdom, Australia, or other jurisdictions with non-excludable consumer guarantees retain all mandatory rights to remedies, replacements, or refunds for non-conforming digital content.
          </p>
        </section>

        {/* Section 8 */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">8.</span> Contact Information
          </h2>
          <p>
            For any questions, refund submissions, or billing inquiries, please reach out to the developer:
          </p>
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-cyan-300">
            Developer: Marjuk Amin<br />
            Product: CN Vault<br />
            Email: marjukamin06@gmail.com<br />
            Website: https://cnvault.codenestui.top/<br />
            Inquiries: Licensing, Invoices, and Refund Evaluation
          </div>
        </section>
      </motion.div>
    </div>
  );
};
