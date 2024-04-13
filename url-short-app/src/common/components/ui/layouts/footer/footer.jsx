import styles from "./footer.module.scss";
import Icon from "../../../../../images/logo copy.svg";
import Facebook from "../../../../../images/icon-facebook.svg";
import Twitter from "../../../../../images/icon-twitter.svg";
import Pinterest from "../../../../../images/icon-pinterest.svg";
import Instagram from "../../../../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={Icon} alt="icon" />
        </div>
        <div className={styles.features}>
          <h2>Features</h2>
          <ul>
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>
        <div className={styles.resources}>
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className={styles.company}>
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <div className={styles.images}>
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
