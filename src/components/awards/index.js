// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {awardsThumbnails} from "../../utils/dataService";
import {awardsThumbnail} from "../../utils/imgService";

const Awards = () => {
    return <div class={style.parent}>
        {awardsThumbnails.map(data => {
            return <img class={style.cell} src={awardsThumbnail(data.name)} alt="image" />
        })}
    </div>
};

export default Awards;
