// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import {advertsThumbnail, artsThumbnail} from "../../utils/imgService";

const Preview = (props) => {
    const group = props.data.group;

    const [pageNo, setPageNo] = useState(group.findIndex(it => it.id === props.data.selected.id));

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);

    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    const parentHeight = document.body.clientHeight;
    const parentWidth = document.body.clientWidth;

    let width = parentWidth * 0.75;
    let height = 0;

    if (group[pageNo].ratio === "16:9") {
        height = width * (9 / 16);
    }
    if (group[pageNo].ratio === "9:16") {
        height = parentHeight * 0.80;
        width = height * 0.709; // this is not 9:16 as the images are not been given in those dimensions
    }

    return (<div class={style.preview}>
        <img class={style.cancel}
             src="assets/cancel.svg"
             onClick={props.onCancelClicked}
        />
        <div class={style.body}>
            {group[pageNo].videoId ? <iframe width={width} height={height}
                        src={`https://www.youtube.com/embed/${group[pageNo].videoId}`} /> :
                <img
                    alt="preview"
                    src={advertsThumbnail(group[pageNo].image)}
                    height={height} width={width} />
            }
        </div>
        {pageNo > 0 && <div class={style.left} onClick={onPrevClicked}>prev</div>}
        {pageNo < (group.length - 1) && <div class={style.right} onClick={onNextClicked}>next</div>}
    </div>)
};

const MediaCell = (props) => {
    const media = props.media;

    let image;
    let video;
    switch(props.type){
        case "adverts":
            image = advertsThumbnail(media.image)
            video = advertsThumbnail(media.image, "mp4")
            break;
        case "arts":
            image = artsThumbnail(media.image)
            video = artsThumbnail(media.image, "mp4")
            break;
    }
    const [isVideoVisible, setVideoVisibility] = useState(false);

    const onHover = (evt) => {
        evt.stopPropagation();
        props.onCellEnter();
    };

    const onLeave = (evt) => {
        evt.stopPropagation();
        props.onCellLeave();
    };

    let overlayStyle = {
        position: 'absolute',
        borderRadius: '10px',
        backgroundColor: 'black',
        opacity: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: '0.3s ease-out all',
        userSelect: 'none'
    }

    if (props.isActive) {
        overlayStyle = {...overlayStyle, ...{opacity: 0.35}}
    }

    useEffect(() => {
        let timeOutId;
        if (props.activeMedia && props.media.id === props.activeMedia.id) {
            timeOutId = setTimeout(() => {
                setVideoVisibility(true);
            }, 400)
        }
        return () => {
            if (timeOutId) {
                clearTimeout(timeOutId);
            }
            setVideoVisibility(false);
        }
    }, [props.activeMedia])

    return (<div class={style['media-wrapper']}
                 onMouseEnter={onHover}
                 onMouseLeave={onLeave}
                 onClick={() => {
                     props.handleClick(media);
                     setVideoVisibility(false);
                 }}>
        <img alt="adverts" src={image} />
        <div style={overlayStyle} />
        {(isVideoVisible && media.videoId) &&
        <video src={advertsThumbnail(media.image, "mp4")} poster={image} autoplay loop />}
    </div>)
};

// config = {
//      data: {},
//      type: "adverts" | "arts"
// }
const CommonListing = (props) => {
    const config = props.config;
    const data = config.data;
    const type = config.type;
    const [previewMedia, setPreviewMedia] = useState(undefined);
    const [activeMedia, setActiveMedia] = useState(undefined);

    const onClicked = (media) => {
        setPreviewMedia({
            group : data.flatMap(it => it).filter(it => it.groupId === media.groupId),
            selected: media
        })
    };

    const onCellEnter = media => setActiveMedia(media);

    const onCellLeave = () => setActiveMedia(undefined);

    return <div class={style.parent}>
        <div class={style['scroll-container']}>
            {data.map(it =>
                <div class={style.column}>
                    {it.map(media =>
                        <MediaCell
                            media={media}
                            type={type}
                            handleClick={onClicked}
                            onCellEnter={() => onCellEnter(media)}
                            onCellLeave={() => onCellLeave()}
                            activeMedia={activeMedia}
                            isActive={activeMedia && activeMedia.groupId === media.groupId && activeMedia.image !== media.image}
                        />)
                    }
                </div>
            )}
        </div>
        {previewMedia &&
        <Preview
            data={previewMedia}
            onCancelClicked={() => setPreviewMedia(undefined)} />}
    </div>
};

export default CommonListing;
