import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/hello";

const root = document.createElement('div.root');
document.body.appendChild(root);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React"/>,
    root
);