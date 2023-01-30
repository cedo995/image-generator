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

startServer();