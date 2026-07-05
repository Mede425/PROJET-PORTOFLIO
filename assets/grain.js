/* Grain animé global — injecté sur toutes les pages.
   Pour retirer le grain d'une page : supprimer la balise <script src=".../grain.js"> de cette page.
   Pour retirer partout : supprimer les <script> ou vider ce fichier. */
(function injectGrain() {
    if (document.querySelector('.grain-overlay-shared')) return;

    var style = document.createElement('style');
    style.textContent = [
        '.grain-overlay-shared {',
        '  position: fixed;',
        '  inset: -50%;',
        '  width: 200%;',
        '  height: 200%;',
        '  pointer-events: none;',
        '  z-index: 10000;',
        '  opacity: 0.35;',
        '  background-image: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/><feColorMatrix values=\'0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0\'/></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/></svg>");',
        '  background-size: 200px 200px;',
        '  animation: grainShiftShared 8s steps(6) infinite;',
        '  will-change: transform;',
        '}',
        '@keyframes grainShiftShared {',
        '  0%   { transform: translate(0%, 0%); }',
        '  16%  { transform: translate(-1.5%, 1%); }',
        '  33%  { transform: translate(1%, -1.5%); }',
        '  50%  { transform: translate(-1%, 2%); }',
        '  66%  { transform: translate(1.5%, -0.5%); }',
        '  83%  { transform: translate(-0.5%, 1.5%); }',
        '  100% { transform: translate(0%, 0%); }',
        '}',
        '@media (prefers-reduced-motion: reduce) {',
        '  .grain-overlay-shared { animation: none; }',
        '}'
    ].join('\n');
    document.head.appendChild(style);

    var div = document.createElement('div');
    div.className = 'grain-overlay-shared';
    div.setAttribute('aria-hidden', 'true');
    document.body.appendChild(div);
})();
