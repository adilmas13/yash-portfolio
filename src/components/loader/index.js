// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import Lottie from 'react-lottie';
import animation from '../../assets/data.json'

const Loader = () => {

    const bodymovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: animation
    }

    return <div class={style.parent}>
        <div class={style["loader"]}><Lottie options={bodymovinOptions} /></div>
    </div>
};

export default Loader;
