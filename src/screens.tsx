import React, { useMemo } from 'react';
import { ASSET } from './App';

// --- START / TITLE SCREEN ---
export function StartScreenUI({
  onStart,
  onSettings,
  coins = 1000,
  musicEnabled = true,
  onToggleMusic,
  onClaimGift,
  giftClaimed = false,
}: any) {
  return (
    <div className="relative w-full min-h-screen bg-surface text-on-surface flex flex-col justify-between overflow-x-hidden select-none">
      {/* Dynamic Ambient Stardust Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-primary-container/20 rounded-full blur-[90px]" />
        <div className="absolute top-[28%] -left-16 w-56 h-56 bg-secondary-container/25 rounded-full blur-[80px]" />
        <div className="absolute top-[38%] -right-16 w-64 h-64 bg-tertiary-container/20 rounded-full blur-[85px]" />
      </div>

      {/* Fixed Header Bar */}
      <header className="sticky top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe">
        <div className="h-16 px-margin flex items-center justify-between gap-space-sm max-w-[480px] mx-auto">
          <div className="flex items-center gap-space-sm">
            <img alt="Lumen Pop Logo" className="h-9 w-auto object-contain drop-shadow" src={ASSET + 'lumen-pop-logo.png'} />
            <div className="flex flex-col">
              <span className="font-label-badge text-[11px] text-primary-fixed uppercase tracking-wider">Lumen Pop</span>
              <h1 className="font-headline-sm text-[16px] text-on-surface leading-tight font-bold">Celestial Odyssey</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Lives Pill */}
            <div className="flex items-center bg-surface-container-high/90 rounded-full px-2.5 py-1 shadow-md">
              <span className="material-symbols-outlined text-secondary text-[17px] mr-1 animate-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
              <span className="font-label-counter text-body-sm text-secondary-fixed">5/5</span>
            </div>
            {/* Shards Pill */}
            <div className="flex items-center bg-surface-container-high/90 rounded-full px-2.5 py-1 shadow-md">
              <span className="material-symbols-outlined text-tertiary-fixed text-[17px] mr-1" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
              <span className="font-label-counter text-body-sm text-tertiary-fixed">{coins.toLocaleString()}</span>
            </div>
            {/* Quick Audio & Settings */}
            <button
              onClick={onToggleMusic}
              className="w-8 h-8 rounded-full bg-surface-container-high/90 active:scale-90 transition-transform flex items-center justify-center text-on-surface shadow-sm"
              title="Toggle Music"
            >
              <span className="material-symbols-outlined text-[17px]">{musicEnabled ? 'volume_up' : 'volume_off'}</span>
            </button>
            <button
              onClick={onSettings}
              className="w-8 h-8 rounded-full bg-surface-container-high/90 active:scale-90 transition-transform flex items-center justify-center text-on-surface shadow-sm"
              title="Settings"
            >
              <span className="material-symbols-outlined text-[17px]">settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="relative z-10 flex flex-col items-center justify-center px-margin max-w-[440px] mx-auto w-full py-4 flex-grow">
        {/* SECTION 1: HERO LOGO & BADGE */}
        <div className="relative flex flex-col items-center w-full max-w-[340px] text-center mt-1">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-fixed/25 via-secondary/30 to-tertiary-fixed/25 rounded-full blur-3xl transform scale-125" />
          <img
            alt="Lumen Pop"
            className="relative z-10 w-full max-h-24 object-contain drop-shadow-[0_8px_20px_rgba(0,240,255,0.45)] transform hover:scale-105 transition-transform duration-300"
            src={ASSET + 'lumen-pop-logo.png'}
          />
          <div className="inline-flex items-center gap-1.5 bg-surface-container-highest/80 backdrop-blur-md px-3.5 py-1 rounded-full mt-2 shadow-inner shadow-primary-container/20 border border-white/5">
            <span className="material-symbols-outlined text-primary-fixed text-[14px]">auto_awesome</span>
            <span className="font-label-badge text-[11px] text-primary-fixed tracking-widest uppercase font-extrabold">Celestial Match &amp; Pop</span>
          </div>
        </div>

        {/* SECTION 2: LIVING MASCOTS & FUSION ORB STAGE */}
        <div className="relative w-full max-w-[340px] h-60 mt-3 flex items-center justify-center">
          {/* Central Swirling Fusion Orb */}
          <div className="relative flex items-center justify-center w-36 h-36">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container via-secondary-container to-tertiary-container opacity-40 blur-xl animate-pulse" />
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary-fixed via-secondary to-tertiary-container p-1 shadow-[0_0_35px_rgba(0,240,255,0.6)] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-surface-container-lowest/90 backdrop-blur-xl relative flex items-center justify-center">
                <img src={ASSET + 'fusion_orb.png'} alt="Fusion Orb" className="w-20 h-20 object-contain drop-shadow-[0_0_12px_#00F0FF] animate-spin" style={{ animationDuration: '14s' }} />
              </div>
            </div>
          </div>

          {/* MASCOT 1: AETHER (Cyan) - Top Left */}
          <div className="absolute top-2 left-2 flex flex-col items-center transform -rotate-6 hover:scale-110 transition-transform group animate-bounce" style={{ animationDuration: '3.2s' }}>
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high p-1 shadow-[0_6px_16px_rgba(0,240,255,0.35)] border border-primary/40 flex items-center justify-center">
              <img src={ASSET + 'aether_opened.png'} alt="Aether" className="w-full h-full object-contain pointer-events-none" />
            </div>
            <span className="font-label-badge text-[10px] text-primary-fixed mt-1.5 tracking-wider font-extrabold uppercase">Aether</span>
          </div>

          {/* MASCOT 2: NOVA (Magenta) - Top Right */}
          <div className="absolute top-3 right-2 flex flex-col items-center transform rotate-6 hover:scale-110 transition-transform group animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '400ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high p-1 shadow-[0_6px_16px_rgba(255,62,143,0.35)] border border-secondary/40 flex items-center justify-center">
              <img src={ASSET + 'nova_opened.png'} alt="Nova" className="w-full h-full object-contain pointer-events-none" />
            </div>
            <span className="font-label-badge text-[10px] text-secondary-fixed mt-1.5 tracking-wider font-extrabold uppercase">Nova</span>
          </div>

          {/* MASCOT 3: SOLAR (Gold) - Bottom Left */}
          <div className="absolute bottom-2 left-6 flex flex-col items-center transform -rotate-12 hover:scale-110 transition-transform group animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '800ms' }}>
            <div className="w-13 h-13 rounded-2xl bg-surface-container-high p-1 shadow-[0_6px_16px_rgba(255,213,77,0.35)] border border-tertiary/40 flex items-center justify-center">
              <img src={ASSET + 'solar_opened.png'} alt="Solar" className="w-full h-full object-contain pointer-events-none" />
            </div>
            <span className="font-label-badge text-[10px] text-tertiary-fixed mt-1 tracking-wider font-extrabold uppercase">Solar</span>
          </div>
        </div>

        {/* SECTION 3: DAILY BOUNTY BANNER */}
        <div className="w-full max-w-[340px] mt-2 mb-4">
          <div className="flex items-center justify-between bg-surface-container-high/90 backdrop-blur-md rounded-2xl p-3 border border-white/5 shadow-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>redeem</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-headline-sm text-[13px] text-on-surface leading-tight">Daily Stardust Gift</span>
                <span className="font-body-sm text-[11px] text-tertiary-fixed-dim">+50 Celestial Shards</span>
              </div>
            </div>
            <button
              onClick={onClaimGift}
              disabled={giftClaimed}
              className={`px-3 py-1.5 rounded-xl font-headline-sm text-[12px] font-bold tracking-wide transition-transform ${
                giftClaimed ? 'bg-surface-container-lowest text-on-surface-variant/50 cursor-not-allowed' : 'bg-tertiary-container text-on-tertiary-container shadow-md active:scale-95'
              }`}
            >
              {giftClaimed ? 'CLAIMED' : 'CLAIM'}
            </button>
          </div>
        </div>

        {/* SECTION 4: BIG CHUNKY TACTILE LAUNCH BUTTON */}
        <div className="w-full max-w-[340px]">
          <button
            onClick={onStart}
            className="relative group w-full active:scale-95 transition-transform duration-300 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,240,255,0.35)]"
          >
            {/* 3D Base Thickness */}
            <div className="absolute inset-0 bg-primary-container/80 rounded-2xl translate-y-1.5" />
            {/* Top Surface */}
            <div className="relative bg-gradient-to-r from-primary-container via-primary-fixed to-primary-container p-0.5 rounded-2xl">
              <div className="bg-gradient-to-b from-[#00f0ff] to-[#00b2bd] py-3.5 px-6 rounded-[14px] flex items-center justify-center gap-3 text-on-primary-fixed">
                <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>
                  play_circle
                </span>
                <div className="flex flex-col items-start leading-none">
                  <span className="font-display-hero-mobile text-[20px] font-black uppercase tracking-wider text-[#002022]">START ADVENTURE</span>
                  <span className="font-label-badge text-[10px] uppercase tracking-widest text-[#004f54] font-extrabold mt-0.5">Explore Nebula Trail</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </main>

      {/* Footer Metadata */}
      <footer className="relative z-10 py-3 text-center">
        <span className="font-body-sm text-[11px] text-on-surface-variant/60">Lumen Pop • 9:16 Celestial Edition</span>
      </footer>
    </div>
  );
}


// --- ADVENTURE MAP SCREEN ---
export function MapScreenUI({
  onPlay,
  onSettings,
  latest = 1,
  coins = 1000,
  starsCount = 0,
  musicEnabled = true,
  onToggleMusic,
  completed = {},
}: any) {
  // Generate 12 levels along a winding stardust trail
  const levels = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

  // Zigzag coordinates for 12 nodes across an 840px vertical space
  const nodePositions = [
    { level: 1, x: 50, y: 780 },
    { level: 2, x: 74, y: 710 },
    { level: 3, x: 52, y: 640 },
    { level: 4, x: 26, y: 570 },
    { level: 5, x: 48, y: 500 },
    { level: 6, x: 75, y: 430 },
    { level: 7, x: 55, y: 360 },
    { level: 8, x: 28, y: 290 },
    { level: 9, x: 50, y: 220 },
    { level: 10, x: 74, y: 150 },
    { level: 11, x: 46, y: 90 },
    { level: 12, x: 62, y: 35 },
  ];

  return (
    <div className="relative w-full min-h-screen bg-surface text-on-surface flex flex-col justify-between overflow-x-hidden select-none">
      {/* Sticky Top Region Header & HUD Bar */}
      <header className="sticky top-0 inset-x-0 z-40 bg-surface/90 backdrop-blur-md pt-safe border-b border-white/5">
        <div className="px-margin py-2.5 flex flex-col gap-2 max-w-[480px] mx-auto">
          <div className="flex items-center justify-between gap-space-xs">
            {/* Player Profile Chip */}
            <div className="flex items-center gap-2 bg-surface-container-high/90 rounded-full p-1 pr-3 shadow-lg">
              <div className="relative w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-primary/30">
                <img className="w-full h-full object-cover" src={ASSET + 'aether_opened.png'} alt="Player" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary rounded-full ring-2 ring-surface" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-headline-sm text-body-sm text-primary-fixed truncate">Star Weaver</span>
                  <span className="font-label-badge text-[10px] text-on-surface-variant">Lv.{latest}</span>
                </div>
                <div className="flex items-center gap-0.5 text-tertiary-fixed-dim">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="font-label-counter text-[11px] text-tertiary-fixed font-bold">{starsCount}</span>
                </div>
              </div>
            </div>

            {/* Currency & Toggles */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-surface-container-high/95 rounded-full px-2.5 py-1 shadow-md">
                <span className="material-symbols-outlined text-primary-container text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
                <span className="font-label-counter text-body-sm text-primary-fixed ml-1">{coins.toLocaleString()}</span>
              </div>
              <button
                onClick={onToggleMusic}
                className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shadow-md active:scale-90 transition-transform text-on-surface-variant"
                title="Toggle Music"
              >
                <span className="material-symbols-outlined text-[17px]">{musicEnabled ? 'volume_up' : 'volume_off'}</span>
              </button>
              <button
                onClick={onSettings}
                className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shadow-md active:scale-90 transition-transform text-on-surface-variant"
                title="Settings"
              >
                <span className="material-symbols-outlined text-[17px]">tune</span>
              </button>
            </div>
          </div>

          {/* Landmark Breadcrumb */}
          <div className="flex items-center justify-between px-1 text-on-surface-variant">
            <div className="flex items-center gap-1 text-primary-fixed">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              <span className="font-label-badge text-[11px] tracking-wider uppercase font-extrabold">Region I: Nebula Trail</span>
            </div>
            <span className="font-body-sm text-[11px] text-on-surface-variant/80">Active Level: {latest}</span>
          </div>
        </div>
      </header>

      {/* Cosmic Map Canvas Container */}
      <main className="relative w-full max-w-[440px] mx-auto flex-grow overflow-y-auto pb-28">
        <div className="relative w-full overflow-hidden" style={{ minHeight: '860px' }}>
          {/* Atmospheric Lights */}
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-4 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-16 left-2 w-64 h-64 bg-tertiary-container/15 rounded-full blur-3xl pointer-events-none" />

          {/* SVG Winding Cosmic Pathway with Stardust Trail */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewBox="0 0 100 860" preserveAspectRatio="none">
            {/* Glow underlay */}
            <path
              d="M 50 780 Q 80 740 74 710 T 52 640 T 26 570 T 48 500 T 75 430 T 55 360 T 28 290 T 50 220 T 74 150 T 46 90 T 62 35"
              stroke="rgba(0, 240, 255, 0.22)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            {/* Luminous dashed track */}
            <path
              d="M 50 780 Q 80 740 74 710 T 52 640 T 26 570 T 48 500 T 75 430 T 55 360 T 28 290 T 50 220 T 74 150 T 46 90 T 62 35"
              stroke="rgba(219, 252, 255, 0.75)"
              strokeDasharray="4 8"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>

          {/* Level Nodes */}
          {nodePositions.map(({ level, x, y }) => {
            const isCompleted = level < latest;
            const isCurrent = level === latest;
            const isLocked = level > latest;
            const starData = completed[level]?.stars || (isCompleted ? 3 : 0);

            return (
              <div
                key={level}
                style={{ left: `${x}%`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
                className="absolute flex flex-col items-center group cursor-pointer z-20"
                onClick={() => !isLocked && onPlay(level)}
              >
                {/* Current Level Pulsing Aura */}
                {isCurrent && (
                  <div className="absolute -inset-3 bg-primary-container/40 rounded-full blur-lg animate-pulse" />
                )}

                {/* Node Orb Button */}
                <button
                  disabled={isLocked}
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                    isCurrent
                      ? 'p-1 bg-gradient-to-b from-primary-fixed to-primary-container ring-4 ring-primary/40 shadow-[0_0_20px_rgba(0,240,255,0.7)] animate-bounce'
                      : isCompleted
                      ? 'p-1 bg-gradient-to-b from-tertiary-fixed to-tertiary-container shadow-[0_0_12px_rgba(255,213,77,0.4)]'
                      : 'bg-surface-container-high/80 border border-white/5 opacity-70 cursor-not-allowed'
                  }`}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center font-headline-sm text-headline-sm font-bold ${
                    isCurrent
                      ? 'bg-surface-container-lowest text-primary-fixed'
                      : isCompleted
                      ? 'bg-surface-container-high text-tertiary-fixed'
                      : 'bg-surface-container-lowest text-on-surface-variant/40'
                  }`}>
                    {isLocked ? (
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    ) : (
                      level
                    )}
                  </div>
                </button>

                {/* Sub-label Badges */}
                {isCurrent && (
                  <div className="mt-1.5 bg-surface-container-lowest/90 px-2.5 py-0.5 rounded-full shadow-lg flex items-center gap-1 border border-primary/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
                    <span className="font-label-badge text-[10px] text-primary-fixed uppercase tracking-wider font-extrabold">PLAY</span>
                  </div>
                )}

                {isCompleted && (
                  <div className="flex items-center -mt-1.5 bg-surface-container-lowest/90 rounded-full px-1.5 py-0.5 shadow border border-tertiary/20">
                    {[1, 2, 3].map((s) => (
                      <span
                        key={s}
                        className={`material-symbols-outlined text-[11px] ${s <= starData ? 'text-tertiary-container' : 'text-surface-variant'}`}
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Sticky Bottom Action Launcher */}
      <footer className="fixed bottom-2 inset-x-0 z-40 px-margin max-w-[440px] mx-auto pointer-events-auto">
        <button
          onClick={() => onPlay(latest)}
          className="w-full h-14 rounded-2xl bg-gradient-to-b from-primary to-primary-fixed-dim p-0.5 shadow-2xl shadow-primary-container/40 active:translate-y-0.5 transition-all flex items-center justify-center group"
        >
          <div className="w-full h-full bg-gradient-to-b from-primary-fixed to-primary-container rounded-[14px] flex items-center justify-center gap-space-sm px-space-md text-on-primary-fixed">
            <span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>
              play_circle
            </span>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-headline-sm text-[16px] font-extrabold uppercase tracking-wide text-[#002022]">Play Level {latest}</span>
              <span className="font-label-badge text-[10px] text-[#004f54] uppercase font-bold">Goal: Match Lumens • Clear Target</span>
            </div>
          </div>
        </button>
      </footer>
    </div>
  );
}


// --- GAMEPLAY ARENA SCREEN ---
export function GameScreenUI({
  levelNumber = 1,
  config,
  score = 0,
  targetScore = 5000,
  stars = 0,
  moves = 40,
  coins = 1000,
  activeBooster,
  dragging = false,
  selected = [],
  effect,
  popping = [],
  freshTiles = [],
  boardElements,
  activeType,
  onBack,
  onSettings,
  onPause,
  selectBooster,
  boardRef,
  onBoardPointerMove,
}: any) {
  // Calculate dynamic line coordinates connecting selected tiles
  const linkPath = useMemo(() => {
    if (selected.length < 2) return '';
    return selected.map((idx: number, i: number) => {
      const col = idx % 6;
      const row = Math.floor(idx / 6);
      const x = ((col + 0.5) / 6) * 100;
      const y = ((row + 0.5) / 6) * 100;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  }, [selected]);

  const progressPercent = Math.min(100, Math.round((score / targetScore) * 100));

  return (
    <div className="relative w-full min-h-screen bg-surface text-on-surface flex flex-col justify-between overflow-hidden select-none touch-none">
      {/* Dynamic Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute -top-12 left-1/4 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-16 w-80 h-80 bg-secondary-container/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-tertiary-container/15 rounded-full blur-3xl" />
      </div>

      {/* 1. TOP HUD ZONE */}
      <header className="relative z-10 w-full max-w-[440px] mx-auto px-margin pt-2 flex flex-col gap-2">
        {/* Level Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/80 text-on-surface active:scale-90 transition-transform shadow"
              title="Return to Map"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div className="h-8 px-3 bg-surface-container-high/90 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-md border border-white/5">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
              <span className="font-headline-sm text-body-sm text-primary uppercase tracking-wider font-extrabold">LVL {levelNumber}</span>
              <span className="text-on-surface-variant text-body-sm">•</span>
              <span className="font-body-sm text-body-sm text-on-surface truncate max-w-[120px] font-semibold">{config?.title || 'Celestial Glade'}</span>
            </div>
          </div>

          <button
            onClick={onPause}
            className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-fixed shadow-md active:scale-90 transition-all border border-white/5"
            title="Pause Game"
          >
            <span className="material-symbols-outlined text-[20px]">pause</span>
          </button>
        </div>

        {/* Objectives Ribbon & Moves Showcase */}
        <div className="grid grid-cols-12 gap-space-xs items-stretch">
          {/* Target Goals Card (7 cols) */}
          <div className="col-span-7 bg-surface-container-low/95 backdrop-blur-xl rounded-2xl p-2.5 flex flex-col justify-between shadow-lg border border-white/5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-badge text-[10px] uppercase text-on-surface-variant tracking-wider font-bold">Target</span>
              <span className="font-body-sm text-[11px] text-tertiary-fixed-dim font-bold">{progressPercent}% Achieved</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-lowest/80 rounded-xl py-1.5 px-2.5 shadow-inner">
              <span className="material-symbols-outlined text-primary-container text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
              <span className="font-label-counter text-[14px] text-primary font-black">
                {score.toLocaleString()}<span className="text-on-surface-variant text-[11px] font-normal"> / {targetScore.toLocaleString()}</span>
              </span>
            </div>
          </div>

          {/* Moves Remaining Vault (5 cols) */}
          <div className="col-span-5 bg-gradient-to-b from-surface-container-high to-surface-container-lowest rounded-2xl p-2 flex flex-col items-center justify-center relative shadow-xl border border-white/5">
            <span className="font-label-badge text-[9px] uppercase tracking-widest text-primary-fixed-dim font-bold">Moves Left</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-headline-lg-mobile text-[26px] text-primary-container tracking-tight font-black drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                {moves}
              </span>
              <span className="material-symbols-outlined text-tertiary-fixed text-[15px] animate-bounce" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
            </div>
          </div>
        </div>

        {/* Score & 3-Star Cosmic Meter Strip */}
        <div className="bg-surface-container-low/80 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-space-sm shadow-md border border-white/5">
          <div className="flex items-center gap-1 shrink-0">
            <span className="font-headline-sm text-[12px] text-on-surface font-bold">{score.toLocaleString()}</span>
            <span className="text-on-surface-variant text-[10px]">pts</span>
          </div>
          {/* Progress Track */}
          <div className="flex-1 relative h-2.5 bg-surface-container-lowest rounded-full overflow-visible flex items-center">
            <div
              className="h-full bg-gradient-to-r from-primary-container via-secondary to-tertiary-container rounded-full shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
            {/* 3 Milestone Stars */}
            <div className={`absolute left-[33%] -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center shadow-md ${stars >= 1 ? 'bg-tertiary-container text-on-tertiary' : 'bg-surface-container-highest text-outline'}`}>
              <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </div>
            <div className={`absolute left-[66%] -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center shadow-md ${stars >= 2 ? 'bg-tertiary-container text-on-tertiary shadow-[0_0_8px_#ffd54d]' : 'bg-surface-container-highest text-outline'}`}>
              <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </div>
            <div className={`absolute right-0 translate-x-1/4 w-4 h-4 rounded-full flex items-center justify-center shadow-md ${stars >= 3 ? 'bg-tertiary-fixed text-on-tertiary shadow-[0_0_10px_#ffe086]' : 'bg-surface-container-highest text-outline'}`}>
              <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. GAME ARENA: 6x6 PUZZLE GRID */}
      <main className="relative z-20 w-full max-w-[400px] mx-auto px-margin py-1 flex items-center justify-center flex-grow">
        <div className="relative w-full aspect-square p-2 bg-gradient-to-b from-surface-container-high/60 to-surface-container-lowest/90 rounded-2xl shadow-2xl backdrop-blur-2xl flex items-center justify-center border border-white/10">
          {/* Dynamic Link Path Vector SVG */}
          {selected.length > 1 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Glow underlay */}
              <path d={linkPath} fill="none" stroke="#00F0FF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_#00F0FF]" opacity="0.6" />
              {/* Dashed core beam */}
              <path d={linkPath} fill="none" stroke="#DBFCFF" strokeWidth="1.8" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" />
              {selected.map((idx: number) => {
                const col = idx % 6;
                const row = Math.floor(idx / 6);
                const cx = ((col + 0.5) / 6) * 100;
                const cy = ((row + 0.5) / 6) * 100;
                return (
                  <circle key={idx} cx={cx} cy={cy} r="3" fill="#00F0FF" className="animate-ping" opacity="0.4" />
                );
              })}
            </svg>
          )}

          {/* Dynamic Combo Multiplier Floating Badge */}
          {selected.length >= 3 && (
            <div className="absolute top-3 right-3 z-40 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full shadow-[0_0_15px_rgba(204,1,106,0.8)] flex items-center gap-1 animate-bounce">
              <span className="material-symbols-outlined text-[14px] text-tertiary-fixed" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
              <span className="font-headline-sm text-[11px] font-black uppercase">
                {selected.length >= 6 ? 'x2.5 Hyper!' : selected.length === 5 ? 'x2.0 Super!' : selected.length === 4 ? 'x1.5 Glow!' : 'Linked!'}
              </span>
            </div>
          )}

          {/* Active Booster Prompt Banner */}
          {activeBooster && (
            <div className="absolute top-3 left-3 z-40 bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.8)] flex items-center gap-1 animate-pulse">
              <span className="material-symbols-outlined text-[14px]">bolt</span>
              <span className="font-headline-sm text-[11px] font-black uppercase">Tap tile to use {activeBooster}</span>
            </div>
          )}

          {/* The 6x6 Grid Cells Container */}
          <div
            ref={boardRef}
            onPointerMove={onBoardPointerMove}
            className="grid grid-cols-6 grid-rows-6 gap-1.5 w-full h-full p-1 bg-surface-container-lowest/80 rounded-xl shadow-inner touch-none select-none"
          >
            {boardElements}
          </div>
        </div>
      </main>

      {/* 3. LOWER BOOSTER DECK */}
      <footer className="relative z-10 w-full max-w-[440px] mx-auto px-margin pb-3 pt-1 flex flex-col gap-2">
        {/* Shard Balance Pill */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5 bg-surface-container-high/70 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/5">
            <span className="text-tertiary-fixed text-[14px]">✦</span>
            <span className="font-headline-sm text-body-sm text-on-surface font-bold">{coins.toLocaleString()}</span>
            <span className="font-body-sm text-[11px] text-on-surface-variant font-semibold">Shards</span>
          </div>
          <span className="font-body-sm text-[11px] text-tertiary-fixed-dim">Drag lines of matching Lumens</span>
        </div>

        {/* 3 Tactical Booster Cards */}
        <div className="grid grid-cols-3 gap-space-xs">
          {/* Booster 1: Shuffle */}
          <button
            onClick={() => selectBooster('shuffle')}
            className={`flex flex-col items-center justify-center p-2 rounded-2xl bg-surface-container-high/80 border transition-all active:scale-95 ${
              activeBooster === 'shuffle' ? 'border-primary-container ring-2 ring-primary/40 shadow-[0_0_12px_rgba(0,240,255,0.5)]' : 'border-white/5 shadow-md'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-fixed shadow-inner mb-1">
              <span className="material-symbols-outlined text-[20px]">shuffle</span>
            </div>
            <span className="font-headline-sm text-[12px] text-on-surface font-bold">Shuffle</span>
            <div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-tertiary-fixed text-[10px] font-bold">
              <span>✦</span><span>100</span>
            </div>
          </button>

          {/* Booster 2: Nova Bomb */}
          <button
            onClick={() => selectBooster('bomb')}
            className={`flex flex-col items-center justify-center p-2 rounded-2xl bg-surface-container-high/80 border transition-all active:scale-95 ${
              activeBooster === 'bomb' ? 'border-secondary ring-2 ring-secondary/40 shadow-[0_0_12px_rgba(255,62,143,0.5)]' : 'border-white/5 shadow-md'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-inner mb-1">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>crisis_alert</span>
            </div>
            <span className="font-headline-sm text-[12px] text-secondary font-bold">Nova Bomb</span>
            <div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-tertiary-fixed text-[10px] font-bold">
              <span>✦</span><span>150</span>
            </div>
          </button>

          {/* Booster 3: Prism Burst */}
          <button
            onClick={() => selectBooster('burst')}
            className={`flex flex-col items-center justify-center p-2 rounded-2xl bg-surface-container-high/80 border transition-all active:scale-95 ${
              activeBooster === 'burst' ? 'border-tertiary ring-2 ring-tertiary/40 shadow-[0_0_12px_rgba(255,213,77,0.5)]' : 'border-white/5 shadow-md'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-surface-container-lowest flex items-center justify-center text-tertiary-container shadow-inner mb-1">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
            </div>
            <span className="font-headline-sm text-[12px] text-tertiary font-bold">Prism Burst</span>
            <div className="mt-1 bg-surface-container-lowest/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 text-tertiary-fixed text-[10px] font-bold">
              <span>✦</span><span>250</span>
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
}


// --- LEVEL VICTORY / RESULT OVERLAY ---
export function ResultScreenUI({
  type = 'complete',
  levelNumber = 1,
  score = 0,
  target = 5000,
  stars = 0,
  onNextLevel,
  onReplay,
  onMap,
}: any) {
  const isWon = type === 'complete';
  const isPaused = type === 'pause';

  return (
    <div className="relative w-full max-w-[400px] mx-4 bg-surface-container-low/95 rounded-3xl p-5 shadow-2xl border border-white/10 backdrop-blur-2xl flex flex-col items-center text-center select-none animate-in fade-in zoom-in duration-300">
      {/* Ambient Backing Visual */}
      <div className="absolute inset-0 bg-radial-gradient from-tertiary-container/20 via-transparent to-transparent rounded-3xl pointer-events-none" />

      {/* Header Pill & Glyphs */}
      <div className="relative z-10 flex items-center gap-2 mb-1">
        <div className="bg-surface-container-high px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md border border-white/5">
          <span className="material-symbols-outlined text-[15px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>hotel_class</span>
          <span className="font-label-badge text-[11px] text-tertiary tracking-widest uppercase font-extrabold">
            {isWon ? `LEVEL ${levelNumber} CLEARED` : isPaused ? 'GAME PAUSED' : 'LEVEL FAILED'}
          </span>
          <span className="material-symbols-outlined text-[15px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>hotel_class</span>
        </div>
      </div>

      {/* Glowing Headline */}
      <h2 className="relative z-10 font-display-hero-mobile text-[30px] text-tertiary font-black tracking-tight drop-shadow mt-1">
        {isWon ? 'LEVEL COMPLETE!' : isPaused ? 'TAKE A BREATHER' : 'THE LUMENS WENT SHY'}
      </h2>

      {/* Praise Badge */}
      <div className="relative z-10 mt-1 px-3 py-0.5 rounded-full bg-secondary-container shadow-md flex items-center gap-1">
        <span className="material-symbols-outlined text-[13px] text-on-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
        <span className="font-label-badge text-[10px] text-on-secondary-container uppercase tracking-wider font-extrabold">
          {isWon ? 'SPECTACULAR GLOW!' : isPaused ? 'PROGRESS PRESERVED' : 'EVERY GLOW COUNTS'}
        </span>
      </div>

      {/* 3-Star Mastery Podium */}
      <div className="relative z-10 w-full flex items-center justify-center gap-3 py-3 my-1">
        {/* Star 1 */}
        <div className="flex flex-col items-center transform -rotate-12 translate-y-1">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform ${stars >= 1 ? 'bg-gradient-to-b from-tertiary-fixed to-tertiary-container text-on-tertiary-fixed shadow-[0_0_15px_#ffd54d]' : 'bg-surface-container-highest text-outline/50'}`}>
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
          </div>
        </div>

        {/* Star 2: Center Enlarge */}
        <div className="flex flex-col items-center -translate-y-2">
          <div className={`w-18 h-18 rounded-full flex items-center justify-center shadow-2xl transition-transform ${stars >= 2 ? 'bg-gradient-to-b from-tertiary to-tertiary-container text-on-tertiary shadow-[0_0_20px_#ffe086] scale-105' : 'bg-surface-container-highest text-outline/50'}`}>
            <span className="material-symbols-outlined text-[42px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
          </div>
        </div>

        {/* Star 3 */}
        <div className="flex flex-col items-center transform rotate-12 translate-y-1">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform ${stars >= 3 ? 'bg-gradient-to-b from-tertiary-fixed to-tertiary-container text-on-tertiary-fixed shadow-[0_0_15px_#ffd54d]' : 'bg-surface-container-highest text-outline/50'}`}>
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
          </div>
        </div>
      </div>

      {/* Celebrating Mascots */}
      <div className="relative z-10 flex items-center justify-center gap-4 my-1">
        <div className="w-14 h-14 animate-bounce" style={{ animationDuration: '2.5s' }}>
          <img src={ASSET + 'aether_opened.png'} alt="Aether" className="w-full h-full object-contain drop-shadow-md" />
        </div>
        <div className="w-13 h-13 animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }}>
          <img src={ASSET + 'nova_opened.png'} alt="Nova" className="w-full h-full object-contain drop-shadow-md" />
        </div>
      </div>

      {/* Stats Plate */}
      <div className="relative z-10 w-full rounded-2xl bg-surface-container-lowest p-3 my-2 shadow-inner border border-white/5 flex items-center justify-between">
        <div className="flex flex-col text-left">
          <span className="font-label-badge text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Total Score</span>
          <span className="font-headline-lg-mobile text-[22px] text-primary-container font-black">
            {score.toLocaleString()} <span className="text-[12px] text-on-surface-variant font-normal">/ {target.toLocaleString()}</span>
          </span>
        </div>
        <div className="flex items-center gap-1 bg-surface-container-high px-2.5 py-1 rounded-xl">
          <span className="text-tertiary-fixed text-[14px]">✦</span>
          <span className="font-headline-sm text-[12px] text-tertiary-fixed font-bold">{isWon ? '+50' : '+10'} Shards</span>
        </div>
      </div>

      {/* Action Buttons Deck */}
      <div className="relative z-10 w-full flex flex-col gap-2 mt-2">
        {/* Primary Action Button */}
        <button
          onClick={onNextLevel}
          className="w-full h-13 rounded-2xl bg-gradient-to-r from-primary-container via-primary-fixed to-primary-container p-0.5 shadow-xl shadow-primary-container/30 active:scale-95 transition-transform"
        >
          <div className="w-full h-full bg-gradient-to-b from-primary-fixed to-primary-container rounded-[14px] flex items-center justify-center gap-2 text-on-primary-fixed font-headline-sm text-[16px] font-black uppercase tracking-wide">
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>
              {isWon ? 'arrow_forward' : isPaused ? 'play_arrow' : 'refresh'}
            </span>
            {isWon ? 'NEXT LEVEL' : isPaused ? 'RESUME GAME' : 'TRY AGAIN'}
          </div>
        </button>

        {/* Secondary Row: Replay & World Map */}
        <div className="flex items-center gap-2">
          {onReplay && (
            <button
              onClick={onReplay}
              className="flex-1 h-11 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-headline-sm text-[13px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform border border-white/5 font-bold"
            >
              <span className="material-symbols-outlined text-[17px]">replay</span>
              Replay
            </button>
          )}
          <button
            onClick={onMap}
            className="flex-1 h-11 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-on-surface font-headline-sm text-[13px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform border border-white/5 font-bold"
          >
            <span className="material-symbols-outlined text-[17px]">map</span>
            World Map
          </button>
        </div>
      </div>
    </div>
  );
}


// --- SETTINGS SCREEN ---
export function SettingsScreenUI({ progress, onChange, onBack }: any) {
  return (
    <div className="relative w-full min-h-screen bg-surface text-on-surface flex flex-col justify-between overflow-x-hidden select-none">
      <header className="sticky top-0 inset-x-0 z-40 bg-surface/90 backdrop-blur-md pt-safe border-b border-white/5">
        <div className="px-margin h-16 flex items-center gap-3 max-w-[440px] mx-auto">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface active:scale-90 transition-transform shadow"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <h1 className="font-headline-sm text-[18px] text-on-surface font-bold">Settings &amp; Options</h1>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-[440px] mx-auto px-margin py-6 flex flex-col gap-4 flex-grow">
        {/* Audio Card */}
        <div className="bg-surface-container-low/90 rounded-2xl p-4 shadow-lg border border-white/5 flex flex-col gap-3">
          <span className="font-label-badge text-[11px] uppercase tracking-wider text-primary-fixed font-extrabold">Audio Settings</span>
          
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary-container text-[20px]">music_note</span>
              <span className="font-body-md text-on-surface font-semibold">Background Music</span>
            </div>
            <button
              onClick={() => onChange({ ...progress, music: !progress.music })}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${progress.music ? 'bg-primary-container' : 'bg-surface-container-highest'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-on-primary-fixed transition-transform ${progress.music ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-tertiary text-[20px]">volume_up</span>
              <span className="font-body-md text-on-surface font-semibold">Sound Effects (SFX)</span>
            </div>
            <button
              onClick={() => onChange({ ...progress, sound: !progress.sound })}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${progress.sound ? 'bg-primary-container' : 'bg-surface-container-highest'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-on-primary-fixed transition-transform ${progress.sound ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>

        {/* Account / Progress Card */}
        <div className="bg-surface-container-low/90 rounded-2xl p-4 shadow-lg border border-white/5 flex flex-col gap-3">
          <span className="font-label-badge text-[11px] uppercase tracking-wider text-tertiary-fixed font-extrabold">Game Progress</span>
          <div className="flex items-center justify-between">
            <span className="font-body-md text-on-surface">Highest Level Unlocked</span>
            <span className="font-headline-sm text-primary font-bold">Level {progress.highestUnlocked}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-body-md text-on-surface">Celestial Shards</span>
            <span className="font-headline-sm text-tertiary font-bold">{progress.coins.toLocaleString()}</span>
          </div>
          <button
            onClick={() => {
              if (window.confirm('Reset all level progress and start fresh?')) {
                onChange({ highestUnlocked: 1, completed: {}, coins: 1000, sound: true, music: true });
              }
            }}
            className="mt-2 py-2 px-3 rounded-xl bg-error-container/40 text-error font-headline-sm text-[12px] font-bold border border-error/20 active:scale-95 transition-transform"
          >
            Reset Progress
          </button>
        </div>
      </main>

      <footer className="py-4 text-center">
        <button
          onClick={onBack}
          className="w-full max-w-[340px] mx-auto h-12 rounded-xl bg-surface-container-high text-on-surface font-headline-sm text-[14px] font-bold shadow active:scale-95 transition-transform"
        >
          Return to Game
        </button>
      </footer>
    </div>
  );
}
