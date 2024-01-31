// import schema from '../../hello/schema';
import { handlerPath } from '@libs/handler-resolver';

export const findAll = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'swapi/people/findAll',
        // request: {
        //   schemas: {
        //     'application/json': schema,
        //   },
        // },
      },
    },
  ],
};
