'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var debug = process.argv.join(',').indexOf('-d') > 0;
global.__DEBUG__ = debug;

exports.default = {
    newsApi: 'http://m.news.baidu.com/news',
    port: 60006,
    debug: debug,
    proxy: debug ? {
        host: 'localhost',
        port: 9999
    } : null
};