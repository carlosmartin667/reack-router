import { useParams } from "react-router-dom";
import { Personajes } from "../models/Personajes";

export const DataDetalles = (history) => {
    let { id } = useParams();
    let { type, name, description } = Personajes.find((x) => x.id === id);
    let path = `/assets/${type}-${id}.png`;
    const volver = () => {
        history.goBack();
    }

    return { id, type, name, description, path, volver };
};