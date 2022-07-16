import React, { useState } from "react";
import sample from "../../background.mp4";
import { Outlet } from "react-router-dom";
import { Margin } from "@mui/icons-material";
import "../style.css";
import CarbonOptions from './CarbonOptions.jsx';



export default function Body() {
    return (
    <div className="container">
    <video className='videoTag' autoPlay loop muted style={{ width: "100%", height: "100%" }}>
    <source src={sample} type='video/mp4' />
    </video>
    <Outlet />
    {/* <CarbonOptions /> */}
    </div>
    )
}