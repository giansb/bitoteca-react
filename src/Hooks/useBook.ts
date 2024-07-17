import { useEffect, useState } from "react"
import { ILivro } from "../Interfaces/ILivro"
import axios from "axios";

export const UseBooks = () => {
    const [books, setBooks] = useState<ILivro[]>([]);

    useEffect(() =>{
        axios.get("https://localhost:7117/Livro/")
        .then(response => {
            setBooks(response.data);
          })
          .catch(error => {
            console.error('Houve um erro ao buscar os livros!', error);
          });
    },[])

    return[books]
}

export function useBookById(id:number) {
    const [book, setBook] = useState<ILivro>();

    useEffect(()=> {
        axios.get(`https://localhost:7117/Livro/${id}`)
            .then(response => {
                setBook(response.data);
            })
    },[])

    return[book]
}

