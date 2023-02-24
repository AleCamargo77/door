import Door from "components/Door";
import { CreateDoors, UpdateDoors } from "../../../../functions/doors";
import { useEffect, useState } from "react";
import styles from "../../../styles/game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import DoorModel from "model/DoorModel";
import { Http2ServerRequest } from "http2";

export default function Game() {
  const router = useRouter();

  const [doors, setDoors] = useState<DoorModel[]>([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (router.query.doors && router.query.haveGift) {
      const doorsValid: number = +router.query.doors;
      const withGift: number = +router.query.haveGift;

      const qtdeDoorsValid = doorsValid >= 3 && doorsValid < 100;
      const withGiftVallid = withGift >= 1 && withGift <= doorsValid;

      setValid(qtdeDoorsValid && withGiftVallid);
    }
  }, [doors, router.query.doors, router.query.haveGift]);

  useEffect(() => {
    if (router.query.doors && router.query.haveGift) {
      const doors: number = +router.query.doors;
      const withGift: number = +router.query.haveGift;
      setDoors(CreateDoors(doors, withGift));
    }
  }, [router?.query]);

  function renderDoors() {
    return (
      valid &&
      doors.map((door, i) => {
        return (
          <Door
            key={i}
            value={door}
            onChange={(newPort) => setDoors(UpdateDoors(doors, newPort))}
          />
        );
      })
    );
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Valores Inválidos</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
