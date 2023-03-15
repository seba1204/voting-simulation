import React from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import Root from "../pages/Root";
import Simulator from "../pages/Simulator";

import rts from './routes.path';
import { propsTypes } from "./routes.props";

const routes = (props: propsTypes) => {

    return createRoutesFromElements(
        <>
            <Route path={rts.home} element={<Root />} />
            <Route path={rts.simulator} element={<Simulator />} />
        </>
    )
};

export default routes;