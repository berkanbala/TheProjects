import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Search from "./components/search/search";
import Stat from "./components/stat/stat";
import Map from "./components/map/map";

export default function App() {
  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 37.867026,
    lng: 32.461914,
  });

  const fetchLocation = (ipAddress = "") => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_SytyraiFTN6edLDH4EVyWfHz8Zt3o&ipAddress=${ipAddress}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIPAddress(data.ip);
        setLocation(
          `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
        );
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(`${data.isp}`);
        setCoordinates({
          lat: data.location.lat,
          lng: data.location.lng,
        });
      });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className={styles.container}>
      <Search setIPAddress={setIPAddress} fetchLocation={fetchLocation} />
      <Stat
        ipAddress={IPAddress}
        location={location}
        timezone={timezone}
        isp={ISP}
      />
      <Map coordinates={coordinates} setCoordinates={setCoordinates} />
    </div>
  );
}
