import React, { useState, useEffect } from 'react';

const ROICalculator = () => {
  // State for user inputs
  const [leadsPerMonth, setLeadsPerMonth] = useState(500);
  const [dealsPerMonth, setDealsPerMonth] = useState(36);
  const [avgGrossPerDeal, setAvgGrossPerDeal] = useState(2400);

  // Calculated values
  const [conversionRate, setConversionRate] = useState(0);
  const [unsoldLeadsPerYear, setUnsoldLeadsPerYear] = useState(0);
  const [missedDealsPerYear, setMissedDealsPerYear] = useState(0);
  const [missedRevenuePerYear, setMissedRevenuePerYear] = useState(0);

  // Recalculate whenever inputs change
  useEffect(() => {
    // Conversion Rate = (Car Deals / Leads) × 100
    const conversion = leadsPerMonth > 0 ? (dealsPerMonth / leadsPerMonth) * 100 : 0;
    setConversionRate(conversion);

    // Unsold Leads Per Year = (Leads - Car Deals) × 12
    const unsoldLeads = (leadsPerMonth - dealsPerMonth) * 12;
    setUnsoldLeadsPerYear(Math.max(0, unsoldLeads));

    // Missed Car Deals Per Year = Unsold Leads Per Year × 0.07 (7% recovery rate)
    const missedDeals = unsoldLeads * 0.07;
    setMissedDealsPerYear(Math.max(0, Math.round(missedDeals)));

    // Missed Sales Revenue Per Year = Missed Car Deals Per Year × Average Gross Per Deal
    const missedRevenue = missedDeals * avgGrossPerDeal;
    setMissedRevenuePerYear(Math.max(0, missedRevenue));
  }, [leadsPerMonth, dealsPerMonth, avgGrossPerDeal]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Car Deals Last Month
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
                Avg Gross Per Deal
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
          </div>
        </div>

        {/* Calculated Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Conversion Rate */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              {conversionRate.toFixed(0)}%
            </div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Conversion Rate
            </div>
            <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(conversionRate, 100)}%` }}
              />
            </div>
          </div>

          {/* Unsold Leads Per Year */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              {formatNumber(unsoldLeadsPerYear)}
            </div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Unsold Leads Per Year
            </div>
            <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: '75%' }}
              />
            </div>
          </div>

          {/* Missed Car Deals Per Year */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              {formatNumber(missedDealsPerYear)}
            </div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Missed Car Deals Per Year
            </div>
            <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: '50%' }}
              />
            </div>
          </div>

          {/* Missed Sales Revenue Per Year */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              {formatCurrency(missedRevenuePerYear)}
            </div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Missed Sales Revenue Per Year
            </div>
            <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: '90%' }}
              />
            </div>
          </div>
        </div>

        {/* CTA Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-slate-700 font-semibold mb-2">
            TredFi Access helps you recover these lost opportunities with 150+ lenders and exclusive leads.
          </p>
          <p className="text-slate-600">
            See pricing options below to start converting more leads into deals.
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
      `}</style>
    </section>
  );
};

export default ROICalculator;

