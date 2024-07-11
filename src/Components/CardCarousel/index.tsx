import Carousel from "react-multi-carousel";
import {CardSection, ContainerCards, Title } from "./style";
import { livrosTeste } from "../data_test";

import { CardBook } from "../CardBook";
import { LimitSection } from "../../Styles/style";
import { useEffect, useState } from "react";
import axios from "axios";
import { ILivro } from "../../Interfaces/ILivro";


export const CardCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 680 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 680, min: 0 },
            items: 1
        }
    };

    const [livros, setLivros] = useState<ILivro[]>([]);

    useEffect(() =>{
        axios.get("https://localhost:7117/Livro/")
        .then(response => {
            setLivros(response.data);
          })
          .catch(error => {
            console.error('Houve um erro ao buscar os livros!', error);
          });
    },[])


    return(
        <ContainerCards>
        <LimitSection>
            <Title>
                <p>MAIS VENDIDOS</p>
                <a href="">Ver mais</a>
            </Title>
            <CardSection>
                <Carousel responsive={responsive}>
                    {
                        livros.map((livro, index) => {
                            return <CardBook key={index} id={livro.id} titulo={livro.titulo} price={livro.preco} image_url={livro.imagem_url} Qtd_estoque={livro.qtd_estoque}/>
                        })
                    }
                </Carousel>
            </CardSection>
        </LimitSection>
    </ContainerCards>
    );
}