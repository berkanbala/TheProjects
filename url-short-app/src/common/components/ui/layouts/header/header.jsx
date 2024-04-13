import styles from "./header.module.scss";
import Icon1 from "../../../../../images/logo.svg";
import Button from "../../button/button";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={Icon1} alt="header" />
      </div>
      <div className={styles.content}>
        <ul>
          <li className={styles.link}>
            <a href="#">Features</a>
          </li>
          <li className={styles.link}>
            <a href="#">Pricing</a>
          </li>
          <li className={styles.link}>
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul>
          <li className={styles.link}>
            <a href=""> Login</a>
          </li>
          <li className={styles.link}>
            <Button type="submit" className={styles.button} label="Sign Up" />
          </li>
        </ul>
      </div>
    </div>
  );
}
