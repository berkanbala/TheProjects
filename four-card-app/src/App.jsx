import styles from "./App.module.scss";
import Calculator from "./calculator/calculator";
import Karma from "./karma/karma";
import SuperVisor from "./supervisor/supervisor";
import TeamBuilder from "./teamBuilder/teamBuilder";

export default function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <div className={styles.content}>
        <SuperVisor />
        <TeamBuilder />
        <Karma />
        <Calculator />
      </div>
    </div>
  );
}
