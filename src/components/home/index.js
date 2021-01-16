// eslint-disable-next-line no-unused-vars
import React, {createRef} from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import {slotVideos, slotVideosReverse} from "../../utils/dataService";


const Designation = () => <div class={style.designation}>
    <div class={style.text}>SENIOR</div>
    <div class={style.text}>ART</div>
    <div class={style.text}>DIRECTOR</div>
</div>;

const SlotMachine = () => {
    return <div class={style["slot-container"]}>
        <img class={style.arrow} src={"assets/arrow.svg"} />
        <div class={style.slot}>MBRE</div>
        <img class={style["down-arrow"]} src={"assets/arrow.svg"} />
    </div>
}
const Home = () => {
    const [action, setAction] = useState({
        position: 0,
        direction: "next"
    })
    const videoRef = createRef()

    const playVideo = (src) => {
        const video = videoRef.current
        video.pause()
        video.src = `assets/videos/${src}`
        //   video.play()
    }

    const onNextClicked = () => {
        setAction(action => {
            return {
                position: ++action.position,
                direction: "next"
            }
        })
    }

    const onPreviousClick = () => {
        setAction(action => {
            return {
                position: --action.position,
                direction: "previous"
            }
        })
    }

    useEffect(() => {
        const direction = action.direction;
        const position = action.position;
        playVideo(direction === "next" ? slotVideos[position] : slotVideosReverse[position])
    }, [action])

    return <div class={style.parent}>
        <div class={style["center-wrapper"]}>
            <div class={style["yash-text"]}>yash</div>
            <div class={style["video-designation-wrapper"]}>
                <video src={"assets/videos/1_Ambre_First.mp4"} preload />
                <Designation />
            </div>
            <div class={style["a-text"]}>A</div>
            <SlotMachine />
        </div>
    </div>
};

export default Home;
