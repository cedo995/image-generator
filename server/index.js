<<<<<<< HEAD
import { Express } from "express";
import * as dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = Express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/', (req,res) => {
    res.send('Hello from DALL-E!')
});

const startServer = async () => {
    app.listen(8080, ()=> console.log('Server listening on port 8080));
};
=======
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes );
app.use('/api/v1/dalle', dalleRoutes );

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!')
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
    } catch (err) {
        console.log(err);
    }

}
>>>>>>> 80180688ffd3de880720988b67d11f424b12e388

startServer();