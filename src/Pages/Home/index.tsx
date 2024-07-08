
import { useEffect, useState } from "react";
import { CardCarousel } from "../../Components/CardCarousel";
import { Footer } from "../../Components/Footer";
import { HeaderComponent } from "../../Components/Header";
import { CarouselHome } from "./CarouselHome";
import { DoubleBanner } from "./DoubleBanner";
import { SocialSection } from "./Social";
import axios from "axios";
import { IUser } from "../../Interfaces/IUser";

export const PageHome = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() =>{
        axios.get("http://localhost/bitoteca_api/api/users.php")
        .then(response => {
            console.log(response.data);
            setUsers(response.data);
          })
          .catch(error => {
            console.error('Houve um erro ao buscar os usuários!', error);
          });
    },[])

    return(
        <>
            <HeaderComponent/>
            {
                users.map((user) => {
                    return <p>{user.nome}</p>
                })
            }
            <CarouselHome/>
            <CardCarousel/>
            <CardCarousel/>
            <DoubleBanner/>
            <CardCarousel/>
            <SocialSection/>
            <Footer/>
        </>
    );
}