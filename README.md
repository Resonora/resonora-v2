# ResonoraV3

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.5.

## Pages and navigation

The root route lazy-loads the landing page. The shared header and footer surround the router outlet,
and their section links return to the corresponding landing-page anchors from any route. Add more
landing-page components after `app-landing-hero` in `src/app/pages/landingpage/landingpage.html`.
Add future pages as lazy-loaded routes in `src/app/app.routes.ts`. Deployments using path-based
routing must serve each prerendered route's `index.html` for direct page loads.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Production deployment

The site is configured for Vercel in `vercel.json`. Import this repository into Vercel,
use Node.js 24, and deploy the production build from `dist/resonora-v3/browser`.
The build prerenders the public routes as static HTML and hydrates them in the browser.
The Vercel configuration uses the static site preset without a catch-all SPA rewrite,
so missing pages can return a real 404. Connect `resonora.dk` in the Vercel project and follow
Vercel's domain and DNS instructions, including HTTPS verification.

Before publishing:

- Confirm the December prices and the coming-soon sound page are still appropriate.
- Prepare and review a privacy notice and applicable data protection requirements. The contact
  form uses Web3Forms. Verify the form service's
  data-processing agreement, international transfers, spam protection, and deletion
  capabilities. Web3Forms documents up to three years of retention; the intended
  three-month retention must be confirmed and implemented with the provider.
- Verify the Web3Forms account and destination inbox. Submit a test message on a Vercel
  preview and confirm receipt, reply handling, and the error fallback.
- On a Vercel preview, test direct navigation and refresh on every route, and verify
  that an unknown URL returns HTTP 404. Also check mobile and desktop layout, keyboard
  navigation, and accessibility.
- After deployment, verify HTTPS and redirects to the preferred domain, page canonicals,
  social previews, and performance. Verify the site in Google Search Console and submit
  the sitemap; review the Google Business Profile and its public business details.
- Configure monitoring, backups and a rollback procedure in the hosting account.

Each route needs a title and `description`, `image`, and `imageAlt` data in
`src/app/app.routes.ts`. Add its 1200×630 social image in `public/social/` and its URL
to `public/sitemap.xml`. The prerender configuration in `src/app/app.routes.server.ts`
covers static routes; routes with parameters require explicit prerender parameters.
Check the generated HTML and social previews after adding or changing pages.

The canonical origin in `src/app/seo-title-strategy.ts`, structured data in
`src/index.html`, sitemap and robots file use `https://resonora.dk`; update them together
if the production domain changes. Confirm the business address, phone, email and social
profile in the structured data are appropriate for public display.
Original image files remain in `public/`; the app references optimized WebP variants.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
