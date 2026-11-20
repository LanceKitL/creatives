const JOURNAL_ENTRIES = [
  {
    id: 'CH. 01',
    title: 'Palm Between Giants',
    sub: 'Vertis North, Quezon City',
    location: 'Vertis North',
    date: 'NOV 2025',
    image: './pictures/1.jpg',
    excerpt: 'Two glass towers lean into a wedge of sky, a lone palm holding the seam between them.',
    fullStory: 'I was early, waiting for a friend, and the wind kept pushing warm air through the gap between the buildings. Looking straight up turned the towers into walls and the sky into a narrow blue river. The palm looked almost stubborn, thriving in all that shade and glass.'
  },
  {
    id: 'CH. 02',
    title: 'Paper Petals Under Bamboo',
    sub: 'One of a kind',
    location: 'Manila Zoo',
    date: 'JAN 2026',
    image: './pictures/2.jpg',
    excerpt: 'Bamboo ribs arch overhead while pink paper blossoms drift through a greenhouse that feels half garden, half cathedral.',
    fullStory: 'It was my first time at Manila Zoo, and the dome was even better than the photos. Bamboo poles crisscrossed into a woven ceiling while vines climbed every column. Paper flowers hung in pale pink chains, catching the light like something out of a dream.'
  },
  {
    id: 'CH. 03',
    title: 'Amber Silhouette',
    sub: 'MOA, Philippines',
    location: 'MOA, Philippines',
    date: 'JAN 2026',
    image: './pictures/3.jpg',
    excerpt: 'A silhouette at the water\'s edge, watching the sun melt into a horizon of gold.',
    fullStory: 'It was my 21st birthday, and the whole day had that soft, unrepeatable glow. She sat still while the sun dropped lower, and the reflection stretched toward us like a second sunset. I took the photo mostly for the light, but I kept it for her.'
  },
  {
    id: 'CH. 04',
    title: 'The Quiet Canopy',
    sub: 'UP Diliman',
    location: 'UP Diliman',
    date: 'FEB 2026',
    image: './pictures/4.jpg',
    excerpt: 'Old trees spread their roots across the lawn while small figures drift between the trunks.',
    fullStory: 'The park was all shade and slow movement: families strolling, kids chasing each other, a dog asleep in the grass. The trees looked older than the city around them, their roots gripping the ground like fingers. Underneath them, everyone moved a little slower.'
  },
  {
    id: 'CH. 05',
    title: 'Grey Skies, Glass Towers',
    sub: 'Trinoma',
    location: 'Trinoma',
    date: 'MAR 2026',
    image: './pictures/5.jpg',
    excerpt: 'Storm clouds gather over a glass tower while a crane waits at the edge of the skyline.',
    fullStory: 'The sky was heavy and grey, the kind that makes every building look freshly washed. The tower stood in the middle of it, all pale glass, while a crane rose behind like a question mark. The plaza was empty, and the whole place felt like it was holding its breath.'
  },
  {
    id: 'CH. 06',
    title: 'White Spire, Still Water',
    sub: 'Alabang',
    location: 'Alabang',
    date: 'AUGUST 2026',
    image: './pictures/6.jpg',
    excerpt: 'A white spire rises beyond the trees, doubled in the still water below.',
    fullStory: 'Seen from under the pergola, the building looked less like architecture and more like something grown. The pond held its reflection perfectly, down to the clouds caught in the glass. I stood there long enough for the water to go completely still.'
  },
  {
    id: 'CH. 07',
    title: 'Duel in Aisle Nine',
    sub: 'Xentro Mall',
    location: 'Xentro Mall',
    date: 'SEPT 2026',
    image: './pictures/7.jpg',
    excerpt: 'A supermarket mascot and a kid with a toy sword, locked in the most serious duel of the afternoon.',
    fullStory: 'My little brother went to Frappucino Assasino (mascot) and took his sword and fought him.'
  },
  {
    id: 'CH. 08',
    title: 'Portrait in Cobalt',
    sub: 'Shangrila Mall',
    location: 'Shangrila Mall',
    date: 'OCT 2026',
    image: './pictures/8.jpg',
    excerpt: 'A blue wall, a white painting, and a quiet smile in the middle of the afternoon.',
    fullStory: 'The painting was all texture, thick white strokes that caught the light like frosting. She sat beneath it in a black jacket, glasses catching the reflection of the room. The blue wall made everything else feel softer.'
  },
  {
    id: 'CH. 09',
    title: 'The Last Lit Window',
    sub: 'Shaw Boulevard',
    location: 'Shaw Boulevard',
    date: 'OCT 2026',
    image: './pictures/9.jpg',
    excerpt: 'Golden hour catches one tower while the rest of the skyline fades into cloud.',
    fullStory: 'From the rooftop, the city stacked itself into layers of grey and glass. One building held the last of the sun, its windows glowing like a row of small lamps. Below, the orange roof looked almost warm enough to touch.'
  },
  {
    id: 'CH. 10',
    title: 'Commits & Iced Coffee',
    sub: 'Shaw Boulevard',
    location: 'Shaw Boulevard',
    date: 'OCT 2026',
    image: './pictures/10.jpg',
    excerpt: 'Iced coffee, a laptop full of commits, and a cafe that glows like a lantern.',
    fullStory: 'The cafe was all hanging plants and warm bulbs, the kind of place that makes work feel less like work. My screen was full of green squares and open pull requests; my coffee was mostly ice. Outside, the evening went on without me, and I was happy to let it.'
  },
  {
    id: 'CH. 11',
    title: 'Planets in the Pines',
    sub: 'SM Manila',
    location: 'SM Manila',
    date: 'NOV 2026',
    image: './pictures/11.jpg',
    excerpt: 'Looking up at a giant Christmas tree, the ornaments feel like planets overhead.',
    fullStory: 'The tree rose through the atrium in rings of red and gold, held together by a scaffolding of lights. From underneath, the baubles looked enormous, floating against the dark green branches. It was the kind of decoration that made you feel small in a good way.'
  },
  {
    id: 'CH. 12',
    title: 'Lukewarm Morning',
    sub: 'Tanay, Rizal',
    location: 'Tanay, Rizal',
    date: 'NOV 2026',
    image: './pictures/12.jpg',
    excerpt: 'A cup of tea on the windowsill, with pine trees and green roofs beyond.',
    fullStory: 'Morning light came in sideways, catching the pattern on the cup and the dust on the sill. Outside, the green roof sloped down toward a wall of pines and a strip of blue sky. The tea had gone lukewarm, and I did not mind.'
  }
];

// 2. DOM References
const viewport = document.getElementById('viewport');
const tileLayer = document.getElementById('tileLayer');
const introOverlay = document.getElementById('introOverlay');
const startExploringBtn = document.getElementById('startExploringBtn');

// Reader Modal Elements
const readerModal = document.getElementById('readerModal');
const readerImg = document.getElementById('readerImg');
const readerMeta = document.getElementById('readerMeta');
const readerTitle = document.getElementById('readerTitle');
const readerSub = document.getElementById('readerSub');
const readerStory = document.getElementById('readerStory');
const readerCloseBtn = document.getElementById('readerCloseBtn');
const readerPrevBtn = document.getElementById('readerPrevBtn');
const readerNextBtn = document.getElementById('readerNextBtn');

// 3. Engine State
const state = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  vx: 0,
  vy: 0,
  isDragging: false,
  dragMoved: false,
  lastPointerX: 0,
  lastPointerY: 0,
  downX: 0,
  downY: 0,
  cardW: 280,
  cardH: 373,
  gap: 28,
  cellW: 308,
  cellH: 401,
  activeNodes: new Map(),
  flippedCells: new Set(),
  globalFlipped: false,
  snapPending: false,
  snapAt: 0,
  activeModalIndex: 0,
  // Cursor tracking for card tilt
  mouseX: window.innerWidth / 2,
  mouseY: window.innerHeight / 2
};

const CAMERA_EASE = 0.11;
const SNAP_DELAY_MS = 260;
const SNAP_MAX_WAIT_MS = 480;

// Deterministic positive modulo
function mod(n, m) {
  return ((n % m) + m) % m;
}

// Map any infinite grid coordinate to one of the 12 chapters
function getEntryForCell(col, row) {
  const staggeredIndex = mod(col + row * 2, JOURNAL_ENTRIES.length);
  return {
    entry: JOURNAL_ENTRIES[staggeredIndex],
    entryIndex: staggeredIndex
  };
}

// Measure CSS custom properties
function updateGridMetrics() {
  const probe = document.createElement('div');
  probe.style.cssText = 'position:fixed;visibility:hidden;width:var(--card-w);height:var(--card-h);margin-left:var(--grid-gap);';
  document.body.appendChild(probe);
  const styles = getComputedStyle(probe);
  state.cardW = parseFloat(styles.width) || 280;
  state.cardH = parseFloat(styles.height) || 373;
  state.gap = parseFloat(styles.marginLeft) || 28;
  document.body.removeChild(probe);

  state.cellW = state.cardW + state.gap;
  state.cellH = state.cardH + state.gap;
}

// Center the initial grid in the viewport
function centerCamera(immediate = false) {
  const offsetX = (window.innerWidth - state.cardW) * 0.5;
  const offsetY = (window.innerHeight - state.cardH) * 0.5;
  state.targetX = offsetX;
  state.targetY = offsetY;
  state.vx = 0;
  state.vy = 0;
  state.snapPending = false;
  state.snapAt = 0;
  if (immediate) {
    state.x = offsetX;
    state.y = offsetY;
  }
}

// Snap the camera so one card is perfectly centered (3 photos across)
function snapCamera() {
  const midX = (window.innerWidth - state.cardW) * 0.5;
  const midY = (window.innerHeight - state.cardH) * 0.5;

  state.vx = 0;
  state.vy = 0;
  state.snapPending = false;
  state.snapAt = 0;
  state.targetX = midX + Math.round((state.targetX - midX) / state.cellW) * state.cellW;
  state.targetY = midY + Math.round((state.targetY - midY) / state.cellH) * state.cellH;
}

// Move exactly one cell in a direction, keeping the grid aligned
function moveByCells(dx, dy) {
  snapCamera();
  state.targetX += dx * state.cellW;
  state.targetY += dy * state.cellH;
}

// Create a single flipping card DOM element
function createCardElement(col, row, key) {
  const { entry, entryIndex } = getEntryForCell(col, row);
  const isFlipped = state.flippedCells.has(key);

  const slot = document.createElement('article');
  slot.className = 'journal-slot';
  slot.dataset.key = key;
  slot.dataset.entryIndex = entryIndex;

  slot.innerHTML = `
    <div class="journal-card ${isFlipped ? 'is-flipped' : ''}">
      <!-- FRONT -->
      <div class="card-face card-front">
        <div class="card-media">
          <img
            src="${entry.image}"
            alt="${entry.title}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/600x800/132e1c/dcedef?text=${encodeURIComponent(entry.id)}';"
          />
          <span class="card-badge">${entry.id}</span>
          <span class="card-flip-cue" title="Flip card">
            <img class="journal-icon" src="./assets/icons/refresh-cw.svg" alt="" aria-hidden="true">
          </span>
        </div>
        <div class="card-front-footer">
          <h2 class="card-front-title">${entry.title}</h2>
          <span class="card-front-sub">${entry.sub}</span>
        </div>
      </div>

      <!-- BACK -->
      <div class="card-face card-back">
        <div class="back-header">
          <span class="back-chapter">${entry.id}</span>
          <span>${entry.date}</span>
        </div>
        <div class="back-body">
          <div class="back-sub-heading">${entry.sub}</div>
          <h3 class="back-title">${entry.title}</h3>
          <p class="back-story">${entry.excerpt}</p>
        </div>
        <div class="back-footer">
          <span>${entry.location}</span>
          <button type="button" class="expand-story-btn" data-read-index="${entryIndex}" aria-label="Read note for ${entry.title}" title="Read note">
            <img class="journal-icon" src="./assets/icons/book-open-text.svg" alt="" aria-hidden="true">
          </button>
        </div>
      </div>
    </div>
  `;

  return slot;
}

// Virtualized Grid Renderer
function renderVisibleGrid() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const buffer = 1;

  const startCol = Math.floor(-state.x / state.cellW) - buffer;
  const endCol = Math.floor((vw - state.x) / state.cellW) + buffer;
  const startRow = Math.floor(-state.y / state.cellH) - buffer;
  const endRow = Math.floor((vh - state.y) / state.cellH) + buffer;

  const neededKeys = new Set();

  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      const key = `${col},${row}`;
      neededKeys.add(key);

      let slot = state.activeNodes.get(key);
      if (!slot) {
        slot = createCardElement(col, row, key);
        tileLayer.appendChild(slot);
        state.activeNodes.set(key, slot);
      }

      const worldX = col * state.cellW;
      const worldY = row * state.cellH;
      slot.style.transform = `translate3d(${worldX}px, ${worldY}px, 0)`;
    }
  }

  // Remove off-screen cards
  for (const [key, slot] of state.activeNodes.entries()) {
    if (!neededKeys.has(key)) {
      slot.remove();
      state.activeNodes.delete(key);
    }
  }

  tileLayer.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
}

// 4. Animation Loop
function animate() {
  if (!state.isDragging) {
    state.targetX += state.vx;
    state.targetY += state.vy;
    state.vx *= 0.92;
    state.vy *= 0.92;
    if (Math.abs(state.vx) < 0.01) state.vx = 0;
    if (Math.abs(state.vy) < 0.01) state.vy = 0;

    // Let momentum settle before choosing the nearest card, then ease toward it.
    if (
      state.snapPending &&
      (
        (Math.abs(state.vx) < 2.5 && Math.abs(state.vy) < 2.5) ||
        performance.now() - state.snapAt > SNAP_MAX_WAIT_MS
      )
    ) {
      snapCamera();
    }
  }

  state.x += (state.targetX - state.x) * CAMERA_EASE;
  state.y += (state.targetY - state.y) * CAMERA_EASE;

  renderVisibleGrid();
  updateCardTilt();
  requestAnimationFrame(animate);
}

// Cursor-reactive card tilt — cards subtly "look at" the mouse
// Track mouse position globally
window.addEventListener('mousemove', (e) => {
  state.mouseX = e.clientX;
  state.mouseY = e.clientY;
});

const TILT_MAX = 24;       // Max tilt angle in degrees
const TILT_RADIUS = 700;   // Pixel radius of influence
const GLOW_RADIUS = 520;   // Pixel radius for subtle highlight glow
const REACH_X = 190;       // Horizontal offset for full-strength tilt
const REACH_Y = 230;       // Vertical offset for full-strength tilt

function updateCardTilt() {
  for (const [key, slot] of state.activeNodes.entries()) {
    const card = slot.querySelector('.journal-card');
    if (!card) continue;

    // Let the CSS flip transform drive flipped cards
    if (card.classList.contains('is-flipped')) {
      card.style.transform = '';
      card.style.boxShadow = '';
      continue;
    }

    // Get card center in screen space
    const rect = slot.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    // Distance from cursor to card center
    const dx = state.mouseX - cardCenterX;
    const dy = state.mouseY - cardCenterY;
    const dist = Math.hypot(dx, dy);

    if (dist < TILT_RADIUS) {
      // Normalize intensity (1 at cursor, 0 at radius edge)
      const intensity = 1 - (dist / TILT_RADIUS);
      const eased = Math.pow(intensity, 1.1); // slow falloff = dramatic reaction

      // Normalize cursor offset against the card's reach so nearby movement
      // produces a strong, exaggerated tilt
      const normX = Math.max(-1, Math.min(1, dx / REACH_X));
      const normY = Math.max(-1, Math.min(1, dy / REACH_Y));

      // rotateY follows X offset, rotateX is inverted Y offset
      const tiltY = normX * TILT_MAX * eased;
      const tiltX = -normY * TILT_MAX * eased;

      // Drift toward the cursor and lift off the canvas
      const driftX = normX * 34 * eased;
      const driftY = normY * 34 * eased;
      const lift = eased * 22;
      const scale = 1 + eased * 0.08;

      card.style.transform = `translate3d(${driftX}px, ${driftY - lift}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;

      // Subtle highlight glow on close proximity
      if (dist < GLOW_RADIUS) {
        const glowIntensity = (1 - dist / GLOW_RADIUS) * 0.3;
        card.style.boxShadow = `0 ${10 + lift * 2.5}px ${26 + lift * 5}px rgba(206, 206, 109, ${glowIntensity}), 0 16px 36px -10px rgba(0, 0, 0, 0.5)`;
      } else {
        card.style.boxShadow = '';
      }
    } else {
      // Reset when out of range
      card.style.transform = '';
      card.style.boxShadow = '';
    }
  }
}

// 5. Pointer Interactions
viewport.addEventListener('pointerdown', (e) => {
  if (e.button !== 0 && e.pointerType === 'mouse') return;
  state.isDragging = true;
  state.dragMoved = false;
  state.lastPointerX = e.clientX;
  state.lastPointerY = e.clientY;
  state.downX = e.clientX;
  state.downY = e.clientY;
  state.vx = 0;
  state.vy = 0;
  state.snapPending = false;
  viewport.classList.add('is-dragging');
});

window.addEventListener('pointermove', (e) => {
  if (!state.isDragging) return;
  const dx = e.clientX - state.lastPointerX;
  const dy = e.clientY - state.lastPointerY;

  if (Math.hypot(e.clientX - state.downX, e.clientY - state.downY) > 6) {
    state.dragMoved = true;
  }

  state.targetX += dx;
  state.targetY += dy;
  state.vx = dx * 0.85;
  state.vy = dy * 0.85;

  state.lastPointerX = e.clientX;
  state.lastPointerY = e.clientY;
});

window.addEventListener('pointerup', (e) => {
  if (!state.isDragging) return;
  state.isDragging = false;
  viewport.classList.remove('is-dragging');

  if (!state.dragMoved) {
    const readBtn = e.target.closest('[data-read-index]');
    if (readBtn) {
      openReaderModal(Number(readBtn.dataset.readIndex));
      return;
    }

    const slot = e.target.closest('.journal-slot');
    if (slot) {
      toggleCardFlip(slot);
    }
  } else {
    // Let inertia play out, then snap a card back to the center
    state.snapPending = true;
    state.snapAt = performance.now();
  }
});

// Wheel Scrolling
let wheelSnapTimer = 0;
viewport.addEventListener('wheel', (e) => {
  e.preventDefault();
  const deltaX = e.shiftKey && e.deltaX === 0 ? e.deltaY : e.deltaX;
  const deltaY = e.shiftKey && e.deltaX === 0 ? 0 : e.deltaY;

  state.targetX -= deltaX * 1.15;
  state.targetY -= deltaY * 1.15;
  state.vx = 0;
  state.vy = 0;
  state.snapPending = false;

  // Snap after the user stops scrolling
  clearTimeout(wheelSnapTimer);
  wheelSnapTimer = setTimeout(() => {
    state.snapPending = true;
    state.snapAt = performance.now();
  }, SNAP_DELAY_MS);
}, { passive: false });

// Keyboard Navigation
window.addEventListener('keydown', (e) => {
  if (readerModal.classList.contains('is-open')) {
    if (e.key === 'Escape') closeReaderModal();
    if (e.key === 'ArrowRight') navigateModal(1);
    if (e.key === 'ArrowLeft') navigateModal(-1);
    return;
  }

  switch (e.key) {
    case 'ArrowLeft':
      moveByCells(1, 0);
      break;
    case 'ArrowRight':
      moveByCells(-1, 0);
      break;
    case 'ArrowUp':
      moveByCells(0, 1);
      break;
    case 'ArrowDown':
      moveByCells(0, -1);
      break;
    case 'Escape':
      introOverlay.classList.add('is-hidden');
      break;
  }
});

// Toggle flip on individual card
function toggleCardFlip(slot) {
  const key = slot.dataset.key;
  const card = slot.querySelector('.journal-card');
  if (!card) return;

  // Clear the inline tilt transform so the CSS flip transform can take over
  card.style.transform = '';
  card.style.boxShadow = '';

  if (state.flippedCells.has(key)) {
    state.flippedCells.delete(key);
    card.classList.remove('is-flipped');
  } else {
    state.flippedCells.add(key);
    card.classList.add('is-flipped');
  }
}

// Dismiss Intro Overlay
startExploringBtn.addEventListener('click', () => {
  introOverlay.classList.add('is-hidden');
});

// 6. Reader Modal Logic
function openReaderModal(index) {
  state.activeModalIndex = mod(index, JOURNAL_ENTRIES.length);
  const entry = JOURNAL_ENTRIES[state.activeModalIndex];

  readerImg.src = entry.image;
  readerImg.alt = entry.title;
  readerMeta.textContent = `${entry.id} — ${entry.location.toUpperCase()} (${entry.date})`;
  readerTitle.textContent = entry.title;
  readerSub.textContent = entry.sub;
  readerStory.textContent = entry.fullStory;

  readerModal.classList.add('is-open');
}

function closeReaderModal() {
  readerModal.classList.remove('is-open');
}

function navigateModal(dir) {
  openReaderModal(state.activeModalIndex + dir);
}

readerCloseBtn.addEventListener('click', closeReaderModal);
readerPrevBtn.addEventListener('click', () => navigateModal(-1));
readerNextBtn.addEventListener('click', () => navigateModal(1));
readerModal.addEventListener('click', (e) => {
  if (e.target === readerModal) closeReaderModal();
});

// Handle Viewport Resize
window.addEventListener('resize', () => {
  updateGridMetrics();
  state.snapPending = true;
  state.snapAt = performance.now();
  renderVisibleGrid();
});

// Initialize on load
window.addEventListener('load', () => {
  updateGridMetrics();
  centerCamera(true);
  renderVisibleGrid();
  animate();
});
