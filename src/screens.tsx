import { useState } from 'react';
import { ASSET } from './App';

export function StartScreenUI({ onStart, onSettings, coins }: any) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><img alt="Lumen Pop Game Logo" className="h-8 w-auto object-contain" src={ASSET + "lumen-pop-logo.png"} /><div className="flex flex-col"><span className="font-label-badge text-label-badge text-primary-fixed uppercase tracking-wider">Lumen Pop</span><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Game Home</h1></div></div><div className="flex items-center gap-space-sm"><div className="flex items-center bg-surface-container-high/90 rounded-full px-space-sm py-1 shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><span className="material-symbols-outlined text-secondary text-[18px] mr-1">favorite</span><span className="font-label-counter text-body-sm text-secondary-fixed">5</span></div><div className="flex items-center bg-surface-container-high/90 rounded-full px-space-sm py-1 shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><span className="material-symbols-outlined text-tertiary-container text-[18px] mr-1">diamond</span><span className="font-label-counter text-body-sm text-tertiary-fixed">850</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface flex-grow"><div className="flex flex-col w-full relative select-none overflow-hidden pb-12">
{/*  Dynamic Ambient Stardust Canvas  */}
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-primary-container/20 rounded-full blur-[90px]"></div>
<div className="absolute top-[28%] -left-16 w-56 h-56 bg-secondary-container/25 rounded-full blur-[80px]"></div>
<div className="absolute top-[38%] -right-16 w-64 h-64 bg-tertiary-container/20 rounded-full blur-[85px]"></div>
{/*  Interactive Sparkles Container  */}
<div className="absolute inset-0" id="ambient-particles"></div>
</div>
{/*  In-Screen Mini Status Pill Row  */}
<div className="relative z-10 px-margin pt-space-xs flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
{/*  Lives Pill  */}
<div className="flex items-center bg-surface-container-high/85 backdrop-blur-md rounded-full px-space-sm py-1 shadow-md shadow-surface-container-lowest/80">
<span className="material-symbols-outlined text-secondary text-[20px] mr-1 animate-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
<span className="font-label-counter text-body-sm text-secondary-fixed">5/5</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1 font-bold">MAX</span>
</div>
{/*  Shards Pill  */}
<div className="flex items-center bg-surface-container-high/85 backdrop-blur-md rounded-full px-space-sm py-1 shadow-md shadow-surface-container-lowest/80">
<span className="material-symbols-outlined text-tertiary-fixed text-[20px] mr-1" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
<span className="font-label-counter text-body-sm text-tertiary-fixed">{coins.toLocaleString()}</span>
</div>
</div>
{/*  Quick Utilities  */}
<div className="flex items-center gap-1.5">
<button aria-label="Toggle Audio" className="w-8 h-8 rounded-full bg-surface-container-high/90 active:scale-90 transition-transform flex items-center justify-center text-on-surface shadow-sm" id="btn-audio">
<span className="material-symbols-outlined text-[18px]">volume_up</span>
</button>
<button aria-label="Achievements" className="w-8 h-8 rounded-full bg-surface-container-high/90 active:scale-90 transition-transform flex items-center justify-center text-tertiary-container shadow-sm">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>military_tech</span>
</button>
<button aria-label="Settings" className="w-8 h-8 rounded-full bg-surface-container-high/90 active:scale-90 transition-transform flex items-center justify-center text-on-surface shadow-sm">
<span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
{/*  SECTION 1: HERO LOGO & FUSION ARENA  */}
<div className="relative z-10 flex flex-col items-center justify-center px-margin mt-2">
{/*  Ethereal Title Glow Behind Logo  */}
<div className="relative flex flex-col items-center w-full max-w-[340px]">
<div className="absolute inset-0 bg-gradient-to-r from-primary-fixed/20 via-secondary/25 to-tertiary-fixed/20 rounded-full blur-2xl transform scale-125"></div>
<img alt="Lumen Pop Game Logo" className="relative z-10 w-full max-h-24 object-contain drop-shadow-[0_8px_20px_rgba(0,240,255,0.45)] transform hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida/AEtjO1Wfsp4DJMbvdw5lZBuPbdR7hhN-dzHgbV68EEZ7q3bvIH6eyT_0PPeD5YCYDnKbM7zn1rXjhDm_ZaDy3RDOwQG4SgwgBhyoWmxX9ZPpQ8bb29OglKyFWWxTbe_AEJ1zzpRPWmvQGzetstrqwhnVHeHTCDRCM4YvPpg3xBK3V9DYv8RJF3zVoTy628FGNOJE8PFk2IW4vyGmBrbhV7--dUsVO_GJWrWDpC9CEuXd3YJV"/>
<div className="inline-flex items-center gap-1 bg-surface-container-highest/80 backdrop-blur-md px-3 py-0.5 rounded-full mt-1 shadow-inner shadow-primary-container/20">
<span className="material-symbols-outlined text-primary-fixed text-[14px]">auto_awesome</span>
<span className="font-label-badge text-label-badge text-primary-fixed tracking-widest uppercase">Celestial Match &amp; Pop</span>
</div>
</div>
{/*  LIVING MASCOTS & FUSION ORB STAGE  */}
<div className="relative w-full max-w-[340px] h-64 mt-3 flex items-center justify-center">
{/*  Central Swirling Fusion Orb  */}
<div className="relative flex items-center justify-center w-36 h-36">
{/*  Outermost Prismatic Pulse Ring  */}
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container via-secondary-container to-tertiary-container opacity-40 blur-xl animate-pulse"></div>
{/*  Orb Glass Body with Refraction Layers  */}
<div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary-fixed via-secondary to-tertiary-container p-1 shadow-[0_0_35px_rgba(0,240,255,0.6)] flex items-center justify-center overflow-hidden">
<div className="w-full h-full rounded-full bg-surface-container-lowest/90 backdrop-blur-xl relative flex items-center justify-center">
{/*  Swirling Nebula Rings  */}
<div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-primary-container/40 via-secondary/40 to-tertiary-container/40 animate-spin" style={{ animationDuration: '9s' }}></div>
<div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-primary/30 to-secondary-container/40 blur-sm animate-pulse"></div>
{/*  Glass Specular Highlight  */}
<div className="absolute top-1.5 left-3 w-8 h-4 rounded-full bg-primary/60 blur-[1.5px] transform -rotate-45 pointer-events-none"></div>
{/*  Center Core Spark  */}
<span className="material-symbols-outlined text-primary-fixed text-[36px] drop-shadow-[0_0_12px_#fff]" style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
</div>
</div>
{/*  Radiating Energy Sparks Orbiting  */}
<div className="absolute w-full h-full pointer-events-none">
<span className="material-symbols-outlined text-primary-fixed text-[14px] absolute top-1 right-3 animate-ping">star</span>
<span className="material-symbols-outlined text-secondary-fixed text-[12px] absolute bottom-2 left-4 animate-ping" style={{ animationDelay: '700ms' }}>arrow_back_ios_new</span>
</div>
</div>
{/*  MASCOT 1: AETHER (Cyan Diamond) - Top Left  */}
<div className="absolute top-2 left-3 flex flex-col items-center transform -rotate-6 hover:scale-110 transition-transform cursor-pointer group animate-bounce" style={{ animationDuration: '3.2s' }}>
<div className="relative w-14 h-14 bg-gradient-to-br from-primary via-primary-fixed to-on-primary-container rounded-2xl rotate-45 flex items-center justify-center shadow-[0_6px_16px_rgba(0,240,255,0.45)] border-t border-primary/80">
<div className="-rotate-45 flex flex-col items-center justify-center">
<div className="flex gap-1 mb-0.5">
<span className="w-1.5 h-2 bg-on-primary-fixed rounded-full shadow-[0_0_4px_#fff]"></span>
<span className="w-1.5 h-2 bg-on-primary-fixed rounded-full shadow-[0_0_4px_#fff]"></span>
</div>
<div className="w-2.5 h-1 bg-on-primary-fixed rounded-full"></div>
</div>
{/*  Sparkle overlay  */}
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full blur-[1px]"></div>
</div>
<span className="font-label-badge text-[10px] text-primary-fixed mt-2 tracking-wider drop-shadow-sm font-extrabold uppercase">Aether</span>
</div>
{/*  MASCOT 2: NOVA (Magenta Heart) - Top Right  */}
<div className="absolute top-3 right-4 flex flex-col items-center transform rotate-6 hover:scale-110 transition-transform cursor-pointer group animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '400ms' }}>
<div className="relative w-14 h-14 bg-gradient-to-br from-secondary-fixed via-secondary to-secondary-container rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(255,62,143,0.45)]">
<div className="flex flex-col items-center justify-center">
<div className="flex gap-1.5 mb-0.5">
<span className="w-1.5 h-2 bg-on-secondary rounded-full shadow-[0_0_4px_#ffe1e7]"></span>
<span className="w-1.5 h-2 bg-on-secondary rounded-full shadow-[0_0_4px_#ffe1e7]"></span>
</div>
<span className="material-symbols-outlined text-on-secondary text-[12px]" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
</div>
<span className="material-symbols-outlined text-secondary-fixed text-[14px] absolute -top-1 -left-1 drop-shadow" style={{ fontVariationSettings: '"FILL" 1' }}>arrow_back_ios_new</span>
</div>
<span className="font-label-badge text-[10px] text-secondary-fixed mt-1.5 tracking-wider drop-shadow-sm font-extrabold uppercase">Nova</span>
</div>
{/*  MASCOT 3: SOLAR (Golden Star) - Bottom Left  */}
<div className="absolute bottom-2 left-6 flex flex-col items-center transform -rotate-12 hover:scale-110 transition-transform cursor-pointer group animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '800ms' }}>
<div className="relative w-13 h-13 p-2 bg-gradient-to-br from-tertiary via-tertiary-fixed to-tertiary-container rounded-2xl flex items-center justify-center shadow-[0_6px_16px_rgba(255,213,77,0.45)]">
<div className="flex flex-col items-center justify-center">
<div className="flex gap-1.5 mb-0.5">
<span className="w-1.5 h-1.5 bg-on-tertiary rounded-full"></span>
<span className="w-1.5 h-1.5 bg-on-tertiary rounded-full"></span>
</div>
<div className="w-2.5 h-1 bg-on-tertiary rounded-full"></div>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[12px] absolute top-0.5 right-0.5">hotel_class</span>
</div>
<span className="font-label-badge text-[10px] text-tertiary-fixed mt-1.5 tracking-wider drop-shadow-sm font-extrabold uppercase">Solar</span>
</div>
{/*  MASCOT 4: VERDANT (Glossy Droplet) - Bottom Right  */}
<div className="absolute bottom-1 right-6 flex flex-col items-center transform rotate-12 hover:scale-110 transition-transform cursor-pointer group animate-bounce" style={{ animationDuration: '3.1s', animationDelay: '200ms' }}>
<div className="relative w-13 h-13 bg-gradient-to-b from-primary-fixed to-on-primary-container rounded-t-full rounded-br-full rounded-bl-3xl flex items-center justify-center shadow-[0_6px_16px_rgba(0,219,233,0.45)]">
<div className="flex flex-col items-center justify-center">
<div className="flex gap-1.5 mb-0.5">
<span className="w-1.5 h-1.5 bg-on-primary-fixed rounded-full"></span>
<span className="w-1.5 h-1.5 bg-on-primary-fixed rounded-full"></span>
</div>
<div className="w-2 h-1 bg-on-primary-fixed rounded-full"></div>
</div>
<div className="absolute top-1 left-2 w-2 h-1 bg-primary/70 rounded-full blur-[0.5px]"></div>
</div>
<span className="font-label-badge text-[10px] text-primary-fixed-dim mt-1.5 tracking-wider drop-shadow-sm font-extrabold uppercase">Verdant</span>
</div>
</div>
</div>
{/*  SECTION 2: PRIMARY TACTILE CTA ZONE  */}
<div className="relative z-10 px-margin mt-1 flex flex-col items-center">
{/*  Massive Tactile Play Button  */}
<div className="w-full max-w-[340px] relative flex flex-col items-center">
{/*  Glow Underlay  */}
<div className="absolute -inset-1 bg-gradient-to-r from-primary-container via-tertiary-container to-secondary-container rounded-full blur-lg opacity-60 animate-pulse"></div>
{/*  Tactile Spring Base  */}
<button className="relative w-full h-16 rounded-full bg-gradient-to-b from-primary via-primary-fixed-dim to-on-primary-container p-[3px] shadow-[0_8px_0_#004f54,0_16px_28px_rgba(0,240,255,0.4)] active:translate-y-1.5 active:shadow-[0_2px_0_#004f54,0_8px_14px_rgba(0,240,255,0.3)] transition-all flex items-center justify-between px-5 group" id="btn-main-play">
{/*  Top Glass Reflective Bevel  */}
<div className="absolute inset-x-6 top-1 h-3 rounded-full bg-gradient-to-b from-primary/80 to-transparent pointer-events-none"></div>
{/*  Left Play Emblem  */}
<div className="w-11 h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center shadow-inner text-primary-fixed">
<span className="material-symbols-outlined text-[26px] ml-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
</div>
{/*  Centered Main Title  */}
<div className="flex flex-col items-center justify-center flex-1">
<span className="font-display-hero-mobile text-headline-lg-mobile text-on-primary-fixed uppercase tracking-wider drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">START JOURNEY</span>
</div>
{/*  Right Sparkle Accent  */}
<div className="w-11 h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center shadow-inner text-tertiary-fixed">
<span className="material-symbols-outlined text-[20px] group-hover:rotate-45 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
</div>
</button>
{/*  Stage Continue Sub-bar  */}
<div className="w-[88%] -mt-1 bg-surface-container-low/95 backdrop-blur-md rounded-b-2xl pt-2.5 pb-2 px-3 flex items-center justify-between shadow-lg shadow-surface-container-lowest/90">
<div className="flex items-center gap-1.5 truncate">
<span className="material-symbols-outlined text-primary-fixed text-[16px]">explore</span>
<span className="font-body-sm text-body-sm text-on-surface truncate">Continue <strong className="text-primary-fixed">Level 24</strong> • Aetherial Glade</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">chevron_right</span>
</div>
</div>
</div>
{/*  SECTION 3: DAILY REWARD BANNER  */}
<div className="relative z-10 px-margin mt-4 flex justify-center">
<div className="w-full max-w-[340px] bg-gradient-to-r from-surface-container to-surface-container-high rounded-lg p-3 shadow-md flex items-center justify-between relative overflow-hidden">
{/*  Ambient Glow Edge  */}
<div className="absolute -right-6 -top-6 w-20 h-20 bg-tertiary-container/30 rounded-full blur-xl pointer-events-none"></div>
{/*  Left Gift Icon & Text  */}
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-tertiary-fixed via-tertiary-container to-on-tertiary-container flex items-center justify-center shadow-md shadow-tertiary-container/40 shrink-0">
<span className="material-symbols-outlined text-on-tertiary text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>redeem</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-badge text-[10px] text-tertiary-fixed uppercase font-black">Daily Chest</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
</div>
<span className="font-headline-sm text-body-sm text-on-surface truncate font-bold">Day 5: 250 Shards &amp; 1 Nova Bomb</span>
</div>
</div>
{/*  Claim Button  */}
<button className="shrink-0 ml-2 bg-gradient-to-b from-tertiary-fixed to-tertiary-container text-on-tertiary-fixed font-headline-sm text-body-sm px-3.5 py-1.5 rounded-full shadow-[0_3px_0_#735c00] active:translate-y-0.5 active:shadow-[0_1px_0_#735c00] transition-all" id="btn-claim-reward">
        CLAIM
      </button>
</div>
</div>
{/*  SECTION 4: SECONDARY GAME MODES  */}
<div className="relative z-10 px-margin mt-3 flex justify-center">
<div className="w-full max-w-[340px] grid grid-cols-2 gap-2.5">
{/*  Mode Card 1: Endless Glow  */}
<div className="bg-surface-container-low/90 backdrop-blur-md rounded-DEFAULT p-3 shadow-md flex flex-col justify-between relative overflow-hidden active:scale-95 transition-transform cursor-pointer group">
<div className="absolute -top-6 -right-6 w-16 h-16 bg-surface-bright/40 rounded-full blur-lg pointer-events-none"></div>
<div className="flex items-center justify-between mb-2">
<div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center text-primary-fixed shadow-inner">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>all_inclusive</span>
</div>
<span className="font-label-badge text-[10px] bg-surface-container-highest px-2 py-0.5 rounded-full text-on-surface-variant">ZEN</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Endless Glow</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">Stress-free pop cascade</p>
</div>
</div>
{/*  Mode Card 2: Lumen Sanctuary  */}
<div className="bg-surface-container-low/90 backdrop-blur-md rounded-DEFAULT p-3 shadow-md flex flex-col justify-between relative overflow-hidden active:scale-95 transition-transform cursor-pointer group">
<div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary-container/20 rounded-full blur-lg pointer-events-none"></div>
<div className="flex items-center justify-between mb-2">
<div className="w-9 h-9 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary-fixed shadow-inner">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>pets</span>
</div>
<div className="flex items-center gap-0.5 bg-secondary-container/40 px-1.5 py-0.5 rounded-full text-secondary-fixed">
<span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
<span className="font-label-badge text-[10px]">NEW</span>
</div>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Sanctuary</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">Feed &amp; grow lumens</p>
</div>
</div>
</div>
</div>
{/*  METADATA FOOTER  */}
<div className="relative z-10 mt-5 flex flex-col items-center justify-center gap-1 text-center">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant tracking-wider font-semibold">v1.2.0 • Starbound Odyssey</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant/70">Touch anywhere to spawn stardust</span>
</div>
</div>
</main><nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.4)]" data-active-classes="text-primary-fixed bg-surface-bright/50"><div className="flex justify-around items-center h-20 px-margin"><a aria-current="page" className="flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all text-primary-fixed bg-surface-bright/50" data-path="game-home" href="#"><span className="material-symbols-outlined text-[24px]">home</span><span className="font-body-sm text-body-sm mt-0.5">Home</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="adventure-map" href="#"><span className="material-symbols-outlined text-[24px]">map</span><span className="font-body-sm text-body-sm mt-0.5">Map</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="celestial-vault" href="#"><span className="material-symbols-outlined text-[24px]">storefront</span><span className="font-body-sm text-body-sm mt-0.5">Vault</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="settings-modal" href="#"><span className="material-symbols-outlined text-[24px]">settings</span><span className="font-body-sm text-body-sm mt-0.5">Settings</span></a></div></nav>
    </>
  );
}

export function MapScreenUI({ onPlay, onSettings, latest, coins }: any) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><img alt="Lumen Pop Game Logo" className="h-8 w-auto object-contain" src={ASSET + "lumen-pop-logo.png"} /><div className="flex flex-col"><span className="font-label-badge text-label-badge text-primary-fixed uppercase tracking-wider">Lumen Pop</span><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Adventure Map</h1></div></div><div className="flex items-center gap-space-sm"><div className="flex items-center bg-surface-container-high/90 rounded-full px-space-sm py-1 shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><span className="material-symbols-outlined text-secondary text-[18px] mr-1">favorite</span><span className="font-label-counter text-body-sm text-secondary-fixed">5</span></div><div className="flex items-center bg-surface-container-high/90 rounded-full px-space-sm py-1 shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><span className="material-symbols-outlined text-tertiary-container text-[18px] mr-1">diamond</span><span className="font-label-counter text-body-sm text-tertiary-fixed">850</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface flex-grow"><div className="flex flex-col w-full relative select-none pb-12 overflow-hidden">
{/*  Top Dynamic Region Header & HUD Bar  */}
<div className="sticky top-0 z-40 px-margin pt-space-xs pb-space-sm bg-surface/80 backdrop-blur-md flex flex-col gap-space-xs">
{/*  Quick Status Bar  */}
<div className="flex items-center justify-between gap-space-xs">
{/*  Player Profile Chip  */}
<div className="flex items-center gap-space-xs bg-surface-container-high/90 rounded-full p-1 pr-space-md shadow-lg">
<div className="relative w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A magical cosmic sprite creature with glowing cyan bunny ears and starry violet eyes smiling warmly, vibrant digital fantasy game avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNyPzD0zlDXq8OLcwZn3X4Dqb87q3Ss0Js-fGIIBCTPozg9mrdAxWGnS5axV3G7_LNLxGfTQavb-REUwmKoERItZTqQW0hGIxqq8tex4K3h2QYSfMtNr4zlfK1fkf9g-CPIt2ERW4dNfjaE226AS6fXbQs-K1FN3mpcELXyX8_xg6eCpdIClB1WNICrAO8waJ5sLRKt092IflM9ueN5BZnmqMXv8Xf2IIOGRrcBkYy"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full ring-2 ring-surface"></div>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-headline-sm text-body-sm text-primary-fixed truncate">Star Weaver</span>
<span className="font-label-badge text-label-badge text-on-surface-variant">Lv.24</span>
</div>
<div className="flex items-center gap-0.5 text-tertiary-fixed-dim">
<span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label-counter text-body-sm text-tertiary-fixed">68</span>
</div>
</div>
</div>
{/*  Currency & Energy Pill Cluster  */}
<div className="flex items-center gap-1.5">
{/*  Energy Pill  */}
<div className="flex items-center bg-surface-container-high/95 rounded-full px-2.5 py-1 shadow-md">
<span className="material-symbols-outlined text-secondary text-[16px] animate-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
<div className="flex flex-col ml-1">
<span className="font-label-counter text-body-sm text-secondary-fixed leading-none">5/5</span>
<span className="font-label-badge text-[9px] text-secondary/80 leading-none mt-0.5">FULL</span>
</div>
</div>
{/*  Shard Bank  */}
<div className="flex items-center bg-surface-container-high/95 rounded-full px-2.5 py-1 shadow-md">
<span className="material-symbols-outlined text-primary-container text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
<span className="font-label-counter text-body-sm text-primary-fixed ml-1">{coins.toLocaleString()}</span>
</div>
{/*  Settings Quick Toggle  */}
<button className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center active:scale-90 transition-transform shadow-md text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">tune</span>
</button>
</div>
</div>
{/*  Realm Landmark Indicator Breadcrumb  */}
<div className="flex items-center justify-between px-space-xs text-on-surface-variant">
<div className="flex items-center gap-1 text-primary-fixed">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
<span className="font-label-badge text-label-badge tracking-wider uppercase">Region II: Starlight Canopy</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Next: Aether Peak</span>
</div>
</div>
{/*  Cosmic Map Canvas Container  */}
<div className="relative w-full overflow-hidden" style={{ minHeight: '820px' }}>
{/*  Background Atmospheric Fantasy Landscape Illumination  */}
<div className="absolute inset-0 pointer-events-none opacity-40">
<div className="absolute top-10 left-1/4 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 right-4 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-16 left-2 w-64 h-64 bg-tertiary-container/15 rounded-full blur-3xl"></div>
</div>
{/*  Floating Fantasy Environmental Vignettes  */}
{/*  Realm 1: Starlight Canopy (Lower Map)  */}
<div className="absolute bottom-4 left-2 w-32 h-28 rounded-2xl overflow-hidden opacity-75 shadow-2xl pointer-events-none">
<img className="w-full h-full object-cover" data-alt="Bioluminescent celestial forest canopy with glowing purple and cyan mushrooms, glowing starlight particles hanging in deep cosmic mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTbTithHw3SZ-rpc26Imk9YRygJnpAHr7fQOakNlDp1kOfQBQYqOLwKNWEMoEdE6HlsgeXfQlKY7S_CJys1lPN3nUvpK-l_CJR7GvM7mCNtmPgsoLOiXen_nJPkIx6ZRcSiLFOIqXltba5KsSJfZg83jQiz6j8pbmr3rhSwftpbkok-gzUIPfra2xzPvjAzaLLfBgPjqPeoOuZb1hnxu_f4k50M90TGj-kTP_8oJz5"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
</div>
{/*  Realm 2: Nebula Falls (Mid Map)  */}
<div className="absolute top-80 right-2 w-36 h-32 rounded-2xl overflow-hidden opacity-70 shadow-2xl pointer-events-none">
<img className="w-full h-full object-cover" data-alt="Ethereal floating celestial waterfalls pouring liquid light down through floating purple crystal islands in a starry cosmic void" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJqLKKCw0RHVpPV0lBoHB_EdJqD4EuU-ZvGWWr2Q7MyZByNBMQ0RM8SU9IDXtqouNDejcm0m_DkCm7biLSyI4TKemPimwdEkRX2VsyVTVgawGnWNvGNp4NeGPue1HvwPa3eXpQlmt4ELsra3buat2i7bmSxEGazJA_uaLz_1un3y_JkgdwfY_RCWA-rEUezHDL_a2GcAhdxmVhDPiYQOqSaqp3gQ-D-ICO2Z505zRe"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
</div>
{/*  Realm 3: Aether Peak & Shrine (Upper Map)  */}
<div className="absolute top-6 left-6 w-40 h-32 rounded-2xl overflow-hidden opacity-85 shadow-2xl pointer-events-none">
<img className="w-full h-full object-cover" data-alt="Majestic floating mountain peak crowned with ancient golden celestial sanctuary, glowing starlight aurora borealis background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkTzzxCxn5Y-VHuX949LCG8Sr1JxX_ZzHe1_lsU2wRqRcCYFZwU5HF9kAQt35wrExL88t6_PH4njEyqDIShEp3i7bOLl3v6D1SRpAAzbTX9M2B2lGnI4ZfFlB9jM534WxsJwC88Gx7NU11qCOO0JLReIulLX8RELYqjGjLOotplLiioAKTn1ySRkwriTAHd8iMduCiYdRF52rI9qF5hcR8U4sZVcnDF1nf09B6sVlC"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
</div>
{/*  SVG Winding Cosmic Pathway with Stardust Trail  */}
<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewBox="0 0 390 840">
{/*  Glow Underlay  */}
<path d="M 120 780 C 130 730, 260 700, 270 650 C 280 600, 110 570, 130 500 C 145 440, 270 410, 260 330 C 250 250, 120 220, 140 140 C 150 100, 220 70, 240 40" stroke="rgba(0, 240, 255, 0.18)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
{/*  Luminous Stardust Core Track  */}
<path d="M 120 780 C 130 730, 260 700, 270 650 C 280 600, 110 570, 130 500 C 145 440, 270 410, 260 330 C 250 250, 120 220, 140 140 C 150 100, 220 70, 240 40" stroke="rgba(219, 252, 255, 0.7)" strokeDasharray="6 10" strokeLinecap="round" strokeWidth="4" />
{/*  Sparkling Waypoint Micro-dots  */}
<circle cx="170" cy="740" fill="#ffe086" opacity="0.8" r="2.5" />
<circle cx="210" cy="710" fill="#7df4ff" opacity="0.9" r="3.5" />
<circle cx="272" cy="620" fill="#ffe086" opacity="0.7" r="2.5" />
<circle cx="215" cy="580" fill="#7df4ff" opacity="0.8" r="3.5" />
<circle cx="120" cy="535" fill="#ffb1c6" opacity="0.8" r="2.5" />
<circle cx="180" cy="460" fill="#7df4ff" opacity="0.9" r="3" />
<circle cx="225" cy="425" fill="#ffe086" opacity="0.8" r="2.5" />
<circle cx="265" cy="290" fill="#b9cacb" opacity="0.5" r="3" />
<circle cx="190" cy="235" fill="#b9cacb" opacity="0.4" r="2" />
<circle cx="130" cy="180" fill="#b9cacb" opacity="0.4" r="2.5" />
<circle cx="185" cy="90" fill="#ffe086" opacity="0.7" r="3" />
</svg>
{/*  Interactive Level Nodes Layer (Positioned from Top to Bottom)  */}
{/*  LEVEL 30: SPECIAL MILESTONE SHRINE (Boss Node / Prismatic Chest)  */}
<div className="absolute top-4 right-10 flex flex-col items-center group cursor-pointer">
{/*  Glow Aura  */}
<div className="absolute -inset-3 bg-tertiary-container/30 rounded-3xl blur-xl animate-pulse"></div>
{/*  Shrine Banner / Landmark Card  */}
<div className="relative bg-surface-container-high/90 rounded-2xl p-2.5 flex items-center gap-space-sm shadow-xl">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary-fixed shadow-inner">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: '"FILL" 1' }}>lock</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-headline-sm text-body-sm text-tertiary-fixed">Lumen Shrine</span>
<span className="bg-tertiary-container text-on-tertiary-container font-label-badge text-[10px] px-1.5 py-0.5 rounded-full">LVL 30</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Unlocks Fusion Powers</span>
</div>
</div>
</div>
{/*  LEVEL 27: Locked Distant Node  */}
<div className="absolute top-28 left-28 flex flex-col items-center opacity-60">
<div className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center text-outline shadow-inner">
<span className="material-symbols-outlined text-[18px]">lock</span>
</div>
<span className="font-label-badge text-label-badge text-outline mt-1">27</span>
</div>
{/*  LEVEL 26: Locked Node  */}
<div className="absolute top-48 right-24 flex flex-col items-center opacity-70">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-outline shadow-inner">
<span className="material-symbols-outlined text-[18px]">lock</span>
</div>
<span className="font-label-badge text-label-badge text-outline mt-1">26</span>
</div>
{/*  LEVEL 25: Approaching Locked Node (Soft Purple Glow)  */}
<div className="absolute top-72 left-24 flex flex-col items-center">
<div className="w-13 h-13 rounded-full bg-surface-container-high p-1 shadow-lg shadow-secondary-container/20">
<div className="w-11 h-11 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">lock_clock</span>
</div>
</div>
<div className="bg-surface-container-highest rounded-full px-2 py-0.5 mt-1 shadow">
<span className="font-label-badge text-label-badge text-on-surface-variant">25</span>
</div>
</div>
{/*  ========================================================  */}
{/*  LEVEL 24: THE HERO CURRENT NODE (Active / Interactive)     */}
{/*  ========================================================  */}
<div className="absolute top-[390px] right-14 flex flex-col items-center z-30 cursor-pointer transition-transform active:scale-95" id="hero-current-node">
{/*  Mascot Companion perched atop the node  */}
<div className="relative -mb-3 z-20 flex flex-col items-center animate-bounce" style={{ animationDuration: '2.2s' }}>
{/*  Dialogue Callout Bubble  */}
<div className="bg-primary text-on-primary font-headline-sm text-body-sm px-2.5 py-0.5 rounded-full shadow-lg flex items-center gap-1">
<span>We're Ready!</span>
<span className="material-symbols-outlined text-[14px]">bolt</span>
</div>
{/*  Mascot Avatar Disc  */}
<div className="w-9 h-9 rounded-full bg-primary-container p-0.5 shadow-md -mt-1">
<img className="w-full h-full object-cover rounded-full" data-alt="Chibi glowing light spirit with bright joyful blue eyes and celestial leaf ears smiling, 3D cute arcade character render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvHOk8pzDxfInX7hYcxgVsXtsaz3X39K-GNoUcjK7inVRIu5p3HW1hgz-nJouyxGLc0HnXdg9auG1SqKY9quznY1vh8_Y0leWi5v9tx4kf29DI0fg0PpmhLNAU8eBJII4CefukttaVTqJT4rf7TjbvopyLmjKQ1V9I-XXswKxWvBIiMExIBUuHW3dTETKCVAF6XS_7po5hPKc_-FaToPHjnRIeQkIfCTtAwUAmaR_A"/>
</div>
</div>
{/*  Pulsing Beacon Halo  */}
<div className="absolute inset-0 mt-6 bg-primary-container/30 rounded-full blur-xl animate-ping" style={{ animationDuration: '3s' }}></div>
<div className="absolute inset-0 mt-6 bg-primary-fixed/20 rounded-full blur-md"></div>
{/*  Hero Dimensional Node Button  */}
<div className="relative w-20 h-20 rounded-full p-1 bg-gradient-to-b from-primary-fixed to-primary-fixed-dim shadow-2xl shadow-primary/40 flex items-center justify-center">
{/*  Mechanical Tactile Inner Inset  */}
<div className="w-full h-full rounded-full bg-gradient-to-b from-primary to-primary-container flex flex-col items-center justify-center text-on-primary shadow-inner">
<span className="font-headline-lg-mobile text-headline-lg-mobile leading-none font-black text-on-primary-container drop-shadow-sm">24</span>
<span className="material-symbols-outlined text-[16px] text-on-primary-container -mt-0.5 animate-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
</div>
</div>
{/*  Hero Sub-Label Pill  */}
<div className="mt-1.5 bg-surface-container-lowest/90 px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-badge text-label-badge text-primary-fixed uppercase tracking-wider">Glade Trial</span>
</div>
</div>
{/*  LEVEL 23: Completed Node (3 Stars)  */}
<div className="absolute top-[520px] left-20 flex flex-col items-center group cursor-pointer active:scale-95 transition-transform">
<div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-b from-tertiary-container to-on-tertiary-container shadow-lg shadow-tertiary/20 flex items-center justify-center">
<div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center text-tertiary-fixed">
<span className="font-headline-sm text-headline-sm">23</span>
</div>
</div>
{/*  Star Badges (3 Stars)  */}
<div className="flex items-center -mt-2 bg-surface-container-lowest/90 rounded-full px-1.5 py-0.5 shadow">
<span className="material-symbols-outlined text-[12px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[14px] text-tertiary-container -mx-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[12px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
{/*  LEVEL 22: Completed Node (2 Stars)  */}
<div className="absolute top-[620px] right-20 flex flex-col items-center group cursor-pointer active:scale-95 transition-transform">
<div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-b from-tertiary-container to-on-tertiary-container shadow-lg shadow-tertiary/20 flex items-center justify-center">
<div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center text-tertiary-fixed">
<span className="font-headline-sm text-headline-sm">22</span>
</div>
</div>
{/*  Star Badges (2 Stars Earned, 1 Missing)  */}
<div className="flex items-center -mt-2 bg-surface-container-lowest/90 rounded-full px-1.5 py-0.5 shadow">
<span className="material-symbols-outlined text-[12px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[14px] text-tertiary-container -mx-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[12px] text-surface-variant" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
{/*  LEVEL 21: Completed Node (3 Stars)  */}
<div className="absolute top-[710px] left-36 flex flex-col items-center group cursor-pointer active:scale-95 transition-transform">
<div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-b from-tertiary-container to-on-tertiary-container shadow-lg shadow-tertiary/20 flex items-center justify-center">
<div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center text-tertiary-fixed">
<span className="font-headline-sm text-headline-sm">21</span>
</div>
</div>
{/*  Star Badges  */}
<div className="flex items-center -mt-2 bg-surface-container-lowest/90 rounded-full px-1.5 py-0.5 shadow">
<span className="material-symbols-outlined text-[12px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[14px] text-tertiary-container -mx-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[12px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
{/*  LEVEL 20: Completed Node  */}
<div className="absolute top-[790px] left-16 flex flex-col items-center opacity-80">
<div className="w-13 h-13 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary-fixed shadow-inner">
<span className="font-headline-sm text-body-md">20</span>
</div>
<div className="flex items-center -mt-2 bg-surface-container-lowest/90 rounded-full px-1.5 py-0.5">
<span className="material-symbols-outlined text-[11px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[11px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[11px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
</div>
{/*  FLOATING MAP CONTROLS DOCK (Sticky Bottom Overlay)  */}
<div className="sticky bottom-2 z-30 px-margin flex flex-col gap-space-sm pointer-events-auto">
{/*  Floating Quest Scroll Mini-Card  */}
<div className="flex items-center justify-between bg-surface-container-high/95 backdrop-blur-md rounded-2xl p-space-sm shadow-xl shadow-surface-container-lowest/60">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-body-sm text-on-surface truncate">Link 50 Verdant Lumens</span>
<span className="font-label-badge text-label-badge text-secondary-fixed">34/50</span>
</div>
{/*  Progress Bar Gauge  */}
<div className="w-36 h-2 bg-surface-container-lowest rounded-full mt-1 overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-primary-container rounded-full" style={{ width: '68%' }}></div>
</div>
</div>
</div>
{/*  Shard Bounty Badge  */}
<div className="flex items-center gap-1 bg-surface-container-highest px-2 py-1 rounded-lg shrink-0">
<span className="material-symbols-outlined text-tertiary-container text-[14px]">diamond</span>
<span className="font-label-counter text-body-sm text-tertiary-fixed">+60</span>
</div>
</div>
{/*  High-Impact Main Action Play Launcher Dock  */}
<div className="flex items-center gap-space-sm">
{/*  Quick Map Recenter / Locate Button  */}
<button className="w-14 h-14 rounded-2xl bg-surface-container-high flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-95 shadow-lg shrink-0" title="Focus Current Level">
<span className="material-symbols-outlined text-[22px]">my_location</span>
<span className="font-label-badge text-[9px] mt-0.5">FOCUS</span>
</button>
{/*  Chunky Tactile Play Level Button  */}
<button className="flex-1 h-14 rounded-2xl bg-gradient-to-b from-primary to-primary-fixed-dim p-0.5 shadow-xl shadow-primary-container/30 active:translate-y-1 transition-all flex items-center justify-center group" id="play-level-btn">
<div className="w-full h-full bg-gradient-to-b from-primary-fixed to-primary-container rounded-[14px] flex items-center justify-center gap-space-sm px-space-md text-on-primary-fixed">
<span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>play_circle</span>
<div className="flex flex-col items-start leading-tight">
<span className="font-headline-sm text-headline-sm font-extrabold uppercase tracking-wide">Play Level 24</span>
<span className="font-label-badge text-[10px] text-on-primary-fixed-variant uppercase">3 Objectives • 18 Moves</span>
</div>
</div>
</button>
{/*  Booster Inventory Bag Quick-Access  */}
<button className="w-14 h-14 rounded-2xl bg-surface-container-high flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-95 shadow-lg shrink-0" title="Booster Bag">
<span className="material-symbols-outlined text-[22px]">backpack</span>
<span className="font-label-badge text-[9px] mt-0.5">ITEMS</span>
</button>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.4)]" data-active-classes="text-primary-fixed bg-surface-bright/50"><div className="flex justify-around items-center h-20 px-margin"><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="game-home" href="#"><span className="material-symbols-outlined text-[24px]">home</span><span className="font-body-sm text-body-sm mt-0.5">Home</span></a><a aria-current="page" className="flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all text-primary-fixed bg-surface-bright/50" data-path="adventure-map" href="#"><span className="material-symbols-outlined text-[24px]">map</span><span className="font-body-sm text-body-sm mt-0.5">Map</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="celestial-vault" href="#"><span className="material-symbols-outlined text-[24px]">storefront</span><span className="font-body-sm text-body-sm mt-0.5">Vault</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="settings-modal" href="#"><span className="material-symbols-outlined text-[24px]">settings</span><span className="font-body-sm text-body-sm mt-0.5">Settings</span></a></div></nav>
    </>
  );
}

export function GameScreenUI({
  levelNumber, config, score, targetScore, stars, moves, coins,
  activeBooster, dragging, selected, effect, popping, freshTiles,
  boardElements, activeType,
  onBack, onSettings, onPause, selectBooster,
  boardRef, onBoardPointerMove
}: any) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><button aria-label="Back" className="w-11 h-11 rounded-full flex items-center justify-center bg-surface-container-high/70 text-on-surface hover:bg-surface-bright transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back</span></button><img alt="Lumen Pop Game Logo" className="h-8 w-auto object-contain" src={ASSET + "lumen-pop-logo.png"} /><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">Gameplay Arena</h1></div><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface flex-grow"><div className="flex flex-col w-full max-w-[440px] mx-auto px-margin pb-safe select-none relative overflow-hidden">
{/*  Dynamic Ambient Stardust Canvas Background  */}
<div className="absolute inset-0 pointer-events-none opacity-40">
<div className="absolute -top-12 left-1/4 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute top-1/3 -right-16 w-80 h-80 bg-secondary-container/15 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-10 w-64 h-64 bg-tertiary-container/15 rounded-full blur-3xl"></div>
</div>
{/*  1. TOP HUD ZONE  */}
<div className="relative z-10 flex flex-col gap-space-xs mt-space-xs mb-space-sm">
{/*  Level Badge & Meta Bar  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="h-7 px-3 bg-surface-container-high/90 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-md">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="font-headline-sm text-body-sm text-primary uppercase tracking-wider">LVL {levelNumber}</span>
<span className="text-on-surface-variant text-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface truncate max-w-[130px]">Aetherial Glade</span>
</div>
</div>
{/*  Settings / Pause Tactile Button  */}
<button className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-fixed shadow-md active:translate-y-0.5 transition-all" onClick={onPause}>
<span className="material-symbols-outlined text-[20px]">pause</span>
</button>
</div>
{/*  Objectives Ribbon & Moves Showcase  */}
<div className="grid grid-cols-12 gap-space-xs items-stretch mt-1">
{/*  Target Goals Card (7 Cols)  */}
<div className="col-span-7 bg-surface-container-low/95 backdrop-blur-xl rounded-DEFAULT p-2 flex flex-col justify-between shadow-lg relative overflow-hidden">
<div className="flex items-center justify-between mb-1">
<span className="font-label-badge text-[10px] uppercase text-on-surface-variant tracking-wider">Targets</span>
<span className="font-body-sm text-[11px] text-tertiary-fixed-dim">{config?.lesson}</span>
</div>
<div className="flex items-center gap-space-xs">
{/*  Aether Target Pill  */}
<div className="flex-1 bg-surface-container-lowest/80 rounded-full py-1 px-1.5 flex items-center gap-1 shadow-inner">
<svg className="w-5 h-5 drop-shadow shrink-0" viewBox="0 0 24 24">
<polygon fill="#00F0FF" points="12,2 22,12 12,22 2,12" />
<polygon fill="#A5F3FC" opacity="0.6" points="12,5 19,12 12,19 5,12" />
<circle cx="9" cy="11" fill="#00363A" r="1.2" />
<circle cx="15" cy="11" fill="#00363A" r="1.2" />
</svg>
<span className="font-label-counter text-[13px] text-primary">{score}<span className="text-on-surface-variant text-[10px]">/{targetScore}</span></span>
</div>
{/*  Nova Target Pill  */}
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
{/*  Moves Remaining Glowing Vault (5 Cols)  */}
<div className="col-span-5 bg-gradient-to-b from-surface-container-high to-surface-container-lowest rounded-DEFAULT p-2 flex flex-col items-center justify-center relative shadow-xl overflow-hidden">
<div className="absolute -inset-1 bg-primary-container/10 blur-sm rounded-DEFAULT"></div>
<span className="relative font-label-badge text-[9px] uppercase tracking-widest text-primary-fixed-dim">Moves Left</span>
<div className="relative flex items-baseline gap-1">
<span className="font-headline-lg-mobile text-primary-container tracking-tight drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">14</span>
<span className="material-symbols-outlined text-tertiary-fixed text-[14px] animate-bounce" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
</div>
</div>
</div>
{/*  Score & 3-Star Cosmic Meter Strip  */}
<div className="bg-surface-container-low/80 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-space-sm shadow-md mt-0.5">
<div className="flex items-center gap-1 shrink-0">
<span className="font-headline-sm text-[12px] text-on-surface tracking-wide">48,650</span>
<span className="text-on-surface-variant text-[10px]">/65K</span>
</div>
{/*  Progress Track  */}
<div className="flex-1 relative h-3 bg-surface-container-lowest rounded-full overflow-visible flex items-center">
{/*  Progress Fill (74%)  */}
<div className="h-full bg-gradient-to-r from-primary-container via-secondary to-tertiary-container rounded-full w-[75%] shadow-[0_0_8px_rgba(0,240,255,0.5)]"></div>
{/*  Milestone Star 1 (Achieved)  */}
<div className="absolute left-[30%] -translate-x-1/2 w-4 h-4 bg-tertiary-container rounded-full flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[11px] text-on-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
{/*  Milestone Star 2 (Active/Glowing)  */}
<div className="absolute left-[65%] -translate-x-1/2 w-4 h-4 bg-tertiary-fixed rounded-full flex items-center justify-center shadow-[0_0_8px_#ffd54d] animate-pulse">
<span className="material-symbols-outlined text-[11px] text-on-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
{/*  Milestone Star 3 (Target Final)  */}
<div className="absolute right-0 translate-x-1/4 w-4 h-4 bg-surface-container-highest rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-outline" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
</div>
</div>
{/*  2. GAME ARENA: 6x6 PUZZLE GRID  */}
<div className="relative z-20 w-full aspect-square max-w-[390px] mx-auto p-2 bg-gradient-to-b from-surface-container-high/60 to-surface-container-lowest/90 rounded-2xl shadow-2xl backdrop-blur-2xl flex items-center justify-center">
{/*  Ethereal Runed Glass Outer Rim Frame  */}
<div className="absolute inset-1 rounded-xl pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent"></div>
{/*  Active Diagonal Link Path Overlay (Vector SVG connecting 4 Aethers)  */}
<svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 390 390">
{/*  Glow Underlay  */}
<path className="blur-[3px]" d="M 60,60 L 115,115 L 170,170 L 225,225" opacity="0.4" stroke="#00F0FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
{/*  Core Electrical Beam  */}
<path d="M 60,60 L 115,115 L 170,170 L 225,225" stroke="#DBFCFF" strokeDasharray="6,4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
{/*  Spark Particles on nodes  */}
<circle cx="60" cy="60" fill="#00F0FF" opacity="0.25" r="14" />
<circle cx="115" cy="115" fill="#00F0FF" opacity="0.25" r="14" />
<circle cx="170" cy="170" fill="#00F0FF" opacity="0.25" r="14" />
<circle cx="225" cy="225" fill="#00F0FF" opacity="0.35" r="18" />
<circle cx="225" cy="225" fill="none" r="22" stroke="#DBFCFF" strokeDasharray="3,3" strokeWidth="1.5" />
</svg>
{/*  Glowing Combo Multiplier Floating Badge  */}
<div className="absolute top-[36%] right-[14%] z-40 bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(204,1,106,0.8)] flex items-center gap-1 animate-bounce">
<span className="material-symbols-outlined text-[13px] text-tertiary-fixed" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
<span className="font-headline-sm text-[11px] tracking-tight font-black uppercase">x2.5 Glow Combo!</span>
</div>
{/*  The 6x6 Grid Cells Container  */}
<div className="grid grid-cols-6 grid-rows-6 gap-1.5 w-full h-full p-1 bg-surface-container-lowest/80 rounded-xl shadow-inner">
{/*  ROW 1  */}
{/*  [0,0] AETHER (LINKED 1)  */}
<div className="relative rounded-lg bg-surface-container-low/90 flex items-center justify-center p-1 shadow-inner shadow-primary-container/30">
<svg className="w-full h-full drop-shadow-[0_0_8px_#00F0FF]" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,3 37,20 20,37 3,20" />
<polygon fill="#A5F3FC" opacity="0.75" points="20,8 32,20 20,32 8,20" />
<circle cx="16" cy="19" fill="#00363A" r="2.2" /><circle cx="17" cy="18" fill="#FFF" r="0.7" />
<circle cx="24" cy="19" fill="#00363A" r="2.2" /><circle cx="25" cy="18" fill="#FFF" r="0.7" />
<path d="M 18,24 Q 20,26 22,24" fill="none" stroke="#00363A" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
{/*  [0,1] VERDANT  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<path d="M20 9 C16 17, 12 23, 12 28 A8 8 0 0 0 28 28 C28 23, 24 17, 20 9 Z" fill="#A7F3D0" opacity="0.6" />
<circle cx="16" cy="25" fill="#00391E" r="2" /><circle cx="16.6" cy="24.4" fill="#FFF" r="0.6" />
<circle cx="24" cy="25" fill="#00391E" r="2" /><circle cx="24.6" cy="24.4" fill="#FFF" r="0.6" />
<ellipse cx="20" cy="28" fill="#00391E" rx="1.5" ry="1"></ellipse>
</svg>
</div>
{/*  [0,2] SOLAR  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="20" cy="20" fill="#FFF275" opacity="0.8" r="7" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
<path d="M 18,22 Q 20,24 22,22" fill="none" stroke="#3C2F00" strokeWidth="1.2" />
</svg>
</div>
{/*  [0,3] COSMIC  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<ellipse cx="20" cy="20" fill="none" opacity="0.5" rx="16" ry="6" stroke="#E9D5FF" strokeWidth="1.5" transform="rotate(-20 20 20)"></ellipse>
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="20" cy="20" fill="#C084FC" opacity="0.6" r="9" />
<path d="M 15 19 Q 17 21 19 19" fill="none" stroke="#2E1065" strokeLinecap="round" strokeWidth="1.4" />
<path d="M 21 19 Q 23 21 25 19" fill="none" stroke="#2E1065" strokeLinecap="round" strokeWidth="1.4" />
</svg>
</div>
{/*  [0,4] TERRA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<polygon fill="#FED7AA" opacity="0.5" points="20,10 29,15 29,25 20,30 11,25 11,15" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
<path d="M 18 24 L 22 24" stroke="#431407" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
{/*  [0,5] BLAZE  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<path d="M20 12 C22 17 28 20 28 27 C28 31 24 33 20 33 C16 33 12 31 12 27 C12 20 18 17 20 12 Z" fill="#FECDD3" opacity="0.6" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
<path d="M 17 28 Q 20 26 23 28" fill="none" stroke="#4C0519" strokeWidth="1.2" />
</svg>
</div>
{/*  ROW 2  */}
{/*  [1,0] NOVA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" /><circle cx="15.8" cy="13.2" fill="#FFF" r="0.7" />
<circle cx="25" cy="14" fill="#500724" r="2.2" /><circle cx="25.8" cy="13.2" fill="#FFF" r="0.7" />
<circle cx="12" cy="18" fill="#FDA4AF" opacity="0.7" r="2" />
<circle cx="28" cy="18" fill="#FDA4AF" opacity="0.7" r="2" />
</svg>
</div>
{/*  [1,1] AETHER (LINKED 2)  */}
<div className="relative rounded-lg bg-surface-container-low/90 flex items-center justify-center p-1 shadow-inner shadow-primary-container/30">
<svg className="w-full h-full drop-shadow-[0_0_8px_#00F0FF]" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,3 37,20 20,37 3,20" />
<polygon fill="#A5F3FC" opacity="0.75" points="20,8 32,20 20,32 8,20" />
<circle cx="16" cy="19" fill="#00363A" r="2.2" /><circle cx="17" cy="18" fill="#FFF" r="0.7" />
<circle cx="24" cy="19" fill="#00363A" r="2.2" /><circle cx="25" cy="18" fill="#FFF" r="0.7" />
<path d="M 18,24 Q 20,26 22,24" fill="none" stroke="#00363A" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
{/*  [1,2] VERDANT  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
{/*  [1,3] SOLAR  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
{/*  [1,4] COSMIC  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
{/*  [1,5] TERRA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
{/*  ROW 3  */}
{/*  [2,0] BLAZE  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
{/*  [2,1] NOVA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
{/*  [2,2] AETHER (LINKED 3)  */}
<div className="relative rounded-lg bg-surface-container-low/90 flex items-center justify-center p-1 shadow-inner shadow-primary-container/30">
<svg className="w-full h-full drop-shadow-[0_0_8px_#00F0FF]" viewBox="0 0 40 40">
<polygon fill="#00F0FF" points="20,3 37,20 20,37 3,20" />
<polygon fill="#A5F3FC" opacity="0.75" points="20,8 32,20 20,32 8,20" />
<circle cx="16" cy="19" fill="#00363A" r="2.2" /><circle cx="17" cy="18" fill="#FFF" r="0.7" />
<circle cx="24" cy="19" fill="#00363A" r="2.2" /><circle cx="25" cy="18" fill="#FFF" r="0.7" />
<path d="M 18,24 Q 20,26 22,24" fill="none" stroke="#00363A" strokeLinecap="round" strokeWidth="1.2" />
</svg>
</div>
{/*  [2,3] VERDANT  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
{/*  [2,4] SOLAR  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
{/*  [2,5] COSMIC  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
{/*  ROW 4  */}
{/*  [3,0] TERRA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
{/*  [3,1] BLAZE  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
{/*  [3,2] NOVA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
{/*  [3,3] AETHER (LINKED 4 - ACTIVE HEAD)  */}
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
{/*  [3,4] VERDANT  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
{/*  [3,5] SOLAR  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
{/*  ROW 5  */}
{/*  [4,0] COSMIC  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
{/*  [4,1] TERRA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
{/*  [4,2] BLAZE  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
{/*  [4,3] NOVA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
{/*  [4,4] ★ THE FUSION ORB SPECIAL CREATURE ★  */}
<div className="relative rounded-lg bg-surface-container-lowest flex items-center justify-center p-0.5 shadow-xl scale-110 z-20">
{/*  Radial Bloom  */}
<div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary-container via-secondary to-tertiary-container blur-[4px] opacity-80 animate-spin"></div>
{/*  Badge label  */}
<div className="absolute -bottom-2 bg-surface-container-lowest text-primary-fixed text-[8px] font-label-badge font-black uppercase px-1.5 py-0.2 rounded-full border border-primary-container/40 z-30 shadow-md">
          FUSION
        </div>
<svg className="w-full h-full relative z-10 drop-shadow-[0_0_10px_#FFFFFF]" viewBox="0 0 44 44">
<defs>
<radialGradient cx="35%" cy="35%" id="fusionGrad" r="65%">
<stop offset="0%" stopColor="#FFFFFF" />
<stop offset="30%" stopColor="#00F0FF" />
<stop offset="65%" stopColor="#FF3E8F" />
<stop offset="100%" stopColor="#FFD12F" />
</radialGradient>
</defs>
{/*  Outer Celestial Ring  */}
<circle cx="22" cy="22" fill="url(#fusionGrad)" r="18" />
{/*  Swirling Highlights  */}
<path d="M 12 18 C 16 10, 28 10, 32 18 C 28 26, 16 26, 12 18 Z" fill="#FFF" opacity="0.4" />
{/*  Determined Heroic Cute Eyes  */}
<circle cx="17" cy="21" fill="#0E0728" r="2.2" /><circle cx="18" cy="20" fill="#FFF" r="0.8" />
<circle cx="27" cy="21" fill="#0E0728" r="2.2" /><circle cx="28" cy="20" fill="#FFF" r="0.8" />
{/*  Confident Smile  */}
<path d="M 19 26 Q 22 29 25 26" fill="none" stroke="#0E0728" strokeLinecap="round" strokeWidth="1.5" />
{/*  Sparkling Orbitals  */}
<circle cx="6" cy="20" fill="#FFD12F" r="1.5" />
<circle cx="36" cy="14" fill="#00F0FF" r="1.5" />
<circle cx="24" cy="38" fill="#FF3E8F" r="1.5" />
</svg>
</div>
{/*  [4,5] VERDANT  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 C14 14, 8 22, 8 28 A12 12 0 0 0 32 28 C32 22, 26 14, 20 4 Z" fill="#10E885" />
<circle cx="16" cy="25" fill="#00391E" r="2" />
<circle cx="24" cy="25" fill="#00391E" r="2" />
</svg>
</div>
{/*  ROW 6  */}
{/*  [5,0] SOLAR  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 4 Q20 16 32 20 Q20 20 20 36 Q20 20 8 20 Q20 20 20 4 Z" fill="#FFD12F" />
<circle cx="17" cy="19" fill="#3C2F00" r="1.8" />
<circle cx="23" cy="19" fill="#3C2F00" r="1.8" />
</svg>
</div>
{/*  [5,1] COSMIC  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<circle cx="20" cy="20" fill="#A855F7" r="13" />
<circle cx="16" cy="19" fill="#2E1065" r="1.8" />
<circle cx="24" cy="19" fill="#2E1065" r="1.8" />
</svg>
</div>
{/*  [5,2] TERRA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<polygon fill="#FF8811" points="20,5 33,12 33,28 20,35 7,28 7,12" />
<circle cx="16" cy="19" fill="#431407" r="1.8" />
<circle cx="24" cy="19" fill="#431407" r="1.8" />
</svg>
</div>
{/*  [5,3] BLAZE  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 5 C23 12 33 16 33 26 C33 33 27 37 20 37 C13 37 7 33 7 26 C7 16 17 12 20 5 Z" fill="#FF3366" />
<circle cx="16" cy="24" fill="#4C0519" r="1.8" />
<circle cx="24" cy="24" fill="#4C0519" r="1.8" />
</svg>
</div>
{/*  [5,4] NOVA  */}
<div className="rounded-lg bg-surface-container-low flex items-center justify-center p-1 shadow-inner">
<svg className="w-full h-full" viewBox="0 0 40 40">
<path d="M20 33.5 L17.5 31.2 C9.2 23.6 4 18.7 4 12.8 C4 7.9 7.8 4 12.6 4 C15.4 4 18 5.3 20 7.3 C22 5.3 24.6 4 27.4 4 C32.2 4 36 7.9 36 12.8 C36 18.7 30.8 23.6 22.5 31.2 Z" fill="#FF3E8F" />
<circle cx="15" cy="14" fill="#500724" r="2.2" />
<circle cx="25" cy="14" fill="#500724" r="2.2" />
</svg>
</div>
{/*  [5,5] AETHER  */}
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
{/*  3. LOWER BOOSTER DECK  */}
<div className="relative z-10 flex flex-col gap-space-xs mt-space-sm">
{/*  Shard Currency Balance Pill  */}
<div className="flex items-center justify-between px-2">
<div className="flex items-center gap-1.5 bg-surface-container-high/70 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
<span className="text-tertiary-fixed text-[14px]">✦</span>
<span className="font-headline-sm text-body-sm text-on-surface">{coins.toLocaleString()}</span>
<span className="text-on-surface-variant font-body-sm text-[11px]">Shards</span>
<button className="w-4 h-4 rounded-full bg-primary-container text-on-primary flex items-center justify-center ml-1 text-[12px] font-bold">+</button>
</div>
<span className="font-label-badge text-[10px] uppercase tracking-wider text-primary-fixed-dim">Booster Arsenal</span>
</div>
{/*  The 3 Tactical Chunky Boosters  */}
<div className="grid grid-cols-3 gap-space-xs">
{/*  Booster 1: Shuffle  */}
<button onClick={() => selectBooster("shuffle")} className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-high active:translate-y-1 transition-transform shadow-md group relative">
<div className="w-11 h-11 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-1 shadow-inner group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[24px]">cyclone</span>
</div>
<span className="font-headline-sm text-[12px] text-on-surface">Shuffle</span>
{/*  Cost Pill Badge  */}
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-tertiary-fixed text-[11px] font-headline-sm">
<span>✦</span>
<span>35</span>
</div>
</button>
{/*  Booster 2: Nova Bomb  */}
<button onClick={() => selectBooster("bomb")} className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-high active:translate-y-1 transition-transform shadow-md group relative">
<div className="w-11 h-11 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary mb-1 shadow-inner group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
</div>
<span className="font-headline-sm text-[12px] text-on-surface">Nova Bomb</span>
{/*  Cost Pill Badge  */}
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-tertiary-fixed text-[11px] font-headline-sm">
<span>✦</span>
<span>50</span>
</div>
</button>
{/*  Booster 3: Prism Burst */}
<button onClick={() => selectBooster("burst")} className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-bright active:translate-y-1 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.4)] relative">
{/*  Active Highlight Halo  */}
<div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-container rounded-full animate-ping"></div>
<div className="w-11 h-11 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container mb-1 shadow-inner scale-105">
<span className="material-symbols-outlined text-[24px]">view_in_ar</span>
</div>
<span className="font-headline-sm text-[12px] text-primary-container font-black">Prism Burst</span>
{/*  Cost Pill Badge  */}
<div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-primary-fixed text-[11px] font-headline-sm">
<span>✦</span>
<span>65</span>
</div>
</button>
</div>
</div>
</div></main>
    </>
  );
}

export function ResultScreenUI({ score, target, stars, onNextLevel, onReplay, onMap }: any) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><button aria-label="Back" className="w-11 h-11 rounded-full flex items-center justify-center bg-surface-container-high/70 text-on-surface hover:bg-surface-bright transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back</span></button><img alt="Lumen Pop Game Logo" className="h-8 w-auto object-contain" src={ASSET + "lumen-pop-logo.png"} /><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">Result Overlays</h1></div><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface flex-grow"><div className="flex flex-col w-full relative px-margin pb-safe select-none overflow-hidden">
{/*  Particle & Confetti Canvas Overlay  */}
<canvas className="absolute inset-0 w-full h-full pointer-events-none z-30" id="victory-confetti-canvas"></canvas>
{/*  Ambient Golden Ray Backing Visual  */}
<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-tertiary-container/20 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-primary-container/15 blur-2xl rounded-full pointer-events-none -z-10"></div>
{/*  Decorative Celestial Streamer SVG Overlay  */}
<svg className="absolute top-2 inset-x-0 w-full h-44 pointer-events-none -z-10 opacity-70" fill="none" viewBox="0 0 360 180">
<path d="M-20 40 Q90 120 180 30 T380 60" opacity="0.4" stroke="#ffd54d" strokeDasharray="4 6" strokeWidth="1.5" />
<path d="M-10 80 Q100 20 200 90 T390 40" opacity="0.3" stroke="#00f0ff" strokeDasharray="3 5" strokeWidth="1.5" />
<circle className="animate-ping" cx="45" cy="35" fill="#ffe086" r="3" style={{ animationDuration: '3s' }} />
<circle className="animate-ping" cx="310" cy="50" fill="#00f0ff" r="2.5" style={{ animationDuration: '2.2s' }} />
<circle className="animate-ping" cx="180" cy="110" fill="#ffd54d" r="3.5" style={{ animationDuration: '2.6s' }} />
</svg>
{/*  Crown Arched Header & Ribbons  */}
<div className="relative flex flex-col items-center justify-center pt-space-xs mb-space-sm z-20">
{/*  Winged Stardust Glyphs  */}
<div className="flex items-center justify-center gap-space-sm w-full">
<div className="flex items-center gap-1 text-primary-fixed opacity-80">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed animate-spin" style={{ animationDuration: '12s' }}>arrow_back_ios_new</span>
<div className="w-10 h-1 bg-gradient-to-r from-transparent to-tertiary-container rounded-full"></div>
</div>
{/*  Level Ribbon Pill  */}
<div className="bg-surface-container-high shadow-xl px-space-md py-1 rounded-full flex items-center gap-1.5 transform hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[15px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>hotel_class</span>
<span className="font-label-badge text-label-badge text-tertiary tracking-widest uppercase">LEVEL 24 CLEARED</span>
<span className="material-symbols-outlined text-[15px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>hotel_class</span>
</div>
<div className="flex items-center gap-1 text-primary-fixed opacity-80">
<div className="w-10 h-1 bg-gradient-to-l from-transparent to-tertiary-container rounded-full"></div>
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>arrow_back_ios_new</span>
</div>
</div>
{/*  Glowing Embossed Headline  */}
<div className="relative mt-space-xs text-center">
<div className="absolute inset-0 blur-lg bg-tertiary-container/30 scale-110 pointer-events-none"></div>
<h2 className="relative font-display-hero-mobile text-display-hero-mobile text-tertiary tracking-tight drop-shadow-md">
        LEVEL COMPLETE!
      </h2>
</div>
{/*  Praise Badge  */}
<div className="mt-1 px-space-md py-0.5 rounded-full bg-secondary-container shadow-md flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-on-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
<span className="font-label-badge text-label-badge text-on-secondary-container uppercase tracking-wider">SPECTACULAR GLOW!</span>
<span className="material-symbols-outlined text-[14px] text-on-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
</div>
</div>
{/*  3-Star Mastery Podium Card  */}
<div className="relative w-full flex items-center justify-center gap-space-md py-space-sm z-20">
{/*  Star 1: Angled Left  */}
<div className="flex flex-col items-center transform -rotate-12 translate-y-2">
<div className="relative w-16 h-16 rounded-full bg-surface-container-highest shadow-xl flex items-center justify-center group">
<div className="absolute inset-0 rounded-full bg-tertiary-container/30 blur-md animate-pulse"></div>
<div className="w-14 h-14 rounded-full bg-gradient-to-b from-tertiary-fixed to-tertiary-container flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-[36px] text-on-tertiary-fixed drop-shadow-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
<span className="font-label-badge text-[10px] text-tertiary-fixed mt-1 font-bold">25,000</span>
</div>
{/*  Star 2: Dominant Center Star  */}
<div className="flex flex-col items-center -translate-y-2">
<div className="relative w-20 h-20 rounded-full bg-surface-container-highest shadow-2xl flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-tertiary-fixed/50 blur-lg animate-pulse" style={{ animationDuration: '1.8s' }}></div>
<div className="w-18 h-18 rounded-full bg-gradient-to-b from-tertiary to-tertiary-container flex items-center justify-center shadow-lg transform scale-105">
<span className="material-symbols-outlined text-[48px] text-on-tertiary drop-shadow" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
<span className="absolute -top-1 -right-1 material-symbols-outlined text-[18px] text-primary animate-bounce">flare</span>
</div>
<span className="font-label-badge text-label-badge text-tertiary-fixed font-black mt-1 tracking-wide">MASTERY</span>
</div>
{/*  Star 3: Angled Right  */}
<div className="flex flex-col items-center transform rotate-12 translate-y-2">
<div className="relative w-16 h-16 rounded-full bg-surface-container-highest shadow-xl flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-tertiary-container/30 blur-md animate-pulse"></div>
<div className="w-14 h-14 rounded-full bg-gradient-to-b from-tertiary-fixed to-tertiary-container flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-[36px] text-on-tertiary-fixed drop-shadow-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
<span className="font-label-badge text-[10px] text-tertiary-fixed mt-1 font-bold">65,000</span>
</div>
</div>
{/*  Celebrating Mascot & Ambient Companion Section  */}
<div className="relative w-full flex items-end justify-center -mb-3 z-20 pointer-events-none">
<div className="relative flex items-center justify-center gap-space-lg">
{/*  Aether Lumen Character  */}
<div className="relative w-20 h-20 flex items-center justify-center animate-bounce" style={{ animationDuration: '2.4s' }}>
<img className="w-full h-full object-contain drop-shadow-lg" data-alt="Cute glowing cyan aether mascot creature shaped like a rounded droplet with big playful sparkling eyes wearing a sparkling gold party hat with celestial confetti floating around it in cosmic dark digital game art style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqPVbhLhJMKFCUnGvKX0TiOPOWaORgzpMoj51Q4DP623ukDnzUlm83CmA_S6j_lQkOL1gs4EJf6wlzKW0kwwuGpa9yohRVO07gMYisjL28uPMQETZ0SLX8m-_CZGci8nOBKSIIP-HfPoM51lkz68DIro0Ev2rQuyAik-fWeZ7mMWy1uJJ8Nj-EWkiIiqYNV1JAEn_Q5GMNU0wO1CEa4NwBDoiALGYV8TuFeyzSdHDl"/>
</div>
{/*  Nova Lumen Character  */}
<div className="relative w-16 h-16 flex items-center justify-center animate-bounce" style={{ animationDuration: '2.1s', animationDelay: '0.3s' }}>
<img className="w-full h-full object-contain drop-shadow-lg" data-alt="Charming miniature magenta nova spirit creature with adorable smiling eyes celebrating with a tiny glowing party horn and mini star fireworks, game character skeuomorphic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHwJe8Bm-qAelGxBs6op2WABjRde6RNBE6enOidf-lXEZoTQmJNEx5GXG6tKlbk-vQUONmQxXPtmU0259oxY7Zj-VBquCG3k90REQJERdbDK0vrUK78AzO07KCcJNQBDz9Up3HGPC64PibmkcrFWOxqU6xywHAek-h1pUNh8nAsGxnv0lqE6eiVaCIkXfojLRIAmXl7qY9ciZ0EU5bahQYPeNBWKCgvnV6lIyGw2p5"/>
</div>
</div>
</div>
{/*  Central Glassmorphic Stats Plate  */}
<div className="relative w-full rounded-lg bg-surface-container-low/90 backdrop-blur-xl shadow-2xl p-space-md flex flex-col gap-space-sm z-20">
{/*  Score Inset Pod  */}
<div className="rounded-DEFAULT bg-surface-container-lowest p-space-md flex items-center justify-between shadow-inner relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-badge text-[11px] text-on-surface-variant uppercase tracking-wider">TOTAL SCORE</span>
<span className="px-1.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-badge text-[10px] tracking-wider uppercase font-black animate-pulse">
            NEW RECORD!
          </span>
</div>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight font-black">
            84,320
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 65,000</span>
</div>
</div>
{/*  Score Glow Medallion  */}
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shadow-lg shrink-0">
<span className="material-symbols-outlined text-[28px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
</div>
</div>
{/*  Match Performance Details  */}
<div className="grid grid-cols-2 gap-space-xs">
{/*  Bonus Moves  */}
<div className="rounded-DEFAULT bg-surface-container p-space-sm flex flex-col justify-between">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
<span className="font-body-sm text-[12px] text-on-surface-variant truncate">Moves Left</span>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="font-label-counter text-label-counter text-primary">+6</span>
<span className="font-label-badge text-[11px] text-tertiary font-bold">+3,000 pts</span>
</div>
</div>
{/*  Combo Chain  */}
<div className="rounded-DEFAULT bg-surface-container p-space-sm flex flex-col justify-between">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">all_inclusive</span>
<span className="font-body-sm text-[12px] text-on-surface-variant truncate">Longest Chain</span>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="font-label-counter text-label-counter text-secondary">9 Link</span>
<span className="font-label-badge text-[11px] text-primary-fixed font-bold">x3.5 Combo</span>
</div>
</div>
</div>
{/*  Rewards Ingot Row  */}
<div className="rounded-DEFAULT bg-surface-container-high/60 p-space-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-badge text-[11px] text-on-surface-variant uppercase tracking-wider">LEVEL SPOILS EARNED</span>
<span className="font-label-badge text-[11px] text-primary-fixed-dim uppercase tracking-wider">CLAIMED</span>
</div>
<div className="flex items-center gap-space-xs">
{/*  Celestial Shards  */}
<div className="flex-1 rounded-DEFAULT bg-surface-container-lowest py-1.5 px-space-sm flex items-center justify-between shadow-inner">
<div className="flex items-center gap-1.5 min-w-0">
<div className="w-6 h-6 rounded-full bg-tertiary-container/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface truncate">Celestial Shards</span>
</div>
<span className="font-headline-sm text-headline-sm text-tertiary-fixed shrink-0 font-extrabold">+120</span>
</div>
{/*  Prismatic Orb Core  */}
<div className="flex-1 rounded-DEFAULT bg-surface-container-lowest py-1.5 px-space-sm flex items-center justify-between shadow-inner">
<div className="flex items-center gap-1.5 min-w-0">
<div className="w-6 h-6 rounded-full bg-primary-container/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>lens_blur</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface truncate">Fusion Orb</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary-fixed shrink-0 font-extrabold">+1</span>
</div>
</div>
</div>
</div>
{/*  Interactive Action Buttons Footer Deck  */}
<div className="relative w-full flex flex-col gap-space-sm mt-space-md z-20">
{/*  Primary Big Squishy Chunky Action Button: NEXT LEVEL  */}
<button className="group relative w-full h-14 rounded-DEFAULT bg-primary-container flex items-center justify-center shadow-xl active:translate-y-1 transition-all" id="btn-next-level">
{/*  3D Base Thickness Shadow  */}
<div className="absolute inset-x-0 bottom-0 h-2 bg-on-primary-container rounded-b-DEFAULT pointer-events-none"></div>
{/*  Top Specular Glass Bevel  */}
<div className="absolute inset-x-2 top-1 h-3 bg-white/40 rounded-t-DEFAULT pointer-events-none"></div>
{/*  Button Label Content  */}
<div className="relative flex items-center justify-center gap-2 text-on-primary font-headline-md text-headline-md font-black tracking-wide">
<span>NEXT LEVEL</span>
<span className="font-label-badge text-label-badge bg-surface/30 px-2 py-0.5 rounded-full text-on-primary">LVL 25</span>
<span className="material-symbols-outlined text-[24px] transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</button>
{/*  Secondary Actions Row: Replay & World Map  */}
<div className="flex items-center justify-between gap-space-md">
{/*  Replay Button  */}
<button className="flex-1 h-12 rounded-DEFAULT bg-surface-container-high hover:bg-surface-bright flex items-center justify-center gap-2 shadow-lg active:translate-y-0.5 transition-all" id="btn-replay-level">
<span className="material-symbols-outlined text-[20px] text-on-surface">replay</span>
<span className="font-body-lg text-body-lg text-on-surface font-bold">Replay</span>
</button>
{/*  World Map Navigation Button  */}
<button className="flex-1 h-12 rounded-DEFAULT bg-surface-container-high hover:bg-surface-bright flex items-center justify-center gap-2 shadow-lg active:translate-y-0.5 transition-all" id="btn-world-map">
<span className="material-symbols-outlined text-[20px] text-primary">map</span>
<span className="font-body-lg text-body-lg text-on-surface font-bold">World Map</span>
</button>
{/*  Share Achievement Button  */}
<button aria-label="Share Score" className="w-12 h-12 rounded-DEFAULT bg-surface-container-high hover:bg-surface-bright flex items-center justify-center shadow-lg shrink-0 active:translate-y-0.5 transition-all">
<span className="material-symbols-outlined text-[20px] text-tertiary">share</span>
</button>
</div>
</div>
</div>
</main>
    </>
  );
}
