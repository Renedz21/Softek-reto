import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";


import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayEvent } from 'aws-lambda';
import { v4 } from 'uuid'

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async (event: APIGatewayEvent) => {
    try {
        const { email } = JSON.parse(event.body);
        const id = v4()

        const newUser = {
            email,
            id
        }

        const command = new PutCommand({
            TableName: 'users',
            Item: newUser
        })

        const response = await docClient.send(command)
        console.log(response)
        return formatJSONResponse({
            message: response
        });
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
        });
    }
};

