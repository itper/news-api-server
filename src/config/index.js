const debug = process.argv.join(',').indexOf('-d')>0;
global.__DEBUG__ = debug;

export default {
    newsApi : 'http://m.news.baidu.com/news',
    port : 60006,
    debug,
    proxy:debug?{
        host: 'localhost',
        port: 9999,
    }:null
}