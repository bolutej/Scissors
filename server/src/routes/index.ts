import { Request, Response, Router} from 'express'
import {createShortUrl, handleRedirect, getAnalytics} from '../controller/shortUrl.controller'; 


const router = Router();

 router.get('/healthcheck', (req: Request, res: Response) => {
     return res.send('App is healthy');
 });

 router.post("/getCustomLink", createShortUrl);

 router.get("/:shortId", handleRedirect);

 router.get("/api/analytics", getAnalytics);

export default router;