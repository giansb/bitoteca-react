import { LimitSection, LogoTitleWhite } from "../../../Styles/style";
import { HeaderBackground, HeaderDiv, HeaderStyle, LogoImg, LogoTitle, TitleAdmin, UserDivHeader } from "./style";

export const HeaderPageAdmin = () => {
    return (
        <>
        <HeaderBackground>
            <LimitSection>
                <HeaderStyle>
                    <HeaderDiv>
                        <LogoImg src="../src/assets/cube.png" alt="logo da pagina bitoteca" />
                        <LogoTitle><LogoTitleWhite>BIT</LogoTitleWhite>OTECA <TitleAdmin>ADMINISTRAÇÃO</TitleAdmin></LogoTitle>
                    </HeaderDiv>
                    <HeaderDiv>
                        <UserDivHeader>
                            <p>User</p>
                            <a href="">Sair</a>
                        </UserDivHeader>
                    </HeaderDiv>
                </HeaderStyle>
            </LimitSection>
        </HeaderBackground>
        
        </>
    );
}