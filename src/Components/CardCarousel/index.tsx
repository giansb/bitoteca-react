import Carousel from "react-multi-carousel";
import {CardSection, ContainerCards, Title } from "./style";
import { livrosTeste } from "../data_test";

import { CardBook } from "../CardBook";
import { LimitSection } from "../../Styles/style";
import { UseBooks } from "../../Hooks/useBook";



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

    const [books] = UseBooks();


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
                        books.map((book, index) => {
                            return <CardBook key={index} id={book.id} titulo={book.titulo} price={book.preco} image_url={book.imagem_url} Qtd_estoque={book.qtd_estoque}/>
                        })
                    }
                </Carousel>
            </CardSection>
        </LimitSection>
    </ContainerCards>
    );
}