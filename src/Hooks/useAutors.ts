import { useEffect, useState } from "react";
import { IAutor } from "../Interfaces/IAutor";
import axios from "axios";

export function useAutors() {
    const [autors, setAutors] = useState<IAutor[]>([]);

    useEffect(() => {
        axios.get("https://localhost:7117/Autor/")
            .then(response => {
                setAutors(response.data)
            })
    },[])

    return[autors]
}


export function UseAutorById(id: number) {
    const[autor, setAutor] = useState<IAutor>();

    useEffect(() => {
        axios.get(`https://localhost:7117/Autor/${id}`)
        .then(response => {
            setAutor(response.data)
        })
    },[])

    return[autor]
}