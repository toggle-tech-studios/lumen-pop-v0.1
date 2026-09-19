<header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><button aria-label="Back" className="w-11 h-11 rounded-full flex items-center justify-center bg-surface-container-high/70 text-on-surface hover:bg-surface-bright transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back</span></button><img alt="Lumen Pop Game Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wfsp4DJMbvdw5lZBuPbdR7hhN-dzHgbV68EEZ7q3bvIH6eyT_0PPeD5YCYDnKbM7zn1rXjhDm_ZaDy3RDOwQG4SgwgBhyoWmxX9ZPpQ8bb29OglKyFWWxTbe_AEJ1zzpRPWmvQGzetstrqwhnVHeHTCDRCM4YvPpg3xBK3V9DYv8RJF3zVoTy628FGNOJE8PFk2IW4vyGmBrbhV7--dUsVO_GJWrWDpC9CEuXd3YJV"/><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">Result Overlays</h1></div><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface flex-grow"><div className="flex flex-col w-full relative px-margin pb-safe select-none overflow-hidden">
<!-- Particle & Confetti Canvas Overlay -->
<canvas className="absolute inset-0 w-full h-full pointer-events-none z-30" id="victory-confetti-canvas"></canvas>
<!-- Ambient Golden Ray Backing Visual -->
<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-tertiary-container/20 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-primary-container/15 blur-2xl rounded-full pointer-events-none -z-10"></div>
<!-- Decorative Celestial Streamer SVG Overlay -->
<svg className="absolute top-2 inset-x-0 w-full h-44 pointer-events-none -z-10 opacity-70" fill="none" viewBox="0 0 360 180">
<path d="M-20 40 Q90 120 180 30 T380 60" opacity="0.4" stroke="#ffd54d" strokeDasharray="4 6" strokeWidth="1.5" />
<path d="M-10 80 Q100 20 200 90 T390 40" opacity="0.3" stroke="#00f0ff" strokeDasharray="3 5" strokeWidth="1.5" />
<circle className="animate-ping" cx="45" cy="35" fill="#ffe086" r="3" style={{ animationDuration: '3s' }} />
<circle className="animate-ping" cx="310" cy="50" fill="#00f0ff" r="2.5" style={{ animationDuration: '2.2s' }} />
<circle className="animate-ping" cx="180" cy="110" fill="#ffd54d" r="3.5" style={{ animationDuration: '2.6s' }} />
</svg>
<!-- Crown Arched Header & Ribbons -->
<div className="relative flex flex-col items-center justify-center pt-space-xs mb-space-sm z-20">
<!-- Winged Stardust Glyphs -->
<div className="flex items-center justify-center gap-space-sm w-full">
<div className="flex items-center gap-1 text-primary-fixed opacity-80">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed animate-spin" style={{ animationDuration: '12s' }}>arrow_back_ios_new</span>
<div className="w-10 h-1 bg-gradient-to-r from-transparent to-tertiary-container rounded-full"></div>
</div>
<!-- Level Ribbon Pill -->
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
<!-- Glowing Embossed Headline -->
<div className="relative mt-space-xs text-center">
<div className="absolute inset-0 blur-lg bg-tertiary-container/30 scale-110 pointer-events-none"></div>
<h2 className="relative font-display-hero-mobile text-display-hero-mobile text-tertiary tracking-tight drop-shadow-md">
        LEVEL COMPLETE!
      </h2>
</div>
<!-- Praise Badge -->
<div className="mt-1 px-space-md py-0.5 rounded-full bg-secondary-container shadow-md flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-on-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
<span className="font-label-badge text-label-badge text-on-secondary-container uppercase tracking-wider">SPECTACULAR GLOW!</span>
<span className="material-symbols-outlined text-[14px] text-on-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
</div>
</div>
<!-- 3-Star Mastery Podium Card -->
<div className="relative w-full flex items-center justify-center gap-space-md py-space-sm z-20">
<!-- Star 1: Angled Left -->
<div className="flex flex-col items-center transform -rotate-12 translate-y-2">
<div className="relative w-16 h-16 rounded-full bg-surface-container-highest shadow-xl flex items-center justify-center group">
<div className="absolute inset-0 rounded-full bg-tertiary-container/30 blur-md animate-pulse"></div>
<div className="w-14 h-14 rounded-full bg-gradient-to-b from-tertiary-fixed to-tertiary-container flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-[36px] text-on-tertiary-fixed drop-shadow-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
</div>
<span className="font-label-badge text-[10px] text-tertiary-fixed mt-1 font-bold">25,000</span>
</div>
<!-- Star 2: Dominant Center Star -->
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
<!-- Star 3: Angled Right -->
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
<!-- Celebrating Mascot & Ambient Companion Section -->
<div className="relative w-full flex items-end justify-center -mb-3 z-20 pointer-events-none">
<div className="relative flex items-center justify-center gap-space-lg">
<!-- Aether Lumen Character -->
<div className="relative w-20 h-20 flex items-center justify-center animate-bounce" style={{ animationDuration: '2.4s' }}>
<img className="w-full h-full object-contain drop-shadow-lg" data-alt="Cute glowing cyan aether mascot creature shaped like a rounded droplet with big playful sparkling eyes wearing a sparkling gold party hat with celestial confetti floating around it in cosmic dark digital game art style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqPVbhLhJMKFCUnGvKX0TiOPOWaORgzpMoj51Q4DP623ukDnzUlm83CmA_S6j_lQkOL1gs4EJf6wlzKW0kwwuGpa9yohRVO07gMYisjL28uPMQETZ0SLX8m-_CZGci8nOBKSIIP-HfPoM51lkz68DIro0Ev2rQuyAik-fWeZ7mMWy1uJJ8Nj-EWkiIiqYNV1JAEn_Q5GMNU0wO1CEa4NwBDoiALGYV8TuFeyzSdHDl"/>
</div>
<!-- Nova Lumen Character -->
<div className="relative w-16 h-16 flex items-center justify-center animate-bounce" style={{ animationDuration: '2.1s', animationDelay: '0.3s' }}>
<img className="w-full h-full object-contain drop-shadow-lg" data-alt="Charming miniature magenta nova spirit creature with adorable smiling eyes celebrating with a tiny glowing party horn and mini star fireworks, game character skeuomorphic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHwJe8Bm-qAelGxBs6op2WABjRde6RNBE6enOidf-lXEZoTQmJNEx5GXG6tKlbk-vQUONmQxXPtmU0259oxY7Zj-VBquCG3k90REQJERdbDK0vrUK78AzO07KCcJNQBDz9Up3HGPC64PibmkcrFWOxqU6xywHAek-h1pUNh8nAsGxnv0lqE6eiVaCIkXfojLRIAmXl7qY9ciZ0EU5bahQYPeNBWKCgvnV6lIyGw2p5"/>
</div>
</div>
</div>
<!-- Central Glassmorphic Stats Plate -->
<div className="relative w-full rounded-lg bg-surface-container-low/90 backdrop-blur-xl shadow-2xl p-space-md flex flex-col gap-space-sm z-20">
<!-- Score Inset Pod -->
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
<!-- Score Glow Medallion -->
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shadow-lg shrink-0">
<span className="material-symbols-outlined text-[28px] text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
</div>
</div>
<!-- Match Performance Details -->
<div className="grid grid-cols-2 gap-space-xs">
<!-- Bonus Moves -->
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
<!-- Combo Chain -->
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
<!-- Rewards Ingot Row -->
<div className="rounded-DEFAULT bg-surface-container-high/60 p-space-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-badge text-[11px] text-on-surface-variant uppercase tracking-wider">LEVEL SPOILS EARNED</span>
<span className="font-label-badge text-[11px] text-primary-fixed-dim uppercase tracking-wider">CLAIMED</span>
</div>
<div className="flex items-center gap-space-xs">
<!-- Celestial Shards -->
<div className="flex-1 rounded-DEFAULT bg-surface-container-lowest py-1.5 px-space-sm flex items-center justify-between shadow-inner">
<div className="flex items-center gap-1.5 min-w-0">
<div className="w-6 h-6 rounded-full bg-tertiary-container/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface truncate">Celestial Shards</span>
</div>
<span className="font-headline-sm text-headline-sm text-tertiary-fixed shrink-0 font-extrabold">+120</span>
</div>
<!-- Prismatic Orb Core -->
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
<!-- Interactive Action Buttons Footer Deck -->
<div className="relative w-full flex flex-col gap-space-sm mt-space-md z-20">
<!-- Primary Big Squishy Chunky Action Button: NEXT LEVEL -->
<button className="group relative w-full h-14 rounded-DEFAULT bg-primary-container flex items-center justify-center shadow-xl active:translate-y-1 transition-all" id="btn-next-level">
<!-- 3D Base Thickness Shadow -->
<div className="absolute inset-x-0 bottom-0 h-2 bg-on-primary-container rounded-b-DEFAULT pointer-events-none"></div>
<!-- Top Specular Glass Bevel -->
<div className="absolute inset-x-2 top-1 h-3 bg-white/40 rounded-t-DEFAULT pointer-events-none"></div>
<!-- Button Label Content -->
<div className="relative flex items-center justify-center gap-2 text-on-primary font-headline-md text-headline-md font-black tracking-wide">
<span>NEXT LEVEL</span>
<span className="font-label-badge text-label-badge bg-surface/30 px-2 py-0.5 rounded-full text-on-primary">LVL 25</span>
<span className="material-symbols-outlined text-[24px] transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</button>
<!-- Secondary Actions Row: Replay & World Map -->
<div className="flex items-center justify-between gap-space-md">
<!-- Replay Button -->
<button className="flex-1 h-12 rounded-DEFAULT bg-surface-container-high hover:bg-surface-bright flex items-center justify-center gap-2 shadow-lg active:translate-y-0.5 transition-all" id="btn-replay-level">
<span className="material-symbols-outlined text-[20px] text-on-surface">replay</span>
<span className="font-body-lg text-body-lg text-on-surface font-bold">Replay</span>
</button>
<!-- World Map Navigation Button -->
<button className="flex-1 h-12 rounded-DEFAULT bg-surface-container-high hover:bg-surface-bright flex items-center justify-center gap-2 shadow-lg active:translate-y-0.5 transition-all" id="btn-world-map">
<span className="material-symbols-outlined text-[20px] text-primary">map</span>
<span className="font-body-lg text-body-lg text-on-surface font-bold">World Map</span>
</button>
<!-- Share Achievement Button -->
<button aria-label="Share Score" className="w-12 h-12 rounded-DEFAULT bg-surface-container-high hover:bg-surface-bright flex items-center justify-center shadow-lg shrink-0 active:translate-y-0.5 transition-all">
<span className="material-symbols-outlined text-[20px] text-tertiary">share</span>
</button>
</div>
</div>
</div>
<script>
  (function() {
    const canvas = document.getElementById('victory-confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = ['#00f0ff', '#ffd54d', '#ffb1c6', '#7df4ff', '#ffe086', '#cc016a'];
    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.4),
        radius: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleInc: Math.random() * 0.08 + 0.02,
        tiltAngle: 0,
        speedY: Math.random() * 1.5 + 0.8,
        speedX: Math.random() * 1.2 - 0.6,
        isSparkle: Math.random() > 0.6
      });
    }

    let animationFrameId;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += p.speedY;
        p.x += p.speedX;
        p.tilt = Math.sin(p.tiltAngle) * 8;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();

        if (p.isSparkle) {
          ctx.arc(p.x, p.y, p.radius * 0.75, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.ellipse(p.x, p.y, p.radius, p.radius * 0.4, p.tilt * Math.PI / 180, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }
    render();

    // Tactile button micro-reactions
    const nextBtn = document.getElementById('btn-next-level');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextBtn.classList.add('scale-95');
        setTimeout(() => nextBtn.classList.remove('scale-95'), 120);
      });
    }
  })();
</script></main>