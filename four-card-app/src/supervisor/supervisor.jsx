import styles from "./supervisor.module.scss";
import Icon from "../image/icon-supervisor.svg";

export default function SuperVisor() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
      </div>
      <div className={styles.image}>
        <img src={Icon} alt="supervisor" />
      </div>
    </div>
  );
}
