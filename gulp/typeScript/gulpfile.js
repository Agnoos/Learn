const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function trasformacaoTS(){
    return tsProject.src()
        .pipe(tsProject()) // compilacao, gulp typescript 
        .pipe(gulp.dest('build'))
}

exports.default = series(trasformacaoTS)