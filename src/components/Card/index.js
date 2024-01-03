import { useFavoritoContext } from "contextos/Favoritos"
import style from "./card.module.scss"
import iconeFavoritar from './favoritar.png'
import iconeDesforitar from './desfavoritar.png'

const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesforitar;

    return (
        <div className={style.container}>
            <img src={capa} alt={titulo} className={style.capa} />
            <h2>{titulo}</h2>
            <img src={icone}
                alt="Favoritar filme"
                className={style.favoritar}
                onClick={() => { adicionarFavorito({ id, titulo, capa }) }}
            />
        </div>
    )
}

export default Card;