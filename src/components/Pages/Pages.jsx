import "./Pages.css";
import { WiDayRain } from "react-icons/wi";
import { VscSettings } from "react-icons/vsc";
import { RiListUnordered } from "react-icons/ri";
import { ImMap2 } from "react-icons/im";
import { TbWind } from "react-icons/tb"

export const Pages = () => {
  return (
    <div className="navbar">
        <TbWind className="logo"/>

      <div>
        <a href="/" className="navbar-link">
        <WiDayRain className="icon"/>
            Weather </a>
      </div>
      <div>
        <a href="/cities" className="navbar-link">
            <RiListUnordered className="icon"/>
             Cities</a>
      </div>
      <div>
        <a href="/map" className="navbar-link">
            <ImMap2 className="icon"/>
            Map</a>
      </div>
      <div>
        <a href="/settings" className="navbar-link">
        <VscSettings className="icon-settings"/>
            Settings</a>
      </div>
    </div>
  );
};
