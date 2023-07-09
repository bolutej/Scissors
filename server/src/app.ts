import express from 'express';
import routes from './routes'
import bodyParser from 'body-parser'
import connectDB from './db'
import dotenv from 'dotenv'
import cors from "cors"

dotenv.config();

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(routes)
const PORT = process.env.PORT
    app.listen(PORT, () => {
    console.log(`Application Listening at http://localhost:${PORT}`);
    connectDB();
});

