export interface ILivro {
    id: number,
    titulo: string,
    id_autor: number,
    isbn: string,
    id_editora: number,
    data_publicacao: string,
    numero_paginas: number,
    id_genero : number,
    descricao: string,
    id_idioma: string,
    data_cadastro: string,
    preco: string,
    imagem_url: string,
    qtd_estoque: number,
    sinopsia: string,
    qtd_vendidos: number
}