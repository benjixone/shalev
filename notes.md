# Shalev Group lander: research and decisions (2026-09-29)

Brief from Ben: a super basic, clean, beautiful, mission-oriented lander for
the business with Alon Shalvi, "Shalev Group"; research, scan and define what
it is; impress and convert.

## What the record says Shalev Group is

- The signed Collaboration Agreement (Alon Shalvi and Benjamin Levenbach,
  2026-09-17) and the one-page term sheet: two friends who bring each other
  business; one agreement, then a one-page deal sheet per deal (who does
  what, the split, which costs count); 50/50 by default; contacts protected
  once named; 24-month rule; money moves within 7 days; collaborators, not
  partners; confidentiality for 3 years.
- The ShaLev Group Google Sheet (created 2026-09-22): Portfolio (waste
  management: tire, plastic, organic and medical pyrolysis, insect protein,
  waste sorting, Monaco marine life restoration; digital: client generation,
  paid growth, data labeling, AI visibility, remote teams, AI software
  build, tender aggregator, iGaming taxation for governments, phone VAT
  collection; real estate: hotels, Cabo Verde housing; class actions;
  investments: quantum cyber; agriculture: greenhouses, poultry). Pipeline
  of nine named leads. Qualifiers: volume and capacity, urgency, evidence of
  success, integrity of players, quality of product. Task bank: build the
  system, add opportunities, newsletter, one-pagers, media kits.
- Deal collaboration agreements of 2026-07-31: quantum cybersecurity
  startup funding (Ben's client, Alon's investor introductions); renewable
  energy, waste management and government projects.
- MAPM Group material (Alon, June to July 2026): advanced pyrolysis
  waste-to-value platform, biochar, carbon credits, CarbBiome (soil and
  carbon), BiNoVa (air), Coraliotech cosmetics; kiln-vs-gasification
  business case; commodities catalogue. Figures are planning-grade and
  marked "not yet confirmed by the technology partner", so the lander uses
  none of them as results.
- Alon's own document styling: deep teal accent, brass, warm paper, a serif.
  The lander keeps his teal and brass on Ben's preferred chassis.

Definition used on the page: Shalev Group originates and executes deals
across energy, waste, digital growth and land, between Israel, Europe and
Africa; qualifies both sides before anyone meets; puts terms in writing
before introductions; is paid when it closes.

## What the page contains (v3, 2026-09-29, industry structure)

Ben shared his waste-to-value research pack (deal-side companies, tyre
pyrolysis suppliers, buyers and policy across Australia, MENA, India,
Indonesia, Israel and Turkey, plus medical and electronic waste and the
claims, licences and marketing offers) and asked for the copy and
structure to fit the industry. The page now reads as a waste-to-value
operating group: hero lead names tyres, plastics and landfill streams;
who / scope / values speak of feedstock, technology, site, capital,
tonnes, permits and offtake; mission and vision follow; a streams band
lists what comes in (end-of-life and mining tyres, plastics and RDF,
landfill and legacy waste, medical and electronic waste) and what goes
out (tyre-derived fuel and pyrolysis oil, recovered carbon black, steel,
biochar, energy and syngas, carbon credits); four divisions (tyre and
plastic pyrolysis; cities and landfills; land and biochar; governments
and capital); a markets band (Europe, MENA, Australia, India and
Indonesia, Israel and Turkey) framed by the regulatory drivers in the
pack (export bans, landfill levies, stewardship schemes, producer
responsibility); how we work in industry terms; the gate addressed to
feedstock owners, technology suppliers, site partners and buyers. No
company, supplier, buyer or figure from the pack appears on the page.
Digital growth was briefly dropped from the cards and put back the same
day at Ben's request ("our strongest suit"): it is now the wide lead
card, linking to goldenpartners.co, with a new generated landfill image
for the cities and landfills card and the city image re-cut at 1400px.

## What the page contained (v2, 2026-09-29)

Nav over a photographic hero (one mission line, "Apply to work with us"),
who we are / our scope / our values, a photo band, mission and vision, four
division cards on generated images (energy and waste; digital growth, which
links to goldenpartners.co; land and buildings; governments and capital),
how we work (qualify, agree, execute), and the
gate: "Every partner qualifies first", a two-field form that submits for
review. Footer with the privacy sentence.

v1 (2026-09-29, earlier the same day) had the deal-sheet visual, the five
qualifiers, a pipeline band and drawn sector visuals. Ben asked for high
level visuals, less text, vague and simple language, mission and vision,
in the manner of the large energy and waste groups, and then named
polygreen.eco as the style, wording and copy to match. He also rejected
"Bring us a deal": people, contacts, deals and offers all qualify to work
with the group. The v1 CSS blocks are still in `css/shalev.css` for reuse.

## Left out on purpose

Counterparty names, funds and contacts (confidentiality clause). MAPM's
economics. Any email address. Photos of anyone who has not approved one.
Cities Alon is based in (unverified). In v2 also: every number, the
pipeline, the Cal.com link, the fee ladder. Nothing on the page claims a
project the group has not done; the images are labeled as illustrations
in DESIGN.md and are generic scenes.

## Domain and hosting

shalevgroup.com, bought at Namecheap on 2026-09-29. Hosting is Cloudflare Pages
connected to this repository's `main` branch, with DNS on Cloudflare and
registration kept at Namecheap; the steps, DNS records and checks
are in [GO-LIVE.md](GO-LIVE.md). Hero title since 2026-09-29: "We turn
waste into value." (option 3 of the finalist list, pending Alon's view).

## Removed 2026-09-29

The leadership tile (two operators, Ben's photo, Alon's initials) came out
at Ben's request. The person-card CSS stays for an inner page later;
`img/ben-lev.jpg` stays in the repository.

## Partners, offices, signatures (2026-09-30)

The partners section is back after Ben asked for it, now with credibility
from deck.benjix.com: Ben's portrait from the deck (img/ben-lev.webp), his
own figures (two exits, 150+ campaigns, $60M ad budget managed, six years in
Israeli special forces, University of Pennsylvania), and the Google Partner
and Meta Business Partner badges, captioned as the digital growth division's.
Alon keeps an initials tile: Ben pasted his photo in chat but no file reached
a repository. Save it as img/alon-shalvi.webp (square, 400 px) and swap the
tile. Offices: Monaco, New York, Jerusalem (partners lead, apply section,
footer). Each partner card has a WhatsApp button; no email or phone number
is printed on the page.

Email: shalevgroup.com sends and receives through Resend (verified 29 Sep:
MX to Resend inbound, eu-west-1; send.shalevgroup.com for sending). Email
signatures live in signatures/ (ben.html and alon.html are copy pages,
*.snippet.html are the raw tables for Resend templates), served at
shalevgroup.com/signatures/ and kept out of search by robots.txt and a
noindex tag. They use img/sig-lockup.png (the Shin with the Manrope wordmark, rendered at 3x, shown at 171 x 30) since 2026-09-30; img/mark-email.png stays for any old pasted copies. Profile photos: img/sig-ben.png and img/sig-alon.png (64 px circles at 3x). Alon's photo (from the portrait Ben shared 2026-09-30) is in: img/alon-shalvi.jpg (400 px, site partner card) and img/sig-alon.png (signature).

## Open

Alon's sign-off on his bio and his portrait file (img/alon-shalvi.webp); the form endpoint;
whether the fee ladder is Shalev's; whether the MAPM and Werkit names may
appear (they do now, as company names only).
