// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';

const Literacy = () => (
    <div class={style.parent}>
        <div style="position: relative; height: 100%; margin-right: 3.5rem">
            <img src="assets/literacy_shadow.png" alt="yash-shadow" class={style['main-image']}/>
            <img src="assets/literacy.png" alt="yash" class={style['main-image']} style="position: absolute; right: 10px"/>
        </div>
        <div class={style['details-wrapper']}>
            <div class={style.wrapper}>
                <div class={style.header}>literacy</div>
                <div class={style.details}>
                    <div class={style.titles}>
                        <span>applied arts <span>&#8250;</span></span>
                        <span>advertising <span>&#8250;</span></span>
                        <span>graphics <span>&#8250;</span></span>
                        <span>commerce <span>&#8250;</span></span>
                        <span>dco <span>&#8250;</span></span>
                        <span>ssc <span>&#8250;</span></span>
                        <span><span>&#8250;</span></span>
                    </div>
                    <div class={style.desc}>
                        <span>RACHANA SANSAD <span class={style.degree}>Diploma</span></span>
                        <span>MUMBAI UNIVERSITY <span class={style.degree}>BMM Degree</span></span>
                        <span>FRAMEBOXX VISUAL EFFECTS</span>
                        <span>MUMBAI UNIVERSITY <span class={style.degree}>Junior Degree</span></span>
                        <span>A+ COMPUTER INSTITUTE </span>
                        <span>MAHARASHTRA STATE BOARD</span>
                        <span><span class={style['download-cv']}>download CV</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Literacy;
