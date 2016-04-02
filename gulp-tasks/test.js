var build = require('./build.js')

module.exports = gulp.series(
    build,
    function test() {
        return gulp.src(CONFIG.test)
            .pipe($.mocha({
                bail: true
            }))
    }
)
module.exports.description = 'Launch unit test'
