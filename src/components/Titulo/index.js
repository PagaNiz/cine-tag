import style from "./titulo.module.scss";

const Titulo = ({ children }) => {
    return (
        <div className={style.texto}>
            {children}
        </div>
    )
}

export default Titulo;