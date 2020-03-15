const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './public/**/*.html',
        './src/**/*.tsx',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss, cssnano]
            : []
    ],
};