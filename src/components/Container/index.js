import style from "./container.module.scss"

const Container = ({children}) => {
    return (
        <section className={style.container}>
            {children}
        </section>
    )
}

export default Container