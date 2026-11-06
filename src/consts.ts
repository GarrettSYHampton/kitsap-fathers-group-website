// Single source of truth for site-wide strings and links.
// Fiscal-sponsor values are placeholders until confirmed — see
// docs/compliance-freeze.md. Do NOT guess real values here.
export const SITE_TITLE = 'Kitsap Fathers Group';
export const SITE_TAGLINE = 'By fathers, for fathers — meetups, resources, and community across Kitsap County.';
export const CONTACT_EMAIL = 'info@kitsapfathersgroup.org';
export const FACEBOOK_GROUP_URL = 'https://www.facebook.com/groups/kitsapfathersgroup/';

// Compliance freeze (KFGW-2): exact approved copy. Fill placeholders only.
export const FISCAL_SPONSOR_NAME = 'FISCAL_SPONSOR_NAME';
export const FISCAL_SPONSOR_DONATE_URL = '';
export const SUPPORT_BUTTON_LABEL = 'Support via our fiscal sponsor';

// Email signup (KFGW-4): paste the Brevo/Mailchimp hosted-form POST URL here
// when the provider account is ready. While empty, the homepage email
// section falls back to a "email us to join" link instead of a dead form.
export const EMAIL_SIGNUP_ACTION_URL = '';
export const EMAIL_SIGNUP_EMAIL_FIELD = 'EMAIL';
export const SPONSOR_DISCLOSURE =
  `Contributions are received by ${FISCAL_SPONSOR_NAME}, our fiscal sponsor; ` +
  `any tax deductibility is through ${FISCAL_SPONSOR_NAME}, not through Kitsap Fathers Group directly.`;

export interface NavLink {
  href: string;
  label: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/resources', label: 'Resources' },
  { href: '/partners', label: 'Partners' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/support', label: 'Support' },
];

export const LEGAL_NAV: NavLink[] = [
  { href: '/terms', label: 'Terms of Use' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/photo-notice', label: 'Photo Notice' },
];
