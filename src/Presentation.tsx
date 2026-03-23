import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, Legend, AreaChart, Area
} from 'recharts';
import { 
  ChevronLeft, ChevronRight, TrendingUp, Package, 
  Award, Zap, BarChart3, Target, Lightbulb, Info,
  Search, MousePointer2, Sparkles, MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from './constants';

const COLORS = ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#6366f1'];

const SlideWrapper = ({ children, slideId }: { children: React.ReactNode, slideId: number }) => (
  <motion.div
    key={slideId}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="w-full h-full glass-card flex flex-col overflow-hidden"
  >
    {children}
  </motion.div>
);

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, 9));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    // 1. 타이틀
    <div className="slide-content justify-center items-center text-center">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4">
          <Sparkles size={16} className="text-cyan-400" />
          <span>쇼핑 리뷰 데이터 분석 리포트</span>
        </div>
        <h1 className="text-7xl font-black title-gradient leading-tight korean-tight">쇼핑 리뷰 데이터<br />분석 결과 (TF-IDF)</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto my-8 rounded-full" />
        <div className="space-y-2 text-white/60 font-medium">
          <p>작성일: 2026-03-23</p>
          <p>프로젝트: shop_review | 분석 대상: shop-review.csv</p>
        </div>
      </motion.div>
    </div>,

    // 2. 분석 개요
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-12 title-gradient korean-tight">1. 분석 개요</h2>
      <div className="flex gap-12 items-center flex-1">
        <div className="w-1/2 p-12 rounded-[3rem] bg-white/5 border border-white/20 space-y-8">
          <div className="flex gap-6 items-start">
            <div className="p-4 rounded-2xl bg-cyan-500/20 text-cyan-400"><TrendingUp size={32} /></div>
            <div>
              <h3 className="text-2xl font-bold mb-2">분석 목적</h3>
              <p className="text-white/60 leading-relaxed">쇼핑몰 리뷰 데이터를 활용하여 전체적인 트렌드와 각 제품별 핵심 키워드를 도출합니다.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-400"><Zap size={32} /></div>
            <div>
              <h3 className="text-2xl font-bold mb-2">분석 방법</h3>
              <p className="text-white/60 leading-relaxed">형태소 분석기 없이 TF-IDF 벡터화를 통해 텍스트 가중치를 계산하여 핵심 키워드를 추출했습니다.</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <div className="text-4xl font-black text-cyan-400 mb-2">TF-IDF</div>
            <div className="text-white/40 text-sm">가중치 계산 방식</div>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <div className="text-4xl font-black text-purple-400 mb-2">Visual</div>
            <div className="text-white/40 text-sm">시각화 및 데이터 표</div>
          </div>
        </div>
      </div>
    </div>,

    // 3. 기초 통계 및 EDA
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-12 title-gradient korean-tight">2.1 기초 통계 및 EDA</h2>
      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
          <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-3"><Info /> 데이터 구조</h3>
          <ul className="space-y-4 text-xl text-white/70">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-cyan-400" /> title: 리뷰 제목</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-cyan-400" /> content: 리뷰 본문</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-cyan-400" /> product: 제품명</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-cyan-400" /> mallName: 쇼핑몰명</li>
          </ul>
        </div>
        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
          <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-3"><Target /> 전처리 과정</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold mb-1">결측치 처리</div>
              <div className="text-white/50">결측치 항목은 분석 대상에서 제외</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-bold mb-1">토큰화</div>
              <div className="text-white/50">띄어쓰기 기준으로 토큰화 수행</div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // 4. 전체 상위 키워드
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-8 title-gradient korean-tight">2.2 전체 데이터 상위 키워드</h2>
      <div className="flex gap-8 flex-1 overflow-hidden">
        <div className="w-1/2 p-6 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold mb-6 text-center">상위 10개 가중치 분석</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                {name:'배송이',v:147.52},{name:'좋아요',v:135.21},{name:'아주',v:110.45},{name:'너무',v:108.32},{name:'잘',v:95.12},
                {name:'사용',v:88.45},{name:'좋습니다',v:82.10},{name:'만족합니다',v:75.32},{name:'배송도',v:70.15},{name:'구매',v:65.48}
              ]} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" tick={{fill:'rgba(255,255,255,0.7)', fontSize: 14}} width={80} />
                <Tooltip contentStyle={{backgroundColor:'#000',border:'none',borderRadius:'12px'}} />
                <Bar dataKey="v" fill="url(#barGradient)" radius={[0,10,10,0]}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-1/2 p-6 rounded-3xl bg-white/5 border border-white/10 overflow-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead><tr className="border-b border-white/10"><th className="p-3 text-white/40">순위</th><th className="p-3 text-white/40">키워드</th><th className="p-3 text-white/40">가중치</th><th className="p-3 text-white/40">순위</th><th className="p-3 text-white/40">키워드</th><th className="p-3 text-white/40">가중치</th></tr></thead>
            <tbody>
              {[
                {r:1,k:'배송이',w:147.52,r2:6,k2:'사용',w2:88.45},
                {r:2,k:'좋아요',w:135.21,r2:7,k2:'좋습니다',w2:82.10},
                {r:3,k:'아주',w:110.45,r2:8,k2:'만족합니다',w2:75.32},
                {r:4,k:'너무',w:108.32,r2:9,k2:'배송도',w2:70.15},
                {r:5,k:'잘',w:95.12,r2:10,k2:'구매',w2:65.48}
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="p-3 font-bold text-cyan-400">{row.r}</td><td className="p-3">{row.k}</td><td className="p-3 text-white/40">{row.w}</td>
                  <td className="p-3 font-bold text-purple-400">{row.r2}</td><td className="p-3">{row.k2}</td><td className="p-3 text-white/40">{row.w2}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 p-4 rounded-xl bg-white/5 text-xs text-white/40 text-center">
            "배송"과 "만족도" 관련 키워드가 전체 가중치의 상당 부분을 차지함
          </div>
        </div>
      </div>
    </div>,

    // 5. TF-IDF 히트맵
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-8 title-gradient korean-tight">3. TF-IDF 히트맵 분석</h2>
      <div className="flex-1 flex flex-col gap-6">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex-1 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 grid grid-cols-10 grid-rows-5 gap-1 p-4">
            {Array.from({length: 50}).map((_, i) => (
              <div key={i} className="rounded-sm" style={{backgroundColor: `rgba(6, 182, 212, ${Math.random()})`}} />
            ))}
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-6">
            <div className="p-6 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 inline-block">
              <BarChart3 size={64} className="text-cyan-400" />
            </div>
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">상위 10행 x 50열 가중치 분포</h3>
              <p className="text-xl text-white/60 leading-relaxed">상위 10개의 리뷰(문서)와 가장 영향력이 큰 50개 단어 간의 가중치 분포를 시각화하여 특정 문서에서 도드라지는 키워드 패턴을 확인했습니다.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="text-white/40 text-sm mb-1">분석 문서 수</div><div className="text-3xl font-bold">10 Docs</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="text-white/40 text-sm mb-1">분석 단어 수</div><div className="text-3xl font-bold">50 Words</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="text-white/40 text-sm mb-1">시각화 방식</div><div className="text-3xl font-bold">Heatmap</div>
          </div>
        </div>
      </div>
    </div>,

    // 6. 에어팟프로2세대
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-8 title-gradient korean-tight">4.1 에어팟프로2세대 분석</h2>
      <div className="flex gap-8 flex-1 overflow-hidden">
        <div className="w-1/2 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Target className="text-cyan-400" /> 핵심 성능 지표</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={PRODUCTS[0].radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{fill:'rgba(255,255,255,0.5)', fontSize: 12}} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="성능" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-white/70 leading-relaxed">"노이즈캔슬링"과 "음질"에서 압도적인 점수를 기록하며 기술적 리더십을 증명함.</p>
          </div>
        </div>
        <div className="w-1/2 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-auto">
          <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
            <span>상위 키워드 (Top 30)</span>
            <span className="text-sm text-white/30">표 2 참조</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {PRODUCTS[0].keywords.map((k, i) => (
              <div key={i} className="flex justify-between items-center p-2 border-b border-white/5 text-sm">
                <span className="text-cyan-400 font-bold w-6">{k.rank}</span>
                <span className="flex-1 text-white/80">{k.word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // 7. 오메가3
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-8 title-gradient korean-tight">4.2 오메가3 분석</h2>
      <div className="flex gap-8 flex-1 overflow-hidden">
        <div className="w-1/2 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><MousePointer2 className="text-purple-400" /> 리뷰 카테고리 비중</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={PRODUCTS[1].categories} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                    {COLORS.map((c, i) => <Cell key={i} fill={c} stroke="rgba(255,255,255,0.1)" />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {PRODUCTS[1].categories.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}} />
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <p className="text-white/70 leading-relaxed">"복용경험"과 "가격"이 주요 관심사이며, 장기 복용 고객의 충성도가 높음.</p>
          </div>
        </div>
        <div className="w-1/2 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-auto">
          <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
            <span>상위 키워드 (Top 30)</span>
            <span className="text-sm text-white/30">표 3 참조</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {PRODUCTS[1].keywords.map((k, i) => (
              <div key={i} className="flex justify-between items-center p-2 border-b border-white/5 text-sm">
                <span className="text-purple-400 font-bold w-6">{k.rank}</span>
                <span className="flex-1 text-white/80">{k.word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // 8. 달바선크림
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-8 title-gradient korean-tight">4.3 달바선크림 분석</h2>
      <div className="flex gap-8 flex-1 overflow-hidden">
        <div className="w-1/2 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Sparkles className="text-pink-400" /> 사용감 상세 지표</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PRODUCTS[2].radarData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="subject" tick={{fill:'rgba(255,255,255,0.5)', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip contentStyle={{backgroundColor:'#000',border:'none',borderRadius:'12px'}} />
                  <Bar dataKey="A" fill="#ec4899" radius={[10,10,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-pink-500/10 border border-pink-500/20">
            <p className="text-white/70 leading-relaxed">"발림성"과 "촉촉함"에서 매우 높은 만족도를 보이며 감성적 가치가 높음.</p>
          </div>
        </div>
        <div className="w-1/2 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-auto">
          <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
            <span>상위 키워드 (Top 30)</span>
            <span className="text-sm text-white/30">표 4 참조</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {PRODUCTS[2].keywords.map((k, i) => (
              <div key={i} className="flex justify-between items-center p-2 border-b border-white/5 text-sm">
                <span className="text-pink-400 font-bold w-6">{k.rank}</span>
                <span className="flex-1 text-white/80">{k.word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // 9. 물티슈
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-8 title-gradient korean-tight">4.4 물티슈 분석</h2>
      <div className="flex gap-8 flex-1 overflow-hidden">
        <div className="w-1/2 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Package className="text-emerald-400" /> 실용적 속성 분석</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PRODUCTS[3].radarData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="subject" type="category" tick={{fill:'rgba(255,255,255,0.5)', fontSize: 12}} width={80} />
                  <Tooltip contentStyle={{backgroundColor:'#000',border:'none',borderRadius:'12px'}} />
                  <Bar dataKey="A" fill="#10b981" radius={[0,10,10,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-white/70 leading-relaxed">"가성비"와 "두께"가 핵심 구매 결정 요인이며, 실용성을 최우선으로 함.</p>
          </div>
        </div>
        <div className="w-1/2 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-auto">
          <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
            <span>상위 키워드 (Top 30)</span>
            <span className="text-sm text-white/30">표 5 참조</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {PRODUCTS[3].keywords.map((k, i) => (
              <div key={i} className="flex justify-between items-center p-2 border-b border-white/5 text-sm">
                <span className="text-emerald-400 font-bold w-6">{k.rank}</span>
                <span className="flex-1 text-white/80">{k.word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // 10. 결론 및 인사이트
    <div className="slide-content">
      <h2 className="text-5xl font-bold mb-10 title-gradient korean-tight">5. 결론 및 인사이트</h2>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {[
          { icon: Lightbulb, title: "만족도의 핵심", text: "배송 속도와 실제 효용이 이커머스 고객의 최우선 가치임을 확인했습니다.", color: "cyan" },
          { icon: Search, title: "제품별 특이성", text: "제품군에 따라 핵심 불만/칭찬 키워드가 명확히 나뉘어 타겟 마케팅에 활용 가능합니다.", color: "purple" },
          { icon: Sparkles, title: "향후 과제", text: "추후 형태소 분석기(Mekab 등) 도입을 통해 더 정밀한 어간 추출 분석을 제안합니다.", color: "pink" }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col">
            <div className={`p-4 rounded-2xl bg-${item.color}-500/20 w-fit mb-6`}><item.icon size={32} className={`text-${item.color}-400`} /></div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/60 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-center text-white/30 font-bold tracking-[0.3em]">
        END OF REPORT
      </div>
    </div>
  ];

  return (
    <div className="w-screen h-screen relative flex flex-col p-8 pt-24 overflow-hidden">
      <div className="aurora-bg" />
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white/40">SLIDE <span className="text-white">{currentSlide + 1}</span> / 10</div>
        <div className="flex gap-4"><button onClick={prevSlide} className="glass-button p-3"><ChevronLeft size={24} /></button><button onClick={nextSlide} className="glass-button p-3"><ChevronRight size={24} /></button></div>
      </div>
      <div className="flex-1 relative z-10"><AnimatePresence mode="wait"><SlideWrapper slideId={currentSlide}>{slides[currentSlide]}</SlideWrapper></AnimatePresence></div>
      <div className="mt-8 h-1 bg-white/5 rounded-full relative overflow-hidden z-10"><motion.div className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" initial={{ width: 0 }} animate={{ width: `${((currentSlide + 1) / 10) * 100}%` }} transition={{ duration: 0.4 }} /></div>
    </div>
  );
}
