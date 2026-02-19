import { Link } from "react-router-dom";
import { Shield, Scale, AlertTriangle, CheckCircle, XCircle, FileText, ArrowLeft, Lock } from "lucide-react";
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

const TermsConditions = () => {
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
          <Link to="/landing" className="flex items-center gap-2.5">
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
          <Link to="/landing">
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
            <Scale className="h-3.5 w-3.5" />
            Legal Agreement
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "hsl(222,47%,11%)" }}>
            Terms & Conditions
          </h1>
          <p className="text-sm" style={{ color: "hsl(215,16%,47%)" }}>
            Last Updated: {lastUpdated}
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12 space-y-10">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed" style={{ color: "hsl(215,16%,35%)" }}>
              Welcome to <strong>Fraud Buster</strong>. These Terms and Conditions ("Terms") govern your access to and use of our fraud detection platform, including our website, APIs, and related services (collectively, the "Service"). By accessing or using Fraud Buster, you agree to be bound by these Terms.
            </p>
            <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50">
              <p className="text-sm" style={{ color: "hsl(38,92%,40%)" }}>
                <strong>Please read these Terms carefully.</strong> If you do not agree to these Terms, you may not access or use the Service.
              </p>
            </div>
          </div>

          {/* 1. Acceptance of Terms */}
          <Section icon={CheckCircle} title="1. Acceptance of Terms">
            <p>
              By creating an account, accessing our platform, or using any part of the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </Section>

          {/* 2. Description of Service */}
          <Section icon={Shield} title="2. Description of Service">
            <div className="space-y-4">
              <p>
                Fraud Buster is a real-time fraud detection platform that uses hybrid machine learning (Isolation Forest + probability scoring) and behavioral intelligence to analyze financial transactions and identify suspicious activity.
              </p>
              
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  2.1 Core Features
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Hybrid ML Engine:</strong> Real-time anomaly detection using machine learning algorithms</li>
                  <li><strong>Behavioral DNA:</strong> User-specific behavioral modeling and pattern recognition</li>
                  <li><strong>Receiver Risk Intelligence:</strong> Detection of mule accounts, suspicious merchants, and risky beneficiaries</li>
                  <li><strong>Explainable Risk Scoring:</strong> Transparent, human-readable risk assessments</li>
                  <li><strong>Live Transaction Monitoring:</strong> Real-time transaction stream analysis</li>
                  <li><strong>Geo-Velocity Analysis:</strong> Location-based anomaly detection</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl border border-blue-100 bg-blue-50/50">
                <p className="text-sm font-semibold mb-2" style={{ color: "hsl(221,83%,53%)" }}>
                  ⚠️ CRITICAL: Detection-Only System
                </p>
                <p className="text-sm" style={{ color: "hsl(215,16%,35%)" }}>
                  Fraud Buster is a <strong>detection and flagging system only</strong>. We do NOT automatically block, cancel, or modify transactions. All risk scores and alerts are advisory. Final decisions regarding transaction approval or rejection remain solely with you or your financial institution.
                </p>
              </div>
            </div>
          </Section>

          {/* 3. Eligibility */}
          <Section icon={CheckCircle} title="3. Eligibility">
            <p>You must meet the following requirements to use the Service:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
            </ul>
          </Section>

          {/* 4. User Responsibilities */}
          <Section icon={FileText} title="4. User Responsibilities">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  4.1 Account Security
                </h3>
                <p>You are responsible for:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access or security breach</li>
                  <li>Using strong passwords and enabling multi-factor authentication when available</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  4.2 Acceptable Use
                </h3>
                <p>You agree NOT to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Attempt to reverse engineer, decompile, or hack the Service</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Scrape, crawl, or harvest data from the Service without permission</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Use the Service to facilitate money laundering or financial fraud</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  4.3 Data Accuracy
                </h3>
                <p>
                  You are responsible for ensuring that all transaction data you submit to the Service is accurate, complete, and lawfully obtained. Fraud Buster's accuracy depends on the quality of input data.
                </p>
              </div>
            </div>
          </Section>

          {/* 5. Service Limitations and Disclaimers */}
          <Section icon={AlertTriangle} title="5. Service Limitations and Disclaimers">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-red-200 bg-red-50/50">
                <p className="text-sm font-semibold mb-2" style={{ color: "hsl(0,72%,51%)" }}>
                  IMPORTANT DISCLAIMERS
                </p>
                <ul className="text-sm space-y-2" style={{ color: "hsl(215,16%,35%)" }}>
                  <li><strong>No Guarantee of Accuracy:</strong> While we strive for high accuracy, Fraud Buster cannot guarantee 100% detection of all fraudulent transactions or elimination of false positives.</li>
                  <li><strong>Advisory Only:</strong> All risk scores, alerts, and recommendations are advisory. We are not liable for any losses resulting from undetected fraud or false positives.</li>
                  <li><strong>Not Financial Advice:</strong> The Service does not provide financial, legal, or investment advice.</li>
                  <li><strong>No Warranty:</strong> The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  5.1 Service Availability
                </h3>
                <p>
                  We strive to maintain 99.9% uptime but do not guarantee uninterrupted or error-free service. We may suspend or terminate the Service for maintenance, updates, or security reasons with or without notice.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>
                  5.2 Third-Party Integrations
                </h3>
                <p>
                  The Service may integrate with third-party platforms (payment gateways, banks, APIs). We are not responsible for the availability, accuracy, or security of third-party services.
                </p>
              </div>
            </div>
          </Section>

          {/* 6. Intellectual Property */}
          <Section icon={Lock} title="6. Intellectual Property Rights">
            <div className="space-y-3">
              <p>
                All content, features, functionality, and technology underlying the Service, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Machine learning models and algorithms</li>
                <li>Software code, APIs, and documentation</li>
                <li>User interface designs and graphics</li>
                <li>Trademarks, logos, and branding</li>
                <li>Proprietary datasets and behavioral models</li>
              </ul>
              <p className="mt-3">
                ...are owned by Fraud Buster or our licensors and are protected by copyright, trademark, patent, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works without our express written permission.
              </p>
              <p className="mt-3">
                <strong>License Grant:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes, subject to these Terms.
              </p>
            </div>
          </Section>

          {/* 7. Payment and Fees */}
          <Section icon={FileText} title="7. Payment Terms and Fees">
            <div className="space-y-3">
              <p>
                Certain features of the Service may require payment of fees. By subscribing to a paid plan, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Pay all applicable fees as described in your subscription plan</li>
                <li>Provide accurate and current billing information</li>
                <li>Authorize automatic recurring charges (if applicable)</li>
                <li>Pay all taxes associated with your use of the Service</li>
              </ul>
              <p className="mt-3">
                <strong>Refunds:</strong> Fees are non-refundable except as required by law or as explicitly stated in your subscription agreement.
              </p>
              <p>
                <strong>Price Changes:</strong> We reserve the right to modify pricing with 30 days' notice. Continued use after price changes constitutes acceptance.
              </p>
            </div>
          </Section>

          {/* 8. Limitation of Liability */}
          <Section icon={XCircle} title="8. Limitation of Liability">
            <div className="p-4 rounded-2xl border border-red-200 bg-red-50/50">
              <p className="text-sm font-semibold mb-2" style={{ color: "hsl(0,72%,51%)" }}>
                LIMITATION OF LIABILITY
              </p>
              <div className="text-sm space-y-2" style={{ color: "hsl(215,16%,35%)" }}>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, FRAUD BUSTER AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Undetected fraudulent transactions or false positive alerts</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Third-party conduct or content</li>
                  <li>Service interruptions, errors, or security breaches</li>
                </ul>
                <p className="mt-3">
                  <strong>Maximum Liability:</strong> Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid us in the 12 months preceding the claim, or $100 USD, whichever is greater.
                </p>
              </div>
            </div>
          </Section>

          {/* 9. Indemnification */}
          <Section icon={Scale} title="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Fraud Buster and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from or related to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of applicable laws or regulations</li>
              <li>Any data or content you submit to the Service</li>
            </ul>
          </Section>

          {/* 10. Termination */}
          <Section icon={XCircle} title="10. Termination">
            <div className="space-y-3">
              <p>
                <strong>By You:</strong> You may terminate your account at any time by contacting us or using the account deletion feature.
              </p>
              <p>
                <strong>By Us:</strong> We may suspend or terminate your access to the Service immediately, without notice, if:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You violate these Terms</li>
                <li>Your use poses a security or legal risk</li>
                <li>You fail to pay applicable fees</li>
                <li>We discontinue the Service</li>
              </ul>
              <p className="mt-3">
                <strong>Effect of Termination:</strong> Upon termination, your right to use the Service ceases immediately. We may delete your data in accordance with our Privacy Policy and data retention policies.
              </p>
            </div>
          </Section>

          {/* 11. Dispute Resolution */}
          <Section icon={Scale} title="11. Dispute Resolution and Governing Law">
            <div className="space-y-3">
              <p>
                <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
              <p>
                <strong>Arbitration:</strong> Any dispute arising from or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with [Arbitration Rules], except where prohibited by law.
              </p>
              <p>
                <strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive any right to participate in class action lawsuits.
              </p>
            </div>
          </Section>

          {/* 12. Changes to Terms */}
          <Section icon={FileText} title="12. Modifications to Terms">
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes via email or prominent notice on the Service at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the modified Terms.
            </p>
          </Section>

          {/* 13. General Provisions */}
          <Section icon={FileText} title="13. General Provisions">
            <div className="space-y-3">
              <p>
                <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Fraud Buster.
              </p>
              <p>
                <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.
              </p>
              <p>
                <strong>Waiver:</strong> Our failure to enforce any right or provision shall not constitute a waiver of that right or provision.
              </p>
              <p>
                <strong>Assignment:</strong> You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>
              <p>
                <strong>Force Majeure:</strong> We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control.
              </p>
            </div>
          </Section>

          {/* 14. Contact Information */}
          <Section icon={Shield} title="14. Contact Us">
            <p>
              If you have questions, concerns, or disputes regarding these Terms, please contact us:
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
              <p className="font-semibold mb-2" style={{ color: "hsl(222,47%,11%)" }}>Fraud Buster Legal Team</p>
              <p className="text-sm space-y-1">
                <span className="block">Email: <strong style={{ color: "hsl(221,83%,53%)" }}>legal@fraudbuster.app</strong></span>
                <span className="block">Support: <strong style={{ color: "hsl(221,83%,53%)" }}>support@fraudbuster.app</strong></span>
                <span className="block">General Inquiries: <strong style={{ color: "hsl(221,83%,53%)" }}>contact@fraudbuster.app</strong></span>
              </p>
            </div>
          </Section>

          {/* Acknowledgment */}
          <div className="pt-6 border-t border-blue-100">
            <p className="text-sm italic" style={{ color: "hsl(215,16%,47%)" }}>
              By using Fraud Buster, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </GlassCard>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <p className="text-sm" style={{ color: "hsl(215,16%,47%)" }}>
            Have questions about these terms?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/privacy">
              <Button variant="outline" className="gap-2">
                <Lock className="h-4 w-4" />
                Read Privacy Policy
              </Button>
            </Link>
            <Link to="/landing">
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

export default TermsConditions;
