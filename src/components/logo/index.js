import style from './style.css';
import {route} from "preact-router";

const Logo = () => {
    return <div class={style["logo-parent"]} onClick={() => route("home")}>
        <img class={style.logo} src={"assets/home_icon.svg"} />
        <span class={style["logo-text"]}>home</span>
    </div>
}

export default Logo;
