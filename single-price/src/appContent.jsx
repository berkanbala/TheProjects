import styles from "./AppContent.module.scss";
import Main from "./content/main/main";
import OneSection from "./content/section/oneSection/oneSesction";
import TwoSection from "./content/section/twoSection/twoSesction";

export default function AppContent() {
  return (
    <>
      <div className={styles.container}>
        <Main />
      </div>
      <div className={styles.content}>
        <OneSection />
        <TwoSection />
      </div>
    </>
  );
}
