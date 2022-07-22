import BarChart from "./BarChart.jsx";
import React, { useEffect, useState } from "react";



 export default function Chart( { carCarbon, bikeCarbon, homeCarbon } ) {

    const [userData, setUserData] = useState()
    const [carData, setCarData] = useState()
    const [homeData, setHomeData] = useState()
    const [xData, setXData] = useState()
    const [avg, setAvg] = useState()
    const [names, setNames] = useState()
    const [carMessage, setCarMessage] = useState()
    const [bikeMessage, setBikeMessage] = useState()
    const [homeMessage, setHomeMessage] = useState()
    const [graphColor, setGraphColor] = useState()
    const [totalEmissions, setTotalEmissions] = useState()
    const [totalEmissionsGraph, setTotalEmissionsGraph] = useState()
    const [totalEmissionsGraphAvg, setTotalEmissionsGraphAvg] = useState()

    const message = (data, average, type) => {
        if(data > average) {
            const percentage = (((data-average)/average)*100).toFixed(1)
            return `- Your ${type} carbon emissions are worse than the average American ${type} by ${percentage}%`
        } else {
            const percentage = (((average-data)/average)*100).toFixed(1)
            return `- Your ${type} carbon emissions are better than the average American ${type} by ${percentage}%`
        }
    }

    const data = (data, average) => {
            let result = Number(data).toFixed(2)
            return `(${result} kg vs ${average} kg)`
    }

    const gColor = (data, average) => {
        if(data > average) {
            return "red"
        } 
        return "green"
}

    const compareCO2 = (userArr, avgArr) => {
            if(userArr.length === 0) return
            const sumUser = userArr.reduce((partialSum, a) => partialSum + a, 0);
            const sumAvg = avgArr.reduce((partialSum, a) => partialSum + a, 0);
            if (sumUser > sumAvg) return `Your total weekly Carbon emissions are ${(sumUser-sumAvg).toFixed(2)} kg more than the average`
            return `Your total weekly Carbon emissions are ${(sumAvg-sumUser).toFixed(2)} kg less than the average`
    }

    useEffect(() => {
        const averages = []
        const userData = []
        const label = []
        const color = []
        const carAvg = 1;
        const homeAvg = 2;
        const bikeAvg = 3;
        console.log(carCarbon)
        if(carCarbon !== 0) {
            averages.push(carAvg)
            userData.push(Number(carCarbon))
            label.push('Car')
            setCarMessage(message(carCarbon, carAvg, 'car') + ' ' + ' ' + data(carCarbon, carAvg))
            color.push(gColor(carCarbon, carAvg))
        }
        if (homeCarbon !== 0 ) {
            console.log(homeCarbon)
            averages.push(homeAvg)
            userData.push(Number(homeCarbon))
            label.push('Home')
            setHomeMessage(message(homeCarbon, homeAvg, 'home') + ' ' + ' ' + data(homeCarbon, homeAvg))
            color.push(gColor(homeCarbon, homeAvg))
        }
        if (bikeCarbon !== 0) {
            averages.push(bikeAvg)
            userData.push(Number(bikeCarbon))
            label.push('Motorbike')
            setBikeMessage(message(bikeCarbon, bikeAvg, 'bike')+ ' ' + ' ' + data(bikeCarbon, bikeAvg))
            color.push(gColor(bikeCarbon, bikeAvg))
        }
        

        setAvg(averages)
        setNames(label)
        setUserData(userData)
        setGraphColor(color)
        let x = compareCO2(userData, averages)
        setTotalEmissions(compareCO2(userData, averages))
        


    }, [carCarbon, bikeCarbon, homeCarbon])

    let graphData = {
        datasets: [{
            label: 'Your Data',
            data: userData,
            backgroundColor: graphColor,
        },{
            label: 'Average Data',
            data: avg,
            backgroundColor: ["blue"],
        }],
        labels: names,
    }

    return (
        <div className="dashboard" style={{ background: 'linear-gradient(to right bottom, #D3D3D3, #abf7b1	)'}}>
            <div className="stats">
            <h3 style={{textAlign: "center"}}>Your Statistics</h3>
            <h5 className="statss" style={{textAlign: "left", marginLeft: "15px"}}>{carMessage}</h5>
            <h5 className="statss" style={{textAlign: "left", marginLeft: "15px"}}>{bikeMessage}</h5>
            <h5 className="statss" style={{textAlign: "left", marginLeft: "15px"}}>{homeMessage}</h5>
            <h4 className="statss" style={{textAlign: "center", marginLeft: "15px"}}>{totalEmissions}</h4>
            </div>
            <div className="barchart" style={{margin: "10px", width: "400px"}}>
                <BarChart chartData={graphData} style={{alignItems: "left"}}/>
            </div>
        </div>
    )
 }