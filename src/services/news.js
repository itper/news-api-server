import  qs  from 'qs';
import axios from 'axios';
import Config from '../config';

const headers ={
    'accept':'application/json, text/plain, */*',
    'Accept-Encoding':'gzip, deflate',
    'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
    'Connection':'keep-alive',
    'content-type':'application/x-www-form-urlencoded',
    'Cookie':'BAIDUID=3C6E948871E6FBADC1ED4C5BE870FAD8:FG=1; BIDUPSID=3C6E948871E6FBADC1ED4C5BE870FAD8; PSTM=1477627121; MCITY=-131%3A; BDUSS=mUyYW9SeG9pYjF1UHg2MHRnTGZtWndtQ3JXZklDdXBqbHhMWlN2d21wQTRpbHRZSVFBQUFBJCQAAAAAAAAAAAEAAACru1SaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj9M1g4~TNYW; LOCALGX=%u5317%u4EAC%7C%30%7C%u5317%u4EAC%7C%30; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; BDRCVFR[C0p6oIjvx-c]=ddONZc2bo5mfAF9pywdpAqVuNqsus; BDRCVFR[S4-dAuiWMmn]=I67x6TjHwwYf0; PSINO=1; Hm_lvt_e9e114d958ea263de46e080563e254c4=1480474295,1480474499,1480477518,1480477551; Hm_lpvt_e9e114d958ea263de46e080563e254c4=1480573572; H_PS_PSSID=1423_21711_21090_17001_21454_21409_21554; H_WISE_SIDS=111548_107789_100617_100037_110136_111886_100102_103550_111154_110569_106256_108375_111124_110610_112144_112137_112108_110717_111967_110672_111550_111170_111325_112106_109587_107314_111462_112135_110031_111351_110085_111209_111219; plus_cv=1::m:d48b9a53; Hm_lvt_2b39067e768e666f600180167f68927f=1478251983,1480573605; Hm_lpvt_2b39067e768e666f600180167f68927f=1480573605',
    'Host':'m.news.baidu.com',
    'Origin':'http://m.news.baidu.com',
    'Referer':'http://m.news.baidu.com/news?fr=mohome&ssid=abbb549a&from=844b&uid=&pu=sz%40320_1001%2Cta%40iphone_2_5.1_3_537&bd_page_type=1',
    'User-Agent':'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36',
};
const body = {
    ln:20,
    wf:0,
    action:0,
    down:0,
    display_time:0,
    withtoppic:1,
    baiduid:'7C35091F8552AFD19AA4A03D0828F99B:FG=1',
    orientation:1,
    from:'news_webapp',
    pd:'webapp',
    os:'iphone',
    nids:'',
    remote_device_type:1,
    os_type:1,
    screen_size_width:412,
    screen_size_height:732,
};
export async function fetchNews(displayTime = 0){
    body['display_time'] = displayTime;
    try{
        const result = await axios(
            {
                proxy:Config.proxy,
                url:Config.newsApi,
                method:'post',
                headers,
                params:{
                    tn:'bdapibaiyue',
                    t:'newchosenlist'
                },
                data:qs.stringify(body)
            }
        );
        return result.data;
    }catch(error){
        console.log(error);
        return null;
    }
}