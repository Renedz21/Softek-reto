// import schema from '../../hello/schema';
import { handlerPath } from '@libs/handler-resolver';

export const findOnePlanet = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'swapi/planets/findOnePlanet/{id}',
        // request: {
        //   schemas: {
        //     'application/json': schema,
        //   },
        // },
      },
    },
  ],
};
