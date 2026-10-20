import React, { useState } from 'react';
import {
  Factory,
  BarChart3,
  QrCode,
  Users,
  Boxes,
  ShoppingCart,
  Shield,
  Layers,
  CheckCircle2,
  AlertCircle,
  Cpu,
  ArrowRight,
  Search,
  Check,
  FileCode2
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { featuredErpProject } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

// Sanitized simulated data for Analytics demonstration
const sanitizedThroughputData = [
  { day: 'Mon', hidesFinished: 340, target: 300, yieldRate: 94 },
  { day: 'Tue', hidesFinished: 410, target: 350, yieldRate: 96 },
  { day: 'Wed', hidesFinished: 380, target: 350, yieldRate: 93 },
  { day: 'Thu', hidesFinished: 460, target: 400, yieldRate: 97 },
  { day: 'Fri', hidesFinished: 490, target: 450, yieldRate: 95 },
  { day: 'Sat', hidesFinished: 320, target: 300, yieldRate: 98 },
];

export const FeaturedErpProject: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('production-tracking');
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'architecture' | 'challenges'>('modules');
  const [simulatedBarcode, setSimulatedBarcode] = useState<string>('LOT-LTH-4089');
  const [scannerStatus, setScannerStatus] = useState<string>('Verified: Premium Bovine Crust - Ready for Dyeing');
  const [productionStageStep, setProductionStageStep] = useState<number>(3);

  const selectedModule = featuredErpProject.modules.find(m => m.id === selectedModuleId) || featuredErpProject.modules[0];

  const handleBarcodeLookup = (code: string) => {
    setSimulatedBarcode(code);
    if (code.toUpperCase().includes('4089')) {
      setScannerStatus('Verified: Premium Bovine Crust - Ready for Dyeing (Lot #4089)');
    } else if (code.toUpperCase().includes('RAW')) {
      setScannerStatus('Verified: Raw Salted Hide Intake (Inspection Pending)');
    } else {
      setScannerStatus('Verified: Sanitized Sample Batch (Stage: Quality Gate)');
    }
  };

  return (
    <section id="featured-project" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Primary Featured Project"
          title={featuredErpProject.title}
          subtitle={featuredErpProject.subtitle}
        />

        {/* Project Meta Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-elevated">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  {featuredErpProject.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active Production System
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white pt-1">
                Enterprise Leather Manufacturing ERP
              </h3>
              <p className="text-sm text-slate-400">
                <span className="text-slate-300 font-medium">Role:</span> {featuredErpProject.role} • <span className="text-slate-300 font-medium">Timeline:</span> {featuredErpProject.duration}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white text-xs sm:text-sm font-semibold hover:bg-brand-500 transition-colors shadow-sm"
              >
                <span>Discuss Frontend Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Architecture</span>
              <span className="text-sm font-bold text-white block">React + Next.js</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">State &amp; Cache</span>
              <span className="text-sm font-bold text-white block">Redux Toolkit / RTK Query</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Core Modules</span>
              <span className="text-sm font-bold text-white block">7 Industrial Workflows</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Confidentiality</span>
              <span className="text-sm font-bold text-emerald-400 block">Sanitized Case Study</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'modules'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Key Modules &amp; Live Explorer ({featuredErpProject.modules.length})
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Business Context &amp; Scope
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'architecture'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Responsibilities &amp; Implementation
          </button>

          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'challenges'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Engineering Challenges &amp; Solutions
          </button>
        </div>

        {/* Tab 1: Interactive Modules Explorer */}
        {activeTab === 'modules' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Modules Selector List */}
              <div className="lg:col-span-4 space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-3">
                  Select Enterprise Module
                </div>
                {featuredErpProject.modules.map((mod) => {
                  const isSelected = mod.id === selectedModuleId;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedModuleId(mod.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-brand-50/70 border-brand-300 shadow-sm ring-1 ring-brand-200'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {mod.id === 'production-tracking' && <Factory className="w-4 h-4" />}
                        {mod.id === 'barcode-management' && <QrCode className="w-4 h-4" />}
                        {mod.id === 'analytics-dashboards' && <BarChart3 className="w-4 h-4" />}
                        {mod.id === 'employee-attendance' && <Users className="w-4 h-4" />}
                        {mod.id === 'inventory-materials' && <Boxes className="w-4 h-4" />}
                        {mod.id === 'procurement-orders' && <ShoppingCart className="w-4 h-4" />}
                        {mod.id === 'administrative-interfaces' && <Shield className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-sm font-bold truncate ${
                            isSelected ? 'text-brand-900' : 'text-slate-800'
                          }`}>
                            {mod.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {mod.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Module Detailed View & Sanitized Interactive Mockup */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Module Details Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-100 text-brand-800 border border-brand-200">
                          {selectedModule.metricBadge}
                        </span>
                        <span className="text-xs text-slate-400">
                          Workflow: <strong className="text-slate-700">{selectedModule.workflowStage}</strong>
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {selectedModule.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedModule.detailedDesc}
                  </p>

                  <div className="space-y-3">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Module Capabilities
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedModule.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-50/60 border border-brand-200/60 flex items-start gap-2.5 text-xs text-brand-900">
                    <Cpu className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="font-semibold">Frontend Architecture Focus: </strong>
                      <span>{selectedModule.frontendTechFocus}</span>
                    </div>
                  </div>
                </div>

                {/* Sanitized Interactive Mockup Area */}
                <div className="bg-slate-950 text-white rounded-2xl p-6 shadow-premium border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 pl-2">
                        ERP View: {selectedModule.name} (Sanitized UI Simulation)
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      RTK Query Cache: ACTIVE
                    </span>
                  </div>

                  {/* Dynamic Simulation based on selected module */}
                  {selectedModule.id === 'analytics-dashboards' && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-300">Throughput vs Production Target (Sq. Feet)</span>
                        <span className="text-emerald-400 font-mono">Weekly Average: 95.5% Yield</span>
                      </div>
                      <div className="h-56 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={sanitizedThroughputData}>
                            <defs>
                              <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0e8ce9" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#0e8ce9" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
                            <YAxis stroke="#94a3b8" fontSize={11} />
                            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                            <Area type="monotone" dataKey="hidesFinished" stroke="#38a8f7" fillOpacity={1} fill="url(#colorOutput)" name="Hides Finished" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {selectedModule.id === 'production-tracking' && (
                    <div className="space-y-4 pt-2">
                      <div className="text-xs text-slate-400">
                        Interactive Stage Gate Pipeline (Click a stage to simulate supervisor handoff):
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {[
                          { step: 1, name: 'Raw Beamhouse', status: 'Completed' },
                          { step: 2, name: 'Chemical Tanning', status: 'Completed' },
                          { step: 3, name: 'Crust Splitting', status: 'Active Stage' },
                          { step: 4, name: 'Drum Dyeing', status: 'Pending QA' },
                          { step: 5, name: 'Final Finishing', status: 'Queued' }
                        ].map((stage) => (
                          <button
                            key={stage.step}
                            onClick={() => setProductionStageStep(stage.step)}
                            className={`p-3 rounded-xl text-left border transition-all ${
                              productionStageStep === stage.step
                                ? 'bg-brand-600/30 border-brand-400 text-white ring-1 ring-brand-400'
                                : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-[10px] uppercase font-mono block text-brand-300">
                              Stage 0{stage.step}
                            </span>
                            <span className="text-xs font-bold block text-white truncate mt-0.5">
                              {stage.name}
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-1">
                              {stage.status}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                        <span className="text-slate-300">
                          Selected Pipeline Gate: <strong className="text-brand-400">Stage {productionStageStep} Inspection &amp; Moisture Check</strong>
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[11px] font-mono">
                          Tolerance: ±1.2% Passed
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedModule.id === 'barcode-management' && (
                    <div className="space-y-4 pt-2">
                      <div className="text-xs text-slate-400">
                        Hardware Scanner Event Simulation (Type or click sample barcodes below):
                      </div>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                          <input
                            type="text"
                            value={simulatedBarcode}
                            onChange={(e) => handleBarcodeLookup(e.target.value)}
                            placeholder="Scan or enter barcode..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white font-mono focus:border-brand-500 focus:outline-none"
                          />
                        </div>
                        <button
                          onClick={() => handleBarcodeLookup('LOT-LTH-4089')}
                          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-mono transition-colors"
                        >
                          Lot #4089
                        </button>
                        <button
                          onClick={() => handleBarcodeLookup('RAW-HIDE-BATCH-02')}
                          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-mono transition-colors"
                        >
                          Raw Batch
                        </button>
                      </div>

                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-slate-200 font-mono">{scannerStatus}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">Debounce: 300ms</span>
                      </div>
                    </div>
                  )}

                  {selectedModule.id === 'inventory-materials' && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Material Stock Balances</span>
                        <span className="text-brand-400 font-mono">Auto-Deduction on Stage Signoff</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                            <tr>
                              <th className="p-2">Material / Stock Code</th>
                              <th className="p-2">Available Qty</th>
                              <th className="p-2">Unit</th>
                              <th className="p-2">Threshold Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60 text-slate-300">
                            <tr>
                              <td className="p-2 text-white">Chromium Tanning Salt (Grade A)</td>
                              <td className="p-2">4,250</td>
                              <td className="p-2">Kg</td>
                              <td className="p-2 text-emerald-400">Optimal Buffer</td>
                            </tr>
                            <tr>
                              <td className="p-2 text-white">Raw Wet Blue Hides (Bovine)</td>
                              <td className="p-2">1,820</td>
                              <td className="p-2">Units</td>
                              <td className="p-2 text-emerald-400">In Production</td>
                            </tr>
                            <tr>
                              <td className="p-2 text-white">Aniline Finishing Dye (Black #04)</td>
                              <td className="p-2">140</td>
                              <td className="p-2">Liters</td>
                              <td className="p-2 text-amber-400">Reorder Warning</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {selectedModule.id === 'employee-attendance' && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Daily Shift Roll Call Matrix</span>
                        <span className="text-emerald-400 font-mono">Active Shift: Morning (07:00 - 15:30)</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Tanning Line Crew</span>
                          <span className="text-sm font-bold text-white">24 / 24 Present</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Splitting &amp; Dyeing</span>
                          <span className="text-sm font-bold text-white">18 / 19 Present</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">QA Inspection Gates</span>
                          <span className="text-sm font-bold text-emerald-400">6 / 6 Certified</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedModule.id === 'procurement-orders' && (
                    <div className="space-y-3 pt-2">
                      <div className="text-xs text-slate-400">Purchase Order Lifecycle Tracking:</div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white font-mono font-semibold">PO-2026-094 • Raw Bovine Hides (1,000 units)</span>
                          <span className="px-2 py-0.5 rounded bg-brand-900 text-brand-300 text-[10px] font-mono">GRN Verified</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-brand-500 h-full w-4/5 rounded-full" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                          <span>Requisition (Apr 10)</span>
                          <span>PO Dispatched</span>
                          <span>Received at Dock</span>
                          <span className="text-brand-400">Gate QA Complete</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedModule.id === 'administrative-interfaces' && (
                    <div className="space-y-3 pt-2">
                      <div className="text-xs text-slate-400">Role-Based Access Control (RBAC) Module Grid:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div className="p-2 bg-slate-900 rounded border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Plant Manager</span>
                          <span className="text-emerald-400">Full Read / Write</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Floor Supervisor</span>
                          <span className="text-emerald-400">Stage Signoff</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">QA Inspector</span>
                          <span className="text-brand-300">Defect Logging</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Accounts Officer</span>
                          <span className="text-slate-300">Procurement / PO</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Overview & Business Context */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-subtle p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-700 font-bold text-xs uppercase tracking-wider">
                <Factory className="w-4 h-4" />
                <span>Industry Domain &amp; Context</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Digitizing Complex Leather Manufacturing
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {featuredErpProject.businessContext}
              </p>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 space-y-2">
                <span className="font-bold text-slate-900 block">Operational Challenges Solved:</span>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                  <li>Eliminated manual clipboard logs for chemical dosing and stage transitions.</li>
                  <li>Synchronized floor stock with procurement purchase requisitions in real time.</li>
                  <li>Provided instantaneous traceability from raw hide lot to dispatched export pallets.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-700 font-bold text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Project Scope &amp; Responsibilities</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Frontend Engineering Ownership
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {featuredErpProject.overview}
              </p>
              <div className="space-y-2 pt-2">
                {featuredErpProject.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Technical Implementation */}
        {activeTab === 'architecture' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Technical Architecture &amp; State Management
              </h4>
              <p className="text-sm text-slate-600">
                How the application structures data flows, component boundaries, and asynchronous REST integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredErpProject.technicalImplementation.map((impl, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-700">
                    <FileCode2 className="w-4 h-4" />
                    <span>Architecture Principle 0{idx + 1}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {impl}
                  </p>
                </div>
              ))}
            </div>

            {/* Architecture Flow Diagram */}
            <div className="p-6 rounded-xl bg-slate-900 text-white space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Data Flow Diagram
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="font-bold text-brand-300 block mb-1">UI Components Layer</span>
                  <span className="text-slate-400 text-[11px]">Reusable Inputs, Kanban Boards, Recharts Containers</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="font-bold text-emerald-300 block mb-1">Redux &amp; RTK Query</span>
                  <span className="text-slate-400 text-[11px]">Normalized cache, automated invalidation, debounced listeners</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="font-bold text-purple-300 block mb-1">Backend REST Services</span>
                  <span className="text-slate-400 text-[11px]">Token-authenticated endpoints, multi-stage transaction APIs</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Challenges & Solutions */}
        {activeTab === 'challenges' && (
          <div className="space-y-4">
            {featuredErpProject.challengesAndSolutions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/60 shrink-0">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-slate-900">
                      Challenge: {item.challenge}
                    </h5>
                  </div>
                </div>

                <div className="pl-11 space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-brand-50/70 border border-brand-200/60 text-slate-700">
                    <strong className="text-brand-900 block mb-0.5">Engineered Solution:</strong>
                    {item.solution}
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Technical Impact: {item.technicalImpact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Verified Technologies Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-surface-subtle border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Verified Technology Stack (Front-End Implementation)
            </span>
            <span className="text-xs text-slate-600">
              Directly verified against production codebase modules.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {featuredErpProject.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md font-semibold bg-white text-slate-800 border border-slate-200 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
