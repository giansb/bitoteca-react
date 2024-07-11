import styled from "styled-components";


export const BookHeader = styled.div`
    margin: 0 auto;
    width: 100%;

    h1{
        line-height: 70px;
        text-transform: uppercase;
    }
`;

export const BookInfo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    p {
        margin-right: 30px;
    }
`;

export const BookInfoLink = styled.a`
    color: black;
    font-weight: bold;
`;

export const BookImage = styled.img`
    width: 200px;
    margin-right: 25px;
`;

export const BookMain = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 20px 0;
`;

export const BookBuy = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    padding: 0 10px;
`;

export const Description = styled.p`
    width: 600px;
`;


export const ButtonAddCar = styled.button`
    width: 300px;
    border: 0;
    padding: 10px 10px;
    font-size: 18px;
    border-radius: 8px;

    &:hover{
        background-color: yellow;
    }
`;

export const Price = styled.p`
    font-size: 27px;
    font-weight: bold;
`;

export const BookOtherInfo = styled.div`
    margin: 50px 0;

    h2{
        margin: 20px 0;
    }

`;

export const Table = styled.table`
width: 100%;
    tr {
       

        td {
            font-size: 18px;
            padding: 15px 10px;
        }

        td:first-child {
            width: 20%;
        }

        &:nth-child(odd) {
            background-color: grey;
        }
    }

    
`;
