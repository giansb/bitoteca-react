import styled from "styled-components";
import { Footer } from "../../Components/Footer";
import { HeaderComponent } from "../../Components/Header";


const Center = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`;

export const PageBase = (props: any) => {
    return(
        <>
        <HeaderComponent />
 
        {props.children}

        <Footer/>
        </>

    );
}