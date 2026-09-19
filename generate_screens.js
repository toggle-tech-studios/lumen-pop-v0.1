const fs = require('fs');

const titleHtml = fs.readFileSync('lumen_pop_title_screen.jsx', 'utf8');
const mapHtml = fs.readFileSync('adventure_map_nebula_trail.jsx', 'utf8');
const gameHtml = fs.readFileSync('gameplay_arena_level_24.jsx', 'utf8');
const resultHtml = fs.readFileSync('level_victory_level_24_complete.jsx', 'utf8');

const fileContent = `import { useState } from 'react';
import { ASSET } from './App'; // we will export ASSET from App.tsx

export function StartScreenUI({ onStart, onSettings }) {
  return (
    <>
      ${titleHtml}
    </>
  );
}

export function MapScreenUI({ onPlay, onSettings, latest, coins }) {
  return (
    <>
      ${mapHtml}
    </>
  );
}

export function GameScreenUI({
  levelNumber, config, score, targetScore, stars, moves, coins,
  activeBooster, dragging, selected, effect, popping, freshTiles,
  boardElements, activeType,
  onBack, onSettings, onPause, selectBooster,
  boardRef, onBoardPointerMove
}) {
  return (
    <>
      ${gameHtml}
    </>
  );
}

export function ResultScreenUI({ score, target, stars, onNextLevel, onReplay, onMap }) {
  return (
    <>
      ${resultHtml}
    </>
  );
}
`;

fs.writeFileSync('src/screens.tsx', fileContent);
