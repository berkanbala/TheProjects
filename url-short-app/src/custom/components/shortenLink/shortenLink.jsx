import Button from "../../../common/components/ui/button/button";
import styles from "./shortenLink.module.scss";

export default function ShortenLink() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          type="text"
          placeholder="Shorten a link here.."
          className={styles.input}
        />
        <Button type="submit" className={styles.button} label="Shorten It!" />
      </div>
    </div>
  );
}
