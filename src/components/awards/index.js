// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {awardsOriginal, awardsThumbnails} from "../../utils/dataService";
import {awardsThumbnail} from "../../utils/imgService";
import {useState} from "preact/hooks";
import Preview from "../preview";

const Awards = () => {
    const [previewMedia, setPreviewMedia] = useState(undefined);

    const onClicked = (media) => {
        setPreviewMedia({
            group : awardsOriginal.find(it => it.id === media.id).media,
            selected: awardsOriginal.find(it => it.id === media.id).media[0],
            type: "awards"
        })
        console.log("ut", awardsOriginal.find(it => it.id === media.id).media[0])
    };

    return <div class={style.parent}>
        {awardsThumbnails.map(data => {
            return <img
                class={style.cell}
                src={awardsThumbnail(data.image)}
                alt="image"
                onClick={() => onClicked(data)}
            />
        })}
        {previewMedia &&
        <Preview
            data={previewMedia}
            onCancelClicked={() => setPreviewMedia(undefined)} />}
    </div>
};

export default Awards;
