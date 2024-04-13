import styles from "./button.module.scss";

export default function Button(props) {
  const { label, type } = props;
  return (
    <button className={styles.container} type={type}>
      {label}
    </button>
  );
}
