import { defineConfig } from 'vite';

// base './' lets the built site work from a GitHub Pages project URL
// (https://<username>.github.io/<repo>/) as well as a custom domain.
export default defineConfig({ base: './' });
