# Fixing 404 NOT_FOUND on Cloudflare Pages (SPA)

This doc explains why you see **404 NOT_FOUND** when opening or refreshing routes like `/about`, `/fleet`, or `/contact`, and how to fix it for good.

---

## 1. The fix (do this first)

### On Cloudflare Pages dashboard

1. Go to **Workers & Pages** → your project → **Settings** → **Builds & deployments**.
2. Set **Build configuration**:
   - **Root directory**: If your repo has the app in a subfolder (e.g. `dhia-vip-drive-main`), set it to that folder. Otherwise leave empty.
   - **Build command**: `npm run build`
   - **Build output directory** / **Publish directory**: `dist`
3. Save and trigger a **new deployment** (e.g. **Retry deployment** or push a commit).

Important: the **published** site must be the contents of `dist` (where `index.html` lives). If you publish the repo root or the wrong folder, there is no `index.html` at the “root” and every request returns 404.

### Do not add a custom 404 page

- Do **not** set a custom **404 page** in Cloudflare to a path that serves a real file (e.g. `/404.html`).
- Do **not** put a `404.html` file in `public/` or in `dist/`.  
If a top-level `404.html` exists, Cloudflare **turns off** SPA behavior and you get 404 for all non-root routes.

---

## 2. Root cause: what the code does vs what it should do

### What’s actually happening

- Your app is a **single-page application (SPA)**. The server only has one real “page”: **`index.html`**.
- All routes (`/`, `/about`, `/fleet`, `/contact`, etc.) are handled **in the browser** by React Router. The server never sees `/about` as a folder or file; it only sees a request for the path `/about`.
- When you open or refresh `yoursite.com/about`:
  1. The browser asks the server for the resource at `/about`.
  2. The server looks for a **file** at `/about` (or `/about/index.html`).
  3. If the server is not configured for SPAs, it finds nothing and returns **404 NOT_FOUND**.
  4. The HTML (and thus your React app) never loads, so React Router never runs and cannot show the “About” page.

So the 404 is from the **host** (e.g. Cloudflare), not from your React code. Your code is correct; the deployment configuration is wrong.

### What should happen

- For **any** path that doesn’t match a real static file (e.g. `/about`, `/fleet`, `/contact`), the server should respond with **`index.html`** and status **200**.
- The browser loads your app once; React Router then reads the URL and shows the right page. So the server’s job is only to serve `index.html` for those “virtual” routes.

---

## 3. Why this error exists and the right mental model

### Why 404 exists

- HTTP has a clear rule: “this URL does not correspond to any resource” → **404 Not Found**.
- For a **multi-page** site, that’s correct: `/wrong-page` really doesn’t exist.
- For an **SPA**, almost all paths are “virtual”: they exist only inside the client app. The server has one physical “resource” (`index.html`) that should be sent for all of them. If the host doesn’t know that, it correctly (from its point of view) returns 404.

So the error is “protecting” you from serving the wrong thing when the server thinks there is no resource. The fix is to tell the host: “for these paths, the resource is `index.html`.”

### Correct mental model

- **Server**: Serves static files. For any path that is not a real file, it must serve `index.html` (SPA fallback).
- **Client**: Loads `index.html` once; React Router uses the URL to render the right component.
- **Deploy**: The **build output** (e.g. `dist`) must be what’s published, and the host must be set to use **SPA behavior** (or equivalent) so that “unknown” paths return `index.html`.

---

## 4. Warning signs and how to avoid this again

### Things to watch for

- **Opening or refreshing a non-root URL** (e.g. `/about`) and getting 404.
- **404 from the host** (e.g. Cloudflare’s NOT_FOUND page) instead of your app’s own “Not found” screen.
- **Build output directory** not set to `dist` (or whatever your build emits).
- **Publishing the repo root** instead of the build output, so `index.html` is not at the site root.
- **Adding a `404.html`** or enabling a “custom 404 page” that points to a real file; that disables SPA behavior on Cloudflare.

### Similar mistakes

- Deploying from the wrong branch so an old build (without SPA config) is live.
- Using a host that doesn’t support SPA fallback and not adding a `_redirects` (or equivalent) or not setting “SPA” in the dashboard.
- Putting `_redirects` in the wrong place so it never gets into the **published** folder (e.g. not in `public/` for Vite, or not in the folder that becomes the site root).

### Code smells / patterns

- Repo has both “site” and “app” folders: you must set **root directory** and **publish directory** so the **app’s** `dist` is what’s deployed.
- You only test by opening the site at `/` and clicking links; always also test by opening and refreshing deep links (e.g. `/about`, `/fleet/1`).

---

## 5. Alternatives and trade-offs

| Approach | Trade-off |
|----------|------------|
| **Cloudflare “no 404.html” SPA behavior** | Easiest. Publish directory must be `dist` and no top-level `404.html`. |
| **`_redirects` with `/* /index.html 200`** | Works on Cloudflare Pages and Netlify. Must live in build output (e.g. in `public/` so it’s copied to `dist`). |
| **Custom 404 page = `/index.html` in dashboard** | Some hosts let you set “404 page” to `index.html` so all missing paths serve the SPA. Equivalent to SPA mode. |
| **Pages / serverless function** | A function that serves `index.html` for non-asset paths is flexible but adds complexity and possible cost. Use if the host doesn’t support SPA or _redirects. |
| **Hash routing (`#/about`)** | No 404 from server, but ugly URLs and worse SEO; not recommended for new apps. |

For this project, the intended approach is: **correct Build output directory + no 404.html**, and optionally **`_redirects`** in `public/` as a backup where supported.

---

## Checklist

- [ ] **Build output directory** in Cloudflare = `dist`
- [ ] **Root directory** = app folder (e.g. `dhia-vip-drive-main`) if your repo has one
- [ ] No **404.html** in `public/` or in the published output
- [ ] No custom **404 page** in dashboard pointing to a real file
- [ ] New deployment run after changing these settings
- [ ] Test: open `https://yoursite.com/about` and refresh; you should see the app, not 404
