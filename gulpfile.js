// IMPORTS
const   { series, parallel, src, dest, watch } = require('gulp'),
        nunjucksRender = require('gulp-nunjucks-render'),
        debug = require('gulp-debug'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync').create();

// TASKS
function renderHTML() {
    return  src('src/html/pages/**/*.njk')
            .pipe(debug({title: 'Nunjucks:'}))
            // Renders template with nunjucks
            .pipe(nunjucksRender({
                path: ['src/html']
            }))
            // output files in app folder
            .pipe(dest('dist'));
}

function compileCSS() {
    return  src('src/scss/style.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(dest('dist/css'))
            .pipe(browserSync.stream());
}

function watchCSS() {
    return  watch('src/scss/**/*.scss', compileCSS);
}

function watchHTML() {
    return  watch('src/html/**/*.njk', renderHTML);
}

function watchAll() {
    return  watch(['src/html/**/*.njk', 'src/scss/**/*.scss'], parallel(renderHTML, compileCSS));
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    watchCSS()
    watch('src/html/**/*.njk').on('change', browserSync.reload);
};

// EXPORTS
exports.renderHTML = renderHTML;
exports.compileCSS = compileCSS;
exports.watchCSS = watchCSS;
exports.watchHTML = watchHTML;
exports.watch = watchAll;
exports.server = server;

exports.default = parallel(renderHTML, compileCSS);