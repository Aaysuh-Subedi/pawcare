import express, { Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import { connectdb } from './database/mongodb';
import { PORT } from './config';


const app : Application = express();

async function startServer() {
    await connectdb();

    app.listen(
        PORT,
        () => {
            console.log(`Server is connected: http://localhost:${PORT}`);
        }
    )
}

startServer();