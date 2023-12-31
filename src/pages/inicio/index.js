import style from "./inicio.module.scss";
import videos from 'json/db.json'
import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import { Fragment } from "react"

const Inicio = () => {
    return (
        <Fragment>
            <Banner
                imagem="home"
            />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={style.container}>
                {videos.map((video) => {
                   return <Card {...video} key={video.id} />
                })}
            </section>
        </Fragment>
    )
}

export default Inicio