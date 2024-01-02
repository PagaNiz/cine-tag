import style from "./banner.module.scss";

const Banner = ({ imagem }) => {
    return (
        <div
            className={style.banner}
            style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
        >  
        </div>
    )
}

export default Banner;