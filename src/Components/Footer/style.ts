import styled from "styled-components";

export const FooterSection = styled.footer`
    background-color: black;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 30px 0;
`;

export const FooterDoubleContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;

    a {
        text-decoration: none;
        color: white;
        line-height: 20px;
    }

    a:hover {
        color: aquamarine;
    }

    p {
        font-size: 20px;
        font-weight: 600;
    }
`;