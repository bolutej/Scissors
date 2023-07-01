import express from 'express';
import config from '../config';
import routes from './routes'

const app = express();

const port = config.port; 
app.use(routes)
app.listen(4000, () => {
    console.log(`Application Listening at http://localhost:${port}`);
});