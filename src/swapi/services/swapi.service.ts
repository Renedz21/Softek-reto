import { translate } from "@libs/swapi";
import { SwapiRepository } from "../repository/swapi.repositorie";

export class SwapiService {
    constructor(
        private readonly swapiRepository: SwapiRepository
    ) { }

    public async findAll(search: string) {
        const data = await this.swapiRepository.findAll(search)
        const dataTranslated = translate(data)
        return dataTranslated
    }

    public async findById(id: string) {
        const data = await this.swapiRepository.findById(id)
        const dataTranslated = translate(data)
        return dataTranslated
    }

    public async findAllPlanets(search: string) {
        const data = await this.swapiRepository.findAllPlanets(search)
        return data
    }

    public async findOnePlanetById(id: string) {
        const data = await this.swapiRepository.findOnePlanet(id)
        return data
    }
}