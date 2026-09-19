const fs = require('fs');

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary": "#650031", "on-surface-variant": "#b9cacb", "surface-bright": "#3a364f",
        "inverse-on-surface": "#312d46", "secondary-container": "#cc016a", "on-tertiary-fixed": "#231a00",
        "on-error": "#690005", "surface": "#131027", "on-tertiary-fixed-variant": "#574500",
        "on-primary-fixed": "#002022", "on-tertiary-container": "#735c00", "on-error-container": "#ffdad6",
        "primary-container": "#00f0ff", "on-secondary-fixed": "#3f001c", "surface-tint": "#00dbe9",
        "on-surface": "#e5deff", "surface-container-lowest": "#0e0b22", "on-background": "#e5deff",
        "surface-container-highest": "#35324b", "on-tertiary": "#3c2f00", "on-secondary-fixed-variant": "#8e0048",
        "surface-variant": "#35324b", "tertiary-container": "#ffd54d", "tertiary-fixed": "#ffe086",
        "tertiary-fixed-dim": "#eec21b", "inverse-primary": "#006970", "on-primary": "#00363a",
        "surface-container-high": "#2a273f", "error-container": "#93000a", "primary": "#dbfcff",
        "secondary-fixed": "#ffd9e1", "tertiary": "#fff5e0", "inverse-surface": "#e5deff",
        "primary-fixed": "#7df4ff", "secondary-fixed-dim": "#ffb1c6", "secondary": "#ffb1c6",
        "background": "#131027", "on-secondary-container": "#ffe1e7", "on-primary-container": "#006970",
        "error": "#ffb4ab", "primary-fixed-dim": "#00dbe9", "surface-dim": "#131027", "outline": "#849495",
        "on-primary-fixed-variant": "#004f54", "surface-container-low": "#1c1830",
        "surface-container": "#201d34", "outline-variant": "#3b494b"
      },
      spacing: {
        "gutter": "0.75rem", "margin": "1rem", "space-lg": "1.25rem", "space-xs": "0.25rem",
        "space-xl": "2rem", "space-md": "0.75rem", "space-sm": "0.5rem"
      },
      fontFamily: {
        "label-badge": ["Outfit"], "headline-sm": ["Outfit"], "display-hero-mobile": ["Outfit"],
        "body-lg": ["Nunito Sans"], "body-md": ["Nunito Sans"], "headline-lg": ["Outfit"],
        "display-hero": ["Outfit"], "headline-lg-mobile": ["Outfit"], "label-counter": ["Outfit"],
        "headline-md": ["Outfit"], "body-sm": ["Nunito Sans"]
      },
    }
  }
};

fs.writeFileSync('tailwind.config.js', '/** @type {import("tailwindcss").Config} */\nexport default ' + JSON.stringify(config, null, 2) + ';\n');
