import express from 'express';
import './shared/services/TranslationsYup';
import router from './routes';


const server = express();
server.use(express.json());

// NOTE: Routes
server.use('/api', router);

export {server}