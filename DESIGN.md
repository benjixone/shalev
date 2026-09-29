# Design system: Shalev Group

Mode: brand
Owner: Ben Lev, with Alon Shalvi. Updated: 2026-09-29. Source of truth for
`index.html` and `css/shalev.css` in this repository.

## 0. Lineage: which source decided what

| Decision | Source | What it said |
|---|---|---|
| The Local Growth Partner chassis: one sans family (Manrope) at display weights with tight tracking, the page as a stack of white, gray, tonal and dark tiles, a centered hero with the product on a gray stage, pill buttons, no borders on cards, one product shadow | Ben's stated preference (2026-09-22: "the fonts, the layout, everything is so much better there") and `localgrowthpartner/DESIGN.md` | Shalev is the third site on this chassis after Local Growth Partner and Golden Partners; each keeps its own tokens. |
| Deep teal (#1F4E5F) as the accent and brass (#A87B2F) as the second, warmer accent | Alon Shalvi's own document styling (`Why_These_Rules.html`, shared 2026-09-01: accent #1F4E5F, brass #A87B2F, warm paper) and the Golden Partners gold | The two partners' colours, side by side. The mark is two overlapping rounded squares, teal and brass. |
| The deal sheet as the hero product, with the five qualifiers beside it | The signed Collaboration Agreement (2026-09-17: "one page per deal, saying who does what, the split, and which costs count") and the ShaLev Group sheet's Qualifiers tab (volume and capacity, urgency, evidence of success, integrity of players, quality of product) | The most characteristic artifact of this business is the one-page deal sheet. Showing it, labeled as an illustration, says how the group works better than any paragraph. |
| Four sectors from the ShaLev Group sheet's Portfolio tab: energy and waste; digital growth; land and buildings; governments and capital | The sheet (2026-09-22) | Sector visuals are drawn in CSS: a feedstock-to-outputs flow, three real numbers from Golden Partners, a sponsor/site/offtake bar set, the success-fee ladder from the business book. |
| Pipeline band with five anonymized live items | The sheet's Pipeline tab | Countries and deal types only, no counterparty names. |
| Two people, one photo | Ben's portrait exists; no approved photo of Alon | Alon gets an initials tile until he supplies a photo. His bio line needs his sign-off (see gaps). |
| No email address, two-field form, Cal.com link | Ben (2026-09-22: no email on a site) | Form posts to an endpoint once set; until then it confirms and logs. |
| Anti-patterns avoided | `design-principles`, `frontend-design` | No cream-and-terracotta, no uppercase tracked labels, no icon library, no stock photos, no fabricated metrics (every number on the page is Golden Partners' own or the book's fee ladder), illustrations labeled as such. |

## 1. Overview and atmosphere

A page for a serious counterparty: a technology owner, a project sponsor, an
investor, a government contact. It should feel like the group's own deal
sheet: calm, exact, nothing to hide. "Shalev" means calm in Hebrew, and the
page is built to read that way: white canvas, one deep teal, one brass,
short declarative lines, one visual per idea. Density 3, variance 3,
motion 1.

## 2. Colors

- Canvas (#FFFFFF), Surface (#F5F5F7), Surface 2 (#E8E8ED): the light tiers.
- Tonal (#EAF1F2) and Tonal 2 (#D6E4E7): teal-tinted containers for the
  sector visuals and the people tile.
- Tile (#0F2A33) and Tile 2 (#1A3A44): the dark tiles (how we work, the ask).
- Ink (#1D1D1F), Ink 2 (#6E6E73, 5.0:1 on white), Ink 3 (#757579).
- On dark (#F5F5F7), On dark 2 (#B5C6CC, 6.9:1 on Tile 2), On dark 3 (#8FA6AE).
- Teal (#1F4E5F): the accent word, links, the primary button (white text
  9.1:1), the mark. Teal press (#163B48). Teal on dark (#8EC3D0, 7.8:1 on Tile).
- Brass (#A87B2F): fills only (the send button with white text 3.8:1 is the
  one large-text exception at 17px semibold; the trust dot; the mark).
  Brass ink (#7E5A1E, 6.2:1) as text: eyebrows and sector labels. Brass on
  dark (#D9B46A, 7.6:1) for step numbers.
- Good (#1E9E5A): the one status colour.

## 3. Typography

Manrope, variable 200 to 800, self-hosted at `fonts/Manrope[wght].ttf`,
preloaded. Roles as on Local Growth Partner: hero-display clamp(46, 7vw, 92)
at 800 and -0.04em; display clamp(34, 4.6vw, 60); display-sm clamp(28,
3.4vw, 44); lead clamp(19, 2.1vw, 24) at 500 in Ink 2; body 17 at 1.47;
caption 14; fine 12. Sentence case everywhere. One accent word per headline
in teal.

## 4. Layout

Container 1200px, 32px side padding (16px under 600). Tiles 128px, 96px
under 1040, 64px under 600. Hero stage holds a 1.25:1 deck (deal sheet,
qualifiers); the qualifiers card hides under 1040. Sectors 2 by 2, steps
3-up, people 2-up, close 1fr:480px. Everything single column under 1040.

## 5. Elevation, shapes, motion

Flat tiles; the one product shadow on the deal sheet, the qualifiers card
and the form card. Radii 12, 20, 28, 36 and pill. One page-load rise on the
hero stack and the stage; nothing on scroll; reduced motion shows the final
state.

## 6. Components

Nav (sticky, frosted, brand plus one pill). Trust pill. Deal sheet (white
card: header, five labeled rows with faint placeholder bars, a confirmation
strip that says "Illustration, not a live deal"). Qualifiers card (dark,
five checked lines). Pipeline band. Sector card (label, headline, one
sentence, a tonal visual). Step card on Tile 2. Person card (photo or
initials, name, role in brass ink, three lines). Form card. Footer with the
privacy sentence inline.

## 7. Do and don't

- Do label every illustration. Don't show a deal sheet that could read as
  a live deal.
- Do name sectors and countries. Don't name counterparties, funds or
  contacts: the collaboration agreement's confidentiality clause covers
  them.
- Do keep the two partners' colours. Don't add a third accent.
- Do keep numbers to what has paperwork (Golden Partners' own figures, the
  book's fee ladder). Don't print MAPM's planning-grade figures as results.

## 8. Known gaps

- Alon Shalvi's bio line and the absence of his photo: needs his sign-off
  and a portrait.
- Pipeline items are anonymized from the ShaLev Group sheet as of
  2026-09-22; refresh them when the sheet changes.
- Form endpoint not set (`js/site.js`), so nothing is delivered yet.
- No domain decided. The repository is `benjixone/shalev`.
- Fee ladder is the Golden Partners market-access ladder; confirm it is
  Shalev's too.
