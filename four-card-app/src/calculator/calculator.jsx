import styles from "./calculator.module.scss";
import Icon from "../image/icon-calculator.svg";

export default function Calculator() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
      </div>
      <div className={styles.image}>
        <img src={Icon} alt="calculator" />
      </div>
    </div>
  );
}
