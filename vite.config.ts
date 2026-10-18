import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [{
    name: 'css-interno-estatico',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const html = bundle['index.html'];
      if (!html || html.type !== 'asset' || typeof html.source !== 'string') return;
      html.source = html.source.replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g, (link) => {
        const href = link.match(/href="([^"]+)"/)?.[1]?.replace(/^\.\//, '');
        const stylesheet = href ? bundle[href] : undefined;
        if (!stylesheet || stylesheet.type !== 'asset' || typeof stylesheet.source !== 'string') return link;
        const css = stylesheet.source.replace(/url\((['"]?)\.\.\//g, 'url($1./');
        delete bundle[stylesheet.fileName];
        return `<style>${css}</style>`;
      });
    },
  }],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
