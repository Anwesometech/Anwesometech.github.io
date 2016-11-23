var gulp = require('gulp')
var browserify = require('browserify')
var ws = require('fs').createWriteStream('./bundle.js')
gulp.task('compileES6',()=>{
    browserify('index.js').transform('babelify',{presets:['es2015','react']}).bundle().pipe(ws)
})
