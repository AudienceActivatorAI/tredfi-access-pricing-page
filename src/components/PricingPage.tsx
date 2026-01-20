import React from 'react';
import { Check, X, Shield, Zap, Rocket, ArrowRight, BarChart3, Users, MessageSquare } from 'lucide-react';
import ROICalculator from './ROICalculator';

const PricingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Exclusivity Banner */}
      <div className="bg-amber-100 border-b border-amber-200 py-2 text-center text-amber-800 text-xs font-bold uppercase tracking-widest px-4">
        Confidential: Unpublished Private Offer for Select Dealer Partners Only
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Private Invitation Only
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Exclusive Dealer Access: <span className="text-blue-600">Unpublished Pricing</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            This private offer is reserved for a select group of independent dealers. 
            Claim your territory and start increasing your approval rates today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-default">
              Reply to Email to Claim
            </div>
            <div className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg border-2 border-slate-900 flex items-center justify-center gap-2 cursor-default">
              Call 425.608.9097 to Start
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Pricing Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tier 1: Lifetime License */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8 border-b border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lifetime License</h3>
              <p className="text-slate-500 text-sm mb-6">AI Super Pixel-powered Audience Activator.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$995</span>
                <span className="text-slate-500 font-medium text-sm">One-Time Fee</span>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-4">
                <PricingFeature text="Up to 60% lead recovery from website traffic" />
                <PricingFeature text="500+ leads a month (must have 3k website visitors)" />
                <PricingFeature text="Old Lead Enrichment and Activation" />
                <PricingFeature text="Custom Special Finance Platform (Optional)" />
                <PricingFeature text="Short-term loan Access (150 Lenders)" />
                <PricingFeature text="Outreach Playbook (Phone, Email, and SMS)" />
                <PricingFeature text="First Year Hosting Included" />
                <PricingFeature text="Training and Support" />
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-700 mb-3">+ Audience Activator Per Deal Access ($150/deal):</p>
                <ul className="space-y-2">
                  <PricingFeature text="High intent Shoppers in your area" />
                  <PricingFeature text="Vehicle Match customer" />
                  <PricingFeature text="Auto Loan Full credit applications" />
                  <PricingFeature text="Pre-Approved - Down payment loan customers" />
                  <PricingFeature text="Pre-Approved - Negative Equity Customers" />
                </ul>
              </div>
            </div>
            <div className="p-8 pt-0">
              <div className="w-full py-4 bg-slate-100 text-slate-500 font-bold rounded-xl text-center cursor-default">
                Claim via Email Reply
              </div>
            </div>
          </div>

          {/* Tier 2: Boost - Featured */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-600 flex flex-col overflow-hidden relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
              Limited Availability
            </div>
            <div className="p-8 border-b border-slate-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Boost</h3>
              <p className="text-slate-500 text-sm mb-6">Unpublished Partner Rate.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$1,995</span>
                <span className="text-slate-500 font-medium text-sm">One-Time Fee</span>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-4">
                <PricingFeature text="Everything in Lifetime License" bold />
                <PricingFeature text="Complete Audience Activator Platform" />
                <PricingFeature text="Managed Email & Text Marketing" />
                <PricingFeature text="Exclusive Territory" />
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-700 mb-3">+ Audience Activator Per Deal Access ($150/deal):</p>
                <ul className="space-y-2">
                  <PricingFeature text="High intent Shoppers in your area" />
                  <PricingFeature text="Vehicle Match customer" />
                  <PricingFeature text="Auto Loan Full credit applications" />
                  <PricingFeature text="Pre-Approved - Down payment loan customers" />
                  <PricingFeature text="Pre-Approved - Negative Equity Customers" />
                </ul>
              </div>
            </div>
            <div className="p-8 pt-0">
              <div className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl text-center cursor-default opacity-90">
                Reply to Email to Secure
              </div>
            </div>
          </div>

          {/* Tier 3: Managed Services */}
          <div className="bg-slate-900 rounded-2xl shadow-sm text-white flex flex-col overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8 border-b border-slate-800">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 text-white">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Managed Services</h3>
              <p className="text-slate-400 text-sm mb-6">Private Territory Rights.</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-slate-400 font-medium text-sm">Must Purchase Boost</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$499</span>
                <span className="text-slate-400 font-medium text-sm">/month</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-2">*Requires $2,500/mo min. Ad budget</p>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-4">
                <PricingFeature text="Everything in Boost" dark />
                <PricingFeature text="Exclusive Territory" dark />
                <PricingFeature text="Complete Audience Activator Platform Included" dark />
                <PricingFeature text="Dedicated Account Management" dark />
                <PricingFeature text="Full-Service Marketing & Lead Generation" dark />
              </ul>
            </div>
            <div className="p-8 pt-0">
              <div className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl text-center cursor-default">
                Call for Territory Check
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Compare Our Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="py-4 px-6 text-slate-500 font-medium uppercase text-xs tracking-wider">Feature</th>
                  <th className="py-4 px-6 text-slate-900 font-bold text-center">Lifetime</th>
                  <th className="py-4 px-6 text-slate-900 font-bold text-center">Boost</th>
                  <th className="py-4 px-6 text-slate-900 font-bold text-center">Managed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <ComparisonRow label="Platform License" tier1="One-Time" tier2="One-Time" tier3="Must Purchase Boost" />
                <ComparisonRow label="One-Time Fee" tier1="$995" tier2="$1,995" tier3="Included" />
                <ComparisonRow label="Monthly Fee" tier1={false} tier2={false} tier3="$499/mo" />
                <ComparisonRow label="Per Deal Fee" tier1="$150 (Optional)" tier2="$150 (Optional)" tier3="$150 (Optional)" />
                <ComparisonRow label="Website Lead Recovery" tier1="Up to 60%" tier2="Up to 60%" tier3="Up to 60%" />
                <ComparisonRow label="Short-Term Lenders (150)" tier1={true} tier2={true} tier3={true} />
                <ComparisonRow label="SF Platform & Dashboard" tier1="Optional" tier2={true} tier3={true} />
                <ComparisonRow label="Lead Enrichment & Activation" tier1={true} tier2={true} tier3={true} />
                <ComparisonRow label="Audience Activator Platform" tier1="500+ leads/mo" tier2="Complete" tier3="Complete" />
                <ComparisonRow label="Managed Marketing" tier1={false} tier2={true} tier3={true} />
                <ComparisonRow label="Territory Exclusivity" tier1={false} tier2={true} tier3={true} />
                <ComparisonRow label="Min. Ad Budget Required" tier1={false} tier2={false} tier3="$2,500/mo" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust & Efficiency Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Dealers Choose TredFi Access</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We don't just provide a platform; we provide a system for predictable growth in special finance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <TrustCard 
            icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
            title="35% Higher Approvals"
            description="Our network of 150+ lenders covers every credit profile, ensuring you never turn away a customer again."
          />
          <TrustCard 
            icon={<Users className="w-8 h-8 text-blue-600" />}
            title="Reduced Processing Time"
            description="Streamline your lending workflow with managed CRM/DMS activation and automated email/text follow-ups."
          />
          <TrustCard 
            icon={<MessageSquare className="w-8 h-8 text-blue-600" />}
            title="Exclusive Leads"
            description="Tiers 2 and 3 provide exclusive territory leads, eliminating the competition for the same customer."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Exclusive Offer Expiry</h2>
          <p className="text-blue-100 mb-10 text-lg">
            This unpublished pricing is available to select independent dealers on a first-come, first-served basis. 
            Claim your territory before it's gone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-xl cursor-default">
              Reply to Email to Start
            </div>
            <div className="px-10 py-4 bg-blue-700 text-white font-bold rounded-lg border border-blue-500 cursor-default">
              Call 425.608.9097
            </div>
          </div>
          <p className="mt-8 text-blue-200 text-sm italic">
            Note: This is a private landing page. Please do not share this link.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center text-slate-500 text-sm">
        <p>&copy; 2025 TredFi Access. All rights reserved. Specialized lending solutions for independent dealers.</p>
      </footer>
    </div>
  );
};

const PricingFeature = ({ text, dark = false, bold = false }: { text: string; dark?: boolean; bold?: boolean }) => (
  <li className="flex items-start gap-3">
    <div className={`mt-1 flex-shrink-0 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
      <Check className="w-5 h-5" />
    </div>
    <span className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'} ${bold ? 'font-bold' : ''}`}>{text}</span>
  </li>
);

const ComparisonRow = ({ label, tier1, tier2, tier3 }: { label: string; tier1: any; tier2: any; tier3: any }) => (
  <tr>
    <td className="py-4 px-6 text-sm font-medium text-slate-900">{label}</td>
    <td className="py-4 px-6 text-center">{renderComparisonValue(tier1)}</td>
    <td className="py-4 px-6 text-center">{renderComparisonValue(tier2)}</td>
    <td className="py-4 px-6 text-center">{renderComparisonValue(tier3)}</td>
  </tr>
);

const renderComparisonValue = (val: any) => {
  if (val === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (val === false) return <X className="w-5 h-5 text-slate-300 mx-auto" />;
  return <span className="text-sm text-slate-600">{val}</span>;
};

const TrustCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

export default PricingPage;

