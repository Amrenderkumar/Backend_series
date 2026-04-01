import React from 'react'

const Card = () => {

    const name = "Adidas, Nike, Puma, Reebok, Under Armour, New Balance, Asics, Vans, Converse, Fila"

  return (
    <div className='min-h-screen'>
      <div>
            <div>
                <h2 className='text-xl'>{name.split(',')[0]}</h2>
            </div>
            <div></div>
      </div>
    </div>
  )
}

export default Card


// import { Link } from "wouter";
// import {
//   ShieldAlert,
//   Search,
//   ShieldCheck,
//   Globe,
//   ArrowRight,
//   Zap,
//   CheckCircle,
//   Clock,
//   Activity,
//   AlertTriangle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Navbar } from "@/components/Navbar";

// const alerts = [
//   {
//     label: "Fake",
//     color: "text-red-400 bg-red-500/10 border-red-500/30",
//     text: '"Mars Colony Found" circulating on Twitter',
//     time: "2m ago",
//   },
//   {
//     label: "Suspicious",
//     color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
//     text: "Viral video claims election fraud in local county",
//     time: "15m ago",
//   },
//   {
//     label: "Fake",
//     color: "text-red-400 bg-red-500/10 border-red-500/30",
//     text: "Celebrity endorsed crypto scam spreading fast",
//     time: "42m ago",
//   },
//   {
//     label: "Suspicious",
//     color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
//     text: "Unverified health claim shared 50k times",
//     time: "1h ago",
//   },
// ];

// const features = [
//   {
//     icon: <Zap className="w-6 h-6 text-blue-400" />,
//     bg: "bg-blue-500/10",
//     border: "hover:border-blue-500/50",
//     title: "AI-Powered Analysis",
//     desc: "Deep learning models analyze sentence structure, emotional manipulation, and logical fallacies hidden within the text.",
//   },
//   {
//     icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
//     bg: "bg-purple-500/10",
//     border: "hover:border-purple-500/50",
//     title: "Real-Time Fact Checking",
//     desc: "Cross-references claims against a continuously updated database of verified facts from Reuters, AP, and Snopes.",
//   },
//   {
//     icon: <Globe className="w-6 h-6 text-indigo-400" />,
//     bg: "bg-indigo-500/10",
//     border: "hover:border-indigo-500/50",
//     title: "Source Credibility",
//     desc: "Evaluates domain history, author reputation, and bias ratings to calculate a comprehensive trust score.",
//   },
// ];

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-50 overflow-x-hidden">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-20"
//             style={{
//               background:
//                 "radial-gradient(ellipse, #3b82f6 0%, transparent 70%)",
//             }}
//           />
//           <div
//             className="absolute top-20 right-1/4 w-[350px] h-[350px] rounded-full opacity-10"
//             style={{
//               background:
//                 "radial-gradient(ellipse, #a855f7 0%, transparent 70%)",
//             }}
//           />
//         </div>

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
//             <Activity className="w-3.5 h-3.5" />
//             TruthLens AI Engine v2.4 — Now Live
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
//             Detect. <span className="text-blue-400">Analyze.</span>{" "}
//             <span className="text-purple-400">Trust.</span>
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
//             Instantly verify the credibility of any news article, social media
//             post, or source. Powered by advanced AI and real-time fact-checking
//             databases.
//           </p>

//           <div className="max-w-2xl mx-auto bg-gray-900/80 p-2 rounded-2xl border border-gray-700/60 shadow-2xl flex flex-col sm:flex-row gap-2">
//             <div className="relative flex-1">
//               <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//               <Input
//                 type="text"
//                 placeholder="Paste article URL or text to verify..."
//                 className="w-full pl-10 h-12 bg-transparent border-0 focus-visible:ring-0 text-gray-100 placeholder:text-gray-500 text-sm"
//               />
//             </div>
//             <Link href="/analyze">
//               <Button className="h-12 w-full sm:w-auto px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20">
//                 <Search className="w-4 h-4 mr-2" />
//                 Analyze Now
//               </Button>
//             </Link>
//           </div>
//           <p className="text-xs text-gray-600 mt-4">
//             No sign-up required · Free for 10 analyses/day
//           </p>
//         </div>
//       </section>

//       {/* Stats Strip */}
//       <div className="border-y border-gray-800/50 bg-gray-900/30">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { val: "10M+", label: "Articles Analyzed", color: "text-white" },
//             {
//               val: "97.3%",
//               label: "Detection Accuracy",
//               color: "text-blue-400",
//             },
//             { val: "50+", label: "Trusted Sources", color: "text-white" },
//             {
//               val: "< 2s",
//               label: "Average Scan Time",
//               color: "text-purple-400",
//             },
//           ].map((stat) => (
//             <div key={stat.label} className="text-center">
//               <div
//                 className={`text-2xl sm:text-3xl font-bold mb-1 ${stat.color}`}
//               >
//                 {stat.val}
//               </div>
//               <div className="text-xs sm:text-sm text-gray-500">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Features */}
//       <section className="py-20 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-14">
//             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
//               Unmatched Detection Capabilities
//             </h2>
//             <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
//               Our multi-layered AI approach examines context, source reputation,
//               and linguistic patterns to expose misinformation.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
//             {features.map((f) => (
//               <Card
//                 key={f.title}
//                 className={`bg-gray-900/50 border-gray-800 ${f.border} transition-colors duration-300`}
//               >
//                 <CardContent className="p-6 sm:p-7">
//                   <div
//                     className={`w-11 h-11 rounded-lg ${f.bg} flex items-center justify-center mb-5`}
//                   >
//                     {f.icon}
//                   </div>
//                   <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
//                     {f.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm leading-relaxed">
//                     {f.desc}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How it Works */}
//       <section
//         id="how-it-works"
//         className="py-20 px-4 sm:px-6 bg-gray-900/20 border-t border-gray-800/40"
//       >
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-14">
//           <div className="flex-1 w-full">
//             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-9">
//               How TruthLens Works
//             </h2>
//             <div className="space-y-8">
//               {[
//                 {
//                   step: "1",
//                   color: "text-blue-400 border-blue-500/40",
//                   title: "Provide the Content",
//                   desc: "Paste any article URL or copy-paste text directly into our secure analyzer.",
//                 },
//                 {
//                   step: "2",
//                   color: "text-purple-400 border-purple-500/40",
//                   title: "Deep Scan Processing",
//                   desc: "Our neural network extracts claims and runs cross-verification across 50+ global databases.",
//                 },
//                 {
//                   step: "3",
//                   color: "text-blue-400 border-blue-500/40",
//                   title: "Get Your Truth Score",
//                   desc: "Receive a credibility score, flagged claims, and links to verified debunking sources.",
//                 },
//               ].map((item) => (
//                 <div key={item.step} className="flex gap-4">
//                   <div
//                     className={`w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center font-bold ${item.color} shrink-0 border`}
//                   >
//                     {item.step}
//                   </div>
//                   <div>
//                     <h4 className="text-base font-semibold text-white mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-400 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-10">
//               <Link href="/analyze">
//                 <Button className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20">
//                   Try it now
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Mock Terminal */}
//           <div className="flex-1 w-full">
//             <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 shadow-2xl">
//               <div className="flex items-center gap-3 mb-5 border-b border-gray-800 pb-4">
//                 <div className="flex gap-1.5">
//                   <div className="w-3 h-3 rounded-full bg-red-500/80" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
//                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
//                 </div>
//                 <div className="text-xs text-gray-500 font-mono flex-1 text-center bg-gray-950/70 rounded py-1 px-2">
//                   truthlens.ai/analyze
//                 </div>
//               </div>
//               <div className="space-y-3 font-mono text-sm">
//                 <div className="flex items-center gap-2 text-gray-400">
//                   <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
//                   <span>Analyzing target URL...</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-300">
//                   <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
//                   <span>Source reputation extracted</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-300">
//                   <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
//                   <span>Cross-referencing 14 claims...</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-yellow-400">
//                   <AlertTriangle className="w-4 h-4 shrink-0" />
//                   <span>High emotional manipulation detected</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-red-400">
//                   <ShieldAlert className="w-4 h-4 shrink-0" />
//                   <span>Contradicts verified facts (Reuters)</span>
//                 </div>
//                 <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
//                   <span className="text-gray-300 font-semibold">
//                     FINAL SCORE
//                   </span>
//                   <span className="text-red-400 font-bold text-base">
//                     23% — HIGH RISK
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Live Alerts */}
//       <section className="py-16 px-4 sm:px-6 border-t border-gray-800/40">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center gap-3 mb-7">
//             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//             <h2 className="text-base sm:text-lg font-semibold text-white">
//               Live Misinformation Alerts
//             </h2>
//             <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-xs">
//               LIVE
//             </Badge>
//           </div>
//           <div className="grid gap-3">
//             {alerts.map((alert, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-900/50 border border-gray-800/60 hover:border-gray-700 transition-colors"
//               >
//                 <span
//                   className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border shrink-0 ${alert.color}`}
//                 >
//                   {alert.label}
//                 </span>
//                 <span className="flex-1 text-xs sm:text-sm text-gray-300 truncate">
//                   {alert.text}
//                 </span>
//                 <div className="flex items-center gap-1.5 text-gray-600 text-xs shrink-0">
//                   <Clock className="w-3 h-3" />
//                   {alert.time}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer CTA */}
//       <section className="py-16 px-4 sm:px-6 border-t border-gray-800/40 bg-gray-900/20">
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//             Stop Misinformation in Its Tracks
//           </h2>
//           <p className="text-gray-400 mb-8 text-sm sm:text-base">
//             Join over 500,000 users who trust TruthLens to verify news every
//             day.
//           </p>
//           <Link href="/analyze">
//             <Button
//               size="lg"
//               className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 sm:px-10 shadow-lg shadow-blue-500/20"
//             >
//               Start Analyzing Free
//               <ArrowRight className="w-4 h-4 ml-2" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-gray-800/40 py-8 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//               <ShieldAlert className="w-3 h-3 text-white" />
//             </div>
//             <span className="font-semibold text-gray-400">TruthLens</span>
//           </div>
//           <p>© 2024 TruthLens. All rights reserved.</p>
//           <div className="flex gap-5">
//             <a href="#" className="hover:text-gray-400 transition-colors">
//               Privacy
//             </a>
//             <a href="#" className="hover:text-gray-400 transition-colors">
//               Terms
//             </a>
//             <a href="#" className="hover:text-gray-400 transition-colors">
//               API
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
