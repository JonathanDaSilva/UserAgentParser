module.exports = function build() {
    var tsProject = $.typescript.createProject('tsconfig.json');

    return gulp.src(CONFIG.src)
        .pipe($.typescript(tsProject))
        .pipe(gulp.dest(CONFIG.out))
}
module.exports.description = 'Compile the Typescript Code'
