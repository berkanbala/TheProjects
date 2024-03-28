import styles from "./App.module.scss";
import Icon from "./images/hero-desktop.jpg";
import Icon1 from "./images/icon-arrow.svg";
import Icon2 from "./images/logo.svg";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <img src={Icon2} alt="header" />
        </div>
        <h1>WE'RE </h1>
        <h2>COMING </h2>
        <h2>SOON</h2>
        <p>
          Hello fellow shoppers! We're currently building our new <br />
          fashion store.Add your email below to stay up-to-date with <br />
          announcements and our launch deals.
        </p>
        <div className={styles.submit}>
          <input type="email" name="email" placeholder="Email Address" />
          <button>
            <img src={Icon1} alt="arrow" />
          </button>
        </div>
      </div>
      <div className={styles.images}>
        <img src={Icon} alt="profilephoto" width={770} height={691} />
      </div>
    </div>
  );
}
