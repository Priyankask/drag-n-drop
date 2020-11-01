import React, { Fragment } from "react";
import Homepage from "./pages/Homepage";
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const App = () => {
    return (
        <Fragment>
            
            <Homepage />
        </Fragment>
    );
};

export default App;
