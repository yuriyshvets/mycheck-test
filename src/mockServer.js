import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  const server = new Server({
    environment,

    models: {
      event: Model,
    },

    seeds(server) {
      server.create('event', {
        id: 1,
        name: 'UEFA Champions League Final',
        guestsList: [
          {
            name: 'Manuel Neuer',
            id: 1,
            status: 'accepted',
            email: 'email1@gmail.com',
          },
          {
            name: 'David Alaba',
            id: 2,
            status: 'accepted',
            email: 'email2@gmail.com',
          },
          {
            name: 'Kingsley Coman',
            id: 3,
            status: 'accepted',
            email: 'email3@gmail.com',
          },
          {
            name: 'Corentin Tolisso',
            id: 4,
            status: 'declined',
            email: 'email4@gmail.com',
          },
          {
            name: 'Robert Lewandowski',
            id: 5,
            status: 'declined',
            email: 'email5@gmail.com',
          },
          {
            name: 'Thomas Müller',
            id: 6,
            status: 'accepted',
            email: 'email6@gmail.com',
          },
        ],
      });

      server.create('event', {
        id: 2,
        name: 'UEFA Europa League',
        guestsList: [
          {
            name: 'Samir Handanovič',
            id: 11,
            status: 'accepted',
            email: 'email11@gmail.com',
          },
          {
            name: 'Victor Moses',
            id: 22,
            status: 'declined',
            email: 'email22@gmail.com',
          },
          {
            name: 'Romelu Lukaku',
            id: 33,
            status: 'accepted',
            email: 'email33@gmail.com',
          },
          {
            name: 'Lautaro Martínez',
            id: 44,
            status: 'accepted',
            email: 'email44@gmail.com',
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api';

      this.get(
        '/events',
        (schema) => {
          return schema.events.all();
        },
        { timing: 1000 },
      );

      this.put(
        '/guest',
        (schema, request) => {
          return JSON.parse(request.requestBody);
        },
        { timing: 1000 },
      );
    },
  });

  return server;
}
