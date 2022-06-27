import React, { useState } from "react";
import "./scss/App.css";

function App() {
  let mobileNavigatorObject: any = window.navigator;
  const [info, setInfo] = useState("");
  return (
    <div className="App">
      <div className="buttonContainer">
        <button
          onClick={() => {
            if (mobileNavigatorObject && mobileNavigatorObject.bluetooth) {
              mobileNavigatorObject.bluetooth
                .requestDevice({
                  acceptAllDevices: true,
                  optionalServices: ["battery_service", "device_information"],
                })
                .then((device: any) => {
                  console.log(device.name);
                });
            } else {
              setInfo("Bluetooth not enabled on this browser");
            }
          }}
        >
          Discover devices
        </button>
      </div>
      <div className="info">{info}</div>
    </div>
  );
}

export default App;
