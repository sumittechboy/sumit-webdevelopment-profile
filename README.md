

<!-- README for sumit-webdevelopment-profile -->

<div align="center">
	<img src="https://cdn.dribbble.com/users/5493/screenshots/14351216/media/7b1d5f7e1b1b7b6d8f2f2d3d7a4f9c2b.gif" alt="3D code animation" width="320" />
</div>

# Sumit — Web Development Practice & Projects

A curated collection of daily practice pages, small projects and experiments. Each `practice_sessions/Day X` folder is a standalone demo you can open in the browser.

---

## Projects (day-by-day)

The list below mirrors the `practice_sessions` folder. Open any `index.html` inside the listed folder to view the demo.

- Day 1 — Portfolio intro
	- Location: `public/practice_sessions/Day 1/index.html`
	- Description: Personal portfolio introduction with About, Education, Skills and a contact button. Basic layout, HTML structure and introductory CSS/JS.

- Day 2 — Text & lists
	- Location: `public/practice_sessions/Day 2/index.html`
	- Description: Headings, emphasis tags, lists and content organization. Demonstrates semantic text markup and simple styling.

- Day 3 — Images & showcase
	- Location: `public/practice_sessions/Day 3/index.html`
	- Description: Image usage, alt attributes, sizing, and a small project showcase with anchor links.

- Day 4 — Tables & menu
	- Location: `public/practice_sessions/Day 4/index.html`
	- Description: HTML table layouts, simple navigation/menu examples and accessibility-minded markup.

- Day 5 — Iframes, multimedia & forms
	- Location: `public/practice_sessions/Day 5/index.html`
	- Description: Embedded content using iframes, audio/video tags, plus form samples and basic validation UI.

- Day 6 — Semantic HTML & navigation
	- Location: `public/practice_sessions/Day 6/index.html`
	- Description: Usage of semantic elements (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) and accessible navigation patterns.

- Day 7 — Blog structure
	- Location: `public/practice_sessions/Day 7/index.html`
	- Description: Personal blog layout with articles, sections and asides. Focuses on content hierarchy and readability.

- Day 8 — Advanced CSS & toggles
	- Location: `public/practice_sessions/Day 8/index.html`
	- Description: CSS techniques, responsive rules and interactive toggles. Useful for experimenting with theme switches and small UI patterns.

Other useful pages

- `public/new.html` — ongoing project / demo page
- `public/new2.html` — another demo (if present)
- `public/index.html` — central landing page that aggregates the practice days and includes the site-wide UI (clock, projects menu, etc.)

---

## Latest changes (recent work)

Below are the most recent changes and improvements made to the site and repository:

- Extracted inline CSS and JS into separate files for performance and maintainability:
	- `public/styles.css` — central stylesheet.
	- `public/app.js` — page behavior (menu, topbar, clock, secret-book input, safe Firebase init).
	- `public/script.js` — (existing script file present in repo).
- Responsive, compact top navigation bar:
	- A topbar with an analog clock (and digital time) that appears while scrolling and hides after inactivity.
	- The topbar remains visible while hovered or touched.
	- Projects menu (dropdown) accessible from the topbar; compact and scrollable on small screens.
- Clock and accessibility:
	- Analog clock with moving hands and synchronized digital time.
	- On small screens the digital time is hidden and only the analog clock is shown.
- Security / sandboxing:
	- Iframes used across practice pages have been sandboxed (scripts blocked) to prevent embedded pages from executing scripts unexpectedly.

If you'd like a short changelog file or commit-style history inside the repo, I can generate `CHANGELOG.md` with the most recent diffs.

---

## How to run / preview locally

No build step is required. You can open pages directly in your browser or run a tiny static server.

1. Clone the repo (if not already):

```powershell
git clone git@github.com:sumittechboy/sumit-webdevelopment-profile.git
cd "sumit-webdevelopment-profile"
```

2a. Open a page directly (Windows):

```powershell
# open Day 1 example
start .\public\practice_sessions\Day 1\index.html
```

2b. Or start a simple local server (recommended for consistent behavior):

```powershell
# using Python 3
python -m http.server 8080
# then open http://localhost:8080/public/index.html
```

---

## Developer notes (quick pointers)

- Layout & styles: edits live in `public/styles.css`. If you want to tweak the navbar size or clock appearance, update that file.
- JavaScript behavior: `public/app.js` controls the topbar show/hide, project menu, secret-book input behavior and clock update. It runs after DOM load.
- Iframe sandboxing: if a particular demo needs scripts, edit the iframe `sandbox` attribute in `public/index.html` to add `allow-scripts` for that iframe only.
- Toggle the topbar hide delay by editing `SCROLL_HIDE_DELAY` in `public/app.js` (value is in milliseconds).

---

## Contact

Questions, feedback or collaboration: sumittechboy@yahoo.com

---

_README regenerated to summarize the repository and recent improvements._
