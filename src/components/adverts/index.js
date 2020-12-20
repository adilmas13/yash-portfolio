// eslint-disable-next-line no-unused-vars
import React from "preact";
import CommonListing from "../common";
import {adverts} from "../../utils/dataService";

const Adverts = () => {
    const config = {
        data: adverts,
        type: "adverts"
    }
    return <CommonListing config={config} />
};

export default Adverts;
