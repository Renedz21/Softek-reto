// import schema from '../../hello/schema';
import { handlerPath } from '@libs/handler-resolver';

export const findPlanets = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'swapi/planets/findPlanets',
        // request: {
        //   schemas: {
        //     'application/json': schema,
        //   },
        // },
      },
    },
  ],
};
