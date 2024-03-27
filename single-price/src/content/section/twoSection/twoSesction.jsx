import styles from "./twoSection.module.scss";

export default function TwoSection() {
  return (
    <div className={styles.container}>
      <h2>Why Us</h2>
      <span>
        Tutorials by industry experts <br />
        Peer &amp; expert code review <br />
        Coding exercises <br />
        Access to our GitHub repos <br />
        Community forum <br />
        Flashcard decks <br />
        New videos every week
      </span>
    </div>
  );
}
