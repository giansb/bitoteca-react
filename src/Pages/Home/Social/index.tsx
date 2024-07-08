import { LimitSection, LogoTitleWhite } from "../../../Styles/style";
import { WebIcons, WebSection, WebSectionContainer, WebTitle } from "./style";


export const SocialSection = () => {
    return(
        
            <WebSection>
                <LimitSection>
                    <WebSectionContainer>
                        <WebTitle>
                            <img src="../src/assets/cube.png" alt="logo da pagina bitoteca" />
                            <p><LogoTitleWhite>BIT</LogoTitleWhite>OTECA</p>
                        </WebTitle>
                        <WebIcons>
                            <img src="../src/images/facebook.png" alt="logo facebook"/>
                            <img src="../src/images/twitter.png" alt="logo twitter"/>
                            <img src="../src/images/instagram.png" alt="logo instagram"/>
                            <img src="../src/images/youtube.png" alt="logo youtube"/>
                            <img src="../src/images/linkedin.png" alt="logo linkedin"/>
                        </WebIcons>
                    </WebSectionContainer>
                </LimitSection>
            </WebSection>
        
    );
}