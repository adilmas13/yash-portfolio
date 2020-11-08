// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';

const Experience = () => (
    <div class={style.parent}>
        <div class={style['image-wrapper']}>
            <img src="assets/experience_shadow.png" alt="yash-shadow" class={style['shadow-image']} />
            <img src="assets/experience.png" alt="yash" class={style['main-image']} />
        </div>
        <div class={style['right-content']}>
            <div class={style['details-wrapper']}>
                <div class={style['top-wrapper']}>
                    <div class={style.header}>experience</div>
                    <div class={style['time-parent']}>
                        <div class={style.number} value="YEARS">07</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="MONTHS">06</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="DAYS">06</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="HOURS">13</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="MINUTES">24</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="SECONDS">55</div>
                    </div>
                </div>
                <div class={style['middle-wrapper']}>
                    <div class={style.details}>
                        <div class={style.titles}>
                            <span>ddb mudra<span>&#8250;</span></span>
                            <span>leo burnett<span>&#8250;</span></span>
                            <span>leo burnett<span>&#8250;</span></span>
                            <span>percept art<span>&#8250;</span></span>
                        </div>
                        <div class={style.desc}>
                            <span>1.7 YEARS<span class={style.designation}>senior art director</span></span>
                            <span>3.8 YEARS<span class={style.designation}>art director</span></span>
                            <span>2.0 YEARS<span class={style.designation}>graphic designer</span></span>
                            <span>1.0 YEARS<span class={style.designation}>freelance designer</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Experience;
