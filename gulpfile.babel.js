import browserify from 'browserify'
import riotify from 'riotify'
import gulp from 'gulp'
import uglify from 'gulp-uglify'
import cssmin from 'gulp-cssmin'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserSync from 'browser-sync'


// Path configuration...
const entryPoint = './src/bundle.js'
const browserDir = './build'
const sassWatchPath = './src/styles/**/*.scss'
const jsWatchPath = './src/**/*.js'
const tagWatchPath = './src/tags/**/*.tag'
const htmlWatchPath = './**/*.html'


gulp.task('js', () => {
    return browserify(entryPoint, {debug: true, extensions: ['es6']})
          .transform('babelify', {presets: ['es2015']})
          .transform('riotify')
          .bundle()
          .pipe(source('bundle.js'))
          .pipe(buffer())
          .pipe(sourcemaps.init({loadMaps: true}))
       // .pipe(uglify())
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('./build/js/'))
          .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', () => {
    const config = {
        server: {baseDir: browserDir},
        open: false,
    }

    return browserSync(config)
})

gulp.task('sass', () => {
  return gulp.src(sassWatchPath)
             .pipe(sourcemaps.init())
             .pipe(sass().on('error', sass.logError))
             .pipe(autoprefixer({
                 browsers: ['last 2 versions']
             }))
             .pipe(cssmin())
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('./build/css'))
             .pipe(browserSync.reload({stream: true}))
})

gulp.task('watch', () => {
    gulp.watch(jsWatchPath, ['js'])
    gulp.watch(tagWatchPath, ['js'])
    gulp.watch(sassWatchPath, ['sass'])
    gulp.watch(htmlWatchPath, function () {
        return gulp.src('')
                   .pipe(browserSync.reload({stream: true}))
    })
})

gulp.task('default', ['js', 'sass', 'watch', 'browser-sync'])
