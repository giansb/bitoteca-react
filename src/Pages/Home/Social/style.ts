import styled from "styled-components";


export const WebSection = styled.div`
    background-color: #0097B2;
    
`;

export const WebSectionContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const WebTitle = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    p {
        font-size: 60px;
        font-weight: 600;
    }

    img {
        margin: 10px 0;
        height: 80px;
    }
`;

export const WebIcons = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 30px;

    img {
        height: 25px;
    }
`;


