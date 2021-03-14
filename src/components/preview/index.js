import {useEffect, useRef, useState} from "preact/hooks";
import {advertsThumbnail, artsOriginal, awardsOriginal} from "../../utils/imgService";
import style from "./style.css";

const Back = (props) => {
    return (
        <div class={style["back-parent"]} onClick={() => props.onCancel()}>
            <div class={style["icon-wrapper"]}>
                <img src={'assets/cross.svg'} />
            </div>
            <div class={style.text}>BACK</div>
        </div>
    )
}
const LoadableImage = (props) => {

    const [isImageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        let timeoutId = setTimeout(() => setImageLoaded(false), 800)
        const img = imgRef.current;
        const loadedListener = () => {
            clearTimeout(timeoutId);
            setImageLoaded(true);
        };
        img.addEventListener("load", loadedListener)
        img.src = props.src;
        return () => {
            clearTimeout(timeoutId)
            img.removeEventListener("load", loadedListener)
        }
    }, [props.src]);

    return <div class={style["image-wrapper"]}>
        <img
            class={isImageLoaded ? style["visible"] : style["hidden"]}

            ref={imgRef}
            alt="preview"
        />
        {!isImageLoaded && <div class={style["loader"]}>Loading</div>}
    </div>
}

const Preview = (props) => {
    const group = props.data.group;

    const [pageNo, setPageNo] = useState(group.findIndex(it => it.id === props.data.selected.id));

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);

    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

    const parentHeight = document.body.clientHeight;
    const parentWidth = document.body.clientWidth;

    let width = parentWidth * 0.75;
    let height = 0;

    if (group[pageNo].ratio) {
        if (group[pageNo].ratio === "16:9") {
            height = width * (9 / 16);
        }
        if (group[pageNo].ratio === "9:16") {
            height = parentHeight * 0.80;
            width = height * 0.709; // this is not 9:16 as the images are not been given in those dimensions
        }
    }

    let image;
    switch (props.data.type) {
        case "adverts":
            image = advertsThumbnail(group[pageNo].image)
            break;
        case "arts":
            image = artsOriginal(group[pageNo].image)
            break;
        case "awards":
            image = awardsOriginal(group[pageNo].image)
            break;
    }

    const enableArrow = {
        visibility: 'visible',
        pointerEvents: 'auto'
    }

    const disableArrow = {
        visibility: 'hidden',
        pointerEvents: 'none'
    }

    return (<div class={style.preview}>
        <div class={style.cancel}>
            <Back onCancel={() => props.onCancelClicked()} />
        </div>
        <div class={style["body-wrapper"]}>
            <div
                style={pageNo > 0 ? enableArrow : disableArrow}
                class={style["prev-wrapper"]}
                onClick={onPrevClicked}>
                <img src={"assets/arrow_blunt.svg"}
                     class={style.arrow} />
                <div class={style.text}>prev</div>
            </div>
            <div class={style.body}>
                {group[pageNo].videoId
                    ? <iframe
                        width={width}
                        height={height}
                        src={`https://www.youtube.com/embed/${group[pageNo].videoId}`} />
                    : <LoadableImage src={image} />
                }
            </div>
            <div
                style={pageNo < (group.length - 1) ? enableArrow : disableArrow}
                class={style["next-wrapper"]}
                onClick={onNextClicked}>
                <div class={style.text}>next</div>
                <img src={"assets/arrow_blunt.svg"} class={style.arrow} />
            </div>
        </div>
    </div>)
};

export default Preview;
