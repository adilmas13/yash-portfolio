// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';
import {aboutMeImg} from "../../utils/imgService";
import {useEffect, useState} from "preact/hooks";
import {getExperience} from "../../utils/calculationService";

const Experience = () => {
    const [exp, setExp] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const data = [
        {place: 'ddb mudra', experience: '1.7 YEARS', designation: 'senior art director'},
        {place: 'leo burnett', experience: '3.8 YEARS', designation: 'art director'},
        {place: 'leo burnett', experience: '2.0 YEARS', designation: 'graphic designer'},
        {place: 'percept art', experience: '1.0 YEARS', designation: 'freelance designer'}
    ];

    useEffect(() => {
        // 12 April 2012
        // 12/04/2012
        let id = setInterval(() => {
            setExp(getExperience("04/12/2012"));
        }, 1000)
        return () => {
            clearInterval(id)
        }
    });
    return <div class={style.parent}>
        <div class={style['image-wrapper']}>
            <img src={aboutMeImg("experience_shadow")} alt="yash-shadow" class={style['shadow-image']} />
            <img src={aboutMeImg("experience")} alt="yash" class={style['main-image']} />
        </div>
        <div class={style['right-content']}>
            <div class={style['details-wrapper']}>
                <div class={style['top-wrapper']}>
                    <div class={style.header}>experience</div>
                    <div class={style['time-parent']}>
                        <div class={style.number} value="YEARS">{exp.years}</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="MONTHS">{exp.months}</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="DAYS">{exp.days}</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="HOURS">{exp.hours}</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="MINUTES">{exp.minutes}</div>
                        <div class={style.colon}>:</div>
                        <div class={style.number} value="SECONDS">{exp.seconds}</div>
                    </div>
                </div>
                <div class={style['middle-wrapper']}>
                    <div class={style.details}>
                        <div class={style.titles}>
                            {data.map(it => <span>{it.place}<span>&#8250;</span></span>)}
                        </div>
                        <div class={style.desc}>
                            {data.map(it => <span>{it.experience}<span class={style.designation}>{it.designation}</span></span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Experience;
