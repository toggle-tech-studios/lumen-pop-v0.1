<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
  <defs />
    <linearGradient id="lumenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00F0FF" />
      <stop offset="45%" stopColor="#FF3E8F" />
      <stop offset="100%" stopColor="#FFD12F" />
    </linearGradient>
    <linearGradient id="popGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFF275" />
      <stop offset="50%" stopColor="#FF8811" />
      <stop offset="100%" stopColor="#FF3366" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="shadow">
      <feDropShadow dx="0" dy="8" stdDeviation="4" flood-color="#05021a" flood-opacity="0.8"/>
    </filter>
  </defs>
  <!-- Background Sparkles -->
  <g opacity="0.8">
    <polygon points="65,35 68,45 78,48 68,51 65,61 62,51 52,48 62,45" fill="#00F0FF" filter="url(#glow)"/>
    <polygon points="435,40 438,48 446,50 438,52 435,60 432,52 424,50 432,48" fill="#FFD12F" filter="url(#glow)"/>
    <circle cx="250" cy="22" r="3" fill="#FFF" />
    <circle cx="120" cy="165" r="2.5" fill="#00F0FF" />
    <circle cx="390" cy="160" r="3.5" fill="#FF3E8F" />
  </g>
  
  <!-- Main Title Group -->
  <g filter="url(#shadow)" text-anchor="middle">
    <!-- LUMEN -->
    <text x="250" y="98" font-family="'Fredoka', 'Outfit', 'Chango', sans-serif" font-weight="900" font-size="78" fill="#0E0728" stroke="#0E0728" strokeWidth="14" strokeLinejoin="round" letter-spacing="4">LUMEN</text>
    <text x="250" y="98" font-family="'Fredoka', 'Outfit', 'Chango', sans-serif" font-weight="900" font-size="78" fill="#582496" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" letter-spacing="4">LUMEN</text>
    <text x="250" y="98" font-family="'Fredoka', 'Outfit', 'Chango', sans-serif" font-weight="900" font-size="78" fill="url(#lumenGrad)" letter-spacing="4" filter="url(#glow)">LUMEN</text>
    
    <!-- POP Badge -->
    <g transform="translate(355, 68) rotate(12)">
      <rect x="-65" y="-28" width="130" height="56" rx="28" fill="#0E0728" stroke="#FFE600" strokeWidth="5" filter="url(#shadow)"/>
      <rect x="-60" y="-23" width="120" height="46" rx="23" fill="url(#popGrad)"/>
      <text x="0" y="11" font-family="'Fredoka', 'Outfit', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" stroke="#660A1E" strokeWidth="3" text-anchor="middle" letter-spacing="2">POP!</text>
    </g>

    <!-- Tagline: Link. Burst. Glow. -->
    <g transform="translate(250, 142)">
      <rect x="-140" y="-14" width="280" height="28" rx="14" fill="#130C36" stroke="#00F0FF" strokeWidth="1.5" opacity="0.9"/>
      <text x="0" y="5" font-family="'Outfit', sans-serif" font-weight="800" font-size="13" fill="#A5F3FC" letter-spacing="5" text-anchor="middle">LINK • BURST • GLOW</text>
    </g>
  </g>
</svg>