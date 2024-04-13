import styles from "./upStart.module.scss";
import Image from "../../../images/illustration-working.svg";
import Button from "../../../common/components/ui/button/button";

export default function UpStart() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={Image} alt="images" />
      </div>
      <div className={styles.content}>
        <h1>
          More than just <br />
          shorter links
        </h1>
        <h3>
          Build your brand’s recognition and get detailed <br /> insights on how
          your links are performing.
        </h3>
        <Button type="submit" className={styles.button} label="Get Started" />
        {/* <button>Get Started</button> */}
      </div>
    </div>
  );
}
