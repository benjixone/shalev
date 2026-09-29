# Go live: shalevgroup.com

Domain: shalevgroup.com, registered at Namecheap on 2026-09-29 (order 215406643).
Host: GitHub Pages, served from the `main` branch root of `benjixone/shalev`.
The `CNAME` file in this repository sets the custom domain once Pages is on.

## 1. Turn Pages on (once, needs repo admin)

Either in the browser: repository Settings, Pages, Source "Deploy from a
branch", branch `main`, folder `/ (root)`, Save. Or from a terminal with
the GitHub CLI logged in as benjixone:

    gh api -X POST repos/benjixone/shalev/pages \
      -f build_type=legacy -f 'source[branch]=main' -f 'source[path]=/'

Pages reads `CNAME` and sets the custom domain to shalevgroup.com by itself.
Check with:

    gh api repos/benjixone/shalev/pages

## 2. Point the domain at GitHub (Namecheap, Advanced DNS)

Delete the parking records Namecheap adds by default, then add:

| Type  | Host | Value                    | TTL       |
|-------|------|--------------------------|-----------|
| A     | @    | 185.199.108.153          | Automatic |
| A     | @    | 185.199.109.153          | Automatic |
| A     | @    | 185.199.110.153          | Automatic |
| A     | @    | 185.199.111.153          | Automatic |
| CNAME | www  | benjixone.github.io.     | Automatic |

## 3. HTTPS (after DNS resolves, usually under an hour)

    gh api -X PUT repos/benjixone/shalev/pages -F https_enforced=true

Or tick "Enforce HTTPS" on the Pages settings page once the certificate
shows as issued.

## 4. Check

    curl -sI https://shalevgroup.com | head -3
    curl -sI https://www.shalevgroup.com | head -3

Both should answer 200 (www redirects to the apex). The page title is
"Shalev Group" and the hero reads "We turn waste into value."

## Why no workflow

A first attempt used a GitHub Actions workflow to enable Pages from the
push itself. The Actions token cannot create a Pages site ("Resource not
accessible by integration"), so step 1 has to be done once by an admin.
Branch deployment needs no workflow after that: every push to `main` is
live within a minute or two.
