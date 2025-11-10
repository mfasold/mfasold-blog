const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/core/layouts/**/*.html',
        './themes/my-bootstrap-theme/layouts/**/*.html',
        './content/**/*.md',
        './layouts/**/*.html',
      ],
      extractors: [
        {
          extractor: (content) => {
            const els = JSON.parse(content).htmlElements;
            return els.tags.concat(els.classes, els.ids);
          },
          extensions: ['json'],
        },
      ],        
      dynamicAttributes: [
        'aria-expanded',
        'id',
        'size',
        'type',
      ],        
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h1',
        'h2',
        'h3',
        'alert-link',
        'img-fluid',
        'lazyload',
        'blur-up',
        'pre',
        ...whitelister([
          './node_modules/@hyas/core/assets/scss/app.scss',
        ]),
      ],
    }),
  ],
}
