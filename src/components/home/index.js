// eslint-disable-next-line no-unused-vars
import React, {createRef} from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import {slotVideos, slotVideosReverse} from "../../utils/dataService";
import {route} from "preact-router";


const Designation = () => <div class={style.designation}>
    <div class={style.text}>SENIOR</div>
    <div class={style.text}>ART</div>
    <div class={style.text}>DIRECTOR</div>
</div>;

const SlotMachine = (props) => {
    const slotsRef = createRef()
    const slots = [
        "mbre--",
        "bout--",
        "wards-",
        "dverts",
        "rts---"
    ]

    const slots2 = [
        "-ambre-",
        "-about-",
        "-awards",
        "adverts",
        "-arts--"
    ]

    useEffect(() => {
        const media = window.matchMedia("(max-width: 600px)")
        const noOfColumns = Math.max(
            ...media.matches
                ? slots2.map(it => it.length)
                : slots.map(it => it.length)
        )

        const slotContainer = slotsRef.current;
        // creating columns
        for (let i = 0; i < noOfColumns; ++i) {
            const column = document.createElement("div");
            column.classList.add("column");
            slotContainer.appendChild(column)
        }
        (media.matches ? slots2 : slots)
            .forEach((item) => {
                const temp = item.split("")
                temp.forEach((it, index) => {
                    const element = document.createElement("span")
                    element.classList.add("cell");
                    element.innerText = it !== "-" ? it : "";
                    slotContainer.childNodes[index].appendChild(element)
                })
            })
    }, [])

    useEffect(() => {
        let cellHeight = document.getElementsByClassName("cell")[0].clientHeight;
        let children = slotsRef.current.childNodes
        for (let i = 0; i < children.length; ++i) {
            const column = children[i];
            const delay = i * 0.2;
            column.style.transitionDelay = `${delay}s`;
            column.style.transform = `translateY(-${cellHeight * props.position}px)`;
        }
    }, [props.position])

    const redirect = () => {
        switch (props.position) {
            case 1 :
                route("/about-me")
                break;
            case 2 :
                route("/awards")
                break;
            case 3 :
                route("/adverts")
                break;
            case 4 :
                route("/arts")
                break;
        }
    }

    return <div class={style["slot-wrapper"]}>
        <div class={style["slot-parent"]}>
            <img
                style={{visibility: props.position === 0 ? "hidden" : "visible"}}
                class={style.arrow}
                src={"assets/arrow.svg"}
                onClick={() => props.onPreviousClick()} />
            <div class={style["slot-container"]}>
                <div class={style["a-text"]}>A</div>
                <div class={style.slot} ref={slotsRef} onClick={() => redirect()} />
            </div>
            <img
                style={{visibility: props.position < 4 ? "visible" : "hidden"}}
                class={style["down-arrow"]}
                src={"assets/arrow.svg"}
                onClick={() => props.onNextClicked()} />
        </div>
    </div>
}

const Yash = () => <div class={style["yash-text-wrapper"]}>
    <div class={style["yash-text"]}>yash</div>
</div>

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
        <div class={style.body}>
            <div class={style["three-layer"]}>
                <Yash />
                <video ref={videoRef} src={"assets/videos/1_Ambre_First.mp4"} preload />
                <SlotMachine
                    position={action.position}
                    onNextClicked={() => onNextClicked()}
                    onPreviousClick={() => onPreviousClick()}
                />
            </div>
            <Designation />
        </div>
        <div class={style["logo-wrapper"]}>
            <img class={style.logo} src={"assets/home_icon.svg"} />
            <span class={style["logo-text"]}>home</span>
        </div>
    </div>
};

export default Home;
