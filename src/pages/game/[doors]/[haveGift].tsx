import Door from "components/Door";
import { CreateDoors, UpdateDoors } from "../../../../functions/doors";
import { useEffect, useState } from "react";
// import styles from "../styles/game.module.css";
import styles from "../../../styles/game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import DoorModel from "model/DoorModel";

export default function game() {
  const router = useRouter();
  const [doors, setDoors] = useState<DoorModel[]>([]);

  useEffect(() => {
    if (router.query.doors && router.query.haveGift) {
      const doors: number = +router.query.doors;
      const withGift: number = +router.query.haveGift;
      setDoors(CreateDoors(doors, withGift));
    }
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door, i) => {
      return (
        <Door
          key={i}
          value={door}
          onChange={(newPort) => setDoors(UpdateDoors(doors, newPort))}
        />
      );
    });
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
