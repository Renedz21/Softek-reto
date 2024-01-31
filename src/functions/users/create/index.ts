import { handlerPath } from '@libs/handler-resolver';

export const create = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'users/create',
                // request: {
                //   schemas: {
                //     'application/json': schema,
                //   },
                // },
            },
        },
    ],
};
