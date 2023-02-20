import styles from "../src/styles/Door.module.css";
import DoorModel from "model/DoorModel";

interface DoorProps {
  door: DoorModel;
}

export default function Door(props: DoorProps) {
  const { door } = props;
  const selected = door.selected ? styles.structureSelection : "";
  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.num}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
