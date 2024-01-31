import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayEvent } from 'aws-lambda';
import { SwapiRepository } from 'src/swapi/repository/swapi.repositorie';
import { SwapiService } from 'src/swapi/services/swapi.service';

export const main = async (event: APIGatewayEvent) => {
  try {
    const { id } = event.pathParameters || {};
    const swapiService = new SwapiService(new SwapiRepository())
    const data = await swapiService.findById(id)

    return formatJSONResponse({ result: data })
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    });
  }
};

