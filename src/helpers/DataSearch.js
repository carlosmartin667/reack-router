import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Personajes } from "../models/Personajes";

export const DataSearchs = (history) => {
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);

    const [inputValue, setInputValue] = useState(q);
    const [characters, setCharacters] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${inputValue}`);
    };

    const getCharacters = () => {
        if (inputValue.trim() !== "") {
            const value = inputValue.toLocaleLowerCase();
            const newValue = Personajes.filter((character) =>
                character.name.toLocaleLowerCase().includes(value)
            );

            setCharacters(newValue);
        } else {
            setCharacters([]);
        }
    };

    useEffect(() => {
        getCharacters();
    }, [q]);

    return { handleSubmit, inputValue, handleChange, characters};
};