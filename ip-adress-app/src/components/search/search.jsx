import styles from "./search.module.scss";
import iconImage from "../../images/icon-arrow.svg";
import { useState } from "react";

export default function Search({ setIPAddress, fetchLocation }) {
  const [ipAddress, setIpAddress] = useState("");

  const handleClick = () => {
    setIPAddress(ipAddress);
    fetchLocation(ipAddress);
  };
  return (
    <div className={styles.container}>
      <h2>IP ADDRESS TRACKER</h2>
      <div className={styles.content}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ip Address.."
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button type="submit" className={styles.button} onClick={handleClick}>
          <img src={iconImage} alt="iconimage" className={styles.image} />
        </button>
      </div>
    </div>
  );
}
