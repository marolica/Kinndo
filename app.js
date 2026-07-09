(() => {
  const heroImgs = [
    'dinner-toast.png',
    'meetup.png',
    'paint-sip.png',
    'dinner.png',
    'supper-club.png',
    'book-club.png',
    'backgammon.png',
    'lounge.png',
  ];

  const clubs = [
    { id: 'readcook', name: 'Reading & Cooking', icon: 'book-open', cadence: '3 sessions · monthly', img: 'book-club.png',
      about: 'One book, one recipe, one table. You guide the conversation and the kitchen, and people leave with full hearts, full stomachs, and the kind of talk small talk never reaches.' },
    { id: 'paint', name: 'Paint & Sip', icon: 'palette', cadence: '6 sessions · biweekly', img: 'paint-sip.png',
      about: 'Loose brushes, full glasses, zero judgment. Nobody paints to be good, they paint to be together. You hold the space where strangers stop performing and start connecting.' },
    { id: 'wine', name: 'Wine & Cheese', icon: 'wine', cadence: '6 sessions · biweekly', img: 'dinner.png',
      about: 'A curated table, a few great pours, and conversation that flows as freely as the wine. You guide the tasting; belonging does the rest.' },
    { id: 'art', name: 'Art Gallery & Museum', icon: 'image', cadence: '6 sessions · biweekly', img: 'lounge.png',
      about: 'Slow afternoons among great works, with someone who sees what others walk past. You share the story behind each piece, and a small group starts seeing the city, and each other, differently.' },
    { id: 'games', name: 'Board Games', icon: 'dices', cadence: '6 sessions · biweekly', img: 'backgammon.png',
      about: 'Dice, strategy, and laughter that carries into the street. You deal people back into each other’s lives, one round at a time.' },
  ];

  const stats = [
    { icon: 'user-round', label: '1 in 4 adults report feeling lonely regularly.' },
    { icon: 'laptop', label: 'Remote work has reduced daily in-person interaction significantly.' },
    { icon: 'trending-up', label: 'Search interest in “hobbies” and “community” has grown globally.' },
    { icon: 'heart', label: '70%+ of people say they want more meaningful connections.' },
  ];

  const equations = [
    { a: 'No repetition', b: 'no bonding' },
    { a: 'No rules', b: 'no commitment' },
    { a: 'No ritual', b: 'no belonging' },
  ];

  const notList = [
    'We are not a social network',
    'We are not a marketplace of events',
    'We are not an app to make friends',
  ];

  const whyHost = [
    { icon: 'heart',       title: 'Share what you love',  desc: 'Turn your hobby, skill, or passion into meaningful experiences.' },
    { icon: 'users-round', title: 'Build a community',    desc: 'Bring together people with shared interests and create genuine belonging.' },
    { icon: 'wallet',      title: 'Earn money',           desc: 'Get paid for doing something you genuinely enjoy.' },
    { icon: 'sparkles',    title: 'Leave your mark',      desc: 'Create something that makes a lasting impact on people’s lives.' },
  ];

  const verbs = ['Create experiences', 'Build a community', 'Monetize your skills', 'Leave your mark'];

  const kinndoDoes = [
    { icon: 'users-round',   label: 'Finds 8 participants for every session' },
    { icon: 'map-pin',       label: 'Suggests the right venues' },
    { icon: 'calendar-check',label: 'Manages all bookings and reminders' },
    { icon: 'headphones',    label: 'Supports you the whole way' },
  ];

  const youDo = ['You create the experience', 'You share your hobby, talent or passion', 'You create community'];

  const steps = [
    { n: '01', icon: 'hand',           title: 'You raise your hand',    desc: 'A short application.' },
    { n: '02', icon: 'phone-call',     title: 'We meet you',            desc: 'A friendly call to hear your story.' },
    { n: '03', icon: 'palette',        title: 'You design your club',   desc: 'Your passion, our playbook.' },
    { n: '04', icon: 'users-round',    title: 'We curate your people',  desc: 'The right group, hand-picked.' },
    { n: '05', icon: 'sparkles',       title: 'You host and lead',      desc: 'The session they’ll talk about all week.' },
    { n: '06', icon: 'heart-handshake',title: 'They come back',         desc: 'And it becomes a community.' },
  ];

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  // ---------- Hero slideshow ----------
  let heroIdx = 0;
  let heroTimer = null;

  function renderHeroSlideshow() {
    const container = document.getElementById('hero-slideshow');
    container.innerHTML = heroImgs.map((src, i) => `
      <img class="hero-slide${i === 0 ? ' active' : ''}" src="${src}" alt="A Kinndo community gathering" decoding="async">
    `).join('');
  }

  function startHeroSlideshow() {
    heroIdx = 0;
    const tick = () => {
      const slides = document.querySelectorAll('.hero-slide');
      if (!slides.length) return;
      slides[heroIdx].classList.remove('active');
      heroIdx = (heroIdx + 1) % slides.length;
      slides[heroIdx].classList.add('active');
      heroTimer = setTimeout(tick, 2600 + Math.random() * 1600);
    };
    clearTimeout(heroTimer);
    heroTimer = setTimeout(tick, 2600 + Math.random() * 1600);
  }

  // ---------- Problem section ----------
  function renderStatRows() {
    const el = document.getElementById('stat-rows');
    if (!el) return;
    el.innerHTML = stats.map(s => `
      <div class="stat-row">
        <span class="stat-icon kin-i"><i data-lucide="${s.icon}"></i></span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }

  function renderEquations() {
    const el = document.getElementById('equation-list');
    if (!el) return;
    el.innerHTML = equations.map(e => `
      <div class="equation-row">
        <span class="equation-a">${e.a}</span> <span class="equation-eq">=</span> ${e.b}
      </div>
    `).join('');
  }

  function renderNotPanel() {
    const el = document.getElementById('not-panel');
    if (!el) return;
    el.innerHTML = notList.map(n => `
      <div class="not-row">
        <span class="kin-i"><i data-lucide="x"></i></span>
        <span>${n}</span>
      </div>
    `).join('');
  }

  // ---------- Why host ----------
  function renderWhyCards() {
    const el = document.getElementById('why-cards');
    if (!el) return;
    el.innerHTML = whyHost.map(w => `
      <div class="why-card">
        <span class="why-icon kin-i"><i data-lucide="${w.icon}"></i></span>
        <div>
          <div class="why-title">${w.title}</div>
          <div class="why-desc">${w.desc}</div>
        </div>
      </div>
    `).join('');
  }

  function renderVerbChips() {
    const el = document.getElementById('verb-chips');
    if (!el) return;
    el.innerHTML = verbs.map(v => `<span class="verb-chip">${v}</span>`).join('');
  }

  // ---------- Club grid ----------
  function renderClubGrid() {
    const grid = document.getElementById('club-grid');
    grid.innerHTML = clubs.map(c => `
      <button type="button" class="club-card" data-club-id="${c.id}">
        <div class="club-card-img">
          <img src="${c.img}" alt="${c.name}">
          <span class="club-icon-badge kin-i"><i data-lucide="${c.icon}"></i></span>
        </div>
        <div class="club-card-body">
          <div class="club-card-name">${c.name}</div>
          <div class="club-card-foot">
            <span class="club-card-arrow kin-i"><i data-lucide="arrow-right"></i></span>
          </div>
        </div>
      </button>
    `).join('');
    grid.querySelectorAll('.club-card').forEach(btn => {
      btn.addEventListener('click', () => openClub(btn.getAttribute('data-club-id')));
    });
  }

  // ---------- Kinndo brings ----------
  function renderKinndoBrings() {
    const el = document.getElementById('kinndo-brings-list');
    if (!el) return;
    el.innerHTML = kinndoDoes.map(k => `
      <div class="brings-row">
        <span class="brings-icon kin-i"><i data-lucide="${k.icon}"></i></span>
        <span class="brings-label">${k.label}</span>
      </div>
    `).join('');
  }

  // ---------- Steps ----------
  function renderSteps() {
    const grid = document.getElementById('steps-grid');
    grid.innerHTML = steps.map(s => `
      <div class="step-card">
        <div class="step-card-top">
          <span class="step-card-icon kin-i"><i data-lucide="${s.icon}"></i></span>
          <span class="step-card-n">${s.n}</span>
        </div>
        <div class="step-card-bottom">
          <div class="step-card-title">${s.title}</div>
          <div class="step-card-desc">${s.desc}</div>
        </div>
      </div>
    `).join('');
  }

  // ---------- Club select options ----------
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
    const iconBadge = document.getElementById('club-sheet-icon-badge');
    iconBadge.innerHTML = `<i data-lucide="${club.icon}"></i>`;
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
  renderHeroSlideshow();
  renderStatRows();
  renderEquations();
  renderNotPanel();
  renderWhyCards();
  renderVerbChips();
  renderClubGrid();
  renderKinndoBrings();
  renderSteps();
  renderClubSelectOptions();
  updateStickyVisibility();
  refreshIcons();
  startHeroSlideshow();
})();
