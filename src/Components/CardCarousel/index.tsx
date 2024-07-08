import Carousel from "react-multi-carousel";
import {CardSection, ContainerCards, Title } from "./style";
import { livrosTeste } from "../data_test";

import { CardBook } from "../CardBook";
import { LimitSection } from "../../Styles/style";


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
                        livrosTeste.map((livro, index) => {
                            return <CardBook key={index} name={livro.name} price={livro.price} image_url={livro.image_url} stock={livro.stock}/>
                        })
                    }
                </Carousel>
            </CardSection>
        </LimitSection>
    </ContainerCards>
    );
}