// eslint-disable-next-line no-unused-vars
import React from "preact";
import CommonListing from "../common";
import {arts} from "../../utils/dataService";

const Arts = () => {
    const config = {
        data: arts,
        type: "arts"
    }
    return <CommonListing config={config} />
};

export default Arts;
