# Film Wagera — Writers' Room & Production House

Plain HTML/CSS/JS, no build step. Same drill as the DMC site.

## Files
- `index.html` — all content
- `style.css` — colors, type, layout, the iris-wipe intro animation
- `script.js` — scroll-reveal + intro overlay cleanup

## Host on GitHub Pages
1. New repo, e.g. `filmwagera-website`.
2. Upload these files (root level, no subfolders needed here since there are no image assets).
3. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Live at `https://<your-username>.github.io/filmwagera-website/`.

## The Writers' Desk section

Added a `#desk` section between Founders and the footer, pulling real content from
Bhaskar's portfolio (https://bhaskarmishra.journoportfolio.com/) — his tagline, his
three listed scripts (Papa 101, First Million, Ash and Roots), and a link to his
full portfolio + Instagram + email. Rohan's card sits next to it as a matching
empty state ("Portfolio — coming soon") so it's a two-card row, not a lopsided one.
When Rohan has a portfolio, swap the placeholder card for the same structure as
Bhaskar's.

## Where to add more (left deliberately open)

- **Upcoming projects** — `index.html`, `#upcoming` section. There's one filled slate
  (Undercover College Drug Case Series) and three blank `<article class="slate">` blocks
  with `___________` placeholders. Copy the pattern to add a 5th, 6th, etc.
- **Founders' quotes/bios** — `#founders` section, `.founder__quote` — swap the line for
  whatever you actually want said about each of you.
- **Contact/socials** — footer has a `+ add reel / email / Instagram` placeholder span;
  replace with real `<a>` tags.
- **Real project photos/stills** — none are wired in yet (kept it typography + graphic-led
  since there's no footage yet). Once you have stills or a reel, easiest is to add an
  `assets/` folder and drop an `<img>` or embed into a slate or a new "Reel" section.

## Notes
- Fonts (Anton, Bebas Neue, Courier Prime, Inter) load from Google Fonts — needs internet,
  fine once hosted.
- The gold "shimmer" on the wordmark and the opening iris-wipe are the two intentional
  motion moments — everything else is calm on purpose.
- Respects reduced-motion settings (disables the iris wipe and shimmer for anyone who has
  that turned on system-wide).
