var gulp          = require('gulp')
var requireDir    = require('require-dir')
var gulpPlugins   = require('gulp-load-plugins')
var YAML          = require('yamljs')

// Make available to every file some variable
global.gulp   = gulp
global.$      = gulpPlugins()
global.CONFIG = YAML.load('./gulp-tasks/config.yaml')

// Load all the tasks
var tasks = requireDir('./gulp-tasks')
for(var name in tasks) {
  gulp.task(name, tasks[name])
}
