import styles from "../src/styles/Door.module.css";

export default function Door(props) {
  const selected = props.selection ? styles.structureSelection : "";
  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
