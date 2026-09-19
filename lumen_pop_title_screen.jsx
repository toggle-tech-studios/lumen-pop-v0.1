<header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl pt-safe"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm"><img alt="Lumen Pop Game Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wfsp4DJMbvdw5lZBuPbdR7hhN-dzHgbV68EEZ7q3bvIH6eyT_0PPeD5YCYDnKbM7zn1rXjhDm_ZaDy3RDOwQG4SgwgBhyoWmxX9ZPpQ8bb29OglKyFWWxTbe_AEJ1zzpRPWmvQGzetstrqwhnVHeHTCDRCM4YvPpg3xBK3V9DYv8RJF3zVoTy628FGNOJE8PFk2IW4vyGmBrbhV7--dUsVO_GJWrWDpC9CEuXd3YJV"/><div className="flex flex-col"><span className="font-label-badge text-label-badge text-primary-fixed uppercase tracking-wider">Lumen Pop</span><h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Game Home</h1></div></div><div className="flex items-center gap-space-sm"><div className="flex items-center bg-surface-container-high/90 rounded-full px-space-sm py-1 shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><span className="material-symbols-outlined text-secondary text-[18px] mr-1">favorite</span><span className="font-label-counter text-body-sm text-secondary-fixed">5</span></div><div className="flex items-center bg-surface-container-high/90 rounded-full px-space-sm py-1 shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><span className="material-symbols-outlined text-tertiary-container text-[18px] mr-1">diamond</span><span className="font-label-counter text-body-sm text-tertiary-fixed">850</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 pb-24 bg-surface flex-grow"><div className="flex flex-col w-full relative select-none overflow-hidden pb-12">
<!-- Dynamic Ambient Stardust Canvas -->
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-primary-container/20 rounded-full blur-[90px]"></div>
<div className="absolute top-[28%] -left-16 w-56 h-56 bg-secondary-container/25 rounded-full blur-[80px]"></div>
<div className="absolute top-[38%] -right-16 w-64 h-64 bg-tertiary-container/20 rounded-full blur-[85px]"></div>
<!-- Interactive Sparkles Container -->
<div className="absolute inset-0" id="ambient-particles"></div>
</div>
<!-- In-Screen Mini Status Pill Row -->
<div className="relative z-10 px-margin pt-space-xs flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<!-- Lives Pill -->
<div className="flex items-center bg-surface-container-high/85 backdrop-blur-md rounded-full px-space-sm py-1 shadow-md shadow-surface-container-lowest/80">
<span className="material-symbols-outlined text-secondary text-[20px] mr-1 animate-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
<span className="font-label-counter text-body-sm text-secondary-fixed">5/5</span>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-1 font-bold">MAX</span>
</div>
<!-- Shards Pill -->
<div className="flex items-center bg-surface-container-high/85 backdrop-blur-md rounded-full px-space-sm py-1 shadow-md shadow-surface-container-lowest/80">
<span className="material-symbols-outlined text-tertiary-fixed text-[20px] mr-1" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
<span className="font-label-counter text-body-sm text-tertiary-fixed">1,240</span>
</div>
</div>
<!-- Quick Utilities -->
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
<!-- SECTION 1: HERO LOGO & FUSION ARENA -->
<div className="relative z-10 flex flex-col items-center justify-center px-margin mt-2">
<!-- Ethereal Title Glow Behind Logo -->
<div className="relative flex flex-col items-center w-full max-w-[340px]">
<div className="absolute inset-0 bg-gradient-to-r from-primary-fixed/20 via-secondary/25 to-tertiary-fixed/20 rounded-full blur-2xl transform scale-125"></div>
<img alt="Lumen Pop Game Logo" className="relative z-10 w-full max-h-24 object-contain drop-shadow-[0_8px_20px_rgba(0,240,255,0.45)] transform hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida/AEtjO1Wfsp4DJMbvdw5lZBuPbdR7hhN-dzHgbV68EEZ7q3bvIH6eyT_0PPeD5YCYDnKbM7zn1rXjhDm_ZaDy3RDOwQG4SgwgBhyoWmxX9ZPpQ8bb29OglKyFWWxTbe_AEJ1zzpRPWmvQGzetstrqwhnVHeHTCDRCM4YvPpg3xBK3V9DYv8RJF3zVoTy628FGNOJE8PFk2IW4vyGmBrbhV7--dUsVO_GJWrWDpC9CEuXd3YJV"/>
<div className="inline-flex items-center gap-1 bg-surface-container-highest/80 backdrop-blur-md px-3 py-0.5 rounded-full mt-1 shadow-inner shadow-primary-container/20">
<span className="material-symbols-outlined text-primary-fixed text-[14px]">auto_awesome</span>
<span className="font-label-badge text-label-badge text-primary-fixed tracking-widest uppercase">Celestial Match &amp; Pop</span>
</div>
</div>
<!-- LIVING MASCOTS & FUSION ORB STAGE -->
<div className="relative w-full max-w-[340px] h-64 mt-3 flex items-center justify-center">
<!-- Central Swirling Fusion Orb -->
<div className="relative flex items-center justify-center w-36 h-36">
<!-- Outermost Prismatic Pulse Ring -->
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container via-secondary-container to-tertiary-container opacity-40 blur-xl animate-pulse"></div>
<!-- Orb Glass Body with Refraction Layers -->
<div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary-fixed via-secondary to-tertiary-container p-1 shadow-[0_0_35px_rgba(0,240,255,0.6)] flex items-center justify-center overflow-hidden">
<div className="w-full h-full rounded-full bg-surface-container-lowest/90 backdrop-blur-xl relative flex items-center justify-center">
<!-- Swirling Nebula Rings -->
<div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-primary-container/40 via-secondary/40 to-tertiary-container/40 animate-spin" style={{ animationDuration: '9s' }}></div>
<div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-primary/30 to-secondary-container/40 blur-sm animate-pulse"></div>
<!-- Glass Specular Highlight -->
<div className="absolute top-1.5 left-3 w-8 h-4 rounded-full bg-primary/60 blur-[1.5px] transform -rotate-45 pointer-events-none"></div>
<!-- Center Core Spark -->
<span className="material-symbols-outlined text-primary-fixed text-[36px] drop-shadow-[0_0_12px_#fff]" style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
</div>
</div>
<!-- Radiating Energy Sparks Orbiting -->
<div className="absolute w-full h-full pointer-events-none">
<span className="material-symbols-outlined text-primary-fixed text-[14px] absolute top-1 right-3 animate-ping">star</span>
<span className="material-symbols-outlined text-secondary-fixed text-[12px] absolute bottom-2 left-4 animate-ping" style={{ animationDelay: '700ms' }}>arrow_back_ios_new</span>
</div>
</div>
<!-- MASCOT 1: AETHER (Cyan Diamond) - Top Left -->
<div className="absolute top-2 left-3 flex flex-col items-center transform -rotate-6 hover:scale-110 transition-transform cursor-pointer group animate-bounce" style={{ animationDuration: '3.2s' }}>
<div className="relative w-14 h-14 bg-gradient-to-br from-primary via-primary-fixed to-on-primary-container rounded-2xl rotate-45 flex items-center justify-center shadow-[0_6px_16px_rgba(0,240,255,0.45)] border-t border-primary/80">
<div className="-rotate-45 flex flex-col items-center justify-center">
<div className="flex gap-1 mb-0.5">
<span className="w-1.5 h-2 bg-on-primary-fixed rounded-full shadow-[0_0_4px_#fff]"></span>
<span className="w-1.5 h-2 bg-on-primary-fixed rounded-full shadow-[0_0_4px_#fff]"></span>
</div>
<div className="w-2.5 h-1 bg-on-primary-fixed rounded-full"></div>
</div>
<!-- Sparkle overlay -->
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full blur-[1px]"></div>
</div>
<span className="font-label-badge text-[10px] text-primary-fixed mt-2 tracking-wider drop-shadow-sm font-extrabold uppercase">Aether</span>
</div>
<!-- MASCOT 2: NOVA (Magenta Heart) - Top Right -->
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
<!-- MASCOT 3: SOLAR (Golden Star) - Bottom Left -->
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
<!-- MASCOT 4: VERDANT (Glossy Droplet) - Bottom Right -->
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
<!-- SECTION 2: PRIMARY TACTILE CTA ZONE -->
<div className="relative z-10 px-margin mt-1 flex flex-col items-center">
<!-- Massive Tactile Play Button -->
<div className="w-full max-w-[340px] relative flex flex-col items-center">
<!-- Glow Underlay -->
<div className="absolute -inset-1 bg-gradient-to-r from-primary-container via-tertiary-container to-secondary-container rounded-full blur-lg opacity-60 animate-pulse"></div>
<!-- Tactile Spring Base -->
<button className="relative w-full h-16 rounded-full bg-gradient-to-b from-primary via-primary-fixed-dim to-on-primary-container p-[3px] shadow-[0_8px_0_#004f54,0_16px_28px_rgba(0,240,255,0.4)] active:translate-y-1.5 active:shadow-[0_2px_0_#004f54,0_8px_14px_rgba(0,240,255,0.3)] transition-all flex items-center justify-between px-5 group" id="btn-main-play">
<!-- Top Glass Reflective Bevel -->
<div className="absolute inset-x-6 top-1 h-3 rounded-full bg-gradient-to-b from-primary/80 to-transparent pointer-events-none"></div>
<!-- Left Play Emblem -->
<div className="w-11 h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center shadow-inner text-primary-fixed">
<span className="material-symbols-outlined text-[26px] ml-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
</div>
<!-- Centered Main Title -->
<div className="flex flex-col items-center justify-center flex-1">
<span className="font-display-hero-mobile text-headline-lg-mobile text-on-primary-fixed uppercase tracking-wider drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">START JOURNEY</span>
</div>
<!-- Right Sparkle Accent -->
<div className="w-11 h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center shadow-inner text-tertiary-fixed">
<span className="material-symbols-outlined text-[20px] group-hover:rotate-45 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
</div>
</button>
<!-- Stage Continue Sub-bar -->
<div className="w-[88%] -mt-1 bg-surface-container-low/95 backdrop-blur-md rounded-b-2xl pt-2.5 pb-2 px-3 flex items-center justify-between shadow-lg shadow-surface-container-lowest/90">
<div className="flex items-center gap-1.5 truncate">
<span className="material-symbols-outlined text-primary-fixed text-[16px]">explore</span>
<span className="font-body-sm text-body-sm text-on-surface truncate">Continue <strong className="text-primary-fixed">Level 24</strong> • Aetherial Glade</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">chevron_right</span>
</div>
</div>
</div>
<!-- SECTION 3: DAILY REWARD BANNER -->
<div className="relative z-10 px-margin mt-4 flex justify-center">
<div className="w-full max-w-[340px] bg-gradient-to-r from-surface-container to-surface-container-high rounded-lg p-3 shadow-md flex items-center justify-between relative overflow-hidden">
<!-- Ambient Glow Edge -->
<div className="absolute -right-6 -top-6 w-20 h-20 bg-tertiary-container/30 rounded-full blur-xl pointer-events-none"></div>
<!-- Left Gift Icon & Text -->
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
<!-- Claim Button -->
<button className="shrink-0 ml-2 bg-gradient-to-b from-tertiary-fixed to-tertiary-container text-on-tertiary-fixed font-headline-sm text-body-sm px-3.5 py-1.5 rounded-full shadow-[0_3px_0_#735c00] active:translate-y-0.5 active:shadow-[0_1px_0_#735c00] transition-all" id="btn-claim-reward">
        CLAIM
      </button>
</div>
</div>
<!-- SECTION 4: SECONDARY GAME MODES -->
<div className="relative z-10 px-margin mt-3 flex justify-center">
<div className="w-full max-w-[340px] grid grid-cols-2 gap-2.5">
<!-- Mode Card 1: Endless Glow -->
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
<!-- Mode Card 2: Lumen Sanctuary -->
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
<!-- METADATA FOOTER -->
<div className="relative z-10 mt-5 flex flex-col items-center justify-center gap-1 text-center">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant tracking-wider font-semibold">v1.2.0 • Starbound Odyssey</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant/70">Touch anywhere to spawn stardust</span>
</div>
</div>
<script>
  (function() {
    // Generate subtle float sparkles in the background
    const container = document.getElementById('ambient-particles');
    if (container) {
      const colors = ['#00f0ff', '#ffb1c6', '#ffd54d', '#ffffff'];
      for (let i = 0; i < 16; i++) {
        const p = document.createElement('div');
        const size = Math.floor(Math.random() * 4) + 2;
        p.className = 'absolute rounded-full pointer-events-none opacity-60';
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.boxShadow = `0 0 8px ${p.style.backgroundColor}`;
        p.style.animation = `pulse ${2 + Math.random() * 3}s infinite alternate ease-in-out`;
        container.appendChild(p);
      }
    }

    // Touch feedback sparkle generator
    document.addEventListener('pointerdown', function(e) {
      const spark = document.createElement('div');
      spark.className = 'fixed pointer-events-none z-50 rounded-full';
      spark.style.left = (e.clientX - 6) + 'px';
      spark.style.top = (e.clientY - 6) + 'px';
      spark.style.width = '12px';
      spark.style.height = '12px';
      spark.style.background = '#00f0ff';
      spark.style.boxShadow = '0 0 16px #00f0ff, 0 0 24px #ff3e8f';
      spark.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
      document.body.appendChild(spark);

      requestAnimationFrame(() => {
        spark.style.transform = 'scale(2.4)';
        spark.style.opacity = '0';
      });

      setTimeout(() => {
        spark.remove();
      }, 420);
    });

    // Reward Claim micro-interaction
    const claimBtn = document.getElementById('btn-claim-reward');
    if (claimBtn) {
      claimBtn.addEventListener('click', function() {
        this.innerHTML = 'CLAIMED!';
        this.classList.remove('from-tertiary-fixed', 'to-tertiary-container');
        this.classList.add('from-primary-fixed', 'to-primary-container', 'opacity-80');
      });
    }

    // Audio Toggle interaction
    const audioBtn = document.getElementById('btn-audio');
    if (audioBtn) {
      let isMuted = false;
      audioBtn.addEventListener('click', function() {
        isMuted = !isMuted;
        const icon = this.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = isMuted ? 'volume_off' : 'volume_up';
        }
      });
    }
  })();
</script></main><nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.4)]" data-active-classes="text-primary-fixed bg-surface-bright/50"><div className="flex justify-around items-center h-20 px-margin"><a aria-current="page" className="flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all text-primary-fixed bg-surface-bright/50" data-path="game-home" href="#"><span className="material-symbols-outlined text-[24px]">home</span><span className="font-body-sm text-body-sm mt-0.5">Home</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="adventure-map" href="#"><span className="material-symbols-outlined text-[24px]">map</span><span className="font-body-sm text-body-sm mt-0.5">Map</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="celestial-vault" href="#"><span className="material-symbols-outlined text-[24px]">storefront</span><span className="font-body-sm text-body-sm mt-0.5">Vault</span></a><a className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-on-surface-variant transition-all hover:text-on-surface" data-path="settings-modal" href="#"><span className="material-symbols-outlined text-[24px]">settings</span><span className="font-body-sm text-body-sm mt-0.5">Settings</span></a></div></nav>