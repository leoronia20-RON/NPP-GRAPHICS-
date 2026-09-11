# Nyamitanga Printing Press — Local Preview

Open the project in VS Code and preview the site locally.

Recommended (Live Server extension)

1. Install the **Live Server** extension in VS Code.
2. Open `index.html` in the editor.
3. Right-click the editor → **Open with Live Server** or use the Command Palette: **Live Server: Open with Live Server**.

Alternative — Quick (Windows)

From the project folder you can open the page in your default browser:

```powershell
start index.html
```

Alternative — Local HTTP server (Python)

From the project folder run:

```bash
python -m http.server 5500
# then open http://localhost:5500 in your browser
```

Helper scripts (included)

- `serve.ps1` — runs a Python static server on port 5500 and opens the default browser.
- `open.bat` — opens `index.html` in the default browser.

Notes

- Make sure `index.html` and `style.css` are in the same folder as the images (project root).
- If you want I can add a `package.json` and Node-based dev server instead.
