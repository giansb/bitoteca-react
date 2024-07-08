import { Card, CardButton, CardImg } from "./style";
import { ICard } from "../../Interfaces/ICard";


export const CardBook = (props: ICard) => {
    return(
        <Card>
            <CardImg src={props.image_url} alt="" />
            <p>{props.name}</p>
            <p>{props.stock? "em estoque!" : "fora de estoque"}</p>
            <p>R$ {props.price}</p>
            <CardButton>Comprar</CardButton>
        </Card>
    );
}