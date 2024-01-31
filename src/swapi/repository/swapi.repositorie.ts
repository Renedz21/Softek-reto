import axios from 'axios'
import { swapiUrl } from '@libs/swapi'

export class SwapiRepository {
    public async findAll(search: string) {
        const query = search ? `?search=${search}` : ''
        const result = await axios.get(`${swapiUrl}/people${query}`)
        return result.data
    }

    public async findById(id: string) {
        const data = await axios.get(`${swapiUrl}/people/${id}`)
        return data.data
    }

    public async findAllPlanets(search: string) {
        const query = search ? `?search=${search}` : ''
        const result = await axios.get(`${swapiUrl}/planets${query}`)
        return result.data
    }

    public async findOnePlanet(id: string | number) {
        const data = await axios.get(`${swapiUrl}/planets/${id}`)
        return data.data
    }
}