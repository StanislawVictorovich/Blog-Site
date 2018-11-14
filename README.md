<div align="center">
  <a href="https://github.com/StanislawVictorovich/Blog-Site">
    <img width="150" height="150" src="https://www.quickanddirtytips.com/sites/default/files/images/1125/BlogIcon.jpg">
  </a>
</div>

# Gulp + ES6 + Blog Site Web Application

# Getting started

```
git clone https://github.com/StanislawVictorovich/Blog-Site.git
cd Blog-Site
npm install
gulp start
```
Then add the loader to your `gulp` config. For example:

```js
gulp.task('watching', () => {
  return gulp.src(paths.src_js)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dst_js))
    .pipe(browserSync.stream({ match: 'dist/*.html' }))
})
```


And run `gulp` via your preferred method.

## Build Only
```
gulp build
```
## Requirements

This module requires a minimum of gulp v4.0.0.
