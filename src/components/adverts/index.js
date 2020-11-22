// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {useState} from "preact/hooks";
import {adverts} from "./advertsService";

const Preview = (props) => {
    const media = props.media;
    const parentHeight = document.body.clientHeight;
    const parentWidth = document.body.clientWidth;

    let width = parentWidth * 0.75;
    let height = 0;

    if (media.ratio === "16:9") {
        height = width * (9 / 16);
    }
    if (media.ratio === "9:16") {
        height = parentHeight * 0.80;
        width = height * 0.709; // this is not 9:16 as the images are not been given in those dimensions
    }

    return (<div class={style.preview}>
        <img class={style.cancel}
             src="assets/cancel.svg"
             onClick={props.onCancelClicked}
        />
        <div class={style.body}>
            {props.media.isVideo ?
                <iframe width={width} height={height}
                        src={`https://www.youtube.com/embed/${media.videoId}`}>
                </iframe> :
                <img
                    src={`assets/${media.image}.jpg`}
                    height={height} width={width} />
            }
        </div>
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
    const [previewMedia, setPreviewMedia] = useState(undefined);
    const onClicked = (media) => {
        setPreviewMedia(media);
    };
    return <div class={style.parent}>
        {adverts.map(it =>
            <div class={style.column}>
                {it.map(media => <MediaCell media={media} handleClick={onClicked} />)}
            </div>
        )}
        {previewMedia && <Preview
            media={previewMedia}
            onCancelClicked={() => setPreviewMedia(undefined)} />}
    </div>
};

export default Adverts;
