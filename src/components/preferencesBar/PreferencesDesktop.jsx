import { useState } from "react";
import preferencesBlack from "../../assets/icons/preferences/preferences.svg";
import preferencesOrange from "../../assets/icons/preferences/preferencesOrange.svg";
import ToggleOn from "../../assets/icons/preferences/switchon.svg";
import ToggleOff from "../../assets/icons/preferences/switchoff.svg";
import "./preferences.css";

export const PreferencesBarDesktop = () => {
  const [prefOnHover, setPrefOnHover] = useState(false);
  const [prefPopup, setPrefPopup] = useState(false);
  console.log([prefPopup])
  const [preferenceOn, setPreferenceOn] = useState(false);
  const [preferenceOn1, setPreferenceOn1] = useState(false);
  const [preferenceOn2, setPreferenceOn2] = useState(false);

  return (
    <div
      className="preferencesBar"
      onMouseEnter={() => {
        setPrefOnHover(true);
      }}
      onMouseLeave={() => {
        setPrefOnHover(false);
      }}
    >
      <h2>Fridgile</h2>
      <div>
        {prefOnHover ? (
          <img src={preferencesBlack} onClick={() => setPrefPopup(false)}
           alt="" className="preferencesIcon" />
        ) : (
          <img src={preferencesOrange} onClick={() => setPrefPopup(true)}
          alt="" className="preferencesIcon" />
        )}
      </div>
      {prefPopup &&
      <div className="popup">
        <p>Preferences</p>
        <ul className="list-preferences">
          <div className="preftoggle">
            <li>Allow notifications</li>

            {preferenceOn ? 
          <img 
          src={ToggleOn}
          title="Preference On"
          onClick={() => setPreferenceOn(false)}  
          /> : 
          <img
          src={ToggleOff}
          title="Preference Off"
          onClick={() => setPreferenceOn(true)}  
          />
        }

          </div>
          <div className="preftoggle">
            <li>Allow my location</li>
            {preferenceOn1 ? 
          <img 
          src={ToggleOn}
          title="Preference On"
          onClick={() => setPreferenceOn1(false)}  
          /> : 
          <img 
          src={ToggleOff}
          title="Preference Off"
          onClick={() => setPreferenceOn1(true)}  
          />
        }
          </div>
          <div className="preftoggle">
            <li>Others can see my activity</li>
             {preferenceOn2 ? 
          <img 
          src={ToggleOn}
          title="Preference On"
          onClick={() => setPreferenceOn2(false)}  
          /> : 
          <img 
          src={ToggleOff}
          title="Preference Off"
          onClick={() => setPreferenceOn2(true)}  
          />
        }
          </div>
        </ul>
      </div>
}
    </div>
  );
};
