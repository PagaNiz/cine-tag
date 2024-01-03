import style from "./favoritos.module.scss"
import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import { useFavoritoContext } from "contextos/Favoritos"
import { Fragment } from "react"

const Favoritos = () =>{
    const {favorito} = useFavoritoContext();
    return (
        <Fragment>
            <Banner
                imagem="favoritos"
            />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={style.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </Fragment>
    )
}

export default Favoritos