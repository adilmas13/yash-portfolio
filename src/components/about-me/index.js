// eslint-disable-next-line no-unused-vars
import style from './style.css';

const AboutMe = () => {
    const details = {
        name: 'yash',
        age: '29',
        designation: 'senior art director',
        contact: '+91-8080606226',
        email: 'yash.ambre92@gmail.com',
        gender: 'male',
        description: [
            'Passionate, ambitious and artistic',
            'towards work and life equally.',
            'A rare combination of positive and',
            'creative blood, living up to its name.'
        ]
    };

    return <div class={style.parent}>
        <div style="position: relative; height: 100%; margin-right: 3.5rem">
            <img src="assets/about_shadow.png" alt="yash-shadow" class={style['main-image']} />
            <img src="assets/about.png" alt="yash" class={style['main-image']}
                 style="position: absolute; right: 10px" />
        </div>
        <div class={style['details-wrapper']}>
            <div class={style['top-wrapper']}>
                <div class={style['gender-age']}>{details.gender}. {details.age}.</div>
                <div class={style['designation']}>{details.designation}</div>
            </div>
            <div class={style['middle-wrapper']}>
                <div class={style.name}>{details.name}</div>
                <div class={style['noun-success']}>
                    <span>noun: </span>
                    <span>success</span>
                </div>
                <div class={style.description}>
                    {details.description.map(it => <div>{it}</div>)}
                </div>
            </div>
            <div class={style['bottom-wrapper']}>
                <div class={style['digits-letters-wrapper']}>
                    <div class={style.split}>
                        <span>digits</span>
                        <span>{details.contact}</span>
                    </div>
                    <div class={style.split}>
                        <span>letters</span>
                        <span>{details.email}</span>
                    </div>
                </div>
            </div>


        </div>
    </div>
};

export default AboutMe;
