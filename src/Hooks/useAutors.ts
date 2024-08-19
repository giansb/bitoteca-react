import { useEffect, useState } from "react";
import { IAutor } from "../Interfaces/IAutor";
import axios, { AxiosResponse } from "axios";

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


export function useAutorById(id:number) {
    const [autor, setAutor] = useState<IAutor>();

    useEffect(() => {
        axios.get(`https://localhost:7117/Autor/${id}`)
            .then(response => {
                setAutor(response.data)
            })
    },[])


    return autor
}

export const usePostAutor = (autor: IAutor) => {
    const [validate, setValidate] = useState<boolean | null>(null);

    useEffect(() => {
        const postAutor = async () => {
            try {
                const resposta: AxiosResponse<IAutor> = await axios.post<IAutor>('https://localhost:7117/Autor/', autor);
                console.log('Resposta da API:', resposta.data);
                setValidate(true);
            } catch (erro) {
                console.error('Erro ao enviar dados:', erro);
                setValidate(false);
            }
        };

        postAutor();
    }, [autor]); // O hook será executado sempre que `autor` mudar

    return validate;
};

export const useUpdateAutor = async ( autor: IAutor) => {
    try {
        const resposta: AxiosResponse<IAutor> = await axios.put<IAutor>(`https://localhost:7117/Autor/${autor.id}`, autor);
        console.log('Resposta da API:', resposta.data);
        return true; // Retorna true se a operação for bem-sucedida
    } catch (erro) {
        console.error('Erro ao atualizar dados:', erro);
        return false; // Retorna false se houver um erro
    }
};