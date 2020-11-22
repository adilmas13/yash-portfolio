// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {useState} from "preact/hooks";
import {adverts} from "./advertsService";

const Preview = (props) => {
    return (<div class={style.preview}>
        <img class={style.cancel} src="assets/cancel.svg"
             onClick={props.onCancelClicked}
        />
    </div>)
};

const MediaCell = (props) => {
    const media = props.media;
    let timeOutId = null;
    const image = `assets/${media.image}.jpg`;
    const [isVideoVisible, setVideoVisibility] = useState(false);
    const onHover = (evt) => {
        evt.stopPropagation();
        timeOutId = setTimeout(() => {
            setVideoVisibility(true);
        }, 400)
    };
    const onLeave = (evt) => {
        evt.stopPropagation();
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        setVideoVisibility(false);
    };
    return (<div class={style['media-wrapper']}
                 onMouseEnter={onHover}
                 onMouseLeave={onLeave}
                 onClick={() => props.handleClick(media)}>
        <img alt="adverts" src={image} />
        {(isVideoVisible && media.isVideo) &&
        <video src={`assets/${media.image}.mp4`} poster={image} autoplay loop />}
    </div>)
};

const Adverts = () => {
    const [isPreviewVisible, setPreviewVisibility] = useState(false);
    const onClicked = (media) => {
        setPreviewVisibility(true);
    };
    return <div class={style.parent}>
        {adverts.map(it =>
            <div class={style.column}>
                {it.map(media => <MediaCell media={media} handleClick={onClicked} />)}
            </div>
        )}
        {isPreviewVisible && <Preview onCancelClicked={() => setPreviewVisibility(false)} />}
    </div>
};

export default Adverts;
