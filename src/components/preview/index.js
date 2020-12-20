import {useState} from "preact/hooks";
import {advertsThumbnail, artsThumbnail, awardsOriginal, awardsThumbnail} from "../../utils/imgService";
import style from "./style.css";

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
            image = artsThumbnail(group[pageNo].image)
            break;
        case "awards":
            image = awardsOriginal(group[pageNo].image)
            break;
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
                    src={image}
                    height={height} width={width} />
            }
        </div>
        {pageNo > 0 && <div class={style.left} onClick={onPrevClicked}>prev</div>}
        {pageNo < (group.length - 1) && <div class={style.right} onClick={onNextClicked}>next</div>}
    </div>)
};

export default Preview;
