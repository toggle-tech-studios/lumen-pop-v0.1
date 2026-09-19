<header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><button aria-label="Back" className="w-11 h-11 rounded-full flex items-center justify-center bg-surface-container-high/70 text-on-surface hover:bg-surface-bright transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back</span></button><img alt="Lumen Pop Game Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wfsp4DJMbvdw5lZBuPbdR7hhN-dzHgbV68EEZ7q3bvIH6eyT_0PPeD5YCYDnKbM7zn1rXjhDm_ZaDy3RDOwQG4SgwgBhyoWmxX9ZPpQ8bb29OglKyFWWxTbe_AEJ1zzpRPWmvQGzetstrqwhnVHeHTCDRCM4YvPpg3xBK3V9DYv8RJF3zVoTy628FGNOJE8PFk2IW4vyGmBrbhV7--dUsVO_GJWrWDpC9CEuXd3YJV"/><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">Gameplay Arena</h1></div><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface flex-grow"><div className="flex flex-col w-full max-w-[440px] mx-auto px-margin pb-safe select-none relative overflow-hidden">
<!-- Dynamic Ambient Stardust Canvas Background -->
<div className="absolute inset-0 pointer-events-none opacity-40">
<div className="absolute -top-12 left-1/4 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute top-1/3 -right-16 w-80 h-80 bg-secondary-container/15 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-10 w-64 h-64 bg-tertiary-container/15 rounded-full blur-3xl"></div>
</div>
<!-- 1. TOP HUD ZONE -->
<div className="relative z-10 flex flex-col gap-space-xs mt-space-xs mb-space-sm">
<!-- Level Badge & Meta Bar -->
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="h-7 px-3 bg-surface-container-high/90 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-md">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="font-headline-sm text-body-sm text-primary uppercase tracking-wider">LVL 24</span>
<span className="text-on-surface-variant text-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface truncate max-w-[130px]">Aetherial Glade</span>
</div>
</div>
<!-- Settings / Pause Tactile Button -->
<button className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-fixed shadow-md active:translate-y-0.5 transition-all">
<span className="material-symbols-outlined text-[20px]">pause</span>
</button>
</div>
<!-- Objectives Ribbon & Moves Showcase -->
<div className="grid grid-cols-12 gap-space-xs items-stretch mt-1">
<!-- Target Goals Card (7 Cols) -->
<div className="col-span-7 bg-surface-container-low/95 backdrop-blur-xl rounded-DEFAULT p-2 flex flex-col justify-between shadow-lg relative overflow-hidden">
<div className="flex items-center justify-between mb-1">
<span className="font-label-badge text-[10px] uppercase text-on-surface-variant tracking-wider">Targets</span>
<span className="font-body-sm text-[11px] text-tertiary-fixed-dim">Harvest Essence</span>
</div>
<div className="flex items-center gap-space-xs">
<!-- Aether Target Pill -->
<div className="flex-1 bg-surface-container-lowest/80 rounded-full py-1 px-1.5 flex items-center gap-1 shadow-inner">
<svg className="w-5 h-5 drop-shadow shrink-0" viewBox="0 0 24 24">
<polygon fill="#00F0FF" points="12,2 22,12 12,22 2,12" />
<polygon fill="#A5F3FC" opacity="0.6" points="12,5 19,12 12,19 5,12" />
<circle cx="9" cy="11" fill="#00363A" r="1.2" />
<circle cx="15" cy="11" fill="#00363A" r="1.2" />
</svg>
<span className="font-label-counter text-[13px] text-primary">12<span className="text-on-surface-variant text-[10px]">/18</span></span>
</div>
<!-- Nova Target Pill -->
<div className="flex-1 bg-surface-container-lowest/80 rounded-full py-1 px-1.5 flex items-center gap-1 shadow-inner">
<svg className="w-5 h-5 drop-shadow shrink-0" viewBox="0 0 24 24">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF3E8F" />
<circle cx="9" cy="9" fill="#FFF" r="1" />
<circle cx="15" cy="9" fill="#FFF" r="1" />
</svg>
<span className="font-label-counter text-[13px] text-secondary">8<span className="text-on-surface-variant text-[10px]">/12</span></span>
</div>
</div>
</div>
<!-- Moves Remaining Glowing Vault (5 Cols) -->
<div className="col-span-5 bg-gradient-to-b from-surface-container-high to-surface-container-lowest rounded-DEFAULT p-2 flex flex-col items-center justify-center relative shadow-xl overflow-hidden">
<div className="absolute -inset-1 bg-primary-container/10 blur-sm rounded-DEFAULT"></div>
<span className="relative font-label-badge text-[9px] uppercase tracking-widest text-primary-fixed-dim">Moves Left</span>
<div className="relative flex items-baseline gap-1">
<span className="font-headline-lg-mobile text-primary-container tracking-tight drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">14</span>
<span className="material-symbols-outlined text-tertiary-fixed text-[14px] animate-bounce" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
</div>
</div>
</div>
<!-- Score & 3-Star Cosmic Meter Strip -->
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-space-sm shadow-md mt-0.5">
<div className="flex items-center gap-1 shrink-0">
<span className="font-headline-sm text-[12px] text-on-surface tracking-wide">48,650</span>
<span className="text-on-surface-variant text-[10px]">/65K</span>
</div>
<!-- Progress Track -->
<div className="flex-1 relative h-3 bg-surface-container-lowest rounded-full overflow-visible flex items-center">
<!-- Progress Fill (74%) -->
<div className="h-full bg-gradient-to-r from-primary-container via-secondary to-tertiary-container rounded-full w-[75%] shadow-[0_0_8px_rgba(0,240,255,0.5)]"></div>
<!-- Milestone Star 1 (Achieved) -->
<div className="absolute left-[30%] -translate-x-1/2 w-4 h-4 bg-tertiary-container rounded-full flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[11px] text-on-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
<!-- Milestone Star 2 (Active/Glowing) -->
<div className="absolute left-[65%] -translate-x-1/2 w-4 h-4 bg-tertiary-fixed rounded-full flex items-center justify-center shadow-[0_0_8px_#ffd54d] animate-pulse">
<span className="material-symbols-outlined text-[11px] text-on-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
<!-- Milestone Star 3 (Target Final) -->
<div className="absolute right-0 translate-x-1/4 w-4 h-4 bg-surface-container-highest rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-outline" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
</div>
</div>
<!-- 2. GAME ARENA: 6x6 PUZZLE GRID -->
<div className="relative z-20 w-full aspect-square max-w-[390px] mx-auto p-2 bg-gradient-to-b from-surface-container-high/60 to-surface-container-lowest/90 rounded-2xl shadow-2xl backdrop-blur-2xl flex items-center justify-center">
<!-- Ethereal Runed Glass Outer Rim Frame -->
<div className="absolute inset-1 rounded-xl pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent"></div>
<!-- Active Diagonal Link Path Overlay (Vector SVG connecting 4 Aethers) -->
<svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 390 390">
<!-- Glow Underlay -->
<path className="blur-[3px]" d="M 60,60 L 115,115 L 170,170 L 225,225" opacity="0.4" stroke="#00F0FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
<!-- Core Electrical Beam -->
<path d="M 60,60 L 115,115 L 170,170 L 225,225" stroke="#DBFCFF" strokeDasharray="6,4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
<!-- Spark Particles on nodes -->
<circle cx="60" cy="60" fill="#00F0FF" opacity="0.25" r="14" />
<circle cx="115" cy="115" fill="#00F0FF" opacity="0.25" r="14" />
<circle cx="170" cy="170" fill="#00F0FF" opacity="0.25" r="14" />
<circle cx="225" cy="225" fill="#00F0FF" opacity="0.35" r="18" />
<circle cx="225" cy="225" fill="none" r="22" stroke="#DBFCFF" strokeDasharray="3,3" strokeWidth="1.5" />
</svg>
<!-- Glowing Combo Multiplier Floating Badge -->
<div className="absolute top-[36%] right-[14%] z-40 bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(204,1,106,0.8)] flex items-center gap-1 animate-bounce">
<span className="material-symbols-outlined text-[13px] text-tertiary-fixed" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
<span className="font-headline-sm text-[11px] tracking-tight font-black uppercase">x2.5 Glow Combo!</span>
</div>
<!-- The 6x6 Grid Cells Container -->
<div className="grid grid-cols-6 grid-rows-6 gap-1.5 w-full h-full p-1 bg-surface-container-lowest/80 rounded-xl shadow-inner">
<!-- ROW 1 -->
<!-- [0,0] AETHER (LINKED 1) -->
<div className="relative rounded-lg bg-surface-container-low/90 flex items-center justify-center p-1 shadow-inner shadow-primary-container/30">
<svg className="w-full h-full drop-shadow-[0_0_8px_#00F0FF]" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,3 37,20 20,37 3,20" />
<polygon fill="#A5F3FC" opacity="0.75" points="20,8 32,20 20,32 8,20" />
<circle cx="16" cy="19" fill="#00363A" r="2.2" /><circle cx="17" cy="18" fill="#FFF" r="0.7" />
<circle cx="24" cy="19" fill="#00363A" r="2.2" /><circle cx="25" cy="18" fill="#FFF" r="0.7" />
<path d="M 18,24 Q 20,26 22,24" fill="none" stroke="#00363A" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
<!-- [0,1] VERDANT -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<path d="M20 9 C16 17, 12 23, 12 28 A8 8 0 0 0 28 28 C28 23, 24 17, 20 9 Z" fill="#A7F3D0" opacity="0.6" />
<circle cx="16" cy="25" fill="#00391E" r="2" /><circle cx="16.6" cy="24.4" fill="#FFF" r="0.6" />
<circle cx="24" cy="25" fill="#00391E" r="2" /><circle cx="24.6" cy="24.4" fill="#FFF" r="0.6" />
<ellipse cx="20" cy="28" fill="#00391E" rx="1.5" ry="1"></ellipse>
</svg>
</div>
<!-- [0,2] SOLAR -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="20" cy="20" fill="#FFF275" opacity="0.8" r="7" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
<path d="M 18,22 Q 20,24 22,22" fill="none" stroke="#3C2F00" strokeWidth="1.2" />
</svg>
</div>
<!-- [0,3] COSMIC -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<ellipse cx="20" cy="20" fill="none" opacity="0.5" rx="16" ry="6" stroke="#E9D5FF" strokeWidth="1.5" transform="rotate(-20 20 20)"></ellipse>
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="20" cy="20" fill="#C084FC" opacity="0.6" r="9" />
<path d="M 15 19 Q 17 21 19 19" fill="none" stroke="#2E1065" strokeLinecap="round" strokeWidth="1.4" />
<path d="M 21 19 Q 23 21 25 19" fill="none" stroke="#2E1065" strokeLinecap="round" strokeWidth="1.4" />
</svg>
</div>
<!-- [0,4] TERRA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<polygon fill="#FED7AA" opacity="0.5" points="20,10 29,15 29,25 20,30 11,25 11,15" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
<path d="M 18 24 L 22 24" stroke="#431407" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
<!-- [0,5] BLAZE -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<path d="M20 12 C22 17 28 20 28 27 C28 31 24 33 20 33 C16 33 12 31 12 27 C12 20 18 17 20 12 Z" fill="#FECDD3" opacity="0.6" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
<path d="M 17 28 Q 20 26 23 28" fill="none" stroke="#4C0519" strokeWidth="1.2" />
</svg>
</div>
<!-- ROW 2 -->
<!-- [1,0] NOVA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" /><circle cx="15.8" cy="13.2" fill="#FFF" r="0.7" />
<circle cx="25" cy="14" fill="#500724" r="2.2" /><circle cx="25.8" cy="13.2" fill="#FFF" r="0.7" />
<circle cx="12" cy="18" fill="#FDA4AF" opacity="0.7" r="2" />
<circle cx="28" cy="18" fill="#FDA4AF" opacity="0.7" r="2" />
</svg>
</div>
<!-- [1,1] AETHER (LINKED 2) -->
<div className="relative rounded-lg bg-surface-container-low/90 flex items-center justify-center p-1 shadow-inner shadow-primary-container/30">
<svg className="w-full h-full drop-shadow-[0_0_8px_#00F0FF]" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,3 37,20 20,37 3,20" />
<polygon fill="#A5F3FC" opacity="0.75" points="20,8 32,20 20,32 8,20" />
<circle cx="16" cy="19" fill="#00363A" r="2.2" /><circle cx="17" cy="18" fill="#FFF" r="0.7" />
<circle cx="24" cy="19" fill="#00363A" r="2.2" /><circle cx="25" cy="18" fill="#FFF" r="0.7" />
<path d="M 18,24 Q 20,26 22,24" fill="none" stroke="#00363A" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
<!-- [1,2] VERDANT -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
<!-- [1,3] SOLAR -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
<!-- [1,4] COSMIC -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
<!-- [1,5] TERRA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
<!-- ROW 3 -->
<!-- [2,0] BLAZE -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
<!-- [2,1] NOVA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
<!-- [2,2] AETHER (LINKED 3) -->
<div className="relative rounded-lg bg-surface-container-low/90 flex items-center justify-center p-1 shadow-inner shadow-primary-container/30">
<svg className="w-full h-full drop-shadow-[0_0_8px_#00F0FF]" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,3 37,20 20,37 3,20" />
<polygon fill="#A5F3FC" opacity="0.75" points="20,8 32,20 20,32 8,20" />
<circle cx="16" cy="19" fill="#00363A" r="2.2" /><circle cx="17" cy="18" fill="#FFF" r="0.7" />
<circle cx="24" cy="19" fill="#00363A" r="2.2" /><circle cx="25" cy="18" fill="#FFF" r="0.7" />
<path d="M 18,24 Q 20,26 22,24" fill="none" stroke="#00363A" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
<!-- [2,3] VERDANT -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
<!-- [2,4] SOLAR -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
<!-- [2,5] COSMIC -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
<!-- ROW 4 -->
<!-- [3,0] TERRA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
<!-- [3,1] BLAZE -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
<!-- [3,2] NOVA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
<!-- [3,3] AETHER (LINKED 4 - ACTIVE HEAD) -->
<div className="relative rounded-lg bg-surface-container-low/90 flex items-center justify-center p-1 shadow-inner shadow-primary-container scale-105">
<div className="absolute inset-0 rounded-lg bg-primary-container/20 animate-pulse pointer-events-none"></div>
<svg className="w-full h-full drop-shadow-[0_0_12px_#00F0FF]" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,2 38,20 20,38 2,20" />
<polygon fill="#FFF" opacity="0.9" points="20,6 34,20 20,34 6,20" />
<circle cx="15" cy="18" fill="#00363A" r="2.4" /><circle cx="16" cy="17" fill="#FFF" r="0.8" />
<circle cx="25" cy="18" fill="#00363A" r="2.4" /><circle cx="26" cy="17" fill="#FFF" r="0.8" />
<path d="M 17,24 Q 20,27 23,24" fill="none" stroke="#00363A" strokeLinecap="round" strokeWidth="1.6" />
</svg>
</div>
<!-- [3,4] VERDANT -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
<!-- [3,5] SOLAR -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
<!-- ROW 5 -->
<!-- [4,0] COSMIC -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
<!-- [4,1] TERRA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
<!-- [4,2] BLAZE -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
<!-- [4,3] NOVA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
<!-- [4,4] ★ THE FUSION ORB SPECIAL CREATURE ★ -->
<div className="relative rounded-lg bg-surface-container-lowest flex items-center justify-center p-0.5 shadow-xl scale-110 z-20">
<!-- Radial Bloom -->
<div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary-container via-secondary to-tertiary-container blur-[4px] opacity-80 animate-spin"></div>
<!-- Badge label -->
<div className="absolute -bottom-2 bg-surface-container-lowest text-primary-fixed text-[8px] font-label-badge font-black uppercase px-1.5 py-0.2 rounded-full border border-primary-container/40 z-30 shadow-md">
          FUSION
        </div>
<svg className="w-full h-full relative z-10 drop-shadow-[0_0_10px_#FFFFFF]" viewBox="0 0 44 44">
<defs />
<radialGradient cx="35%" cy="35%" id="fusionGrad" r="65%">
<stop offset="0%" stopColor="#FFFFFF" />
<stop offset="30%" stopColor="#00F0FF" />
<stop offset="65%" stopColor="#FF3E8F" />
<stop offset="100%" stopColor="#FFD12F" />
</radialGradient>
</defs>
<!-- Outer Celestial Ring -->
<circle cx="22" cy="22" fill="url(#fusionGrad)" r="18" />
<!-- Swirling Highlights -->
<path d="M 12 18 C 16 10, 28 10, 32 18 C 28 26, 16 26, 12 18 Z" fill="#FFF" opacity="0.4" />
<!-- Determined Heroic Cute Eyes -->
<circle cx="17" cy="21" fill="#0E0728" r="2.2" /><circle cx="18" cy="20" fill="#FFF" r="0.8" />
<circle cx="27" cy="21" fill="#0E0728" r="2.2" /><circle cx="28" cy="20" fill="#FFF" r="0.8" />
<!-- Confident Smile -->
<path d="M 19 26 Q 22 29 25 26" fill="none" stroke="#0E0728" strokeLinecap="round" strokeWidth="1.5" />
<!-- Sparkling Orbitals -->
<circle cx="6" cy="20" fill="#FFD12F" r="1.5" />
<circle cx="36" cy="14" fill="#00F0FF" r="1.5" />
<circle cx="24" cy="38" fill="#FF3E8F" r="1.5" />
</svg>
</div>
<!-- [4,5] VERDANT -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
<!-- ROW 6 -->
<!-- [5,0] SOLAR -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
<!-- [5,1] COSMIC -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
<!-- [5,2] TERRA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
<!-- [5,3] BLAZE -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
<!-- [5,4] NOVA -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
<!-- [5,5] AETHER -->
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,3 37,20 20,37 3,20" />
<polygon fill="#A5F3FC" opacity="0.6" points="20,8 32,20 20,32 8,20" />
<circle cx="16" cy="19" fill="#00363A" r="1.8" />
<circle cx="24" cy="19" fill="#00363A" r="1.8" />
</svg>
</div>
</div>
</div>
<!-- 3. LOWER BOOSTER DECK -->
<div className="relative z-10 flex flex-col gap-space-xs mt-space-sm">
<!-- Shard Currency Balance Pill -->
<div className="flex items-center justify-between px-2">
<div className="flex items-center gap-1.5 bg-surface-container-high/70 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
<span className="text-tertiary-fixed text-[14px]">✦</span>
<span className="font-headline-sm text-body-sm text-on-surface">1,240</span>
<span className="text-on-surface-variant font-body-sm text-[11px]">Shards</span>
<button className="w-4 h-4 rounded-full bg-primary-container text-on-primary flex items-center justify-center ml-1 text-[12px] font-bold">+</button>
</div>
<span className="font-label-badge text-[10px] uppercase tracking-wider text-primary-fixed-dim">Booster Arsenal</span>
</div>
<!-- The 3 Tactical Chunky Boosters -->
<div className="grid grid-cols-3 gap-space-xs">
<!-- Booster 1: Shuffle -->
<button className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-high active:translate-y-1 transition-transform shadow-md group relative">
<div className="w-11 h-11 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-1 shadow-inner group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[24px]">cyclone</span>
</div>
<span className="font-headline-sm text-[12px] text-on-surface">Shuffle</span>
<!-- Cost Pill Badge -->
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-tertiary-fixed text-[11px] font-headline-sm">
<span>✦</span>
<span>35</span>
</div>
</button>
<!-- Booster 2: Nova Bomb -->
<button className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-high active:translate-y-1 transition-transform shadow-md group relative">
<div className="w-11 h-11 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary mb-1 shadow-inner group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
</div>
<span className="font-headline-sm text-[12px] text-on-surface">Nova Bomb</span>
<!-- Cost Pill Badge -->
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-tertiary-fixed text-[11px] font-headline-sm">
<span>✦</span>
<span>50</span>
</div>
</button>
<!-- Booster 3: Prism Burst (Selected / Active Glowing State) -->
<button className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-bright active:translate-y-1 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.4)] relative">
<!-- Active Highlight Halo -->
<div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-container rounded-full animate-ping"></div>
<div className="w-11 h-11 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container mb-1 shadow-inner scale-105">
<span className="material-symbols-outlined text-[24px]">view_in_ar</span>
</div>
<span className="font-headline-sm text-[12px] text-primary-container font-black">Prism Burst</span>
<!-- Cost Pill Badge -->
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-primary-fixed text-[11px] font-headline-sm">
<span>✦</span>
<span>65</span>
</div>
</button>
</div>
</div>
</div></main>