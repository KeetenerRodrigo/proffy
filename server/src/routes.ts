import express from 'express';
import ClassesCrontroller from './controllers/ClassesController';
import ConnectionsCrontroller from './controllers/ConnectionsController';

const routes = express.Router();
const classesControler = new ClassesCrontroller();
const connectionsController = new ConnectionsCrontroller();

routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;