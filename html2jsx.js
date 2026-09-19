const fs = require('fs');

function convertToJSX(html) {
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/viewbox=/gi, 'viewBox=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stop-color=/g, 'stopColor=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/onclick="[^"]*"/gi, 'onClick={() => {}}')
    .replace(/style="([^"]*)"/g, (match, p1) => {
      if (!p1.trim()) return `style={{}}`;
      const rules = p1.split(';').filter(Boolean).map(rule => {
        const [key, ...valParts] = rule.split(':');
        if(!key || valParts.length === 0) return '';
        const val = valParts.join(':');
        const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelKey}: '${val.trim().replace(/'/g, '"')}'`;
      });
      return `style={{ ${rules.join(', ')} }}`;
    });
  
  // Handle void tags properly (self-close and remove closing tag)
  const voidTags = ['img', 'br', 'hr', 'input', 'meta', 'link', 'path', 'circle', 'polygon', 'rect', 'defs', 'stop', 'use'];
  for (const tag of voidTags) {
    const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>(\\s*<\\/${tag}>)?`, 'gi');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  }
  
  // Some SVG specific attributes that need camelCase
  jsx = jsx.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
  jsx = jsx.replace(/xlink:href=/g, 'xlinkHref=');
  jsx = jsx.replace(/clip-path=/g, 'clipPath=');
  jsx = jsx.replace(/radialgradient/gi, 'radialGradient');

  return jsx;
}

const files = [
  'lumen_pop_game_logo',
  'level_victory_level_24_complete',
  'adventure_map_nebula_trail',
  'lumen_pop_title_screen',
  'gameplay_arena_level_24'
];

for (const name of files) {
  const path = `/home/5364391915_0/lumen_pop_v0.5/stitch_ref/stitch_lumen_pop_mobile_game_system/${name}/code.html`;
  if (fs.existsSync(path)) {
    const content = fs.readFileSync(path, 'utf8');
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let innerHtml = bodyMatch ? bodyMatch[1] : content;
    const jsx = convertToJSX(innerHtml);
    fs.writeFileSync(`${name}.jsx`, jsx);
    console.log(`Converted ${name}`);
  }
}
