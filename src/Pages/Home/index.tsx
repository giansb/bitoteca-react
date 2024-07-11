
import { CardCarousel } from "../../Components/CardCarousel";
import { CarouselHome } from "./CarouselHome";
import { DoubleBanner } from "./DoubleBanner";
import { SocialSection } from "./Social";
import { PageBase } from "../PageBase";

export const PageHome = () => {


    return(
        <PageBase>
            <CarouselHome/>
            <CardCarousel/>
            <CardCarousel/>
            <DoubleBanner/>
            <CardCarousel/>
            <SocialSection/>
        </PageBase>
    );
}