// eslint-disable-next-line no-unused-vars
import React, {createRef} from "preact";
import style from './style.css';
// import bodymovin from 'bodymovin'

const Loader = () => {
    const ref = createRef()
    // useEffect(() => {
    //     bodymovin.loadAnimation({
    //         wrapper: ref.current,
    //         animType: 'svg',
    //         loop: true,
    //         path: 'https://labs.nearpod.com/bodymovin/demo/pancakes/data.json'
    //     })
    // }, [])

    return <div class={style.parent}>
        <div class={style.loader} ref={ref} />
    </div>
};

export default Loader;
