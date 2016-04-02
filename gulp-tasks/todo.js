module.exports = function() {
  return gulp.src(CONFIG.source)
    .pipe($.todo({ verbose: true }))
}
module.exports.description = 'Report //TODO and //FIXME present in the code'
