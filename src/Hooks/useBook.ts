import { useEffect, useState } from "react"
import { ILivro } from "../Interfaces/ILivro"
import axios from "axios";


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