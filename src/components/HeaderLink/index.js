import { Link } from "react-router-dom";
import style from "./headerLink.module.scss";

const HeaderLink = ({url, children}) => {
    return (
        <Link to={url} className={style.link}>
            {children}
        </Link>
    )
}

export default HeaderLink;