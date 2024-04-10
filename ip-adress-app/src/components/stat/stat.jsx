import styles from "./stat.module.scss";

export default function Stat({ ipAddress, location, timezone, isp }) {
  return (
    <div className={styles.container}>
      <div className={styles.ip}>
        <p className={styles.ipName}>IP Address</p>
        <p className={styles.ipContent}>{ipAddress} </p>
      </div>

      <div className={styles.location}>
        <p className={styles.locationName}>Location</p>
        <p className={styles.locationContent}>{location} </p>
      </div>

      <div className={styles.time}>
        <p className={styles.timeName}>Timezone</p>
        <p className={styles.timeContent}>{timezone} </p>
      </div>

      <div className={styles.isp}>
        <p className={styles.ispName}>ISP</p>
        <p className={styles.ispContent}>{isp} </p>
      </div>
    </div>
  );
}
