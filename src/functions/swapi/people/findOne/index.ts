// import schema from '../../hello/schema';
import { handlerPath } from '@libs/handler-resolver';

export const findById = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'swapi/people/findOne/{id}',
        // request: {
        //   schemas: {
        //     'application/json': schema,
        //   },
        // },
      },
    },
  ],
};
