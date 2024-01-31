import { IPeopleInterface } from "src/types";

export const swapiUrl = 'https://swapi.py4e.com/api'

export const translate = (data: IPeopleInterface) => {
    const translations = {
        name: 'nombre',
        height: 'peso',
        mass: 'masa',
        hair_color: 'color_cabello',
        skin_color: 'color_piel',
        eye_color: 'color_ojos',
        birth_year: 'año_nacimiento',
        gender: 'genero',
        homeworld: 'mundo_natal',
        films: 'películas',
        species: 'especies',
        vehicles: 'vehículos',
        starships: 'naves_estelares',
        created: 'creado',
        edited: 'editado',
        rotation_period: "periodo_rotacion",
        orbital_period: "periodo_orbital",
        diameter: "diametro",
        climate: "clima",
        gravity: "gravedad",
        terrain: "terreno",
        surface_water: "superficie_agua",
        population: "poblacion",
        residents: "residentes",
    };
    const translateValue = (value: any): any => {
        if (Array.isArray(value)) {
            return value.map((item) => translateValue(item));
        } else if (typeof value === 'object' && value !== null) {
            return translate(value);
        } else {
            return value;
        }
    };

    const translatedData: Record<string, any> = {};

    if (Array.isArray(data)) {
        data.forEach((item, index) => {
            translatedData[index.toString()] = translate(item);
        });
    } else {
        Object.keys(data).forEach((key) => {
            const newKey = translations[key] || key;
            translatedData[newKey] = translateValue(data[key]);
        });
    }

    return translatedData;
}