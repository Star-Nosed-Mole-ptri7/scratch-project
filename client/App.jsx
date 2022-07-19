import carbonFootprint from "./CarbonFootprint.jsx";
import CarbonOptions from "./CarbonOptions.jsx";
import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ButtonAppBar from "./components/Nav.jsx";
import Body from "./components/Body.jsx";
import SignUp from "./components/Signup.jsx";
import SignIn from "./components/Login.jsx";
import Bodywriting from "./components/Bodywriting.jsx";


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    if (loggedIn) {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<ButtonAppBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}>
                        <Route path='/feed' element={<Body />}>
                        </Route>
                        <Route path='/*' element={<Navigate to='/' replace={true} />} />
                    </Route>
                </Routes>
            </div>
        )
    }


    return (
        <div>
            <Routes>
                <Route path='/' element={<ButtonAppBar loggedIn={loggedIn}/>}>
                    <Route path='/' element={<Body />}>
                        <Route path='/' exact element={<Bodywriting />}>
                        </Route>
                        <Route path='/Signup' element={<SignUp />}>
                        </Route>
                        <Route path='/Login' element={<SignIn setLoggedIn={setLoggedIn}/>}>
                        </Route>
                        <Route path='/*' element={<Navigate to='/' replace={true} />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
