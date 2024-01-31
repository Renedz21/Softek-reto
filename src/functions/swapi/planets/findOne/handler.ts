import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayEvent } from 'aws-lambda';

import { SwapiRepository } from 'src/swapi/repository/swapi.repositorie';
import { SwapiService } from 'src/swapi/services/swapi.service';

export const main = async (event: APIGatewayEvent) => {
  try {
    const { id } = event.pathParameters || {};
    const swapiService = new SwapiService(new SwapiRepository())
    const result = await swapiService.findOnePlanetById(id)
    return formatJSONResponse({
      result: result.results
    })
  } catch (error) {
    return formatJSONResponse({
      message: error.message,
    });
  }
};