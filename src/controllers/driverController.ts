
import { FastifyRequest, FastifyReply } from 'fastify';
import { Driver } from '../models/driver';
import { drivers } from '../database/drivers';

// Aqui futuramente poderia integrar um banco de dados real usando um ORM como Prisma!

export const driverController = {
    async create(request: FastifyRequest<{ Body: Driver }>, reply: FastifyReply) {
        const { name, team } = request.body;
        const newDriver = { id: Date.now().toString(), name, team };
        drivers.push(newDriver);
        return reply.code(201).send(newDriver);
    },

    async list(request: FastifyRequest, reply: FastifyReply) {
        return reply.code(200).send(drivers);
    },

    async find(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const driver = drivers.find(d => d.id === request.params.id);
        if (driver) {
            return reply.code(200).send(driver);
        }
        return reply.code(404).send({ message: 'Piloto não encontrado.' });
    },

    async update(request: FastifyRequest<{ Params: { id: string }, Body: Driver }>, reply: FastifyReply) {
        const index = drivers.findIndex(d => d.id === request.params.id);
        if (index !== -1) {
            drivers[index] = { ...drivers[index], ...request.body };
            return reply.code(200).send(drivers[index]);
        }
        return reply.code(404).send({ message: 'Piloto não encontrado para atualização.' });
    },

    async remove(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const index = drivers.findIndex(d => d.id === request.params.id);
        if (index !== -1) {
            drivers.splice(index, 1);
            return reply.code(200).send({ message: 'Piloto removido com sucesso.' });
        }
        return reply.code(404).send({ message: 'Piloto não encontrado para exclusão.' });
    }
};
