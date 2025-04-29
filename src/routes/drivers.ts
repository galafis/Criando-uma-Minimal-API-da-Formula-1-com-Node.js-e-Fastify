
import { FastifyInstance } from 'fastify';
import { driverController } from '../controllers/driverController';

export async function driverRoutes(app: FastifyInstance) {
    app.post('/drivers', driverController.create);
    app.get('/drivers', driverController.list);
    app.get('/drivers/:id', driverController.find);
    app.put('/drivers/:id', driverController.update);
    app.delete('/drivers/:id', driverController.remove);
}
