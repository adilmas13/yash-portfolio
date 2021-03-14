// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {awardsOriginal, awardsThumbnails} from "../../utils/dataService";
import {awardsThumbnail} from "../../utils/imgService";
import {useState} from "preact/hooks";
import Preview from "../preview";
import Logo from "../logo";

const MediaCell = (props) => {
    const [isImageLoaded, setImageLoaded] = useState(false);

    let cellStyle = {
        opacity: isImageLoaded ? 1 : 0,
    }

    let imageWrapperStyle = {
        backgroundColor: `${props.media.color}33` || "lightgrey"
    }

    return <div class={style["image-wrapper"]} style={imageWrapperStyle}>
        <img
            class={style.cell}
            style={cellStyle}
            src={awardsThumbnail(props.media.image)}
            alt="image"
            onLoad={() => setImageLoaded(true)}
            onClick={() => props.onClicked()}
        />
    </div>
};
const Awards = () => {
    const [previewMedia, setPreviewMedia] = useState(undefined);

    const onClicked = (media) => {
        setPreviewMedia({
            group: awardsOriginal.find(it => it.id === media.id).media,
            selected: awardsOriginal.find(it => it.id === media.id).media[0],
            type: "awards"
        })
    };

    return <div class={style.parent}>
        <Logo title={"awards"} />
        <div class={style.grid}>
            {awardsThumbnails.map(data => <MediaCell media={data} onClicked={() => onClicked(data)} />)}
        </div>
        {previewMedia &&
        <Preview
            data={previewMedia}
            onCancelClicked={() => setPreviewMedia(undefined)} />}
    </div>
};

export default Awards;
