import * as service from '../services/news';

export async function fetchNews(ctx){
    const {displayTime=0} = ctx.query;
    const data = await service.fetchNews(displayTime);
    ctx.body = {
        code:0,
        msg:'success',
        data
    }
}