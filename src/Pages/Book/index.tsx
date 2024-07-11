import { useNavigate, useParams } from "react-router-dom";
import { useBookById } from "../../Hooks/useBook";
import { PageBase } from "../PageBase";
import { BookBuy, BookHeader, BookImage, BookInfo, BookInfoLink, BookMain, BookOtherInfo, ButtonAddCar, Description, Price, Table } from "./style";
import { LimitSection } from "../../Styles/style";



export const PageBook = () => {

    const {id} = useParams();
    //vai ser usado no hook para buscar as informacoes do livro e trazer

    const [livro] = useBookById(Number(id));

    //const navigate = useNavigate();

    return(
        <PageBase>
            <LimitSection>
                <BookHeader>
                    <h1>{livro?.titulo}</h1>
                    <BookInfo>
                        <p>Autor: <BookInfoLink href="">{livro?.id_autor}</BookInfoLink></p>
                        <p>Editora: <BookInfoLink href="">{livro?.id_editora}</BookInfoLink></p>
                        <p>N° de páginas: {livro?.numero_paginas}</p>
                        <p><BookInfoLink href="">Descrição completa</BookInfoLink></p>
                    </BookInfo>
                </BookHeader>
                <BookMain>
                    <BookImage src={livro?.imagem_url} />
                    <BookBuy>
                        <p>Genero</p>
                        <Description>{livro?.descricao}</Description>
                        <Price>R$ {livro?.preco}</Price>
                        <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
                    </BookBuy>
                </BookMain>

                <BookOtherInfo>
                    <h2>Informações do produto</h2>

                    <p>{livro?.sinopsia}</p>

                    <h2>Detalhes do produto</h2>

                    <Table>
                        <tr>
                            <td>Titulo</td>
                            <td>{livro?.titulo}</td>
                        </tr>
                        <tr>
                            <td>Autor</td>
                            <td>{livro?.id_autor}</td>
                        </tr>
                        <tr>
                            <td>Editora</td>
                            <td>{livro?.id_editora}</td>
                        </tr>
                        <tr>
                            <td>ISBM</td>
                            <td>{livro?.isbn}</td>
                        </tr>
                        <tr>
                            <td>Idioma</td>
                            <td>{livro?.id_idioma}</td>
                        </tr>
                        <tr>
                            <td>Data de publicação</td>
                            <td>{livro?.data_publicacao}</td>
                        </tr>
                        <tr>
                            <td>N° Páginas</td>
                            <td>{livro?.numero_paginas}</td>
                        </tr>
                        
                    </Table>
                </BookOtherInfo>
            </LimitSection>
        </PageBase>
    );
}