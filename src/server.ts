
import Fastify from 'fastify';
import { driverRoutes } from './routes/drivers';

const app = Fastify();

app.register(driverRoutes);

app.listen({ port: 3333 }, () => {
    console.log('Servidor rodando em http://localhost:3333');
});
