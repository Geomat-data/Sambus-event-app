SAMBUS EVENT APP — SOURCE CODE
================================
Static web prototype (no build step required)

QUICK START
-----------
1. Open this folder in VS Code
2. Install the "Live Server" extension
3. Right-click index.html → Open with Live Server
   → App runs at http://127.0.0.1:5500

OR via terminal:
  python3 -m http.server 8090
  open http://localhost:8090

FILES
-----
  index.html  — App shell: all 8 pages + JavaScript router
  data.js     — All mock data: sessions, speakers, products, events
  styles.css  — Base design system (tokens, dark mode, utilities)
  sambus.css  — Sambus brand layer (navy/green, components)
  theme.js    — Light/dark mode toggle

DEPLOY
------
  Netlify Drop: drag this folder to app.netlify.com/drop
  GitHub Pages: push to repo → Settings → Pages → main branch

Built with Obvious · March 2026
