import styles from "../src/styles/Door.module.css";
import DoorModel from "model/DoorModel";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected =
    door.selected && !door.openDoor ? styles.structureSelection : "";

  const toggleSelect = (e: any) => props.onChange(door.toggleSelection());
  const open = (e: any) => {
    e.stopPropagation();
    props.onChange(door.open());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.num}</div>
        <div className={styles.handle} onClick={open}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={toggleSelect}>
      <div className={`${styles.structure} ${selected}`}>
        {door.openDoor ? false : renderDoor()}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
