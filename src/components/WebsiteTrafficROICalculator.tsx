import React, { useState, useEffect } from 'react';

const WebsiteTrafficROICalculator = () => {
  // State for user inputs
  const [websiteTraffic, setWebsiteTraffic] = useState(10000);
  const [leadsPerMonth, setLeadsPerMonth] = useState(500);
  const [dealsPerMonth, setDealsPerMonth] = useState(36);
  const [avgGrossPerDeal, setAvgGrossPerDeal] = useState(2400);
  const [totalAdSpend, setTotalAdSpend] = useState(15000);
  
  // Adjustable rates
  const [websiteRecoveryRate, setWebsiteRecoveryRate] = useState(50); // Percentage
  const [identifiedShopperConversionRate, setIdentifiedShopperConversionRate] = useState(3); // Percentage (1-5% range)
  const [hotLeadConversionRate, setHotLeadConversionRate] = useState(7); // Percentage - converts hot leads to deals

  // Calculated values
  const [conversionRate, setConversionRate] = useState(0);
  const [unsoldLeadsPerMonth, setUnsoldLeadsPerMonth] = useState(0);
  
  // Website traffic calculations
  const [identifiableShoppers, setIdentifiableShoppers] = useState(0);
  const [hotLeadsPerMonth, setHotLeadsPerMonth] = useState(0);
  const [hotLeadsPerYear, setHotLeadsPerYear] = useState(0);
  const [dealsFromHotLeadsPerMonth, setDealsFromHotLeadsPerMonth] = useState(0);
  const [dealsFromHotLeadsPerYear, setDealsFromHotLeadsPerYear] = useState(0);
  const [revenueLiftPerMonth, setRevenueLiftPerMonth] = useState(0);
  const [revenueLiftPerYear, setRevenueLiftPerYear] = useState(0);
  const [costPerLead, setCostPerLead] = useState(0);
  const [potentialAdSpendROI, setPotentialAdSpendROI] = useState(0);

  // Recalculate whenever inputs change
  useEffect(() => {
    // Conversion Rate = (Car Deals / Leads) × 100
    const conversion = leadsPerMonth > 0 ? (dealsPerMonth / leadsPerMonth) * 100 : 0;
    setConversionRate(conversion);

    // Unsold Leads Per Month = Leads - Car Deals (for display only)
    const unsoldLeadsMonth = leadsPerMonth - dealsPerMonth;
    setUnsoldLeadsPerMonth(Math.max(0, unsoldLeadsMonth));

    // Website Traffic Calculations
    // Identifiable Shoppers = Website Traffic × Website Recovery Rate
    const identifiable = websiteTraffic * (websiteRecoveryRate / 100);
    setIdentifiableShoppers(identifiable);

    // Hot Leads Per Month = Identifiable Shoppers × Identified Shopper Conversion Rate
    const identifiedConversionDecimal = identifiedShopperConversionRate / 100;
    const hotLeadsMonth = identifiable * identifiedConversionDecimal;
    setHotLeadsPerMonth(Math.max(0, Math.round(hotLeadsMonth)));

    // Hot Leads Per Year
    const hotLeadsYear = hotLeadsMonth * 12;
    setHotLeadsPerYear(Math.max(0, Math.round(hotLeadsYear)));

    // Deals from Hot Leads Per Month = Hot Leads × Hot Lead Conversion Rate
    const hotLeadConversionDecimal = hotLeadConversionRate / 100;
    const dealsMonth = hotLeadsMonth * hotLeadConversionDecimal;
    setDealsFromHotLeadsPerMonth(Math.max(0, Math.round(dealsMonth)));

    // Deals from Hot Leads Per Year
    const dealsYear = dealsMonth * 12;
    setDealsFromHotLeadsPerYear(Math.max(0, Math.round(dealsYear)));

    // Revenue Lift Per Month = Deals from Hot Leads × Avg Gross Profit
    const liftMonth = dealsMonth * avgGrossPerDeal;
    setRevenueLiftPerMonth(Math.max(0, liftMonth));

    // Revenue Lift Per Year
    const liftYear = dealsYear * avgGrossPerDeal;
    setRevenueLiftPerYear(Math.max(0, liftYear));

    // Cost Per Lead = Total Ad Spend / Leads
    const cpl = leadsPerMonth > 0 ? totalAdSpend / leadsPerMonth : 0;
    setCostPerLead(cpl);

    // Potential Ad Spend ROI = Revenue Lift / Ad Spend
    const roi = totalAdSpend > 0 ? (liftMonth / totalAdSpend) * 100 : 0;
    setPotentialAdSpendROI(roi);
  }, [websiteTraffic, leadsPerMonth, dealsPerMonth, avgGrossPerDeal, totalAdSpend, websiteRecoveryRate, identifiedShopperConversionRate, hotLeadConversionRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Calculate Your Missed Opportunities
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            See how many potential deals and revenue you're leaving on the table. 
            Adjust the sliders below to match your dealership's metrics.
          </p>
        </div>

        {/* Input Sliders */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Your Dealership Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Traffic Slider */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Website Traffic Last Month
              </label>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-slate-900">{formatNumber(websiteTraffic)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="500"
                value={websiteTraffic}
                onChange={(e) => setWebsiteTraffic(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>0</span>
                <span>50,000</span>
              </div>
            </div>

            {/* Leads Per Month Slider */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Leads Last Month
              </label>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-slate-900">{formatNumber(leadsPerMonth)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                step="10"
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>0</span>
                <span>2,000</span>
              </div>
            </div>

            {/* Car Deals Per Month Slider */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Vehicles Sold Last Month
              </label>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-slate-900">{formatNumber(dealsPerMonth)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="1"
                value={dealsPerMonth}
                onChange={(e) => setDealsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>0</span>
                <span>200</span>
              </div>
            </div>

            {/* Average Gross Per Deal Slider */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Avg Gross Profit (Front & Backend)
              </label>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-slate-900">{formatCurrency(avgGrossPerDeal)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={avgGrossPerDeal}
                onChange={(e) => setAvgGrossPerDeal(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$0</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Total Ad Spend Slider */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Total Advertising Spend
              </label>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-slate-900">{formatCurrency(totalAdSpend)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={totalAdSpend}
                onChange={(e) => setTotalAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$0</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Cost Per Lead Display */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Cost Per Lead
              </label>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-blue-600">{formatCurrency(costPerLead)}</span>
              </div>
              <div className="text-sm text-slate-500 mt-8">
                Calculated: Ad Spend ÷ Leads
              </div>
            </div>
          </div>

          {/* Adjustable Recovery Rates */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h4 className="text-md font-bold text-slate-900 mb-6">Adjust Conversion Rate Assumptions</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Website Lead Recovery Rate */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Website Lead Recovery Rate
                </label>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-emerald-600">{websiteRecoveryRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={websiteRecoveryRate}
                  onChange={(e) => setWebsiteRecoveryRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-green"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1%</span>
                  <span>100%</span>
                </div>
                <div className="text-sm text-slate-600 mt-2">
                  % of website traffic identifiable as shoppers
                </div>
              </div>

              {/* Identified Shopper Conversion Rate */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Identified Shopper Conversion Rate
                </label>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-blue-600">{identifiedShopperConversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={identifiedShopperConversionRate}
                  onChange={(e) => setIdentifiedShopperConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-blue"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1%</span>
                  <span>10%</span>
                </div>
                <div className="text-sm text-slate-600 mt-2">
                  % of identified shoppers who become hot leads
                </div>
              </div>

              {/* Hot Lead Conversion Rate */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Hot Lead Conversion Rate
                </label>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-purple-600">{hotLeadConversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={hotLeadConversionRate}
                  onChange={(e) => setHotLeadConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-purple"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1%</span>
                  <span>30%</span>
                </div>
                <div className="text-sm text-slate-600 mt-2">
                  % of hot leads that convert to deals
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Performance */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Your Current Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                Conversion Rate (Leads to Sales)
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-3">
                {conversionRate.toFixed(1)}%
              </div>
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(conversionRate, 100)}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                Unsold Leads Last Month
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-3">
                {formatNumber(unsoldLeadsPerMonth)}
              </div>
              <div className="text-sm text-slate-500">
                These leads walked away without a deal
              </div>
            </div>
          </div>
        </div>

        {/* Website Traffic Opportunity - NEW HERO SECTION */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200 p-8 mb-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              🚀 Hidden Opportunity in Your Website Traffic
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              What You Could Recover with TredFi Access
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              At {websiteRecoveryRate}% recovery rate, these are the identifiable shoppers from your website traffic:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {/* Identifiable Shoppers */}
            <div className="bg-white rounded-xl shadow-lg border border-emerald-200 p-6 text-center">
              <div className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-3">
                Identifiable Shoppers
              </div>
              <div className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-2">
                {formatNumber(identifiableShoppers)}
              </div>
              <div className="text-slate-600 font-medium text-sm">
                {websiteRecoveryRate}% of your traffic can be identified
              </div>
            </div>

            {/* Hot Leads */}
            <div className="bg-white rounded-xl shadow-lg border border-emerald-200 p-6 text-center">
              <div className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-3">
                Hot Leads Per Month
              </div>
              <div className="text-5xl md:text-6xl font-extrabold text-emerald-600 mb-2">
                {formatNumber(hotLeadsPerMonth)}
              </div>
              <div className="text-slate-600 font-medium text-sm">
                At {identifiedShopperConversionRate}% conversion rate
              </div>
            </div>

            {/* Deals from Hot Leads */}
            <div className="bg-white rounded-xl shadow-lg border border-emerald-200 p-6 text-center">
              <div className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-3">
                Deals Per Month
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">
                {formatNumber(dealsFromHotLeadsPerMonth)}
              </div>
              <div className="text-slate-600 font-medium text-sm">
                At {hotLeadConversionRate}% hot lead conversion
              </div>
            </div>
          </div>

          {/* Annual Projection */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-emerald-300 p-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-2">
                Annual Revenue from Hot Leads
              </div>
              <div className="text-5xl md:text-6xl font-extrabold text-emerald-600 mb-2">
                {formatCurrency(revenueLiftPerYear)}
              </div>
              <div className="text-slate-700 font-semibold text-lg mb-2">
                {formatNumber(dealsFromHotLeadsPerYear)} deals from {formatNumber(hotLeadsPerYear)} hot leads per year
              </div>
              {potentialAdSpendROI > 0 && (
                <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full text-emerald-700 font-bold text-sm">
                  {potentialAdSpendROI.toFixed(0)}% ROI on your ad spend
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Total Annual Impact */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            💎 Your Total Annual Opportunity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-sm font-semibold text-blue-100 uppercase tracking-wide mb-2">
                Total Hot Leads Per Year
              </div>
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                {formatNumber(hotLeadsPerYear)}
              </div>
              <div className="text-blue-100 text-sm">
                Converting to {formatNumber(dealsFromHotLeadsPerYear)} deals annually
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-xl border-4 border-yellow-400">
              <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Total Annual Revenue Lift
              </div>
              <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">
                {formatCurrency(revenueLiftPerYear)}
              </div>
              <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full text-yellow-800 font-bold text-sm">
                ⭐ Revenue Opportunity
              </div>
            </div>
          </div>
        </div>

        {/* CTA Message */}
        <div className="mt-8 text-center bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            🎯 Stop Leaving Money on the Table
          </h3>
          <p className="text-lg text-white/90 mb-4 max-w-3xl mx-auto">
            TredFi Access identifies in-market shoppers from your website traffic and converts them into hot leads with 150+ lenders, exclusive financing options, and dedicated support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">{formatNumber(identifiableShoppers)}</div>
              <div className="text-sm text-white/90">Identifiable shoppers monthly</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">{formatNumber(hotLeadsPerYear)}</div>
              <div className="text-sm text-white/90">Hot leads per year</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">{formatCurrency(revenueLiftPerYear)}</div>
              <div className="text-sm text-white/90">Total revenue opportunity</div>
            </div>
          </div>
          <p className="text-white/90 text-base">
            📊 See pricing options below to start capturing this opportunity today.
          </p>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style>{`
        .slider-blue::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-blue::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-blue::-webkit-slider-thumb:hover {
          background: #1d4ed8;
        }

        .slider-blue::-moz-range-thumb:hover {
          background: #1d4ed8;
        }

        .slider-green::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #059669;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-green::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #059669;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-green::-webkit-slider-thumb:hover {
          background: #047857;
        }

        .slider-green::-moz-range-thumb:hover {
          background: #047857;
        }

        .slider-purple::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #9333ea;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-purple::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #9333ea;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider-purple::-webkit-slider-thumb:hover {
          background: #7e22ce;
        }

        .slider-purple::-moz-range-thumb:hover {
          background: #7e22ce;
        }
      `}</style>
    </section>
  );
};

export default WebsiteTrafficROICalculator;
