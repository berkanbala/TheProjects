import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Learn to code by <br />
          watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. <br />
          Watching scripted tutorials is great, but understanding how <br />
          developers think is invaluable.
        </p>
      </div>
      <div className={styles.content}>
        <span className={styles.upSpan}>
          Try it free 7 days then $20/mo.thereafter
        </span>
        <form action="">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="surname" />
          <input type="email" placeholder="email" />
          <input type="passwords" placeholder="passwords" />
          <button>CLAIM YOUR FREE TRIAL</button>
          <span className={styles.downSpan}>
            By clicking the button, you are agreeing to our
            <p>Terms and Services</p>
          </span>
        </form>
      </div>
    </div>
  );
}
