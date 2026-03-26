/**
 * TeeTuner typography tokens for Shopify storefront themes (Online Store 2.0).
 * Single source of truth for docs + copy-paste CSS. Base size: 16px (1rem).
 */

export const BASE_REM = 16;

/** CSS font stacks — use with @font-face or Google Fonts link in theme.liquid */
export const FONT_STACKS = {
  alegreya: '"Alegreya", ui-serif, Georgia, "Times New Roman", serif',
  oswald: '"Oswald", ui-sans-serif, system-ui, -apple-system, sans-serif',
};

/**
 * Primitive scale: use for spacing-aligned type steps and custom components.
 * Sizes are fluid where noted (clamp) for small screens.
 */
export const TYPE_PRIMITIVES = [
  {
    id: '3xs',
    label: '3XS',
    px: 11,
    rem: '0.6875rem',
    lineHeight: 1.45,
    letterSpacing: '0.02em',
    defaultFamily: 'alegreya',
    note: 'Fine print, legal microcopy (use sparingly)',
  },
  {
    id: '2xs',
    label: '2XS',
    px: 12,
    rem: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    defaultFamily: 'alegreya',
    note: 'Captions, timestamps, table meta',
  },
  {
    id: 'xs',
    label: 'XS',
    px: 14,
    rem: '0.875rem',
    lineHeight: 1.5,
    defaultFamily: 'alegreya',
    note: 'Small UI, secondary lines, cart summaries',
  },
  {
    id: 'sm',
    label: 'SM',
    px: 15,
    rem: '0.9375rem',
    lineHeight: 1.55,
    letterSpacing: '0.005em',
    defaultFamily: 'alegreya',
    note: 'Dense product copy, compact cards',
  },
  {
    id: 'md',
    label: 'MD',
    px: 16,
    rem: '1rem',
    lineHeight: 1.6,
    defaultFamily: 'alegreya',
    note: 'Default body / RTE product description',
  },
  {
    id: 'lg',
    label: 'LG',
    px: 18,
    rem: '1.125rem',
    lineHeight: 1.6,
    defaultFamily: 'alegreya',
    note: 'Comfortable reading, featured intro paragraphs',
  },
  {
    id: 'xl',
    label: 'XL',
    px: 20,
    rem: '1.25rem',
    lineHeight: 1.55,
    defaultFamily: 'alegreya',
    note: 'Lead / deck copy on PDP and articles',
  },
  {
    id: '2xl',
    label: '2XL',
    px: 24,
    rem: '1.5rem',
    lineHeight: 1.4,
    defaultFamily: 'alegreya',
    note: 'Card headings (serif), pull quotes',
  },
  {
    id: '3xl',
    label: '3XL',
    px: 28,
    rem: '1.75rem',
    lineHeight: 1.35,
    defaultFamily: 'oswald',
    note: 'Subsection titles (display sans)',
  },
  {
    id: '4xl',
    label: '4XL',
    px: 36,
    rem: '2.25rem',
    lineHeight: 1.3,
    letterSpacing: '-0.02em',
    defaultFamily: 'oswald',
    note: 'Section headings',
  },
  {
    id: '5xl',
    label: '5XL',
    px: 48,
    rem: '3rem',
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
    defaultFamily: 'oswald',
    note: 'Page / collection titles',
  },
  {
    id: '6xl',
    label: '6XL',
    px: 64,
    rem: '4rem',
    lineHeight: 1.2,
    letterSpacing: '-0.03em',
    defaultFamily: 'oswald',
    note: 'Hero display (desktop); pair with fluid clamp in CSS',
  },
];

/** Fluid display: min, preferred vw, max — for hero only */
export const FLUID_DISPLAY = {
  clamp: 'clamp(2.5rem, 6vw + 1.5rem, 4rem)',
  note: 'Hero headline — scales between ~40px and 64px at typical viewports',
};

/**
 * Semantic roles: map Shopify UI to primitives + Oswald/Alegreya rules.
 * weight: CSS numeric or keyword
 */
export const SHOPIFY_TYPE_ROLES = [
  {
    id: 'announcement',
    name: 'Announcement bar',
    shopifyContext: 'Announcement / promo strip',
    primitive: 'xs',
    family: 'oswald',
    weight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    lineHeight: 1.4,
  },
  {
    id: 'nav-primary',
    name: 'Primary navigation',
    shopifyContext: 'Header menu links',
    primitive: 'xs',
    family: 'oswald',
    weight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    lineHeight: 1.3,
  },
  {
    id: 'nav-secondary',
    name: 'Secondary navigation',
    shopifyContext: 'Footer links, utility menus',
    primitive: 'xs',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.5,
  },
  {
    id: 'overline',
    name: 'Overline / eyebrow',
    shopifyContext: 'Collection label above title, “New arrival”',
    primitive: 'xs',
    family: 'oswald',
    weight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    lineHeight: 1.3,
  },
  {
    id: 'hero-display',
    name: 'Hero display',
    shopifyContext: 'Image banner, slideshow headline',
    primitive: '6xl',
    family: 'oswald',
    weight: 600,
    fluid: true,
    letterSpacing: '-0.03em',
    lineHeight: 1.15,
  },
  {
    id: 'hero-subhead',
    name: 'Hero subhead',
    shopifyContext: 'Supporting line under hero',
    primitive: 'xl',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.55,
  },
  {
    id: 'page-title',
    name: 'Page title',
    shopifyContext: 'Collection, search, default page heading',
    primitive: '5xl',
    family: 'oswald',
    weight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.25,
  },
  {
    id: 'section-heading',
    name: 'Section heading',
    shopifyContext: '“You may also like”, featured collection title',
    primitive: '4xl',
    family: 'oswald',
    weight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.3,
  },
  {
    id: 'card-title-serif',
    name: 'Card title (editorial)',
    shopifyContext: 'Blog card, story-led product tile',
    primitive: '2xl',
    family: 'alegreya',
    weight: 600,
    lineHeight: 1.35,
  },
  {
    id: 'product-title',
    name: 'Product title',
    shopifyContext: 'PDP H1, product card name',
    primitive: '3xl',
    family: 'oswald',
    weight: 600,
    letterSpacing: '-0.015em',
    lineHeight: 1.25,
    /** Fluid between card title (2xl) and subsection (3xl) */
    sizeClamp: 'clamp(1.5rem, 2vw + 1.35rem, 1.75rem)',
  },
  {
    id: 'product-subtitle',
    name: 'Product subtitle',
    shopifyContext: 'Vendor, short metafield line',
    primitive: 'xs',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.5,
  },
  {
    id: 'price-regular',
    name: 'Price',
    shopifyContext: 'Primary product price',
    primitive: 'xl',
    family: 'oswald',
    weight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.2,
  },
  {
    id: 'price-large',
    name: 'Price (emphasis)',
    shopifyContext: 'Featured pricing block, bundles',
    primitive: '2xl',
    family: 'oswald',
    weight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },
  {
    id: 'price-compare',
    name: 'Compare-at',
    shopifyContext: 'Strikethrough compare_at_price',
    primitive: 'sm',
    family: 'oswald',
    weight: 400,
    lineHeight: 1.4,
    textDecoration: 'line-through',
    opacity: 0.75,
  },
  {
    id: 'unit-price',
    name: 'Unit price',
    shopifyContext: 'Price per ml / legal unit line',
    primitive: '2xs',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.45,
  },
  {
    id: 'badge',
    name: 'Badge / label',
    shopifyContext: 'Sale, “Sold out”, tags',
    primitive: '2xs',
    family: 'oswald',
    weight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    lineHeight: 1.2,
  },
  {
    id: 'body',
    name: 'Body',
    shopifyContext: 'RTE, accordion content, policy pages',
    primitive: 'md',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.6,
  },
  {
    id: 'body-large',
    name: 'Body large',
    shopifyContext: 'Editorial intros, brand story',
    primitive: 'lg',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.62,
  },
  {
    id: 'lead',
    name: 'Lead',
    shopifyContext: 'Collection description opener',
    primitive: 'xl',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.55,
  },
  {
    id: 'button-primary',
    name: 'Button (primary)',
    shopifyContext: 'Add to cart, checkout CTAs',
    primitive: 'xs',
    family: 'oswald',
    weight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    lineHeight: 1.2,
  },
  {
    id: 'button-secondary',
    name: 'Button (secondary)',
    shopifyContext: 'Ghost / outline buttons',
    primitive: 'xs',
    family: 'oswald',
    weight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    lineHeight: 1.2,
  },
  {
    id: 'form-label',
    name: 'Form label',
    shopifyContext: 'Contact, newsletter, account fields',
    primitive: 'xs',
    family: 'alegreya',
    weight: 600,
    lineHeight: 1.45,
  },
  {
    id: 'input-text',
    name: 'Input text',
    shopifyContext: 'Typed value in fields',
    primitive: 'md',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.5,
  },
  {
    id: 'cart-line-title',
    name: 'Cart line title',
    shopifyContext: 'Drawer / cart item name',
    primitive: 'sm',
    family: 'oswald',
    weight: 500,
    lineHeight: 1.35,
  },
  {
    id: 'cart-line-meta',
    name: 'Cart line meta',
    shopifyContext: 'Variant options, line properties',
    primitive: '2xs',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.45,
  },
  {
    id: 'empty-state-title',
    name: 'Empty state title',
    shopifyContext: 'Empty cart, no results',
    primitive: '2xl',
    family: 'oswald',
    weight: 600,
    lineHeight: 1.3,
  },
  {
    id: 'empty-state-body',
    name: 'Empty state body',
    shopifyContext: 'Helper text under empty state',
    primitive: 'md',
    family: 'alegreya',
    weight: 400,
    lineHeight: 1.55,
  },
];

const primitiveById = Object.fromEntries(TYPE_PRIMITIVES.map((p) => [p.id, p]));

function getPrimitiveSpec(role) {
  const main = primitiveById[role.primitive];
  return { main };
}

/**
 * Resolve computed CSS values for a role (for docs preview).
 */
export function resolveRoleStyle(role) {
  const { main } = getPrimitiveSpec(role);
  if (!main) return {};

  const family = FONT_STACKS[role.family] || FONT_STACKS.alegreya;
  const fontSize = role.sizeClamp
    ? role.sizeClamp
    : role.fluid
      ? FLUID_DISPLAY.clamp
      : main.rem;
  const letterSpacing =
    role.letterSpacing !== undefined ? role.letterSpacing : main.letterSpacing ?? 'normal';

  return {
    fontFamily: family,
    fontWeight: role.weight,
    fontSize,
    lineHeight: role.lineHeight ?? main.lineHeight,
    letterSpacing,
    textTransform: role.textTransform ?? 'none',
    textDecoration: role.textDecoration ?? 'none',
    opacity: role.opacity,
  };
}

/** Google Fonts href — same as brand site */
export const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Oswald:wght@200..700&display=swap';

/**
 * Generate :root { } block with --tt- prefixed custom properties for Shopify base.css.
 */
export function buildShopifyRootCss() {
  const lines = [
    '/* TeeTuner — drop into assets/base.css after font faces / theme imports */',
    ':root {',
    `  --tt-font-alegreya: ${FONT_STACKS.alegreya};`,
    `  --tt-font-oswald: ${FONT_STACKS.oswald};`,
    '',
    '  /* Primitive scale */',
  ];

  for (const p of TYPE_PRIMITIVES) {
    lines.push(`  --tt-type-${p.id}-size: ${p.rem};`);
    lines.push(`  --tt-type-${p.id}-leading: ${p.lineHeight};`);
    if (p.letterSpacing) {
      lines.push(`  --tt-type-${p.id}-tracking: ${p.letterSpacing};`);
    }
  }

  lines.push(`  --tt-type-display-fluid: ${FLUID_DISPLAY.clamp};`, '', '  /* Semantic roles */');

  for (const role of SHOPIFY_TYPE_ROLES) {
    const { main } = getPrimitiveSpec(role);
    if (!main) continue;
    const prefix = `  --tt-role-${role.id}`;
    lines.push(`${prefix}-family: ${role.family === 'oswald' ? 'var(--tt-font-oswald)' : 'var(--tt-font-alegreya)'};`);
    if (role.sizeClamp) {
      lines.push(`${prefix}-size: ${role.sizeClamp};`);
    } else if (role.fluid) {
      lines.push(`${prefix}-size: var(--tt-type-display-fluid);`);
    } else {
      lines.push(`${prefix}-size: var(--tt-type-${role.primitive}-size);`);
    }
    lines.push(`${prefix}-weight: ${role.weight};`);
    lines.push(`${prefix}-leading: ${role.lineHeight ?? main.lineHeight};`);
    lines.push(
      `${prefix}-tracking: ${role.letterSpacing !== undefined ? role.letterSpacing : main.letterSpacing ?? 'normal'};`,
    );
    if (role.textTransform) {
      lines.push(`${prefix}-transform: ${role.textTransform};`);
    }
    if (role.textDecoration) {
      lines.push(`${prefix}-decoration: ${role.textDecoration};`);
    }
    if (role.opacity != null) {
      lines.push(`${prefix}-opacity: ${role.opacity};`);
    }
  }

  lines.push('}', '');
  return lines.join('\n');
}
