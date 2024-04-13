import Button from "../../../common/components/ui/button/button";
import styles from "./downStart.module.scss";

export default function DownStart() {
  return (
    <div className={styles.container}>
      <h2>Boost your links today</h2>
      <Button type="submit" className={styles.button} label="Get started" />
    </div>
  );
}
