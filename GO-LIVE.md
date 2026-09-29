# Go live: shalevgroup.com on Cloudflare Pages

Domain: shalevgroup.com, registered at Namecheap on 2026-09-29 (order
215406643). Registration stays at Namecheap. DNS moves to Cloudflare,
because Cloudflare Pages only serves an apex domain from a zone on
Cloudflare DNS. Hosting: Cloudflare Pages, connected to this repository,
production branch `main`, no build step, output directory `/`.

Files this repository already carries for Pages: `_headers` (cache and
security headers) and `_redirects` (www to apex). Nothing else is needed.

## 1. Create the Pages project (Cloudflare dashboard or wrangler)

Dashboard: Workers & Pages, Create, Pages, Connect to Git, pick
`benjixone/shalev`, production branch `main`, framework preset None, build
command empty, build output directory `/`, Save and Deploy. The project
name should be `shalevgroup` so the preview URL reads shalevgroup.pages.dev.

Or from a terminal (direct upload, no Git connection):

    npx wrangler login
    npx wrangler pages project create shalevgroup --production-branch main
    npx wrangler pages deploy . --project-name shalevgroup

Check the preview at https://shalevgroup.pages.dev before touching DNS.

## 2. Add the zone to Cloudflare

Cloudflare dashboard, Add a domain, `shalevgroup.com`, Free plan. Cloudflare
answers with two nameservers (they look like `ada.ns.cloudflare.com` and
`kip.ns.cloudflare.com`; use the two it actually gives). Skip the DNS
import, or delete any parking records it imports.

## 3. Point Namecheap at Cloudflare

Namecheap, Domain List, shalevgroup.com, Manage, Nameservers: choose
"Custom DNS" and enter the two Cloudflare nameservers. Save. Propagation
usually takes minutes, sometimes up to 24 hours. The Cloudflare overview
page says "Active" when it is done.

## 4. Attach the domain to the Pages project

Workers & Pages, the `shalevgroup` project, Custom domains, Set up a custom
domain: `shalevgroup.com`, then again `www.shalevgroup.com`. Cloudflare
creates the DNS records itself (CNAME to shalevgroup.pages.dev, proxied,
flattened at the apex) and issues the certificate. `_redirects` then sends
www to the apex.

## 5. Check

    curl -sI https://shalevgroup.com | head -3
    curl -sI https://www.shalevgroup.com | head -3

Apex answers 200; www answers 301 to the apex. Title "Shalev Group", hero
"We turn waste into value."

## After go-live

Every push to `main` deploys within a minute or two (Git connection) or
needs `npx wrangler pages deploy .` (direct upload). Keep SSL/TLS mode at
"Full" or "Full (strict)" in the Cloudflare zone.

## Why not GitHub Pages

A first attempt used GitHub Pages. Enabling it needs a repository admin
click that no automation here could make, and Ben asked for Cloudflare.
Cloudflare Pages also gives the CDN, the certificate and the www redirect
without extra steps.
