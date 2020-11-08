// eslint-disable-next-line no-unused-vars
import style from './style.css';

const AboutMe = () => (
    <div class={style.parent}>
        <div style="position: relative; height: 100%; margin-right: 3.5rem">
            <img src="assets/about_shadow.png" alt="yash-shadow" class={style['main-image']}/>
            <img src="assets/about.png" alt="yash" class={style['main-image']} style="position: absolute; right: 10px"/>
        </div>
        <div class={style['details-wrapper']}>
            <div class={style['top-wrapper']}>
                <div class={style['gender-age']}>male. 29.</div>
                <div class={style['designation']}>senior art director.</div>
            </div>
            <div class={style['middle-wrapper']}>
                <div class={style.name}>yash</div>
                <div class={style['noun-success']}>
                    <span>noun:</span>
                    <span>success</span>
                </div>
                <div class={style.description}>
                    Passionate, ambitious and artistic<br/>
                    towards work and life equally.<br/>
                    A rare combination of positive and<br/>
                    creative blood, living up to its name.
                </div>
            </div>
            <div class={style['bottom-wrapper']}>
                <div class={style['digits-letters-wrapper']}>
                    <div class={style.split}>
                        <span>digits</span>
                        <span>+91-8080606226</span>
                    </div>
                    <div class={style.split}>
                        <span>letters</span>
                        <span>yash.ambre92@gmail.com</span>
                    </div>
                </div>
            </div>



        </div>
    </div>
);

export default AboutMe;
