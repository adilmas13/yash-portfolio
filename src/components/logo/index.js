import style from './style.css';

const Logo = () => {
    return <div class={style["logo-parent"]}>
        <img class={style.logo} src={"assets/home_icon.svg"} />
        <span class={style["logo-text"]}>home</span>
    </div>
}

export default Logo;
