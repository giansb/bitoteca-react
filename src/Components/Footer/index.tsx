import { LimitSection } from "../../Styles/style";
import { FooterContainer, FooterDoubleContainer, FooterSection } from "./style";


export const Footer = () => {
    return(
        <FooterSection>
            <LimitSection>
                <FooterContainer>
                    <FooterDoubleContainer>
                    <p>Bitoteca</p>
                    <a href="">Sobre</a>
                    <a href="">Nossa política</a>
                    <a href="">Fale conosco</a>
                    <a href="">Trabalhe conosco</a>
                    </FooterDoubleContainer>
                    
                    <FooterDoubleContainer>
                        <p>Formas de pagamento</p>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </FooterDoubleContainer>
                </FooterContainer>
            </LimitSection>
        </FooterSection>
    );
}