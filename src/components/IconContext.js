import { createContext } from "react";
import { WiDayRain, WiCloud, WiDayCloudyHigh, WiDaySunny, WiCloudyWindy, WiFog,
    WiStormShowers, WiSnow, WiStormWarning, WiThermometer, WiStrongWind } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi"   


export const IconContext = createContext(
    {
        rain: <WiDayRain/>,
        clouds: <WiCloud/>,
        cloudsAndSun: <WiDayCloudyHigh/>,
        sunny: <WiDaySunny/>,
        windy: <WiCloudyWindy/>,
        fog: <WiFog/>,
        snow: <WiSnow/>,
        thunder: <WiStormShowers/>,
        storm: <WiStormWarning/>,
        temperature: <WiThermometer/>,
        wind: <PiWindBold/>,
    }
)