# It$umrou

It$umrou is a personal, browser-based money organizer and installable PWA. It tracks monthly income, assignments, bank balances, daily spending, bills, savings goals, and transaction history.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static web server. A local server is recommended for full service-worker/PWA behavior.

For example, with Python installed:

```text
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository's default branch.
3. In GitHub, open **Settings > Pages**.
4. Choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.

The app is static and needs no build step or server-side code.

## Privacy and data

App data stays in the browser's local storage unless you export it. The app does not upload your data, but browser local storage is not encrypted. The optional PIN helps prevent casual access; it is not full device security. Use the built-in backup feature before clearing browser data or moving to another device.

Backup import is a merge: matching keys are replaced by the backup, while other existing local data is preserved.
