import styles from "./teamBuilder.module.scss";
import Icon from "../image/icon-team-builder.svg";

export default function TeamBuilder() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Team Builder</h2>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
      </div>
      <div className={styles.image}>
        <img src={Icon} alt="team-builder" />
      </div>
    </div>
  );
}
