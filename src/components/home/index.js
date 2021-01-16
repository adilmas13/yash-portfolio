// eslint-disable-next-line no-unused-vars
import React, {createRef} from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import {slotVideos, slotVideosReverse} from "../../utils/dataService";


const SlotMachine = () => {
    return <div class={style["slot-container"]} />
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
        video.play()
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
        console.log(action)
        const direction = action.direction;
        const position = action.position;
        playVideo(direction === "next" ? slotVideos[position] : slotVideosReverse[position])
    }, [action])

    return <div class={style.parent}>
        <video ref={videoRef} src={"assets/videos/1_Ambre_First.mp4"} autoplay />
        <div class={style["slot-wrapper"]}>
            {action.position > 0 && <div onClick={onPreviousClick}>Previous</div>}
            <SlotMachine />
            {action.position < 4 && <div onClick={onNextClicked}>Next</div>}
        </div>
    </div>
};

export default Home;
