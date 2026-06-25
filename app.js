(() => {
  const clubs = [
    { id: 'paint', name: 'Paint & Sip', emoji: '🎨', cadence: '6 sessions · biweekly', img: 'paint-sip.png',
      about: 'Loose brushes, full glasses, zero pressure. You guide a relaxed evening where everyone leaves with a canvas — and a few new friends.' },
    { id: 'wine', name: 'Wine & Cheese', emoji: '🍷', cadence: '6 sessions · biweekly', img: 'dinner.png',
      about: 'A curated table of pours and pairings. You walk the group through each tasting while the conversation flows as freely as the wine.' },
    { id: 'cooking', name: 'Cooking Class', emoji: '👨‍🍳', cadence: '3 sessions · monthly', img: 'supper-club.png',
      about: 'Aprons on, one great recipe, a shared meal at the end. You teach the dish you are known for — and everyone eats it together.' },
    { id: 'reading', name: 'Reading Club', emoji: '📚', cadence: '3 sessions · monthly', img: 'book-club.png',
      about: 'One book, one cosy room, real conversation. You set the reading and host the kind of discussion people clear their calendar for.' },
    { id: 'games', name: 'Board Games', emoji: '🎲', cadence: '6 sessions · biweekly', img: 'backgammon.png',
      about: 'Dice, strategy and a lot of laughing. You run game nights that turn strangers into regulars, one round at a time.' },
    { id: 'art', name: 'Art Gallery & Museum', emoji: '🖼️', cadence: '6 sessions · biweekly', img: 'lounge.png',
      about: 'Slow afternoons among great works. You lead small-group visits with your eye for the story behind each piece.' },
  ];

  const steps = [
    { n: '01', icon: 'clipboard-list', title: 'You apply' },
    { n: '02', icon: 'video', title: 'Webinar call' },
    { n: '03', icon: 'palette', title: 'Design your club' },
    { n: '04', icon: 'users-round', title: 'We find your people' },
    { n: '05', icon: 'sparkles', title: 'Host & lead' },
    { n: '06', icon: 'trending-up', title: 'Earn & grow' },
  ];

  const responsibilities = [
    { icon: 'pen-tool', label: 'Design the experience' },
    { icon: 'flame', label: 'Lead with passion' },
    { icon: 'package', label: 'Provide your own materials' },
    { icon: 'calendar-check', label: 'Show up consistently' },
  ];

  const youDo = ['You create the experience', 'You share your hobby, talent or passion', 'You create community'];

  const kinndoDoes = [
    { icon: 'users-round', label: 'Finds 8 participants for every session' },
    { icon: 'map-pin', label: 'Suggests the right venues' },
    { icon: 'calendar-check', label: 'Manages all bookings & reminders' },
    { icon: 'headphones', label: 'Supports you the whole way' },
  ];

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  function renderClubGrid() {
    const grid = document.getElementById('club-grid');
    grid.innerHTML = clubs.map(c => `
      <button type="button" class="club-card" data-club-id="${c.id}">
        <div class="club-card-img">
          <img src="${c.img}" alt="${c.name}">
          <span class="club-card-emoji">${c.emoji}</span>
        </div>
        <div class="club-card-body">
          <div class="club-card-name">${c.name}</div>
          <div class="club-card-foot">
            <span class="club-card-cadence">${c.cadence}</span>
            <span class="club-card-chevron">›</span>
          </div>
        </div>
      </button>
    `).join('');
    grid.querySelectorAll('.club-card').forEach(btn => {
      btn.addEventListener('click', () => openClub(btn.getAttribute('data-club-id')));
    });
  }

  function renderResponsibilities() {
    const list = document.getElementById('responsibilities-list');
    list.innerHTML = responsibilities.map(r => `
      <div class="responsibility-row">
        <span class="kin-i"><i data-lucide="${r.icon}"></i></span>
        <span class="label">${r.label}</span>
      </div>
    `).join('');
  }

  function renderSteps() {
    const grid = document.getElementById('steps-grid');
    grid.innerHTML = steps.map(s => `
      <div class="step-card">
        <div class="step-card-top">
          <span class="step-card-icon"><i data-lucide="${s.icon}"></i></span>
          <span class="step-card-n">${s.n}</span>
        </div>
        <div class="step-card-title">${s.title}</div>
      </div>
    `).join('');
  }

  function renderClubSelectOptions() {
    const select = document.getElementById('apply-club');
    const otherOpt = select.querySelector('option[value="Something else"]');
    clubs.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.name;
      opt.textContent = c.name;
      select.insertBefore(opt, otherOpt);
    });
  }

  // ---------- Club sheet ----------
  const clubOverlay = document.getElementById('club-overlay');
  let openClubData = null;

  function openClub(id) {
    const club = clubs.find(c => c.id === id);
    if (!club) return;
    openClubData = club;
    document.getElementById('club-sheet-img').src = club.img;
    document.getElementById('club-sheet-img').alt = club.name;
    document.getElementById('club-sheet-emoji').textContent = club.emoji;
    document.getElementById('club-sheet-name').textContent = club.name;
    document.getElementById('club-sheet-cadence').textContent = club.cadence;
    document.getElementById('club-sheet-about').textContent = club.about;
    document.getElementById('club-sheet-youdo').innerHTML = youDo.map(d => `
      <div class="check-row"><span class="kin-i"><i data-lucide="check"></i></span><span class="label">${d}</span></div>
    `).join('');
    document.getElementById('club-sheet-kinndo-does').innerHTML = kinndoDoes.map(k => `
      <div class="kinndo-does-row"><span class="kin-i"><i data-lucide="${k.icon}"></i></span><span class="label">${k.label}</span></div>
    `).join('');
    clubOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    updateStickyVisibility();
    refreshIcons();
  }

  function closeClub() {
    openClubData = null;
    clubOverlay.hidden = true;
    document.body.style.overflow = '';
    updateStickyVisibility();
  }

  clubOverlay.addEventListener('click', (e) => { if (e.target === clubOverlay) closeClub(); });
  document.getElementById('club-close-btn').addEventListener('click', closeClub);
  document.getElementById('club-panel').addEventListener('click', (e) => e.stopPropagation());
  document.getElementById('club-host-this-btn').addEventListener('click', () => {
    const club = openClubData;
    closeClub();
    openApply(club ? club.name : '');
  });

  // ---------- Apply sheet ----------
  const applyOverlay = document.getElementById('apply-overlay');
  const applyFormView = document.getElementById('apply-form-view');
  const applySuccessView = document.getElementById('apply-success-view');
  const applyForm = document.getElementById('apply-form');

  function openApply(preselectClub) {
    applyFormView.hidden = false;
    applySuccessView.hidden = true;
    if (preselectClub) document.getElementById('apply-club').value = preselectClub;
    applyOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    updateStickyVisibility();
    refreshIcons();
  }

  function closeApply() {
    applyOverlay.hidden = true;
    document.body.style.overflow = '';
    updateStickyVisibility();
  }

  applyOverlay.addEventListener('click', (e) => { if (e.target === applyOverlay) closeApply(); });
  document.getElementById('apply-panel').addEventListener('click', (e) => e.stopPropagation());
  document.getElementById('apply-close-btn').addEventListener('click', closeApply);
  document.getElementById('apply-back-btn').addEventListener('click', closeApply);

  const SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzvt5A-jmOoR1zEmWitisfNRTixACbIVsE6YyS1i2SNUqwe2_mK2lTqmVJRCj1RrDd-yA/exec';

  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', document.getElementById('apply-name').value);
    formData.append('email', document.getElementById('apply-email').value);
    formData.append('club', document.getElementById('apply-club').value);
    fetch(SHEET_WEBHOOK_URL, { method: 'POST', mode: 'no-cors', body: formData }).catch(() => {});
    applyFormView.hidden = true;
    applySuccessView.hidden = false;
    refreshIcons();
  });

  document.querySelectorAll('[data-open-apply]').forEach(btn => {
    btn.addEventListener('click', () => openApply());
  });

  // ---------- Scroll-to links ----------
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(btn.getAttribute('data-scroll-to'));
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' });
    });
  });

  // ---------- Sticky CTA ----------
  const stickyCta = document.getElementById('sticky-cta');
  function updateStickyVisibility() {
    const sheetOpen = !applyOverlay.hidden || !clubOverlay.hidden;
    const scrolled = window.scrollY > 320;
    stickyCta.hidden = sheetOpen || !scrolled;
  }
  window.addEventListener('scroll', updateStickyVisibility, { passive: true });

  // ---------- Init ----------
  renderClubGrid();
  renderResponsibilities();
  renderSteps();
  renderClubSelectOptions();
  updateStickyVisibility();
  refreshIcons();
})();
