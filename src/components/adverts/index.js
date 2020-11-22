// eslint-disable-next-line no-unused-vars
import React from "preact";
import style from './style.css';

const MediaCell = (media) => {
   return( <img alt="adverts" src={"assets/" + media.image} />)
};
const Adverts = () => {
    const data = [
        [
            {image: 'kwality.jpg', groupId: 1},
            {image: 'polo.jpg', groupId: 1},
            {image: 'md1.jpg', groupId: 1},
            {image: 'cor1.jpg', groupId: 1},
            {image: 'cor2.jpg', groupId: 1},
            {image: 'trix3.jpg', groupId: 1},
            {image: 'jeep1.jpg', groupId: 1},
            {image: 'jeep4.jpg', groupId: 1},
            {image: 'jeep8.jpg', groupId: 1},
        ], [
            {image: 'stayfree1.jpg', groupId: 1},
            {image: 'vw1.jpg', groupId: 1},
            {image: 'md2.jpg', groupId: 1},
            {image: 'cor3.jpg', groupId: 1},
            {image: 'happy1.jpg', groupId: 1},
            {image: 'bbc1.jpg', groupId: 1},
            {image: 'jeep2.jpg', groupId: 1},
            {image: 'jeep5.jpg', groupId: 1},
            {image: 'jeep9.jpg', groupId: 1},
        ], [
            {image: 'stayfree2.jpg', groupId: 1},
            {image: 'vw2.jpg', groupId: 1},
            {image: 'md3.jpg', groupId: 1},
            {image: 'cor4.jpg', groupId: 1},
            {image: 'bbc2.jpg', groupId: 1},
            {image: 'jeep3.jpg', groupId: 1},
            {image: 'jeep7.jpg', groupId: 1},
        ], [
            {image: 'facebook.jpg', groupId: 1},
            {image: 'vw3.jpg', groupId: 1},
            {image: 'md4.jpg', groupId: 1},
            {image: 'trix1.jpg', groupId: 1},
            {image: 'trix2.jpg', groupId: 1},
            {image: 'covid1.jpg', groupId: 1},
            {image: 'jeep6.jpg', groupId: 1},
            {image: 'jeep10.jpg', groupId: 1},
        ]
    ];
    return <div class={style.parent}>
            {data.map(it =>
                 <div class={style.column}>
                    {it.map(media => MediaCell(media))}
                </div>
            )}
    </div>
};

export default Adverts;
