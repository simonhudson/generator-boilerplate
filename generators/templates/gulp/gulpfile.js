var gulp = require('gulp');
<% for (var i in gulpTasks) { %>
var <%= i %> = require('<%= gulpTasks[i] %>');
<% } %>

var dirs = {
    src: './src/',
    dest: './app/'
};
var config = {
    src: {},
    watch: {},
    dest: {}
};
    config.src.assets       = dirs.src + 'assets/';
    config.watch.assets     = config.src.assets;
    config.dest.assets      = dirs.dest + 'assets/';

var config = {
    src: {
        controllers:    config.src.assets + 'js/controllers/',
        css:            config.src.assets + 'css/',
        fonts:          config.src.assets + 'fonts/',
        pages:           dirs.src + 'pages/',
        imgs:           config.src.assets + 'imgs/',
        js:             config.src.assets + 'js/',
        libs:           config.src.assets + 'libs/',
    },
    watch: {
        controllers:    config.watch.assets + 'js/controllers/**/*.js',
        css:            config.watch.assets + 'css/**/*.{less,scss,css}',
        pages:           dirs.src + 'pages/**/*.{html,php}',
        js:             config.watch.assets + 'js/**/*.js',
        imgs:           config.watch.assets + 'imgs/**/*.{gif,jpg,jpeg,png,svg}',
    },
    dest: {
        css:        dirs.dest + 'assets/css/',
        fonts:      dirs.dest + 'assets/fonts/',
        imgs:       dirs.dest + 'assets/imgs/',
        js:         dirs.dest + 'assets/js/',
        libs:       dirs.dest + 'assets/libs/',
        views:      dirs.dest + 'views/',
        root:       dirs.dest
    }

};

/***
Clean output dir
***/
gulp.task(
    'del', [
        'delcss',
        'deljs',
        'delimgs'
    ]
);
gulp.task('delcss', function() {
    del(config.dest.css + '*.css');
});
gulp.task('deljs', function() {
    del(config.dest.js + 'main.js');
    del(config.dest.js + 'main.min.js');
});
gulp.task('delimgs', function() {
    del(config.dest.imgs + '**/*.{gif,jpg,jpeg,png,svg}');
});

/***
Sass -> CSS
***/
gulp.task('sass', function () {
    return sass(config.src.css + 'main.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(rename('main.css'))
        .pipe(gulp.dest(config.dest.css));
});

/***
Minify CSS
***/
gulp.task('minifycss', ['sass'], function() {
    gulp.src(config.dest.css + 'main.css')
        .pipe(rename('main.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(config.dest.css));
});

/***
Concatenate JS
***/
gulp.task('concatjs', ['deljs'], function() {
    return gulp.src([config.src.js + 'services/*.js', config.src.js + 'modules/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.dest.js));
});

/***
Minify JS
***/
gulp.task('minifyjs', ['concatjs'], function() {
    return gulp.src(config.dest.js + 'main.js')
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.js));
});

/***
Minify libs
***/
gulp.task('minifylibs', function() {
    return gulp.src(config.dest.libs + '**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.libs));
});

/**
Minify images
***/
gulp.task('imagemin', ['delimgs'], function () {
    return gulp.src(config.src.imgs + '**/*.{gif,jpg,jpeg,png,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest.imgs));
});

/***
Copy pages
***/
gulp.task('copypages', function() {
    return gulp.src(config.src.pages + '**/*.{html,php}')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task(
    'default', [
        'minifycss',
        'minifylibs',
        'imagemin',
        'copypages'
    ]
);

gulp.task('serve', ['default'], function () {
    gutil.log('Initiating watch');

    // browserSync = browserSync.create();
    // browserSync.init({
    //     notify: true,
    //     server: {
    //         baseDir: config.dest.root
    //     },
    //     files: [
    //         config.dest.root,
    //         config.dest.css,
    //         config.dest.js,
    //         config.dest.libs,
    //         config.dest.views,
    //         config.dest.root
    //     ],
    //     injectChanges: true
    // });

    gulp.watch(config.watch.css, { interval: 1000 }, ['minifycss']);
    gulp.watch(config.watch.js, { interval: 1000 }, ['minifyjs']);
    gulp.watch(config.watch.pages, { interval: 1000 }, ['copypages']);
});