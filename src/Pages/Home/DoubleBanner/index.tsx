import { LimitSection } from "../../../Styles/style";
import { Banner, BannersContainer } from "./style";


export const DoubleBanner = () => {
    return(
        <section>
            <LimitSection>
                <BannersContainer>
                    <Banner></Banner>
                    <Banner></Banner>
                </BannersContainer>
            </LimitSection>
        </section>
    );
}