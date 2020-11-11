import AboutMe from "./about-me";
import style from './style.css';
import Experience from "./experience";
import Literacy from "./literacy";
import {useEffect, useState} from "preact/hooks";


const App = () => {
    const [pageNo, setPageNo] = useState(0);

    useEffect(() => {
        const element = document.getElementById("scroller");
        element.scroll({
            left : document.body.clientWidth * pageNo,
            behavior : "smooth"
        })
        return () => {};
    }, [pageNo]);

    const onPrevClicked = () => setPageNo((currentPageNo) => currentPageNo - 1);
    const onNextClicked = () => setPageNo((currentPageNo) => currentPageNo + 1);

   return <div id="app">
        <div class={style.wrapper}>
            <div class={style["scroll-container"]} id="scroller">
                <AboutMe/>
                <Experience/>
                <Literacy/>
            </div>
            {pageNo > 0 && <div class={style.left} onClick={onPrevClicked}>prev</div>}
           {pageNo < 2 &&  <div class={style.right} onClick={onNextClicked}>next</div>}
        </div>
    </div>
}

export default App;
