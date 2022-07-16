import carbonFootprint from "./components/CarbonFootprint.jsx";
import CarbonOptions from "./components/CarbonOptions.jsx";
import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ButtonAppBar from "./components/Nav.jsx";
import Body from "./components/Body.jsx";
import SignUp from "./components/Signup.jsx";
import SignIn from "./components/Login.jsx";


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    if (loggedIn) {

    }

    return (
        <div>
            <Routes>
                <Route path='/' element={<ButtonAppBar />}>
                    <Route path='/' element={<Body />}>
                        <Route path='/Signup' element={<SignUp />}>
                        </Route>
                        <Route path='/Login' element={<SignIn />}>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
