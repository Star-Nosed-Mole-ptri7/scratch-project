import BarChart from "./BarChart.jsx";
import React, { useEffect, useState } from "react";



 export default function Chart( { s } ) {

    let carz = 0.5
    let homez = 4
    let xz = 0

    const [userData, setUserData] = useState()
    const [carData, setCarData] = useState()
    const [homeData, setHomeData] = useState()
    const [xData, setXData] = useState()
    const [avg, setAvg] = useState()
    const [names, setNames] = useState()
    const [carMessage, setCarMessage] = useState()
    const [bikeMessage, setBikeMessage] = useState()
    const [homeMessage, setHomeMessage] = useState()

    const message = (data, average, type) => {
        if(data > average) {
            const percentage = (((data-average)/average)*100).toFixed(1)
            return `Your ${type} is worse than the average American ${type} by ${percentage}%`
        } else {
            const percentage = (((average-data)/average)*100).toFixed(1)
            return `Your ${type} is better than the average American ${type} by ${percentage}%`
        }
    }

    useEffect(() => {
        const averages = []
        const userData = []
        const label = []
        const carAvg = 1;
        const homeAvg = 2;
        const xAvg = 3;
        if(carz !== 0) {
            averages.push(carAvg)
            userData.push(carz)
            label.push('car')
            setCarMessage(message(carz, carAvg, 'car'))
        }
        if (homez !== 0 ) {
            averages.push(homeAvg)
            userData.push(homez)
            label.push('home')
            setHomeMessage(message(homez, homeAvg, 'home'))
        }
        if (xz !== 0) {
            averages.push(xAvg)
            userData.push(xz)
            label.push('x')
            setBikeMessage(message(xz, xAvg, 'bike'))
        }

        setAvg(averages)
        setNames(label)
        setUserData(userData)
    }, [])

    let graphData = {
        datasets: [{
            label: 'car',
            data: userData // I think should be [carz, homez, xz]
        },{
            label: 'Average',
            data: avg
        }],
        labels: names
    }

    let options = {
        chartArea:{
            backgroundColor: "rgba(251, 85, 85, 0.4)"
        }
    }

    return (
        <div className="dashboard">
            <div className="stats">
            <h3 style={{textAlign: "center"}}>Your Statistics</h3>
            <h5 className="statss" style={{textAlign: "left"}}>{carMessage}</h5>
            <h5 className="statss" style={{textAlign: "left"}}>{bikeMessage}</h5>
            <h5 className="statss" style={{textAlign: "left", border: "solid", marginLeft: "0px"}}>{homeMessage}</h5>
            </div>
            <div className="barchart">
                <BarChart chartData={graphData} options={options} />
            </div>
        </div>
    )
 }