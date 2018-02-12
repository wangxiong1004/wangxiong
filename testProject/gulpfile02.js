var gulp = require('gulp');
var pump = require('pump');
var plugins = require('gulp-load-plugins')();   // 引入插件
var sequence = require('run-sequence');
var pngquant = require('imagemin-pngquant');

var config = {
    src: './src',
    dest: './dist'
};

// 清除编译的css文件夹
gulp.task('cleanCss', function(cb) {
    pump([
        gulp.src(config.dest + '/css'),
        plugins.clean()
    ], cb);
});

// 清除压缩后的图片文件夹
gulp.task('cleanImages', function(cb) {
    pump([
        gulp.src(config.dest + '/images'),
        plugins.clean()
    ], cb);
});

// 清除js文件夹
gulp.task('cleanJs', function(cb) {
    pump([
        gulp.src(config.dest + '/js'),
        plugins.clean()
    ], cb);
});

// 清除dist
gulp.task('clean', function(cb) {
    pump([
        gulp.src([config.dest + '/css', config.dest + '/images', config.dest + '/js', config.dest + '/*.html']),
        plugins.clean()
    ], cb);
});

/*
 * css相关 -- sass编译，自动添加前缀，压缩，自动添加版本号
 */
// sass编译 -- 运行，gulp sass
gulp.task('sass', function() {
    pump([
        gulp.src(config.src + '/scss/index.scss'),
        plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError),
        gulp.dest(config.dest + '/css/')
    ]);
});

// 编译后的css自动添加前缀 -- 运行命令 gulp autofx
gulp.task('autofx', function() {
    pump([
        gulp.src(config.dest + '/css/index.css'),
        plugins.autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }),
        gulp.dest(config.dest + '/css')
    ]);
});

// css压缩 -- 运行命令 gulp cssmin
gulp.task('cssmin', function() {
    pump([
        gulp.src(config.dest + '/css/*.css'),
        plugins.cleanCss({
            advanced: false,
            compatibility: 'ie8',
            keepBreaks: true,
            keepSpecialComments: '*'
        }),
        gulp.dest(config.dest + '/css')
    ]);
});

// css编译，添加sourcemap，自动添加前缀，压缩 gulp，改名
gulp.task('css', function(cb) {
    pump([
        gulp.src([config.src + '/scss/index.scss', '!./scss/header_activity.scss']),
        plugins.sourcemaps.init(),
        plugins.changed(config.dest + '/scss', {
            extension: '.scss'
        }),
//      plugins.watch(config.src + '/scss/*.scss'),
        plugins.sass(),
        plugins.autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }),
        plugins.cleanCss({
            advanced: false,
            compatibility: 'ie8',
            keepBreaks: true,
            keepSpecialComments: '*'
        }),
        plugins.rename({
            suffix: '.min'
        }),
        plugins.sourcemaps.write('.'),
        gulp.dest('./dist/css/dl')
    ], cb);
});

// 活动css单独打包
gulp.task('css-activity', function(cb) {
    pump([
        gulp.src(config.src + '/scss/activity/*.scss'),
        plugins.sourcemaps.init(),
        plugins.sass(),
        plugins.autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }),
        plugins.cleanCss({
            advanced: false,
            compatibility: 'ie8',
            keepBreaks: true,
            keepSpecialComments: '*'
        }),
        plugins.rename({
            suffix: '.min'
        }),
        plugins.sourcemaps.write('.'),
        gulp.dest('./dist/css/activity')
    ], cb);
});

// js 添加sourcemap 合并 压缩 更名 输出
gulp.task('js', [], function(cb) {
    pump([
        // 获取原目录下所有的js文件
        gulp.src(config.src + "/js/user/*.js"),
        // 每次打包时，只打包内容发生改变的文件
        plugins.changed(config.dest, {
            extension: '.js'
        }),
        // 生成sourcemap，需要配合后面的sourcemaps.write()
        plugins.sourcemaps.init(),
        // 执行JS合并的顺序
        plugins.order([
            'dl-login.js',
            'dl-common.js'
        ]),
        // 执行js合并
        plugins.concat('main.js'),
        // 执行JS压缩
        plugins.uglify(),
        // 执行更名操作
        plugins.rename({
            suffix: '.min'
        }),
        // 生成sourcemap
        plugins.sourcemaps.write('.'),
        // 输出至目标目录
        gulp.dest(config.dest + '/js')
        // reload({
        //  stream: true
        // })
    ], cb);
});

gulp.task('js-pc-libs', function() {
    pump([
        gulp.src(['src/js/pc-libs/*.js', 'src/js/common-libs/*.js']),
        plugins.order([
            'jquery.min.js',
            'jquery.cookie.js'
        ]),
        plugins.uglify(),
        plugins.concat('libs.js'),
        plugins.rename({
            suffix: '.min'
        }),
        gulp.dest('dist/js')
    ]);
});

gulp.task('js-wap-libs', function() {
    pump([
        gulp.src(['src/js/wap-libs/*.js', 'src/js/common-libs/*.js']),
        plugins.order([
            'zepto.min.js',
            'jquery.cookie.js',
            'ios_callback.js'
        ]),
        plugins.uglify(),
        plugins.concat('wap-libs.js'),
        plugins.rename({
            suffix: '.min'
        }),
        gulp.dest('dist/js')
    ]);
});

// 图片处理
gulp.task('images', function(cb) {
    pump([
        gulp.src(config.src + '/**/*.{png,jpg,gif,ico,jpeg}'),
        plugins.cache(plugins.imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            svgoPlugins: [{
                removeViewBox: false
            }], //不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })),
        gulp.dest(config.dest)
    ], cb);
});

// 监听任务
gulp.task('watch', [], function(cb) {
    // 监听scss变化
    gulp.watch(config.src + "/scss/*.scss", ['css']);

    // 监听活动-scss变化
    gulp.watch(config.src + "/scss/activity/*.scss", ['css-activity']);

    // 监听图片变化
    gulp.watch(config.src + "/**/*.{png,jpg,gif,ico,jpeg}", ['images']);

     // 监听js变化
    gulp.watch(config.src + "/**/*.js", ['js']);

    // 监听js-pc类库变化
    gulp.watch(['src/js/pc-libs/*.js', 'src/js/common-libs/*.js'], ['js-pc-libs'], function() {

    });

    // 监听js-wap类库变化
    gulp.watch(['src/js/wap-libs/*.js', 'src/js/common-libs/*.js'], ['js-wap-libs'], function() {

    });
});

// 默认任务
gulp.task('default', function(cb) {
    // sequence('cleanCss', 'css', 'watch', cb);
    // sequence('cleanImages', 'images', 'watch', cb);
    // sequence('cleanHtml', 'html', 'watch', cb);
    sequence(
        'clean', ['css', 'js-pc-libs', 'js-wap-libs', 'js', 'images'],
        'watch',
        cb
    )
});