import { Personajes } from "../models/Personajes";

export const genero = (generos) => {
    const resultadoGenero = Personajes.filter((x) => x.type === generos);

    return resultadoGenero;
};