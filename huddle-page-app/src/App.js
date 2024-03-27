import styles from "./App.module.scss";
import Icon from "./logo.svg";
import Icon2 from "./illustration-mockups.svg";
import Icon3 from "./facebook-svgrepo-com.svg";
import Icon4 from "./twitter-bird-svgrepo-com.svg";
import Icon5 from "./instagram-svgrepo-com.svg";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Icon} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <img src={Icon2} alt="headImage" className={styles.image} />
        <div className={styles.subText}>
          <h2>Build The Community</h2>
          <h2>Your Fans Will Love</h2>
          <p>
            Huddle re-imagines the way we build communities. <br />
            You have a voice, but so does your audience. <br />
            Create connections with your users as you engage in genuine
            discussion.
          </p>
          <button>Register</button>
        </div>
      </div>
      <div className={styles.social}>
        <img src={Icon3} alt="facebook" width={45} height={45} />
        <img src={Icon4} alt="twitter" width={45} height={45} />
        <img src={Icon5} alt="instagram" width={45} height={45} />
      </div>
    </div>
  );
}
