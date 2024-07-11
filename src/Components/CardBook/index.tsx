import { Card, CardButton, CardImg } from "./style";
import { ICard } from "../../Interfaces/ICard";
import { Link } from "react-router-dom";


export const CardBook = (props: ICard) => {

    const estoque = props.Qtd_estoque >= 10;
    const priceFormatted = `R$ ${parseFloat(props.price).toFixed(2)}`;

    return(
        <Card>
            <CardImg src={props.image_url} alt="" />
            <p>{props.titulo}</p>
            <p>{estoque ? "em estoque!" : "fora de estoque"}</p>
            <p>{priceFormatted}</p>
            <Link to={`/livro/${props.id}`}><CardButton>Ver</CardButton></Link>
        </Card>
    );
}