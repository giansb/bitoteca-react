import { LimitSection, LogoTitleWhite } from "../../Styles/style";
import { HeaderBackground, HeaderContainer, HeaderDiv, HeaderInput, HeaderStyle, LogoImg, LogoTitle } from "./style";

export const HeaderComponent = () => {
    return(
        <HeaderBackground>
            <LimitSection>
                <HeaderStyle>
                        <HeaderContainer>
                            <HeaderDiv>
                                <LogoImg src="../src/assets/cube.png" alt="logo da pagina bitoteca" />
                                <LogoTitle><LogoTitleWhite>BIT</LogoTitleWhite>OTECA</LogoTitle>
                            </HeaderDiv>
                            <HeaderDiv>
                                <img src="./assets/cube.png" alt="" />
                                <p>Categorias</p>
                            </HeaderDiv>
                            <div className="header-input div-header">
                                <HeaderInput type="text" placeholder="O que você está buscando?"/>
                                <img src="" alt="" />
                            </div>
                        </HeaderContainer>
                        <HeaderContainer>
                            <div className="header-user div-header">
                                <img src="./assets/do-utilizador.png" alt="" />
                                <p>Entrar</p>
                            </div>
                            <div className="header-user div-header">
                                <img src="./assets/cesta-de-compras.png" alt="" />
                                <p>Minha cesta</p>
                            </div>
                        </HeaderContainer>
                </HeaderStyle>
            </LimitSection>
        </HeaderBackground>
    );
}
