import style from './style.css';

const Logo = (props) => {
    return <div class={style["logo-parent"]}>
        <img class={style.logo} src={"assets/home_icon.svg"} />
        <span class={style["logo-text"]}>{props.title || "home"}</span>
    </div>
}

export default Logo;
