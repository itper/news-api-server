import 'babel-polyfill';
import Koa from 'koa';
import router from './routes';
import Config from './config';
const app = new Koa();
app.use(async function(ctx,next){
    ctx.set('Access-Control-Allow-Origin',ctx.req.headers.origin);
    ctx.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    ctx.set("Access-Control-Allow-Credentials",true);
    await next();
});
app.use(router.routes());
app.use(router.allowedMethods());

const server = require('http').createServer(app.callback());
server.listen(Config.port,'0.0.0.0',()=>{
    console.log('listen ',Config.port);
});