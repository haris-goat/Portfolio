# Medical Student ePortfolio

A static, single-page ePortfolio for a medical student. Plain HTML/CSS/JS: no build step, no dependencies.

**Sections:** Personal statement · Education & certifications · Clinical rotations · Research, audit & publications · Clinical skills/procedures log · Teaching, leadership & volunteering · Awards · Reflective practice (Gibbs' cycle, filterable) · Contact · Downloadable CV

**Features:** responsive (mobile menu), light/dark mode, accessible (skip link, keyboard focus, semantic markup), print stylesheet (Ctrl/Cmd+P gives a clean paper copy for interviews/ARCP-style reviews).

## Preview locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Personalise it

Everything you need to change is in `index.html`, marked with `<!-- EDIT -->` comments. All current text is **placeholder/example content**, so replace it before publishing.

| What | Where |
|---|---|
| Name, title, meta description | `<title>`, `<meta name="description">`, `.brand`, `<h1>` |
| Initials in the logo | `<span class="brand-mark">YN</span>` |
| Photo | Add `assets/profile.jpg` and change the `<img src>` in the hero |
| CV | Replace `assets/cv.pdf` with your own (same filename) |
| Rotations / cards | Copy an `<article class="card">` block |
| Procedures | Edit table rows; level class is `competent`, `supervised` or `observed` |
| Reflections | Copy a `<details class="reflection">` block; `data-tags` must match a filter button's `data-filter` |
| Colours | `--accent` variables at the top of `styles.css` |

## Publish free with GitHub Pages

1. Merge this branch into `main`.
2. Repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. Site appears at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Professional cautions

- **Patient confidentiality:** never include names, dates, locations, photos or any detail that could identify a patient, even in reflections. Follow your medical school's and regulator's guidance (e.g. GMC *Achieving good medical practice*, or your national equivalent).
- **Accuracy:** only claim procedures, grades and publications you can evidence; selection panels check.
- **Privacy:** use a university email; don't publish your phone number or home address.
