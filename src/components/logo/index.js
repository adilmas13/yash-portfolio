import style from './style.css';
import {route} from "preact-router";

const Logo = (props) => {
    return <div class={style["logo-parent"]} onClick={() => route("home")}>
        <img class={style.logo} src={"assets/home_icon.svg"} />
        <span class={style["logo-text"]}>{props.title || "home"}</span>
    </div>
}

export default Logo;
