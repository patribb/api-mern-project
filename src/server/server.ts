import express, { Request, Response } from 'express';

const server = express();
server.use(express.json());

server.get('/', (_req: Request, res: Response) => {
    res.send('Hello World from server!');
})

export {server}