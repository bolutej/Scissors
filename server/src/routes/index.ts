import { Request, Response, Router} from 'express'
import {createShortUrl} from '../controller/shortUrl.controller'; 


const router = Router();

 router.get('/healthcheck', (req: Request, res: Response) => {
     return res.send('App is healthy');
 });

 router.post('/getCustomLink', createShortUrl);

export default router;