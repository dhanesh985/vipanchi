# Vipanchi

A radial map of Carnatic music: all 72 janaka ragas with their janya ragas and compositions, the sthayis with a scale player, and a playable Tala Lab for the 35 Suladi talas, gati and chapu talas.

Live site: https://dhanesh985.github.io/vipanchi/

## Security

- Fully static: no backend, no forms, no accounts, no cookies, no browser storage, no analytics.
- No third-party requests. The d3 library (`vendor/`) and the fonts (`fonts/`) are served from this repository.
- A strict Content-Security-Policy in `index.html` allows only same-origin scripts, styles, fonts and images, and blocks all network calls, frames, plugins and form submissions.
- `no-referrer` policy, so following the "Listen" links to YouTube does not reveal where you came from.
- Served over HTTPS only (GitHub Pages enforces HSTS).

## Licenses

d3 is ISC licensed (`vendor/d3.LICENSE`). Yatra One, Alegreya Sans and IBM Plex Mono are under the SIL Open Font License (`fonts/*.LICENSE`).
