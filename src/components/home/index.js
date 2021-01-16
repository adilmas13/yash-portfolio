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

const SlotMachine = (props) => {
    const slotsRef = createRef()
    const slots = [
        "mbre  ",
        "bout  ",
        "wards ",
        "dverts",
        "rts   "
    ]

    useEffect(() => {
        slots.forEach((item) => {
            const temp = item.split("")
            temp.forEach((it, index) => {
                const element = document.createElement("span")
                element.classList.add("cell");
                element.innerText = it;
                slotsRef.current.childNodes[index].appendChild(element)
            })
        })
    }, [])

    useEffect(() => {
        let children = slotsRef.current.childNodes
        for (let i = 0; i < children.length; ++i) {
            const node = children[i];
            const delay = i * 0.2;
            node.style.transitionDelay = `${delay}s`;
            node.style.transform = `translateY(-${72 * props.position}px)`;
        }
    }, [props.position])

    return <div class={style.slot} ref={slotsRef}>
        <div class={style.column} />
        <div class={style.column} />
        <div class={style.column} />
        <div class={style.column} />
        <div class={style.column} />
        <div class={style.column} />
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
        const direction = action.direction;
        const position = action.position;
        playVideo(direction === "next" ? slotVideos[position] : slotVideosReverse[position])
    }, [action])

    return <div class={style.parent}>
        <div class={style["center-wrapper"]}>
            <div class={style["yash-text"]}>yash</div>
            <div class={style["video-designation-wrapper"]}>
                <video ref={videoRef} src={"assets/videos/1_Ambre_First.mp4"} preload />
                <Designation />
            </div>
            <div class={style["a-text"]}>A</div>
            <div class={style["slot-container"]}>
                {action.position > 0 && <img class={style.arrow} src={"assets/arrow.svg"} onClick={onPreviousClick} />}
                <SlotMachine position={action.position} />
                {action.position < 4 && <img class={style["down-arrow"]} src={"assets/arrow.svg"} onClick={onNextClicked} />}
            </div>
        </div>
    </div>
};

export default Home;
