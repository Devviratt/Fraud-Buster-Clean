import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-[28px] border border-white/40 bg-white/60 shadow-[0_8px_32px_rgba(30,80,200,0.10)] backdrop-blur-xl ${className}`}
  >
    {children}
  </div>
);

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-2xl"
        style={{ background: "linear-gradient(135deg, hsl(221,83%,53%), hsl(210,90%,65%))" }}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold" style={{ color: "hsl(222,47%,11%)" }}>
        {title}
      </h2>
    </div>
    <div className="pl-13 space-y-3 text-sm leading-relaxed" style={{ color: "hsl(215,16%,35%)" }}>
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  const lastUpdated = "February 20, 2026";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient canvas */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, hsl(215,80%,97%) 0%, hsl(220,70%,93%) 40%, hsl(230,80%,90%) 100%)",
        }}
      />
      {/* Soft blue orbs */}
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[120px] -z-10"
        style={{ background: "hsla(221,83%,53%,0.18)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-[120px] -z-10"
        style={{ background: "hsla(210,90%,60%,0.14)" }}
      />

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 px-6 py-3.5 backdrop-blur-xl border-b border-white/40"
        style={{ background: "hsla(0,0%,100%,0.70)" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl shadow-sm"
              style={{ background: "hsl(221,83%,53%)" }}
            >
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="text-[15px] font-bold tracking-tight" style={{ color: "hsl(222,47%,11%)" }}>
              Fraud Buster
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-16 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-xs font-semibold shadow-sm backdrop-blur"
            style={{ color: "hsl(221,83%,53%)" }}>
            <Lock className="h-3.5 w-3.5" />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "hsl(222,47%,11%)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "hsl(215,16%,47%)" }}>
            Last Updated: {lastUpdated}
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12 space-y-10">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed" style={{ color: "hsl(215,16%,35%)" }}>
              Welcome to <strong>Fraud Buster</strong>. We are committed to protecting your privacy and ensuring the security of your personal and financial data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our fraud detection platform.
            </p>
            <div className="p-4 rounded-2xl border border-blue-100 bg-blue-50/50">
              <p className="text-sm" style={{ color: "hsl(221,83%,53%)" }}>
                <strong>Important:</strong> Fraud Buster is a detection-only system. We flag suspicious transactions but never automatically block or modify them. All final decisions remain with you or your financial institution.
              </p>
            </div>
          </div>

          {/* 1. Information We Collect */}
          <Section icon={Database} title="1. Information We Collect">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  1.1 Transaction Data
                </h3>
                <p>When you use our fraud detection service, we process the following transaction information:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Transaction amount and currency</li>
                  <li>Transaction type (UPI, card payment, bank transfer, etc.)</li>
                  <li>Timestamp and frequency of transactions</li>
                  <li>Receiver/beneficiary information (UPI ID, account details, merchant name)</li>
                  <li>Geographic location data (city, state, IP address)</li>
                  <li>Device information (device type, OS, browser)</li>
                  <li>Payment method and channel</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  1.2 Behavioral Data
                </h3>
                <p>To build your unique "Behavioral DNA" profile, we analyze:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Historical spending patterns and averages</li>
                  <li>Transaction timing preferences (time of day, day of week)</li>
                  <li>Geographic movement patterns</li>
                  <li>Typical transaction amounts and categories</li>
                  <li>Frequency and velocity of transactions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  1.3 Account Information
                </h3>
                <p>If you create an account, we collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Name and email address</li>
                  <li>Phone number (optional)</li>
                  <li>Account preferences and settings</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  1.4 Automatically Collected Data
                </h3>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Log data (access times, pages viewed, IP address)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Usage analytics and performance metrics</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* 2. How We Use Your Information */}
          <Section icon={Eye} title="2. How We Use Your Information">
            <div className="space-y-3">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Fraud Detection:</strong> Analyze transactions in real-time using our hybrid ML engine (Isolation Forest + probability scoring) to identify anomalies and suspicious patterns.</li>
                <li><strong>Behavioral Modeling:</strong> Build and maintain your unique Behavioral DNA profile to improve detection accuracy and reduce false positives.</li>
                <li><strong>Receiver Risk Intelligence:</strong> Assess receiver/beneficiary risk by detecting mule accounts, new beneficiaries, and suspicious merchants.</li>
                <li><strong>Risk Scoring:</strong> Generate explainable risk scores with detailed reasoning for each flagged transaction.</li>
                <li><strong>Service Improvement:</strong> Enhance our ML models, detection algorithms, and user experience.</li>
                <li><strong>Security:</strong> Protect against unauthorized access, fraud, and security threats.</li>
                <li><strong>Compliance:</strong> Meet legal and regulatory requirements for financial services.</li>
                <li><strong>Communication:</strong> Send alerts, notifications, and important service updates.</li>
              </ul>
            </div>
          </Section>

          {/* 3. Data Storage and Security */}
          <Section icon={Lock} title="3. Data Storage and Security">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  3.1 Security Measures
                </h3>
                <p>We implement industry-standard security practices to protect your data:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
                  <li><strong>Access Control:</strong> Strict role-based access control (RBAC) with multi-factor authentication.</li>
                  <li><strong>Secure Infrastructure:</strong> Data stored on SOC 2 Type II certified cloud infrastructure.</li>
                  <li><strong>Regular Audits:</strong> Quarterly security audits and penetration testing.</li>
                  <li><strong>Data Minimization:</strong> We only collect and retain data necessary for fraud detection.</li>
                  <li><strong>Anonymization:</strong> Personal identifiers are hashed and anonymized where possible.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  3.2 Data Retention
                </h3>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li><strong>Transaction Data:</strong> Retained for 90 days for active fraud detection, then archived for 7 years for compliance.</li>
                  <li><strong>Behavioral Profiles:</strong> Maintained while your account is active, deleted within 30 days of account closure.</li>
                  <li><strong>Logs and Analytics:</strong> Retained for 12 months for security and debugging purposes.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  3.3 Edge Deployment
                </h3>
                <p>
                  Our lightweight TypeScript engine can be deployed at the edge (client-side or CDN), meaning sensitive transaction data can be processed locally without leaving your infrastructure. This minimizes data exposure and enhances privacy.
                </p>
              </div>
            </div>
          </Section>

          {/* 4. Data Sharing and Disclosure */}
          <Section icon={UserCheck} title="4. Data Sharing and Disclosure">
            <div className="space-y-3">
              <p><strong>We do not sell your personal data.</strong> We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your data.</li>
                <li><strong>Service Providers:</strong> Trusted third-party vendors who assist with hosting, analytics, and security (under strict data processing agreements).</li>
                <li><strong>Financial Institutions:</strong> If you use Fraud Buster through your bank or payment provider, we share risk scores and alerts with them.</li>
                <li><strong>Legal Compliance:</strong> When required by law, court order, or regulatory authority.</li>
                <li><strong>Fraud Prevention:</strong> With law enforcement or fraud prevention agencies to combat financial crime (anonymized data only).</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (with prior notice).</li>
              </ul>
            </div>
          </Section>

          {/* 5. Your Rights and Choices */}
          <Section icon={FileText} title="5. Your Rights and Choices">
            <div className="space-y-3">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of all personal data we hold about you.</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
                <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements).</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format.</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                <li><strong>Restrict Processing:</strong> Limit how we use your data in certain circumstances.</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at <strong style={{ color: "hsl(221,83%,53%)" }}>privacy@fraudbuster.app</strong>
              </p>
            </div>
          </Section>

          {/* 6. Cookies and Tracking */}
          <Section icon={AlertCircle} title="6. Cookies and Tracking Technologies">
            <div className="space-y-3">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Maintain your session and preferences</li>
                <li>Analyze usage patterns and improve our service</li>
                <li>Detect and prevent fraud</li>
                <li>Provide personalized experiences</li>
              </ul>
              <p className="mt-3">
                You can control cookies through your browser settings. Note that disabling cookies may limit some functionality.
              </p>
            </div>
          </Section>

          {/* 7. International Data Transfers */}
          <Section icon={Database} title="7. International Data Transfers">
            <p>
              Your data may be transferred to and processed in countries outside your jurisdiction. We ensure adequate protection through:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Standard Contractual Clauses (SCCs) approved by regulatory authorities</li>
              <li>Data processing agreements with all international partners</li>
              <li>Compliance with GDPR, CCPA, and other applicable data protection laws</li>
            </ul>
          </Section>

          {/* 8. Children's Privacy */}
          <Section icon={Shield} title="8. Children's Privacy">
            <p>
              Fraud Buster is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected data from a child, we will delete it immediately.
            </p>
          </Section>

          {/* 9. Changes to This Policy */}
          <Section icon={FileText} title="9. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes via email or prominent notice on our platform. Continued use of Fraud Buster after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          {/* 10. Contact Us */}
          <Section icon={UserCheck} title="10. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
              <p className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>Fraud Buster Privacy Team</p>
              <p className="text-sm space-y-1">
                <span className="block">Email: <strong style={{ color: "hsl(221,83%,53%)" }}>privacy@fraudbuster.app</strong></span>
                <span className="block">Security Issues: <strong style={{ color: "hsl(221,83%,53%)" }}>security@fraudbuster.app</strong></span>
                <span className="block">Data Protection Officer: <strong style={{ color: "hsl(221,83%,53%)" }}>dpo@fraudbuster.app</strong></span>
              </p>
            </div>
          </Section>

          {/* Acknowledgment */}
          <div className="pt-6 border-t border-blue-100">
            <p className="text-sm italic" style={{ color: "hsl(215,16%,47%)" }}>
              By using Fraud Buster, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>
        </GlassCard>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <p className="text-sm" style={{ color: "hsl(215,16%,47%)" }}>
            Questions about our privacy practices?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/terms">
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Read Terms & Conditions
              </Button>
            </Link>
            <Link to="/">
              <Button className="gap-2" style={{ background: "hsl(221,83%,53%)" }}>
                <Shield className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t border-white/40 backdrop-blur px-6 py-5"
        style={{ background: "hsla(0,0%,100%,0.55)" }}
      >
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: "hsl(222,47%,11%)" }}>
            <Shield className="h-3.5 w-3.5" style={{ color: "hsl(221,83%,53%)" }} />
            Fraud Buster
          </div>
          <p className="text-[11px]" style={{ color: "hsl(215,16%,55%)" }}>
            Detection Layer: Flagging Only — No Automatic Blocking
          </p>
          <div className="flex gap-4 text-[11px]" style={{ color: "hsl(215,16%,55%)" }}>
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

