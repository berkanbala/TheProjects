import styles from "./oneSection.module.scss";

export default function OneSection() {
  return (
    <div className={styles.container}>
      <h3>Monthly Subscription</h3>
      <span>
        <b>$29 </b> per month <br />
      </span>
      <span>Full access for less than $1 a day</span>
      <button>Sign Up </button>
    </div>
  );
}
