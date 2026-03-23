import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  LineChart, Line, Legend, AreaChart, Area, ComposedChart
} from 'recharts';
import { 
  TrendingUp, Package, Award, Zap, BarChart3, 
  Target, Lightbulb, Info, Search, MousePointer2, 
  Sparkles, MessageSquare, ChevronDown, Filter,
  Download, Share2, RefreshCw
} from 'lucide-react';
import { PRODUCTS } from './constants';

const COLORS = ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#6366f1'];

export default function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  // Simulated data for 5+ graphs per product
  const getSimulatedData = (product: typeof PRODUCTS[0]) => {
    // 1. Keyword Weight (Top 10)
    const keywordData = product.keywords.slice(0, 10).map(k => ({
      name: k.word,
      value: Math.floor(Math.random() * 50) + 50
    }));

    // 2. Monthly Trend (Simulated)
    const trendData = [
      { month: '10월', satisfaction: 82, volume: 450 },
      { month: '11월', satisfaction: 85, volume: 520 },
      { month: '12월', satisfaction: 88, volume: 890 },
      { month: '1월', satisfaction: 84, volume: 610 },
      { month: '2월', satisfaction: 91, volume: 750 },
      { month: '3월', satisfaction: 94, volume: 820 },
    ];

    // 3. Platform Distribution
    const platformData = [
      { name: '네이버', value: 45 },
      { name: '쿠팡', value: 30 },
      { name: '자사몰', value: 15 },
      { name: '기타', value: 10 },
    ];

    // 4. Competitor Comparison
    const competitorData = [
      { subject: '가격', A: product.radarData[2].A, B: 75 },
      { subject: '배송', A: product.radarData[1].A, B: 80 },
      { subject: '품질', A: product.radarData[0].A, B: 85 },
      { subject: '디자인', A: 90, B: 70 },
      { subject: 'CS', A: 85, B: 75 },
    ];

    // 5. Sentiment Score (Positive/Neutral/Negative)
    const sentimentData = [
      { name: '긍정', value: 78, color: '#10b981' },
      { name: '중립', value: 15, color: '#6366f1' },
      { name: '부정', value: 7, color: '#ec4899' },
    ];

    return { keywordData, trendData, platformData, competitorData, sentimentData };
  };

  const data = getSimulatedData(selectedProduct);

  return (
    <div className="w-full h-full flex flex-col p-6 pt-24 space-y-8 overflow-auto bg-[#050505] text-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400">
            <BarChart3 size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black title-gradient korean-tight">종합 비즈니스 인사이트 대시보드</h1>
            <p className="text-white/40 text-sm">제품별 심층 데이터 분석 및 트렌드 모니터링</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="glass-button px-4 py-2 flex items-center gap-2 text-sm">
            <Download size={16} /> 내보내기
          </button>
          <button className="glass-button px-4 py-2 flex items-center gap-2 text-sm">
            <Share2 size={16} /> 공유하기
          </button>
        </div>
      </div>

      {/* Product Selector & Filters */}
      <div className="flex gap-4 items-center p-4 rounded-3xl bg-white/5 border border-white/10">
        <div className="flex-1 flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                selectedProduct.id === p.id 
                ? 'bg-cyan-500 text-black' 
                : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className="h-8 w-px bg-white/10 mx-2" />
        <button className="glass-button px-4 py-2 flex items-center gap-2 text-sm">
          <Filter size={16} /> 필터
        </button>
        <button className="glass-button px-4 py-2 flex items-center gap-2 text-sm">
          <RefreshCw size={16} /> 갱신
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column: Key Stats & Radar */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Product Info Card */}
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-10">
              <Package size={200} />
            </div>
            <h2 className="text-3xl font-black mb-2">{selectedProduct.name}</h2>
            <p className="text-white/60 mb-6 leading-relaxed">{selectedProduct.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-white/40 text-xs mb-1">종합 만족도</div>
                <div className="text-2xl font-black text-cyan-400">94.2%</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-white/40 text-xs mb-1">리뷰 증가율</div>
                <div className="text-2xl font-black text-purple-400">+12.5%</div>
              </div>
            </div>
          </div>

          {/* Radar Chart: Sentiment & Performance */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target size={20} className="text-cyan-400" /> 핵심 역량 분석
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={selectedProduct.radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{fill:'rgba(255,255,255,0.5)', fontSize: 12}} />
                  <Radar name={selectedProduct.name} dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Middle Column: Trends & Keywords */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* Line & Area Chart: Trend */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-purple-400" /> 월별 만족도 및 리뷰 볼륨 추이
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data.trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{fill:'rgba(255,255,255,0.5)'}} />
                  <YAxis yAxisId="left" tick={{fill:'rgba(255,255,255,0.5)'}} />
                  <YAxis yAxisId="right" orientation="right" tick={{fill:'rgba(255,255,255,0.5)'}} />
                  <Tooltip contentStyle={{backgroundColor:'#000',border:'none',borderRadius:'12px'}} />
                  <Area yAxisId="left" type="monotone" dataKey="satisfaction" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" strokeWidth={3} />
                  <Bar yAxisId="right" dataKey="volume" fill="rgba(6, 182, 212, 0.3)" radius={[4, 4, 0, 0]} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart: Keywords */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-pink-400" /> 핵심 키워드 가중치 (TF-IDF)
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.keywordData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" tick={{fill:'rgba(255,255,255,0.7)', fontSize: 12}} width={100} />
                  <Tooltip contentStyle={{backgroundColor:'#000',border:'none',borderRadius:'12px'}} />
                  <Bar dataKey="value" fill="#ec4899" radius={[0,10,10,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Distribution & Sentiment */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {/* Pie Chart: Platform */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MousePointer2 size={20} className="text-emerald-400" /> 판매 채널 비중
            </h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data.platformData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {COLORS.map((c, i) => <Cell key={i} fill={c} stroke="rgba(255,255,255,0.1)" />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {data.platformData.map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}} />
                  <span>{p.name} {p.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Score */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare size={20} className="text-amber-400" /> 감성 분포 리포트
            </h3>
            <div className="space-y-4">
              {data.sentimentData.map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>{s.name}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full transition-all duration-1000" style={{width: `${s.value}%`, backgroundColor: s.color}} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed">
              * 긍정 리뷰가 {data.sentimentData[0].value}%로 압도적이며, 주로 기능적 만족도에 집중되어 있습니다.
            </div>
          </div>
        </div>
      </div>

      {/* Insight Footer */}
      <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
        <div className="flex gap-6 items-start">
          <div className="p-4 rounded-2xl bg-cyan-500/20 text-cyan-400">
            <Lightbulb size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">데이터 기반 비즈니스 인사이트</h3>
            <p className="text-lg text-white/70 leading-relaxed">{selectedProduct.insight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
