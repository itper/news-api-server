const router = require('koa-router')();
import controllers from '../controllers';
router.get('/news',controllers.fetchNews);

export default router;