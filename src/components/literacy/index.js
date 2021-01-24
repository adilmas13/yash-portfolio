// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../utils/imgService";

const Literacy = () => {
    const data = [
        {field: 'applied arts', place: 'RACHANA SANSAD', degree: 'Diploma'},
        {field: 'advertising', place: 'MUMBAI UNIVERSITY', degree: 'BMM Degree'},
        {field: 'graphics', place: 'FRAMEBOXX VISUAL EFFECTS'},
        {field: 'commerce', place: 'MUMBAI UNIVERSITY', degree: 'Junior Degree'},
        {field: 'dco', place: 'A+ COMPUTER INSTITUTE'},
        {field: 'ssc', place: 'MAHARASHTRA STATE BOARD'},
    ];
    return <div class={style.parent}>
        <div class={style["image-wrapper"]}>
            <img src={aboutMeImg("literacy_shadow")} alt="yash-shadow" class={style['main-image']} />
            <img src={aboutMeImg("literacy")} alt="yash" class={style['main-image']}
                 style="position: absolute; right: 10px" />
        </div>
        <div class={style['details-wrapper']}>
            <div class={style.wrapper}>
                <div class={style.header}>literacy</div>
                <div class={style.details}>
                    <div class={style.titles}>
                        {data.map(it => <span>{it.field} <span>&#8250;</span></span>)}
                        <span><span>&#8250;</span></span>
                    </div>
                    <div class={style.desc}>
                        {data.map(it => (
                            <span>{it.place}
                                {it.degree && <span class={style.degree}>{it.degree}</span>}
                                </span>)
                        )}
                        <span><span class={style['download-cv']}>download CV</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Literacy;
