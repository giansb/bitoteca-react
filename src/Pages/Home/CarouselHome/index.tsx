import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { BlueDiv, GreenDiv, RedDiv } from "./style";


export const CarouselHome = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 680 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 680, min: 0 },
            items: 1
        }
    };

    return(
            <Carousel
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={6000}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
            autoPlay>
                <RedDiv></RedDiv>
                <BlueDiv></BlueDiv>
                <GreenDiv></GreenDiv>
            </Carousel>
    );
}