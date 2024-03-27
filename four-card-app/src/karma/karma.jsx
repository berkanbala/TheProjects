import styles from "./karma.module.scss";
import Icon from "../image/icon-karma.svg";

export default function Karma() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
      </div>
      <div className={styles.image}>
        <img src={Icon} alt="karma" />
      </div>
    </div>
  );
}
