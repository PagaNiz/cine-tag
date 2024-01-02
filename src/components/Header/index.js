import { Link } from "react-router-dom";
import style from "./header.module.scss";
import logo from "../../assets/image/logo.png"
import HeaderLink from "../HeaderLink";

const Header = () =>{
    return (
        <header className={style.header}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"/>
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./Favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;