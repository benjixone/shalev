# Design system: Shalev Group

Mode: brand
Owner: Ben Lev, with Alon Shalvi. Updated: 2026-09-29 (v2, photographic). Source of truth for
`index.html` and `css/shalev.css` in this repository.

## 0. Lineage: which source decided what

| Decision | Source | What it said |
|---|---|---|
| The Local Growth Partner chassis: one sans family (Manrope) at display weights with tight tracking, the page as a stack of white, gray, tonal and dark tiles, a centered hero with the product on a gray stage, pill buttons, no borders on cards, one product shadow | Ben's stated preference (2026-09-22: "the fonts, the layout, everything is so much better there") and `localgrowthpartner/DESIGN.md` | Shalev is the third site on this chassis after Local Growth Partner and Golden Partners; each keeps its own tokens. |
| Deep teal (#1F4E5F) as the accent and brass (#A87B2F) as the second, warmer accent | Alon Shalvi's own document styling (`Why_These_Rules.html`, shared 2026-09-01: accent #1F4E5F, brass #A87B2F, warm paper) and the Golden Partners gold | The two partners' colours, side by side. The mark is two overlapping rounded squares, teal and brass. |
| v2 (2026-09-29): a photographic page in the register of the large energy and waste groups, with the deal sheet retired from the hero | Ben (2026-09-29: "high level visuals, generate things from Higgsfield, less text, stay vague, mission vision, inspired by huge energy / waste management companies"; then "I like their style and wording and copy" on polygreen.eco; then "people have to qualify even to work with us, we don't work with anyone") | Six images generated with Higgsfield (gpt-image, see section 9), a who / scope / values trio and a mission / vision pair in the Polygreen manner, a four-card division grid, and the close rewritten as a qualification gate ("Every partner qualifies first", "Submit for review") instead of "Bring us a deal". |
| The deal sheet as the hero product, with the five qualifiers beside it | The signed Collaboration Agreement (2026-09-17: "one page per deal, saying who does what, the split, and which costs count") and the ShaLev Group sheet's Qualifiers tab (volume and capacity, urgency, evidence of success, integrity of players, quality of product) | The most characteristic artifact of this business is the one-page deal sheet. Showing it, labeled as an illustration, says how the group works better than any paragraph. |
| Four sectors from the ShaLev Group sheet's Portfolio tab: energy and waste; digital growth; land and buildings; governments and capital | The sheet (2026-09-22) | Sector visuals are drawn in CSS: a feedstock-to-outputs flow, three real numbers from Golden Partners, a sponsor/site/offtake bar set, the success-fee ladder from the business book. |
| Pipeline band with five anonymized live items | The sheet's Pipeline tab | Countries and deal types only, no counterparty names. |
| Two people, one photo | Ben's portrait exists; no approved photo of Alon | Alon gets an initials tile until he supplies a photo. His bio line needs his sign-off (see gaps). |
| No email address, two-field form, Cal.com link | Ben (2026-09-22: no email on a site) | Form posts to an endpoint once set; until then it confirms and logs. |
| Anti-patterns avoided | `design-principles`, `frontend-design` | No cream-and-terracotta, no uppercase tracked labels, no icon library, no stock photos, no fabricated metrics (every number on the page is Golden Partners' own or the book's fee ladder), illustrations labeled as such. |

## 1. Overview and atmosphere

A page for a serious counterparty: a technology owner, a project sponsor, an
investor, a government contact. It should feel like a large group's front
door: a wide photograph, a few institutional statements, and a gate. The
visitor applies; the group selects. "Shalev" means calm in Hebrew, and the
page is built to read that way: white canvas, one deep teal, one brass,
short declarative lines, one photograph per idea. Density 2, variance 3,
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
under 1040, 64px under 600. Order: photographic hero (88vh, copy bottom
left over a teal gradient), who / scope / values trio (3-up), full-width
photo band (64vh), mission / vision pair on the tonal tile, division cards
2 by 2 (4:3, photo with a bottom gradient and the title on it), how we work
3-up on the dark tile, the gate 1fr:480px on the dark tile. The leadership
tile was removed on 2026-09-29. Everything single column under 1040. The v1 deal-sheet stage,
pipeline band and drawn sector visuals remain in the CSS but are no longer
on the page.

## 5. Elevation, shapes, motion

Flat tiles; the one product shadow on the form card. Photographs carry
their own depth; cards get a 3% zoom on hover. Radii 12, 20, 28, 36 and pill. One page-load rise on the
hero stack and the stage; nothing on scroll; reduced motion shows the final
state.

## 6. Components

Nav (absolute over the hero, transparent, white links, one brass pill
"Apply"). Photo hero. Statement trio (eyebrow, display-sm, one line of
body). Photo band. Mission / vision pair. Division card (photo, gradient,
title and one line). Step card on Tile 2 with a two-digit number. Person
card (photo or initials, name, role in brass ink, one line). Form card
titled as a review, not a message ("What are you bringing?", "Submit for
review"). Footer with the privacy sentence inline.

## 7. Do and don't

- Do label every illustration. Don't show a deal sheet that could read as
  a live deal.
- Do name sectors and countries. Don't name counterparties, funds or
  contacts: the collaboration agreement's confidentiality clause covers
  them.
- Do keep the two partners' colours. Don't add a third accent.
- Do keep numbers to what has paperwork. v2 prints no numbers at all.
- Do write like a group that selects. Don't write "bring us a deal",
  "talk to us" or anything that asks; the visitor applies and qualifies.
- Do keep the copy high level. Don't add paragraphs; one line under each
  statement is the ceiling.

## 8. Copy register (from polygreen.eco, 2026-09-29)

Ben pointed at Polygreen as the wording to match. What was taken: a
single all-purpose mission line as the hero; a who we are / our scope /
our values trio; separate mission and vision statements; divisions named
as a group's divisions, not services; a company that speaks about itself
in the first person plural and never sells. What was not taken: their
sentences (nothing is copied), the uppercase headings (the chassis is
sentence case), news and case studies (none to show yet).

### Copy pass of 2026-09-29 (Ben: "this copy needs to be much better researched")

Statements read before rewriting the trio and the mission / vision pair:
Veolia (mission "Resource the World"; purpose "reconciling human progress
with environmental protection"; "we develop and implement locally"),
Reworld ("Others see waste. We see potential."), Renewi ("New life for
used materials"; mission "to protect the world by breathing new life into
used materials"), SUEZ ("we design, develop and deploy"), Orsted ("we
provide countries, companies and communities with reliable energy"),
Brookfield ("owner-operator approach", "operating the assets and
businesses that drive the global economy"), Bechtel ("we deliver
challenging projects that elevate standards of living"), ITOCHU
(sampo-yoshi, "good for the seller, the buyer and society"), Polygreen
("Nothing in excess"; vision "a viable place to live in, now and in the
future"). The pattern: who we are names the kind of company and how it
behaves; scope names the arenas; values are two or three principles;
mission is what the company does and for whom; vision is the world it
leads to. Every line on the page is drawn from the group's own record
(operators who originate and execute; qualifiers of integrity, evidence,
urgency; four divisions; three regions), not from any of the sources.

Who we are: "Operators, not advisors." Scope: "Four divisions. One group."
Values: "Nothing wasted." with integrity, evidence and scarcity as the
three principles. Mission: "Bring the project, the partner and the capital
together. Then see it through." Vision: "Cleaner cities, stronger markets,
and value that stays where it is made."

## 9. Images

Six generated with Higgsfield gpt-image on 2026-09-29, prompted from the
four divisions and the mission, resized and stripped to WebP in the
Higgsfield sandbox, then carried into the repository as verified base64
slices (md5 checked). Hero 1400px (a coastal waste-to-energy plant at
sunrise), band 1200px (young trees and solar over a foggy valley, plant on
the ridge), four cards at 720px (biochar pouring from a hopper; a city
seen from above at night; a coastal estate with greenhouses; a civic
building at dusk). They are illustrations of the divisions, not
photographs of Shalev projects, and must not be captioned as such.

## 10. Known gaps

- Alon Shalvi's bio line and the absence of his photo: needs his sign-off
  and a portrait.
- Form endpoint not set (`js/site.js`), so nothing is delivered yet.
- Domain: shalevgroup.com (Namecheap, 2026-09-29). Hosting: Cloudflare Pages, DNS on Cloudflare, see GO-LIVE.md.
- The Cal.com link and the fee ladder left the page in v2; both can come
  back on an inner page if Ben wants them.
