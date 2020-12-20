// eslint-disable-next-line no-unused-vars
import React from "preact";
import {adverts} from "./advertsService";
import CommonListing from "../common";

const Adverts = () => {
    return <CommonListing data={adverts} />
};

export default Adverts;
