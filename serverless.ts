import type { AWS } from '@serverless/typescript';

import { findAll, findById, findOnePlanet, findPlanets, create } from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'softek',
  frameworkVersion: '3',
  plugins: [
    'serverless-auto-swagger',
    'serverless-esbuild',
    'serverless-offline',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: [
              "dynamodb:PutItem",
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem"
            ],
            Resource: "arn:aws:dynamodb:us-east-1:381492308629:table/users"
          }
        ]
      }
    }
  },
  // import the function via paths
  functions: {
    findAll,
    findById,
    findOnePlanet,
    findPlanets,
    create
  },
  package: { individually: true },
  custom: {
    autoSwagger: {
      enabled: true,
      output: 'swagger.json',
      endpoint: '/swagger',
      title: 'Softek',
      version: '1.0.0',
      description: 'Softek API',
      contact: {
        name: 'Softek',
      }
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      "usersTable": {
        "Type": "AWS::DynamoDB::Table",
        Properties: {
          TableName: "users",
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "S"
            },
            {
              AttributeName: "email",
              AttributeType: "S"
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH"
            },
            {
              AttributeName: "email",
              KeyType: "RANGE"
            },
          ],
          BillingMode: "PAY_PER_REQUEST"
        }
      }
    },
  }
};

module.exports = serverlessConfiguration;
