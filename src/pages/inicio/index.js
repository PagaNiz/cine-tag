// import style from "./inicio.module.scss";

import Banner from "components/Banner"
import Card from "components/Card"
import Footer from "components/Footer"
import Header from "components/Header"
import Titulo from "components/Titulo"
import { Fragment } from "react"

const Inicio = () =>{
    return(
        <Fragment>
            <Header/>
            <Banner
                imagem="home"
            />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id="1" titulo="Gato bonifacio" capa="https://queirosiana.files.wordpress.com/2021/02/banho-em-gato-angora-valores-1.jpg"/>
            <Footer/>
        </Fragment>
    )
}

export default Inicio