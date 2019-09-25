// IMPORTS
const   { series, parallel, src, dest, watch } = require('gulp'),
        nunjucksRender = require('gulp-nunjucks-render'),
        debug = require('gulp-debug'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync').create(),
        postcss = require('gulp-postcss'),
        postcssPresetEnv = require('postcss-preset-env');

// TASKS
function renderHTML() {
    return  src('src/html/pages/**/*.njk')
            .pipe(debug({title: 'Nunjucks:'}))
            // Renders template with nunjucks
            .pipe(nunjucksRender({
                path: ['src/html']
            }))
            // output files in app folder
            .pipe(dest('docs'));
}

function compileCSS() {
    return  src('src/scss/style.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(dest('docs/css'))
            .pipe(browserSync.stream());
}

function watchCSS() {
    return  watch('src/scss/**/*.scss', compileCSS);
}

function postCSS(){
    return  src('docs/css/*.css')
            .pipe(
                postcss( [postcssPresetEnv()] )
            )
            .pipe(dest('docs/css'));
}

function watchHTML() {
    return  watch('src/html/**/*.njk', renderHTML);
}

function watchAll() {
    return  watch(['src/html/**/*.njk', 'src/scss/**/*.scss'], parallel(renderHTML, compileCSS));
}

function copyAssets() {
    return  src(['src/fonts/**/*', 'src/images/**/*', 'src/js/**/*'], { base : 'src'})
            .pipe(dest('docs'))
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./docs"
        }
    });

    watchCSS()
    watchHTML()
    watch('src/html/**/*.njk').on('change', browserSync.reload);
};

// EXPORTS
exports.renderHTML = renderHTML;
exports.compileCSS = compileCSS;
exports.watchCSS = watchCSS;
exports.postCSS = postCSS;
exports.watchHTML = watchHTML;
exports.watch = watchAll;
exports.server = server;
exports.copyAssets = copyAssets;

exports.default = parallel(renderHTML, compileCSS, postCSS, copyAssets);