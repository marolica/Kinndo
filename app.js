/* Kinndo design tokens (ported from the Kinndo Design System for production use) */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

:root {
  /* ---- Base warm neutrals ---- */
  --sand-50:  #faf9f7;
  --sand-100: #f6f4f1;
  --sand-200: #ece8e2;
  --sand-300: #ded7cd;
  --clay-400: #b3a99d;
  --clay-500: #8a8177;
  --bark-600: #58514a;
  --bark-800: #2a2724;
  --ink-900:  #000000;
  --white:    #ffffff;

  /* ---- Accent (ember, the prototype default) ---- */
  --ember-500: #c2724e;
  --ember-100: #f3e3da;
  --sage-500:  #6f7d63;
  --sage-100:  #e6eae0;

  /* ---- Semantic: surfaces ---- */
  --surface-canvas:  var(--sand-100);
  --surface-card:    var(--white);
  --surface-sunken:  var(--sand-200);
  --surface-inverse: var(--bark-800);

  /* ---- Semantic: text ---- */
  --text-strong: var(--bark-800);
  --text-body:   var(--bark-600);
  --text-muted:  var(--clay-500);
  --text-subtle: var(--clay-400);
  --text-on-dark:var(--sand-100);

  /* ---- Semantic: borders ---- */
  --border-subtle:  var(--sand-200);
  --border-default: var(--sand-300);

  /* ---- Semantic: actions ---- */
  --action-primary:      var(--bark-800);
  --action-primary-text: var(--sand-100);
  --action-accent:       var(--ember-500);

  /* ---- Status ---- */
  --status-success:    var(--sage-500);
  --status-success-bg: var(--sage-100);

  /* ---- Brand accent (this page) ---- */
  --kin-accent:      var(--ember-500);
  --kin-accent-wash: var(--ember-100);

  /* ---- Type ---- */
  --font-display: 'Open Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body:    'Nunito', ui-rounded, 'Segoe UI', system-ui, sans-serif;

  /* ---- Radius ---- */
  --radius-md:  10px;
  --radius-lg:  14px;
  --radius-xl:  20px;
  --radius-2xl: 28px;
  --radius-pill:999px;

  /* ---- Shadow ---- */
  --shadow-xs:    0 1px 2px rgba(42, 39, 36, 0.05);
  --shadow-sm:    0 1px 3px rgba(42, 39, 36, 0.06), 0 1px 2px rgba(42, 39, 36, 0.04);
  --shadow-xl:    0 24px 56px rgba(42, 39, 36, 0.14);
  --shadow-inset: inset 0 1px 2px rgba(42, 39, 36, 0.06);

  /* ---- Motion ---- */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-base: 220ms;
  --dur-slow: 400ms;
}
