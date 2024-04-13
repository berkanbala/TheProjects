import styles from "./App.module.scss";
import Footer from "./common/components/ui/layouts/footer/footer";
import Header from "./common/components/ui/layouts/header/header";
import AdvancedStatic from "./custom/components/advancedStatic/advancedStatic";
import DownStart from "./custom/components/downStart/downStart";
import ShortenLink from "./custom/components/shortenLink/shortenLink";
import UpStart from "./custom/components/upStart/upStart";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <UpStart />
      <ShortenLink />
      <AdvancedStatic />
      <DownStart />
      <Footer />
    </div>
  );
}
