import Door from "components/Door";
import { createDoors, updateDoors } from "../../../../functions/doors";
import { useEffect, useState } from "react";
// import styles from "../styles/game.module.css";
import styles from "../../../styles/game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = router.query.doors;
    const withGift = +router.query.haveGift;
    setDoors(createDoors(doors, withGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door, i) => {
      return (
        <Door
          key={i}
          value={door}
          onChange={(newPort) => setDoors(updateDoors(doors, newPort))}
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
