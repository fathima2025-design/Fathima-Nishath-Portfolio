import React, { useState } from 'react';
import {
  Factory,
  BarChart3,
  QrCode,
  Users,
  Boxes,
  ShoppingCart,
  Layers,
  CheckCircle2,
  AlertCircle,
  Cpu,
  ArrowRight,
  Search,
  FileCode2,
  ScissorsLineDashed,
  Waypoints,
  Shirt,
  ScanSearch,
  Camera,
  FileSpreadsheet
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

// Sanitized simulated data based on real factory order throughput
const sanitizedThroughputData = [
  { day: 'Mon', jacketsFinished: 85, target: 80, yieldRate: 96.2 },
  { day: 'Tue', jacketsFinished: 110, target: 100, yieldRate: 97.4 },
  { day: 'Wed', jacketsFinished: 98, target: 95, yieldRate: 95.8 },
  { day: 'Thu', jacketsFinished: 125, target: 110, yieldRate: 98.1 },
  { day: 'Fri', jacketsFinished: 130, target: 120, yieldRate: 97.6 },
  { day: 'Sat', jacketsFinished: 90, target: 85, yieldRate: 99.0 },
];

export const FeaturedErpProject: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('barcode-management');
  const [activeTab, setActiveTab] = useState<'modules' | 'overview' | 'architecture' | 'challenges'>('modules');
  
  // Real tracer preset state
  const [tracerQuery, setTracerQuery] = useState<string>('LTH-BLK-009');
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cuttingStage, setCuttingStage] = useState<number>(2);

  const selectedModule = featuredErpProject.modules.find(m => m.id === selectedModuleId) || featuredErpProject.modules[0];

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
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-elevated border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  {featuredErpProject.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active Production System
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Next.js 16 + React 19 + RTK Query
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white pt-1">
                KairoX Production &amp; Traceability ERP
              </h3>
              <p className="text-sm text-slate-400">
                <span className="text-slate-300 font-medium">Role:</span> {featuredErpProject.role} • <span className="text-slate-300 font-medium">Timeline:</span> {featuredErpProject.duration}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs sm:text-sm font-semibold hover:bg-brand-500 transition-colors shadow-sm"
              >
                <span>Discuss System Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Technical Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Frontend Stack</span>
              <span className="text-sm font-bold text-white block">Next.js 16 App Router + React 19</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">State &amp; Query Caching</span>
              <span className="text-sm font-bold text-white block">Redux Toolkit (28+ Tag Types)</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Barcode &amp; Scanner</span>
              <span className="text-sm font-bold text-white block">html5-qrcode &amp; jsbarcode</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Report Pipelines</span>
              <span className="text-sm font-bold text-emerald-400 block">jspdf &amp; xlsx Multi-Sheet</span>
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
            Verified Modules &amp; Live Simulation ({featuredErpProject.modules.length})
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Business Context &amp; Factory Scope
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'architecture'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Technical Architecture &amp; RTK Query
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
                  Production Modules
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
                        {mod.id === 'barcode-management' && <QrCode className="w-4 h-4" />}
                        {mod.id === 'production-tracking' && <ScissorsLineDashed className="w-4 h-4" />}
                        {mod.id === 'garment-tracer' && <ScanSearch className="w-4 h-4" />}
                        {mod.id === 'analytics-dashboards' && <BarChart3 className="w-4 h-4" />}
                        {mod.id === 'inventory-materials' && <Boxes className="w-4 h-4" />}
                        {mod.id === 'procurement-orders' && <ShoppingCart className="w-4 h-4" />}
                        {mod.id === 'employee-attendance' && <Users className="w-4 h-4" />}
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
                          Department Stage: <strong className="text-slate-700">{selectedModule.workflowStage}</strong>
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
                      Key Engineering Capabilities
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
                      <strong className="font-semibold">Frontend Implementation Focus: </strong>
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
                        KairoX Screen: {selectedModule.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                      RTK Query: Cache Active
                    </span>
                  </div>

                  {/* 1. Barcode Engine Simulation */}
                  {selectedModule.id === 'barcode-management' && (
                    <div className="space-y-4 pt-1 font-mono text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-slate-400">
                        <span>Hardware Camera Barcode Stream (html5-qrcode simulation):</span>
                        <button
                          onClick={() => setIsCameraActive(!isCameraActive)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-sans transition-colors ${
                            isCameraActive ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <Camera className="w-3.5 h-3.5" />
                          <span>{isCameraActive ? 'Stop Camera' : 'Toggle Camera Feed'}</span>
                        </button>
                      </div>

                      <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Active Barcode Canvas (jsbarcode SVG):</span>
                          <span className="text-emerald-400 font-bold">CODE128 Generated</span>
                        </div>
                        
                        {/* Simulated SVG Barcode Render */}
                        <div className="bg-white p-3 rounded-lg text-slate-900 flex flex-col items-center justify-center space-y-1">
                          <div className="font-mono font-black tracking-widest text-sm text-center">
                            ||| | |||| | ||| || |||| || | || |||
                          </div>
                          <div className="font-mono text-[11px] font-bold tracking-widest text-slate-700">
                            * LTH-BLK-009 *
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                          <span>Barcode State Resolver</span>
                          <span className="text-brand-400">Debounce: 300ms • Tag: [Piece]</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. Production Tracking & Jacket Build Sequence */}
                  {selectedModule.id === 'production-tracking' && (
                    <div className="space-y-4 pt-1">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Jacket Build Progression (Raw Hide → Pattern Pieces → Stitched Seam → Finished Jacket):</span>
                        <span className="text-brand-400 font-mono">Stage {cuttingStage} / 4</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { step: 1, name: 'Raw Hide Layers', icon: Layers, status: 'Checked In' },
                          { step: 2, name: 'Pattern Cutting Grid', icon: ScissorsLineDashed, status: 'Cutting Issued' },
                          { step: 3, name: 'Stitched Seam Handoff', icon: Waypoints, status: 'In Assembly' },
                          { step: 4, name: 'Finished Leather Jacket', icon: Shirt, status: 'QA Signoff' }
                        ].map((stg) => {
                          const IconComp = stg.icon;
                          const isCurrent = cuttingStage === stg.step;
                          return (
                            <button
                              key={stg.step}
                              onClick={() => setCuttingStage(stg.step)}
                              className={`p-3 rounded-xl text-left border transition-all ${
                                isCurrent
                                  ? 'bg-brand-600/30 border-brand-400 text-white ring-1 ring-brand-400'
                                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] uppercase font-mono text-brand-300">
                                  0{stg.step}
                                </span>
                                <IconComp className="w-4 h-4 text-brand-400" />
                              </div>
                              <span className="text-xs font-bold block text-white truncate">
                                {stg.name}
                              </span>
                              <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                                {stg.status}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                        <span className="text-slate-300 font-mono">
                          Two-Door Event Logger: <strong className="text-brand-400">Production Transition Gateway</strong>
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[11px] font-mono">
                          Operator Barcode: Validated
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 3. Garment Tracer (Real LTH-BLK-009 preset) */}
                  {selectedModule.id === 'garment-tracer' && (
                    <div className="space-y-4 pt-1 font-mono text-xs">
                      <div className="text-slate-400">
                        Garment Traveler Audit Search (Simulated Barcode Scan):
                      </div>

                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                          <input
                            type="text"
                            value={tracerQuery}
                            onChange={(e) => setTracerQuery(e.target.value)}
                            placeholder="e.g. LTH-BLK-009"
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white font-mono focus:border-brand-500 focus:outline-none"
                          />
                        </div>
                        <button
                          onClick={() => setTracerQuery('LTH-BLK-009')}
                          className="px-3 py-2 bg-brand-600/30 border border-brand-500/50 text-brand-300 rounded-lg text-xs font-mono transition-colors"
                        >
                          Preset LTH-BLK-009
                        </button>
                      </div>

                      {/* Timeline Traveler Result */}
                      <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                          <div>
                            <span className="text-white font-bold">Piece ID: {tracerQuery}</span>
                            <span className="text-slate-400 text-[11px] block">Garment: Biker Leather Jacket • Size: L • Black</span>
                          </div>
                          <span className="px-2 py-0.5 bg-emerald-900/60 text-emerald-300 rounded text-[11px]">
                            Drawer: DRW-0421
                          </span>
                        </div>

                        <div className="space-y-2 text-[11px]">
                          <div className="flex items-center gap-2 text-slate-300">
                            <span className="text-emerald-400 font-bold">✓ 09:15 AM</span>
                            <span>Cutting Grid Issued — Bovine Leather Lot #4089</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <span className="text-emerald-400 font-bold">✓ 11:30 AM</span>
                            <span>Lining Fabric &amp; YKK Zipper Pack Checked Out (Store Hub)</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <span className="text-emerald-400 font-bold">✓ 02:45 PM</span>
                            <span>Stitching Department Assembly Completed (Operator #24)</span>
                          </div>
                          <div className="flex items-center gap-2 text-brand-400 font-bold">
                            <span>● 04:10 PM</span>
                            <span>Final Quality Inspection Gate Signoff — Approved</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. Analytics Explorer */}
                  {selectedModule.id === 'analytics-dashboards' && (
                    <div className="space-y-4 pt-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-300">Finished Garments Throughput vs Weekly Target</span>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-mono">Avg Yield: 97.4%</span>
                          <span className="text-slate-500">|</span>
                          <span className="text-slate-400 font-mono flex items-center gap-1">
                            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                            <span>xlsx Export</span>
                          </span>
                        </div>
                      </div>
                      <div className="h-56 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={sanitizedThroughputData}>
                            <defs>
                              <linearGradient id="colorJackets" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0e8ce9" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#0e8ce9" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
                            <YAxis stroke="#94a3b8" fontSize={11} />
                            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                            <Area type="monotone" dataKey="jacketsFinished" stroke="#38a8f7" fillOpacity={1} fill="url(#colorJackets)" name="Jackets Finished" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {/* 5. Inventory & Store Hub */}
                  {selectedModule.id === 'inventory-materials' && (
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>Store Hub Material Lot Ledger</span>
                        <span className="text-brand-400">Reservation Locks: Active</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                            <tr>
                              <th className="p-2">Material / Lot Code</th>
                              <th className="p-2">Category</th>
                              <th className="p-2">Available Qty</th>
                              <th className="p-2">Allocation Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60 text-slate-300">
                            <tr>
                              <td className="p-2 text-white">Bovine Nappa Crust #4089</td>
                              <td className="p-2">Leather</td>
                              <td className="p-2">3,400 Sq.Ft</td>
                              <td className="p-2 text-emerald-400">Allocated to Cutting</td>
                            </tr>
                            <tr>
                              <td className="p-2 text-white">Satin Lining (Charcoal Black)</td>
                              <td className="p-2">Fabric</td>
                              <td className="p-2">820 Meters</td>
                              <td className="p-2 text-emerald-400">Ready in Store</td>
                            </tr>
                            <tr>
                              <td className="p-2 text-white">Heavy Antique Brass Zippers</td>
                              <td className="p-2">Accessories</td>
                              <td className="p-2">450 Units</td>
                              <td className="p-2 text-amber-400">Low Reorder Threshold</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 6. Procurement & Subcontracting */}
                  {selectedModule.id === 'procurement-orders' && (
                    <div className="space-y-3 pt-1 font-mono text-xs">
                      <div className="text-slate-400">Subcontracting &amp; Purchase Order Lifecycle:</div>
                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white font-semibold">PO-2026-118 • Export Quality Bovine Hide (1,200 Skins)</span>
                          <span className="px-2 py-0.5 rounded bg-brand-900 text-brand-300 text-[10px]">GRN Intake Verified</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-brand-500 h-full w-4/5 rounded-full" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>Requisition</span>
                          <span>PO Dispatched</span>
                          <span>Dock Received</span>
                          <span className="text-brand-400">Inspected &amp; Released</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 7. Floor Command & Attendance */}
                  {selectedModule.id === 'employee-attendance' && (
                    <div className="space-y-3 pt-1 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Multi-Role Floor Command &amp; Biometric Proxy</span>
                        <span className="text-emerald-400">Role: cutting_manager</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[10px]">Floor Check-In Proxy</span>
                          <span className="text-sm font-bold text-white">32 Workers Verified</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[10px]">Piece-Rate Wage Run</span>
                          <span className="text-sm font-bold text-white">₹ 48,250 Computed</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[10px]">RTK Tag [Attendance]</span>
                          <span className="text-sm font-bold text-emerald-400">Cache Invalidation OK</span>
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
                Digitizing Commercial Leather Garment Manufacturing
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {featuredErpProject.businessContext}
              </p>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 space-y-2">
                <span className="font-bold text-slate-900 block">Operational Bottlenecks Solved:</span>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                  <li>Eliminated manual paper cutting registers and missing pattern pieces across styles.</li>
                  <li>Synchronized hardware camera barcode scanning directly with RTK Query caches.</li>
                  <li>Delivered full traceability from raw bovine leather lot to finished exported jackets.</li>
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
                How KairoX structures data flows, RTK Query tag invalidations, and hardware barcode integration.
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
                Data Pipeline &amp; Query Caching Flow
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="font-bold text-brand-300 block mb-1">Hardware / UI Layer</span>
                  <span className="text-slate-400 text-[11px]">html5-qrcode, jsbarcode, Recharts, AnimatedModal</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="font-bold text-emerald-300 block mb-1">Redux Toolkit Slices</span>
                  <span className="text-slate-400 text-[11px]">authSlice, attendanceSlice, entrySlice, storeHubSlice</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="font-bold text-purple-300 block mb-1">RTK Query apiSlice</span>
                  <span className="text-slate-400 text-[11px]">28+ Tag Types (CuttingGrid, SKU, Piece, Attendance)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="font-bold text-amber-300 block mb-1">REST &amp; Document Out</span>
                  <span className="text-slate-400 text-[11px]">Secure REST API Services, jspdf, xlsx multi-sheet</span>
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
              Directly verified against the production repository codebase.
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
