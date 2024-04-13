import styles from "./advancedStatic.module.scss";
import Image from "../../../images/icon-brand-recognition.svg";
import Image1 from "../../../images/icon-detailed-records.svg";
import Image2 from "../../../images/icon-fully-customizable.svg";

export default function AdvancedStatic() {
  return (
    <div className={styles.container}>
      <h1>Advanced Statics</h1>
      <p>
        Track how your links are performing across the web with <br />
        our advanced statistics dashboard.
      </p>
      <div className={styles.card}>
        <div className={styles.card1}>
          <img src={Image} alt="" />
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with
            <br /> each click. Generic links don’t mean a<br /> thing. Branded
            links help instil
            <br /> confidence in your content.
          </p>
        </div>
        <div className={styles.card2}>
          <img src={Image1} alt="" />
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your
            <br /> links. Knowing when and where
            <br /> people engage with your content
            <br /> helps inform better decisions.
          </p>
        </div>
        <div className={styles.card3}>
          <img src={Image2} alt="" />
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and
            <br /> content discoverability through
            <br />
            customizable links, supercharging
            <br /> audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
