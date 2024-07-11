import styled from "styled-components";


export const Card = styled.div`
    width: 194px;
    margin: 20px auto;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 8px;
`;

export const CardButton = styled.button`
    width: 100%;
    border: 0px;
    background-color: rgb(255, 204, 0);
    padding: 8px 5px;
    border-radius: 6px;
    font-weight: 400;
    transition: background 300ms;
    cursor: pointer;
    &:hover {
        background-color: rgb(255, 230, 0);
    }
`;

export const CardImg = styled.img`
    width: 100px;
    margin: 0 auto;
`;